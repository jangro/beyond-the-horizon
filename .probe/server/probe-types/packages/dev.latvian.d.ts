declare module "packages/dev/latvian/mods/kubejs/gui/$KubeJSGUI" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $KubeJSGUI {
static readonly "EMPTY_CONTAINER": $SimpleContainer
 "width": integer
 "height": integer
 "title": $Component
 "inventoryLabelX": integer
 "inventoryLabelY": integer
 "inventory": $InventoryKJS
 "inventoryWidth": integer
 "inventoryHeight": integer
 "playerSlotsX": integer
 "playerSlotsY": integer

constructor()
constructor(buf: $FriendlyByteBuf$Type)

public "write"(buf: $FriendlyByteBuf$Type): void
public "setInventory"(inv: $InventoryKJS$Type): void
set "inventory"(value: $InventoryKJS$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSGUI$Type = ($KubeJSGUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSGUI_ = $KubeJSGUI$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ClientLevelKJS" {
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FireworksJS, $FireworksJS$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ExplosionJS, $ExplosionJS$Type} from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LevelKJS, $LevelKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$LevelKJS"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClientLevelKJS extends $LevelKJS {

 "getSide"(): $ScriptType
 "getEntities"(): $EntityArrayList
 "spawnParticles"(options: $ParticleOptions$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
 "runCommand"(command: string): integer
 "getBlock"(blockEntity: $BlockEntity$Type): $BlockContainerJS
 "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
 "getBlock"(pos: $BlockPos$Type): $BlockContainerJS
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "createExplosion"(x: double, y: double, z: double): $ExplosionJS
 "createEntityList"(entities: $Collection$Type<(any)>): $EntityArrayList
 "getEntitiesWithin"(aabb: $AABB$Type): $EntityArrayList
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "getDimension"(): $ResourceLocation
 "isOverworld"(): boolean
 "getPlayers"(): $EntityArrayList
 "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$Type): void
 "createEntity"(type: $EntityType$Type<(any)>): $Entity
 "getData"(): $AttachedData<($Level)>
 "getDisplayName"(): $Component

(): $ScriptType
}

export namespace $ClientLevelKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelKJS$Type = ($ClientLevelKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelKJS_ = $ClientLevelKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/special/$ShapedKubeJSRecipe$SerializerKJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapedKubeJSRecipe, $ShapedKubeJSRecipe$Type} from "packages/dev/latvian/mods/kubejs/recipe/special/$ShapedKubeJSRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedKubeJSRecipe$SerializerKJS implements $RecipeSerializer<($ShapedKubeJSRecipe)> {

constructor()

public "fromNetwork"(id: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type): $ShapedKubeJSRecipe
public "toNetwork"(buf: $FriendlyByteBuf$Type, r: $ShapedKubeJSRecipe$Type): void
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): $ShapedKubeJSRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedKubeJSRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedKubeJSRecipe$SerializerKJS$Type = ($ShapedKubeJSRecipe$SerializerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedKubeJSRecipe$SerializerKJS_ = $ShapedKubeJSRecipe$SerializerKJS$Type;
}}
declare module "packages/dev/latvian/mods/unit/token/$UnitTokenStream" {
import {$CharStream, $CharStream$Type} from "packages/dev/latvian/mods/unit/token/$CharStream"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"
import {$UnitToken, $UnitToken$Type} from "packages/dev/latvian/mods/unit/token/$UnitToken"
import {$UnitContext, $UnitContext$Type} from "packages/dev/latvian/mods/unit/$UnitContext"

export class $UnitTokenStream {
readonly "context": $UnitContext
readonly "input": string
readonly "charStream": $CharStream
readonly "infix": $ArrayList<($UnitToken)>
readonly "inputStringPos": $ArrayList<(integer)>
readonly "unit": $Unit

constructor(context: $UnitContext$Type, input: string)

public "toString"(): string
public "nextToken"(): $UnitToken
public "readFully"(): $UnitToken
public "peekToken"(): $UnitToken
public "getUnit"(): $Unit
public "ifNextToken"(token: $UnitToken$Type): boolean
public "readSingleToken"(): $UnitToken
get "unit"(): $Unit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitTokenStream$Type = ($UnitTokenStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitTokenStream_ = $UnitTokenStream$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Model" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export class $VariantBlockStateGenerator$Model {

constructor()

public "uvlock"(): $VariantBlockStateGenerator$Model
public "x"(_x: integer): $VariantBlockStateGenerator$Model
public "y"(_y: integer): $VariantBlockStateGenerator$Model
public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateGenerator$Model$Type = ($VariantBlockStateGenerator$Model);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateGenerator$Model_ = $VariantBlockStateGenerator$Model$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$Callable" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $Callable {

 "call"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: $Scriptable$Type, arg3: (any)[]): any

(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: $Scriptable$Type, arg3: (any)[]): any
}

export namespace $Callable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callable$Type = ($Callable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Callable_ = $Callable$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$LootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootEventJS extends $EventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "getType"(): string
public "removeAll"(): void
public "modify"(id: $ResourceLocation$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "addJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEventJS$Type = ($LootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEventJS_ = $LootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$PlayerChatDecorateEventJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChatEvent$ChatComponent, $ChatEvent$ChatComponent$Type} from "packages/dev/architectury/event/events/common/$ChatEvent$ChatComponent"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"

/**
 * Invoked when a player sends a chat message.
 * 
 * If cancelled (`PlayerEvents.chat`), the message will not be sent.
 */
export class $PlayerChatDecorateEventJS extends $PlayerEventJS {
 "chatComponent": $ChatEvent$ChatComponent

constructor(player: $ServerPlayer$Type, chatComponent: $ChatEvent$ChatComponent$Type)

/**
 * Gets the message that the player sent.
 */
public "getMessage"(): string
/**
 * Sets the message that the player sent.
 */
public "setComponent"(text: $Component$Type): void
/**
 * Gets the message that the player sent.
 */
public "getComponent"(): $Component
/**
 * Gets the username of the player that sent the message.
 */
public "getUsername"(): string
/**
 * Sets the message that the player sent.
 */
public "setMessage"(text: $Component$Type): void
get "message"(): string
set "component"(value: $Component$Type)
get "component"(): $Component
get "username"(): string
set "message"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChatDecorateEventJS$Type = ($PlayerChatDecorateEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerChatDecorateEventJS_ = $PlayerChatDecorateEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder$EffectTickCallback" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $MobEffectBuilder$EffectTickCallback {

 "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void

(arg0: $LivingEntity$Type, arg1: integer): void
}

export namespace $MobEffectBuilder$EffectTickCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectBuilder$EffectTickCallback$Type = ($MobEffectBuilder$EffectTickCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectBuilder$EffectTickCallback_ = $MobEffectBuilder$EffectTickCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/$AddWorldgenEventJS" {
import {$ClassWrapper, $ClassWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$ClassWrapper"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AddSpawnProperties, $AddSpawnProperties$Type} from "packages/dev/latvian/mods/kubejs/level/gen/properties/$AddSpawnProperties"
import {$AddOreProperties, $AddOreProperties$Type} from "packages/dev/latvian/mods/kubejs/level/gen/properties/$AddOreProperties"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$VerticalAnchor, $VerticalAnchor$Type} from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import {$AddLakeProperties, $AddLakeProperties$Type} from "packages/dev/latvian/mods/kubejs/level/gen/properties/$AddLakeProperties"

export class $AddWorldgenEventJS extends $StartupEventJS {
readonly "anchors": $ClassWrapper<($VerticalAnchor)>

constructor()

public "addSpawn"(category: $MobCategory$Type, spawn: string): void
public "addSpawn"(p: $Consumer$Type<($AddSpawnProperties$Type)>): void
public "addSpawn"(filter: $BiomeFilter$Type, category: $MobCategory$Type, spawn: string): void
public "addLake"(p: $Consumer$Type<($AddLakeProperties$Type)>): void
public "addOre"(p: $Consumer$Type<($AddOreProperties$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddWorldgenEventJS$Type = ($AddWorldgenEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddWorldgenEventJS_ = $AddWorldgenEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$PaintingVariantBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PaintingVariant, $PaintingVariant$Type} from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PaintingVariantBuilder extends $BuilderBase<($PaintingVariant)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "width"(width: integer): $PaintingVariantBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "height"(height: integer): $PaintingVariantBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingVariantBuilder$Type = ($PaintingVariantBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingVariantBuilder_ = $PaintingVariantBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$Int2IntFunction, $Int2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentBuilder$DamageBonusFunction, $EnchantmentBuilder$DamageBonusFunction$Type} from "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageBonusFunction"
import {$EnchantmentBuilder$DamageProtectionFunction, $EnchantmentBuilder$DamageProtectionFunction$Type} from "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageProtectionFunction"
import {$Object2BooleanFunction, $Object2BooleanFunction$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import {$EnchantmentBuilder$PostFunction, $EnchantmentBuilder$PostFunction$Type} from "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$PostFunction"

export class $EnchantmentBuilder extends $BuilderBase<($Enchantment)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "fishingRod"(): $EnchantmentBuilder
public "armorFeet"(): $EnchantmentBuilder
public "armorChest"(): $EnchantmentBuilder
public "armorHead"(): $EnchantmentBuilder
public "armorLegs"(): $EnchantmentBuilder
public "vanishable"(): $EnchantmentBuilder
public "curse"(): $EnchantmentBuilder
public "slots"(s: ($EquipmentSlot$Type)[]): $EnchantmentBuilder
public "category"(c: $EnchantmentCategory$Type): $EnchantmentBuilder
public "bow"(): $EnchantmentBuilder
public "crossbow"(): $EnchantmentBuilder
public "armor"(): $EnchantmentBuilder
public "rarity"(r: $Enchantment$Rarity$Type): $EnchantmentBuilder
public "trident"(): $EnchantmentBuilder
public "breakable"(): $EnchantmentBuilder
public "maxLevel"(i: integer): $EnchantmentBuilder
public "minLevel"(i: integer): $EnchantmentBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "createObject"(): $Enchantment
public "rare"(): $EnchantmentBuilder
public "weapon"(): $EnchantmentBuilder
public "damageBonus"(i: $EnchantmentBuilder$DamageBonusFunction$Type): $EnchantmentBuilder
public "wearable"(): $EnchantmentBuilder
public "uncommon"(): $EnchantmentBuilder
public "veryRare"(): $EnchantmentBuilder
public "damageProtection"(i: $EnchantmentBuilder$DamageProtectionFunction$Type): $EnchantmentBuilder
public "minCost"(i: $Int2IntFunction$Type): $EnchantmentBuilder
public "untradeable"(): $EnchantmentBuilder
public "undiscoverable"(): $EnchantmentBuilder
public "postAttack"(i: $EnchantmentBuilder$PostFunction$Type): $EnchantmentBuilder
public "maxCost"(i: $Int2IntFunction$Type): $EnchantmentBuilder
public "checkCompatibility"(i: $Object2BooleanFunction$Type<($ResourceLocation$Type)>): $EnchantmentBuilder
public "postHurt"(i: $EnchantmentBuilder$PostFunction$Type): $EnchantmentBuilder
public "treasureOnly"(): $EnchantmentBuilder
public "canEnchant"(i: $Object2BooleanFunction$Type<($ItemStack$Type)>): $EnchantmentBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentBuilder$Type = ($EnchantmentBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentBuilder_ = $EnchantmentBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$MinecraftServerKJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer$ReloadableResources, $MinecraftServer$ReloadableResources$Type} from "packages/net/minecraft/server/$MinecraftServer$ReloadableResources"
import {$WithAttachedData, $WithAttachedData$Type} from "packages/dev/latvian/mods/kubejs/core/$WithAttachedData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PlayerSelector, $PlayerSelector$Type} from "packages/dev/latvian/mods/kubejs/core/$PlayerSelector"
import {$DataSenderKJS, $DataSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$ScheduledEvents, $ScheduledEvents$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import {$AdvancementJS, $AdvancementJS$Type} from "packages/dev/latvian/mods/kubejs/player/$AdvancementJS"
import {$MinecraftEnvironmentKJS, $MinecraftEnvironmentKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MinecraftEnvironmentKJS"
import {$WithPersistentData, $WithPersistentData$Type} from "packages/dev/latvian/mods/kubejs/core/$WithPersistentData"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ScheduledEvents$Callback, $ScheduledEvents$Callback$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import {$ScheduledEvents$ScheduledEvent, $ScheduledEvents$ScheduledEvent$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $MinecraftServerKJS extends $WithAttachedData<($MinecraftServer)>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS {

 "runCommand"(command: string): integer
 "getAdvancement"(id: $ResourceLocation$Type): $AdvancementJS
 "getOverworld"(): $ServerLevel
 "getReloadableResources"(): $MinecraftServer$ReloadableResources
 "getLevel"(dimension: $ResourceLocation$Type): $ServerLevel
 "sendData"(channel: string, data: $CompoundTag$Type): void
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "restoreInventories"(): $Map<($UUID), ($Map<(integer), ($ItemStack)>)>
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "self"(): $MinecraftServer
 "getPlayers"(): $EntityArrayList
 "getEntities"(): $EntityArrayList
 "getPlayer"(selector: $PlayerSelector$Type): $ServerPlayer
 "getData"(): $AttachedData<($MinecraftServer)>
 "getPersistentData"(): $CompoundTag
 "sendData"(channel: string): void
 "schedule"(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleRepeating"(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "getScheduledEvents"(): $ScheduledEvents
 "getDisplayName"(): $Component
}

export namespace $MinecraftServerKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerKJS$Type = ($MinecraftServerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerKJS_ = $MinecraftServerKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryEventJS" {
import {$CustomBuilderObject, $CustomBuilderObject$Type} from "packages/dev/latvian/mods/kubejs/registry/$CustomBuilderObject"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"

export class $RegistryEventJS<T> extends $StartupEventJS {
readonly "created": $List<($BuilderBase<(any)>)>

constructor(r: $RegistryInfo$Type<(T)>)

public "create"(id: string): $BuilderBase<(any)>
public "create"(id: string, type: string): $BuilderBase<(any)>
/**
 * 
 * @deprecated
 */
public "custom"(id: string, object: any): $CustomBuilderObject
public "createCustom"(id: string, object: $Supplier$Type<(any)>): $CustomBuilderObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEventJS$Type<T> = ($RegistryEventJS<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEventJS_<T> = $RegistryEventJS$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ComponentKJS" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WrappedJS, $WrappedJS$Type} from "packages/dev/latvian/mods/kubejs/util/$WrappedJS"
import {$DataSource, $DataSource$Type} from "packages/net/minecraft/network/chat/contents/$DataSource"
import {$FormattedText$StyledContentConsumer, $FormattedText$StyledContentConsumer$Type} from "packages/net/minecraft/network/chat/$FormattedText$StyledContentConsumer"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ComponentContents, $ComponentContents$Type} from "packages/net/minecraft/network/chat/$ComponentContents"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FormattedText$ContentConsumer, $FormattedText$ContentConsumer$Type} from "packages/net/minecraft/network/chat/$FormattedText$ContentConsumer"
import {$JsonSerializable, $JsonSerializable$Type} from "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable"
import {$ClickEvent, $ClickEvent$Type} from "packages/net/minecraft/network/chat/$ClickEvent"

export interface $ComponentKJS extends $Component, $JsonSerializable, $WrappedJS {

 "forEach"(action: $Consumer$Type<(any)>): void
 "hasStyle"(): boolean
 "darkRed"(): $MutableComponent
 "black"(): $MutableComponent
 "toJson"(): $JsonElement
 "darkPurple"(): $MutableComponent
 "asIterable"(): $Iterable<($Component)>
 "gray"(): $MutableComponent
 "hasSiblings"(): boolean
 "darkBlue"(): $MutableComponent
 "darkGreen"(): $MutableComponent
 "gold"(): $MutableComponent
 "darkGray"(): $MutableComponent
 "darkAqua"(): $MutableComponent
 "green"(): $MutableComponent
 "italic"(value: boolean): $MutableComponent
 "italic"(): $MutableComponent
 "insertion"(s: string): $MutableComponent
 "bold"(value: boolean): $MutableComponent
 "bold"(): $MutableComponent
 "obfuscated"(): $MutableComponent
 "obfuscated"(value: boolean): $MutableComponent
 "strikethrough"(): $MutableComponent
 "strikethrough"(value: boolean): $MutableComponent
 "blue"(): $MutableComponent
 "noColor"(): $MutableComponent
 "red"(): $MutableComponent
 "yellow"(): $MutableComponent
 "aqua"(): $MutableComponent
 "underlined"(value: boolean): $MutableComponent
 "underlined"(): $MutableComponent
 "white"(): $MutableComponent
 "lightPurple"(): $MutableComponent
 "color"(c: $Color$Type): $MutableComponent
 "clickCopy"(text: string): $MutableComponent
 "font"(s: $ResourceLocation$Type): $MutableComponent
 "clickOpenUrl"(url: string): $MutableComponent
 "isEmpty"(): boolean
 "hover"(s: $Component$Type): $MutableComponent
 "click"(s: $ClickEvent$Type): $MutableComponent
/**
 * 
 * @deprecated
 */
 "rawCopy"(): $MutableComponent
/**
 * 
 * @deprecated
 */
 "component"(): $Component
 "clickOpenFile"(path: string): $MutableComponent
/**
 * 
 * @deprecated
 */
 "rawComponent"(): $MutableComponent
 "clickRunCommand"(command: string): $MutableComponent
 "clickSuggestCommand"(command: string): $MutableComponent
 "clickChangePage"(page: string): $MutableComponent
 "self"(): $MutableComponent
 "getVisualOrderText"(): $FormattedCharSequence
 "getString"(): string
 "copy"(): $MutableComponent
 "getString"(arg0: integer): string
 "getStyle"(): $Style
 "getSiblings"(): $List<($Component)>
 "toFlatList"(): $List<($Component)>
 "plainCopy"(): $MutableComponent
 "getContents"(): $ComponentContents
 "toFlatList"(arg0: $Style$Type): $List<($Component)>
 "visit"<T>(arg0: $FormattedText$ContentConsumer$Type<(T)>): $Optional<(T)>
 "visit"<T>(arg0: $FormattedText$StyledContentConsumer$Type<(T)>, arg1: $Style$Type): $Optional<(T)>
 "contains"(arg0: $Component$Type): boolean
}

export namespace $ComponentKJS {
function keybind(arg0: string): $MutableComponent
function translatableWithFallback(arg0: string, arg1: string): $MutableComponent
function nullToEmpty(arg0: string): $Component
function nbt(arg0: string, arg1: boolean, arg2: $Optional$Type<($Component$Type)>, arg3: $DataSource$Type): $MutableComponent
function empty(): $MutableComponent
function translatableWithFallback(arg0: string, arg1: string, ...arg2: (any)[]): $MutableComponent
function score(arg0: string, arg1: string): $MutableComponent
function selector(arg0: string, arg1: $Optional$Type<($Component$Type)>): $MutableComponent
function translatable(arg0: string): $MutableComponent
function translatable(arg0: string, ...arg1: (any)[]): $MutableComponent
function literal(arg0: string): $MutableComponent
function composite(...arg0: ($FormattedText$Type)[]): $FormattedText
function of(arg0: string): $FormattedText
function of(arg0: string, arg1: $Style$Type): $FormattedText
function composite(arg0: $List$Type<(any)>): $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentKJS$Type = ($ComponentKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentKJS_ = $ComponentKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ItemKJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IngredientSupplierKJS, $IngredientSupplierKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS"
import {$MutableToolTier, $MutableToolTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import {$FoodBuilder, $FoodBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStackKey, $ItemStackKey$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemStackKey"

export interface $ItemKJS extends $IngredientSupplierKJS {

 "setBurnTime"(i: integer): void
 "setItemBuilder"(b: $ItemBuilder$Type): void
 "setMaxDamage"(i: integer): void
 "setRarity"(r: $Rarity$Type): void
 "getCreativeTab"(): string
 "setDigSpeed"(speed: float): void
 "getDigSpeed"(): float
 "setTier"(c: $Consumer$Type<($MutableToolTier$Type)>): void
 "setAttackSpeed"(attackSpeed: double): void
 "addAttribute"(attribute: $Attribute$Type, uuid: $UUID$Type, name: string, d: double, operation: $AttributeModifier$Operation$Type): void
 "getAttributes"(attribute: $Attribute$Type): $List<($AttributeModifier)>
 "getItemBuilder"(): $ItemBuilder
 "setFireResistant"(b: boolean): void
 "getTypeItemStackKey"(): $ItemStackKey
 "setMaxStackSize"(i: integer): void
 "setFoodProperties"(consumer: $Consumer$Type<($FoodBuilder$Type)>): void
 "setFoodProperties"(properties: $FoodProperties$Type): void
 "setCraftingRemainder"(i: $Item$Type): void
 "setAttackDamage"(attackDamage: double): void
 "setArmorToughness"(armorToughness: double): void
 "setArmorKnockbackResistance"(knockbackResistance: double): void
 "setArmorProtection"(armorProtection: double): void
 "setNameKey"(key: string): void
 "self"(): $Item
 "getIdLocation"(): $ResourceLocation
 "getId"(): string
 "getTypeData"(): $CompoundTag
 "getMod"(): string
 "removeAttribute"(attribute: $Attribute$Type, uuid: $UUID$Type): void
 "kjs$asIngredient"(): $Ingredient
}

export namespace $ItemKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKJS$Type = ($ItemKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKJS_ = $ItemKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$FishingLootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$LootEventJS, $LootEventJS$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FishingLootEventJS extends $LootEventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "getType"(): string
public "addFishing"(id: $ResourceLocation$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FishingLootEventJS$Type = ($FishingLootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FishingLootEventJS_ = $FishingLootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenPainterObject" {
import {$ScreenDrawMode, $ScreenDrawMode$Type} from "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenDrawMode"
import {$PainterObjectStorage, $PainterObjectStorage$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObjectStorage"
import {$PaintScreenEventJS, $PaintScreenEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/painter/screen/$PaintScreenEventJS"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"
import {$PainterObject, $PainterObject$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject"

export class $ScreenPainterObject extends $PainterObject {
 "x": $Unit
 "y": $Unit
 "z": $Unit
 "draw": $ScreenDrawMode
 "id": string
 "parent": $PainterObjectStorage
 "visible": $Unit

constructor()

public "preDraw"(event: $PaintScreenEventJS$Type): void
public "draw"(arg0: $PaintScreenEventJS$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenPainterObject$Type = ($ScreenPainterObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenPainterObject_ = $ScreenPainterObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockRightClickedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

/**
 * Invoked when a player right clicks on a block.
 */
export class $BlockRightClickedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, direction: $Direction$Type)

/**
 * The position of the block that was right clicked.
 */
public "getItem"(): $ItemStack
/**
 * The block that was right clicked.
 */
public "getBlock"(): $BlockContainerJS
/**
 * The hand that was used to right click the block.
 */
public "getHand"(): $InteractionHand
/**
 * The face of the block being right clicked.
 */
public "getFacing"(): $Direction
get "item"(): $ItemStack
get "block"(): $BlockContainerJS
get "hand"(): $InteractionHand
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRightClickedEventJS$Type = ($BlockRightClickedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRightClickedEventJS_ = $BlockRightClickedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator$Part" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$VariantBlockStateGenerator$Model, $VariantBlockStateGenerator$Model$Type} from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Model"

export class $MultipartBlockStateGenerator$Part {

constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartBlockStateGenerator$Part$Type = ($MultipartBlockStateGenerator$Part);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartBlockStateGenerator$Part_ = $MultipartBlockStateGenerator$Part$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$ClassShutter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClassShutter {

 "visibleToScripts"(arg0: string, arg1: integer): boolean

(arg0: string, arg1: integer): boolean
}

export namespace $ClassShutter {
const TYPE_UNKNOWN: integer
const TYPE_MEMBER: integer
const TYPE_CLASS_IN_PACKAGE: integer
const TYPE_EXCEPTION: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassShutter$Type = ($ClassShutter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassShutter_ = $ClassShutter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"

export class $PlayerEventJS extends $LivingEntityEventJS {

constructor()

/**
 * Adds the specified game stage to the player
 */
public "addGameStage"(stage: string): void
public "getPlayer"(): $Player
/**
 * Removes the specified game stage from the player
 */
public "removeGameStage"(stage: string): void
/**
 * Checks if the player has the specified game stage
 */
public "hasGameStage"(stage: string): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEventJS$Type = ($PlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEventJS_ = $PlayerEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$SymbolScriptable" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$Symbol, $Symbol$Type} from "packages/dev/latvian/mods/rhino/$Symbol"

export interface $SymbolScriptable {

 "get"(arg0: $Context$Type, arg1: $Symbol$Type, arg2: $Scriptable$Type): any
 "put"(arg0: $Context$Type, arg1: $Symbol$Type, arg2: $Scriptable$Type, arg3: any): void
 "delete"(arg0: $Context$Type, arg1: $Symbol$Type): void
 "has"(arg0: $Context$Type, arg1: $Symbol$Type, arg2: $Scriptable$Type): boolean
}

export namespace $SymbolScriptable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolScriptable$Type = ($SymbolScriptable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SymbolScriptable_ = $SymbolScriptable$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$HitResult$Type, $HitResult$Type$Type} from "packages/net/minecraft/world/phys/$HitResult$Type"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RayTraceResultJS {
readonly "fromEntity": $Entity
readonly "type": $HitResult$Type
readonly "distance": double
 "hit": $Vec3
 "block": $BlockContainerJS
 "facing": $Direction
 "entity": $Entity

constructor(from: $Entity$Type, result: $HitResult$Type, d: double)

public "getHitZ"(): double
public "getHitY"(): double
public "getHitX"(): double
get "hitZ"(): double
get "hitY"(): double
get "hitX"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RayTraceResultJS$Type = ($RayTraceResultJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RayTraceResultJS_ = $RayTraceResultJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer" {
import {$RecipeKJS, $RecipeKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $OutputReplacementTransformer {

 "transform"(arg0: $RecipeKJS$Type, arg1: $ReplacementMatch$Type, arg2: $OutputReplacement$Type, arg3: $OutputReplacement$Type): any

(arg0: $RecipeKJS$Type, arg1: $ReplacementMatch$Type, arg2: $OutputReplacement$Type, arg3: $OutputReplacement$Type): any
}

export namespace $OutputReplacementTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputReplacementTransformer$Type = ($OutputReplacementTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputReplacementTransformer_ = $OutputReplacementTransformer$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$DirectionWrapper" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $DirectionWrapper {

}

export namespace $DirectionWrapper {
const down: $Direction
const up: $Direction
const north: $Direction
const south: $Direction
const west: $Direction
const east: $Direction
const DOWN: $Direction
const UP: $Direction
const NORTH: $Direction
const SOUTH: $Direction
const WEST: $Direction
const EAST: $Direction
const ALL: $Map<(string), ($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionWrapper$Type = ($DirectionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionWrapper_ = $DirectionWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$PoiTypeBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $PoiTypeBuilder extends $BuilderBase<($PoiType)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "maxTickets"(i: integer): $PoiTypeBuilder
public "validRange"(i: integer): $PoiTypeBuilder
public "block"(r: $Block$Type): $PoiTypeBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "blocks"(r: ($BlockState$Type)[]): $PoiTypeBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoiTypeBuilder$Type = ($PoiTypeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoiTypeBuilder_ = $PoiTypeBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent$Callback" {
import {$ChestMenuClickEvent, $ChestMenuClickEvent$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent"

export interface $ChestMenuClickEvent$Callback {

 "onClick"(arg0: $ChestMenuClickEvent$Type): void

(arg0: $ChestMenuClickEvent$Type): void
}

export namespace $ChestMenuClickEvent$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuClickEvent$Callback$Type = ($ChestMenuClickEvent$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuClickEvent$Callback_ = $ChestMenuClickEvent$Callback$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$IdEnumerationIterator" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $IdEnumerationIterator {

 "enumerationIteratorHasNext"(arg0: $Context$Type, arg1: $Consumer$Type<(any)>): boolean
 "enumerationIteratorNext"(arg0: $Context$Type, arg1: $Consumer$Type<(any)>): boolean
}

export namespace $IdEnumerationIterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdEnumerationIterator$Type = ($IdEnumerationIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdEnumerationIterator_ = $IdEnumerationIterator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilderMap" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$AbstractMap, $AbstractMap$Type} from "packages/java/util/$AbstractMap"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipeComponentBuilderMap extends $AbstractMap<($RecipeKey<(any)>), (any)> {
static readonly "EMPTY": $RecipeComponentBuilderMap
readonly "holders": ($RecipeComponentValue<(any)>)[]
 "hasChanged": boolean

constructor(keys: ($RecipeKey$Type<(any)>)[])
constructor(holders: ($RecipeComponentValue$Type<(any)>)[])
constructor(builder: $RecipeComponentBuilder$Type)

public "get"(key: any): any
public "put"(key: $RecipeKey$Type<(any)>, value: any): any
public "equals"(o: any): boolean
public "hashCode"(): integer
public "entrySet"(): $Set<($Map$Entry<($RecipeKey<(any)>), (any)>)>
public "getOrDefault"(key: any, defaultValue: any): any
public "getHolder"(key: any): $RecipeComponentValue<(any)>
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeComponentBuilderMap$Type = ($RecipeComponentBuilderMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeComponentBuilderMap_ = $RecipeComponentBuilderMap$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FireworksJS, $FireworksJS$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$SpecialEquality, $SpecialEquality$Type} from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ExplosionJS, $ExplosionJS$Type} from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockContainerJS implements $SpecialEquality {
readonly "minecraftLevel": $Level

constructor(w: $Level$Type, p: $BlockPos$Type)
constructor(blockEntity: $BlockEntity$Type)

public "setEntityData"(tag: $CompoundTag$Type): void
public "specialEquals"(o: any, shallow: boolean): boolean
public "getWest"(): $BlockContainerJS
public "mergeEntityData"(tag: $CompoundTag$Type): void
public "getEast"(): $BlockContainerJS
public "getSouth"(): $BlockContainerJS
public "getNorth"(): $BlockContainerJS
public "getSkyLight"(): integer
public "getTypeData"(): $CompoundTag
public "popItemFromFace"(item: $ItemStack$Type, dir: $Direction$Type): void
public "spawnFireworks"(fireworks: $FireworksJS$Type): void
public "getCanSeeSky"(): boolean
public "getBiomeId"(): $ResourceLocation
public "getPlayersInRadius"(): $EntityArrayList
public "getPlayersInRadius"(radius: double): $EntityArrayList
public "getBlockLight"(): integer
public "popItem"(item: $ItemStack$Type): void
public "equals"(obj: any): boolean
public "toString"(): string
public "offset"(f: $Direction$Type, d: integer): $BlockContainerJS
public "offset"(x: integer, y: integer, z: integer): $BlockContainerJS
public "offset"(f: $Direction$Type): $BlockContainerJS
public "set"(id: $ResourceLocation$Type): void
public "set"(id: $ResourceLocation$Type, properties: $Map$Type<(any), (any)>, flags: integer): void
public "set"(id: $ResourceLocation$Type, properties: $Map$Type<(any), (any)>): void
public "getProperties"(): $Map<(string), (string)>
public "getId"(): string
public "getItem"(): $ItemStack
public "clearCache"(): void
public "getY"(): integer
public "getTags"(): $Collection<($ResourceLocation)>
public "setBlockState"(state: $BlockState$Type, flags: integer): void
public "getEntityId"(): string
public "getEntity"(): $BlockEntity
public "getDimension"(): $ResourceLocation
public "getPos"(): $BlockPos
public "getDrops"(): $List<($ItemStack)>
public "getDrops"(entity: $Entity$Type, heldItem: $ItemStack$Type): $List<($ItemStack)>
public "getEntityData"(): $CompoundTag
public "getZ"(): integer
public "createEntity"(type: $EntityType$Type<(any)>): $Entity
public "getInventory"(facing: $Direction$Type): $InventoryKJS
public "getInventory"(): $InventoryKJS
public "createExplosion"(): $ExplosionJS
public "getLevel"(): $Level
public "getUp"(): $BlockContainerJS
public "getDown"(): $BlockContainerJS
public "getLight"(): integer
public "hasTag"(tag: $ResourceLocation$Type): boolean
public "getBlockState"(): $BlockState
public "getX"(): integer
public "canSeeSkyFromBelowWater"(): boolean
public "spawnLightning"(effectOnly: boolean, player: $ServerPlayer$Type): void
public "spawnLightning"(): void
public "spawnLightning"(effectOnly: boolean): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
set "entityData"(value: $CompoundTag$Type)
get "west"(): $BlockContainerJS
get "east"(): $BlockContainerJS
get "south"(): $BlockContainerJS
get "north"(): $BlockContainerJS
get "skyLight"(): integer
get "typeData"(): $CompoundTag
get "canSeeSky"(): boolean
get "biomeId"(): $ResourceLocation
get "playersInRadius"(): $EntityArrayList
get "blockLight"(): integer
get "properties"(): $Map<(string), (string)>
get "id"(): string
get "item"(): $ItemStack
get "y"(): integer
get "tags"(): $Collection<($ResourceLocation)>
get "entityId"(): string
get "entity"(): $BlockEntity
get "dimension"(): $ResourceLocation
get "pos"(): $BlockPos
get "drops"(): $List<($ItemStack)>
get "entityData"(): $CompoundTag
get "z"(): integer
get "inventory"(): $InventoryKJS
get "level"(): $Level
get "up"(): $BlockContainerJS
get "down"(): $BlockContainerJS
get "light"(): integer
get "blockState"(): $BlockState
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockContainerJS$Type = ($BlockContainerJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockContainerJS_ = $BlockContainerJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$EntityFallenOnBlockCallbackJS" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntitySteppedOnBlockCallbackJS, $EntitySteppedOnBlockCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$EntitySteppedOnBlockCallbackJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityFallenOnBlockCallbackJS extends $EntitySteppedOnBlockCallbackJS {

constructor(level: $Level$Type, entity: $Entity$Type, pos: $BlockPos$Type, state: $BlockState$Type, fallHeight: float)

/**
 * Get the height the entity has fallen
 */
public "getFallHeight"(): float
/**
 * Applies fall damage to the entity as if they had fallen from the provided height, and multiplies it by the provided multiplier.
 * Note this does not force it, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(fallHeight: float, multiplier: float): boolean
/**
 * Damages the entity using the provided damage source, using the fall height and multiplier to calculate the damage amount.
 * Note this does not force the damage, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(fallHeight: float, multiplier: float, damageSource: $DamageSource$Type): boolean
/**
 * Applies default fall damage to the entity.
 * Note this does not force it, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(): boolean
/**
 * Applies fall damage to the entity, multiplier by the multiplier.
 * Note this does not force it, so entities that do not take fall damage are not affected.
 */
public "applyFallDamage"(multiplier: float): boolean
get "fallHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFallenOnBlockCallbackJS$Type = ($EntityFallenOnBlockCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFallenOnBlockCallbackJS_ = $EntityFallenOnBlockCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$BlockStateKJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateKJS {

 "setLightEmission"(v: integer): void
 "setRequiresTool"(v: boolean): void
 "setDestroySpeed"(v: float): void
}

export namespace $BlockStateKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateKJS$Type = ($BlockStateKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateKJS_ = $BlockStateKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$RecipesEventJS, $RecipesEventJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$WrappedJS, $WrappedJS$Type} from "packages/dev/latvian/mods/kubejs/util/$WrappedJS"
import {$BaseFunction, $BaseFunction$Type} from "packages/dev/latvian/mods/rhino/$BaseFunction"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeSchemaType, $RecipeSchemaType$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $RecipeTypeFunction extends $BaseFunction implements $WrappedJS {
static readonly "SKIP_ERROR": $Pattern
readonly "event": $RecipesEventJS
readonly "id": $ResourceLocation
readonly "idString": string
readonly "schemaType": $RecipeSchemaType
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "DONTENUM": integer
static readonly "PERMANENT": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "CONST": integer

constructor(event: $RecipesEventJS$Type, schemaType: $RecipeSchemaType$Type)

public "createRecipe"(args: (any)[]): $RecipeJS
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "call"(cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args0: (any)[]): $RecipeJS
public "getMod"(): string
public "get"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): any
public "put"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type, arg3: any): void
public "delete"(arg0: $Context$Type, arg1: integer): void
public "getDefaultValue"(arg0: $Context$Type, arg1: $Class$Type<(any)>): any
public "has"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): boolean
public "setParentScope"(arg0: $Scriptable$Type): void
public "getIds"(arg0: $Context$Type): (any)[]
public "getPrototype"(arg0: $Context$Type): $Scriptable
public "setPrototype"(arg0: $Scriptable$Type): void
public "getParentScope"(): $Scriptable
public "getAllIds"(cx: $Context$Type): (any)[]
get "mod"(): string
set "parentScope"(value: $Scriptable$Type)
set "prototype"(value: $Scriptable$Type)
get "parentScope"(): $Scriptable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeTypeFunction$Type = ($RecipeTypeFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeTypeFunction_ = $RecipeTypeFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid" {
import {$FluidLike, $FluidLike$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidLike"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputReplacementTransformer$Replacement, $OutputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacementTransformer, $OutputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $OutputFluid extends $FluidLike, $OutputReplacement {

 "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
 "copy"(amount: long): $FluidLike
 "matches"(other: $FluidLike$Type): boolean
 "isEmpty"(): boolean
 "getAmount"(): long
 "transform"(transformer: $OutputReplacementTransformer$Type): $OutputReplacementTransformer$Replacement

(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
}

export namespace $OutputFluid {
function of(o: any): $OutputReplacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputFluid$Type = ($OutputFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputFluid_ = $OutputFluid$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/predicate/$BlockEntityPredicateDataCheck" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $BlockEntityPredicateDataCheck {

 "checkData"(arg0: $CompoundTag$Type): boolean

(arg0: $CompoundTag$Type): boolean
}

export namespace $BlockEntityPredicateDataCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityPredicateDataCheck$Type = ($BlockEntityPredicateDataCheck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityPredicateDataCheck_ = $BlockEntityPredicateDataCheck$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeSchemaRegistryEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeNamespace, $RecipeNamespace$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeNamespace"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeComponentFactory, $RecipeComponentFactory$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeComponentFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipeSchemaRegistryEventJS extends $EventJS {

constructor(namespaces: $Map$Type<(string), ($RecipeNamespace$Type)>, mappedRecipes: $Map$Type<(string), ($ResourceLocation$Type)>)

public "register"(id: $ResourceLocation$Type, schema: $RecipeSchema$Type): void
public "namespace"(namespace: string): $RecipeNamespace
public "getComponents"(): $Map<(string), ($RecipeComponentFactory)>
public "mapRecipe"(name: string, type: string): void
public "mapRecipe"(name: string, type: $ResourceLocation$Type): void
get "components"(): $Map<(string), ($RecipeComponentFactory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSchemaRegistryEventJS$Type = ($RecipeSchemaRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSchemaRegistryEventJS_ = $RecipeSchemaRegistryEventJS$Type;
}}
declare module "packages/dev/latvian/mods/unit/function/$FunctionFactory$FuncSupplier" {
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export interface $FunctionFactory$FuncSupplier {

 "create"(arg0: ($Unit$Type)[]): $Unit

(arg0: ($Unit$Type)[]): $Unit
}

export namespace $FunctionFactory$FuncSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionFactory$FuncSupplier$Type = ($FunctionFactory$FuncSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionFactory$FuncSupplier_ = $FunctionFactory$FuncSupplier$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockBrokenEventJS" {
import {$IntValue, $IntValue$Type} from "packages/dev/architectury/utils/value/$IntValue"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

/**
 * Invoked when a block is destroyed by a player.
 */
export class $BlockBrokenEventJS extends $PlayerEventJS {

constructor(entity: $ServerPlayer$Type, level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, xp: $IntValue$Type)

/**
 * The block that was broken.
 */
public "getBlock"(): $BlockContainerJS
/**
 * Sets the experience dropped by the block. Only works on Forge.
 */
public "setXp"(xp: integer): void
/**
 * The experience dropped by the block. Always `0` on Fabric.
 */
public "getXp"(): integer
get "block"(): $BlockContainerJS
set "xp"(value: integer)
get "xp"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBrokenEventJS$Type = ($BlockBrokenEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBrokenEventJS_ = $BlockBrokenEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabCallback" {
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeTabCallback {

 "remove"(arg0: $Ingredient$Type, arg1: boolean, arg2: boolean): void
 "addAfter"(arg0: $ItemStack$Type, arg1: ($ItemStack$Type)[], arg2: $CreativeModeTab$TabVisibility$Type): void
 "addBefore"(arg0: $ItemStack$Type, arg1: ($ItemStack$Type)[], arg2: $CreativeModeTab$TabVisibility$Type): void
}

export namespace $CreativeTabCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabCallback$Type = ($CreativeTabCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabCallback_ = $CreativeTabCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$StatsCounter, $StatsCounter$Type} from "packages/net/minecraft/stats/$StatsCounter"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $PlayerStatsJS {
readonly "player": $Player

constructor(p: $Player$Type, s: $StatsCounter$Type)

public "add"(stat: $Stat$Type<(any)>, value: integer): void
public "get"(stat: $Stat$Type<(any)>): integer
public "set"(stat: $Stat$Type<(any)>, value: integer): void
public "getDamageTaken"(): integer
public "getDamageDealt_absorbed"(): integer
public "getDamageDealt_resisted"(): integer
public "getDamageBlocked_by_shield"(): integer
public static "statOf"(o: any): $Stat<(any)>
public "getDamageDealt"(): integer
public "getKilledBy"(entity: $EntityType$Type<(any)>): integer
public "getItemsBroken"(item: $Item$Type): integer
public "getKilled"(entity: $EntityType$Type<(any)>): integer
public "getJumps"(): integer
public "getBlocksMined"(block: $Block$Type): integer
public "getMobKills"(): integer
public "getItemsUsed"(item: $Item$Type): integer
public "getSwimDistance"(): integer
public "getTimeSinceRest"(): integer
public "getItemsPickedUp"(item: $Item$Type): integer
public "getAnimalsBred"(): integer
public "getPlayTime"(): integer
public "getSprintDistance"(): integer
public "getItemsCrafted"(item: $Item$Type): integer
public "getTimeCrouchTime"(): integer
public "getDamageAbsorbed"(): integer
public "getPlayerKills"(): integer
public "getWalkDistance"(): integer
public "getDeaths"(): integer
public "getCrouchDistance"(): integer
public "getFishCaught"(): integer
public "getTimeSinceDeath"(): integer
public "getDamageResisted"(): integer
public "getItemsDropped"(item: $Item$Type): integer
get "damageTaken"(): integer
get "damageDealt_absorbed"(): integer
get "damageDealt_resisted"(): integer
get "damageBlocked_by_shield"(): integer
get "damageDealt"(): integer
get "jumps"(): integer
get "mobKills"(): integer
get "swimDistance"(): integer
get "timeSinceRest"(): integer
get "animalsBred"(): integer
get "playTime"(): integer
get "sprintDistance"(): integer
get "timeCrouchTime"(): integer
get "damageAbsorbed"(): integer
get "playerKills"(): integer
get "walkDistance"(): integer
get "deaths"(): integer
get "crouchDistance"(): integer
get "fishCaught"(): integer
get "timeSinceDeath"(): integer
get "damageResisted"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerStatsJS$Type = ($PlayerStatsJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerStatsJS_ = $PlayerStatsJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$CropBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$CropBlockBuilder$SurviveCallback, $CropBlockBuilder$SurviveCallback$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$CropBlockBuilder$SurviveCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$CropBlockBuilder$ShapeBuilder, $CropBlockBuilder$ShapeBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$CropBlockBuilder$ShapeBuilder"

export class $CropBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "randomTick"(randomTickCallback: $Consumer$Type<($RandomTickCallbackJS$Type)>): $BlockBuilder
public "bonemeal"(bonemealCallback: $ToIntFunction$Type<($RandomTickCallbackJS$Type)>): $CropBlockBuilder
/**
 * Set if the crop should drop seeds when harvested.
 */
public "dropSeed"(dropSeed: boolean): $CropBlockBuilder
public "growTick"(growSpeedCallback: $ToDoubleFunction$Type<($RandomTickCallbackJS$Type)>): $CropBlockBuilder
public "survive"(surviveCallback: $CropBlockBuilder$SurviveCallback$Type): $CropBlockBuilder
/**
 * Set the age of the crop. Note that the box will be the same for all ages (A full block size).
 */
public "age"(age: integer): $CropBlockBuilder
/**
 * Set the age of the crop and the shape of the crop at that age.
 */
public "age"(age: integer, builder: $Consumer$Type<($CropBlockBuilder$ShapeBuilder$Type)>): $CropBlockBuilder
public "texture"(id: string, tex: string): $BlockBuilder
/**
 * Add a crop output with a specific chance.
 */
public "crop"(output: any, chance: double): $CropBlockBuilder
/**
 * Add a crop output with a 100% chance.
 */
public "crop"(output: any): $CropBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockBuilder$Type = ($CropBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropBlockBuilder_ = $CropBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockTintFunction$Fixed" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$BlockTintFunction, $BlockTintFunction$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockTintFunction"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockTintFunction$Fixed extends $Record implements $BlockTintFunction {

constructor(color: $Color$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "color"(): $Color
public "getColor"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, index: integer): $Color
public static "of"(cx: $Context$Type, o: any): $BlockTintFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTintFunction$Fixed$Type = ($BlockTintFunction$Fixed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTintFunction$Fixed_ = $BlockTintFunction$Fixed$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/events/$SpecialSpoutHandlerEvent$SpoutHandler" {
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export interface $SpecialSpoutHandlerEvent$SpoutHandler {

 "fillBlock"(arg0: $BlockContainerJS$Type, arg1: $FluidStackJS$Type, arg2: boolean): long

(arg0: $BlockContainerJS$Type, arg1: $FluidStackJS$Type, arg2: boolean): long
}

export namespace $SpecialSpoutHandlerEvent$SpoutHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialSpoutHandlerEvent$SpoutHandler$Type = ($SpecialSpoutHandlerEvent$SpoutHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialSpoutHandlerEvent$SpoutHandler_ = $SpecialSpoutHandlerEvent$SpoutHandler$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockLeftClickedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

/**
 * Invoked when a player left clicks on a block.
 */
export class $BlockLeftClickedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, direction: $Direction$Type)

/**
 * The item that was used to left click the block.
 */
public "getItem"(): $ItemStack
/**
 * The block that was left clicked.
 */
public "getBlock"(): $BlockContainerJS
/**
 * The face of the block that was left clicked.
 */
public "getFacing"(): $Direction
get "item"(): $ItemStack
get "block"(): $BlockContainerJS
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLeftClickedEventJS$Type = ($BlockLeftClickedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLeftClickedEventJS_ = $BlockLeftClickedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$DetectorBlockEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

/**
 * Invoked when a detector block registered in KubeJS receives a block update.
 * 
 * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
 */
export class $DetectorBlockEventJS extends $LevelEventJS {

constructor(i: string, l: $Level$Type, p: $BlockPos$Type, pow: boolean)

/**
 * The detector block.
 */
public "getBlock"(): $BlockContainerJS
/**
 * The level where the detector block is located.
 */
public "getLevel"(): $Level
/**
 * If the detector block is powered.
 */
public "isPowered"(): boolean
/**
 * The id of the detector block when it was registered.
 */
public "getDetectorId"(): string
get "block"(): $BlockContainerJS
get "level"(): $Level
get "powered"(): boolean
get "detectorId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlockEventJS$Type = ($DetectorBlockEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlockEventJS_ = $DetectorBlockEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/events/$SpecialFluidHandlerEvent" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$OpenEndedPipe, $OpenEndedPipe$Type} from "packages/com/simibubi/create/content/fluids/$OpenEndedPipe"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export class $SpecialFluidHandlerEvent extends $EventJS {

constructor()

public "add"(fluidIngredient: $FluidIngredient$Type, handler: $BiConsumer$Type<($OpenEndedPipe$Type), ($FluidStackJS$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialFluidHandlerEvent$Type = ($SpecialFluidHandlerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialFluidHandlerEvent_ = $SpecialFluidHandlerEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeKJS, $RecipeKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export interface $InputReplacementTransformer {

 "transform"(arg0: $RecipeKJS$Type, arg1: $ReplacementMatch$Type, arg2: $InputReplacement$Type, arg3: $InputReplacement$Type): any

(arg0: $RecipeKJS$Type, arg1: $ReplacementMatch$Type, arg2: $InputReplacement$Type, arg3: $InputReplacement$Type): any
}

export namespace $InputReplacementTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputReplacementTransformer$Type = ($InputReplacementTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputReplacementTransformer_ = $InputReplacementTransformer$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidBucketItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$FluidBuilder, $FluidBuilder$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidBuilder"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidBucketItemBuilder extends $ItemBuilder {
readonly "fluidBuilder": $FluidBuilder
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(b: $FluidBuilder$Type)

public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBucketItemBuilder$Type = ($FluidBucketItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBucketItemBuilder_ = $FluidBucketItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$LootBuilderPool" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConditionalFunction, $ConditionalFunction$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import {$ConditionContainer, $ConditionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FunctionContainer, $FunctionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import {$CopyNameFunction$NameSource, $CopyNameFunction$NameSource$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$LootContext$EntityTarget, $LootContext$EntityTarget$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import {$LootTableEntry, $LootTableEntry$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootTableEntry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootBuilderPool implements $FunctionContainer, $ConditionContainer {
 "rolls": $NumberProvider
 "bonusRolls": $NumberProvider
readonly "conditions": $JsonArray
readonly "functions": $JsonArray
readonly "entries": $JsonArray

constructor()

public "addLootTable"(table: $ResourceLocation$Type): $LootTableEntry
public "setUniformRolls"(min: float, max: float): void
public "addEmpty"(weight: integer): $LootTableEntry
public "setBinomialRolls"(n: integer, p: float): void
public "addEntry"(json: $JsonObject$Type): $LootTableEntry
public "addItem"(item: $ItemStack$Type): $LootTableEntry
public "addItem"(item: $ItemStack$Type, weight: integer, count: $NumberProvider$Type): $LootTableEntry
public "addItem"(item: $ItemStack$Type, weight: integer): $LootTableEntry
public "addTag"(tag: string, expand: boolean): $LootTableEntry
public "toJson"(): $JsonObject
public "addConditionalFunction"(func: $Consumer$Type<($ConditionalFunction$Type)>): $FunctionContainer
public "enchantRandomly"(enchantments: ($ResourceLocation$Type)[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$Type, treasure: boolean): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$Type, limit: integer): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$Type): $FunctionContainer
public "furnaceSmelt"(): $FunctionContainer
public "name"(name: $Component$Type, entity: $LootContext$EntityTarget$Type): $FunctionContainer
public "name"(name: $Component$Type): $FunctionContainer
public "count"(count: $NumberProvider$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$Type): $FunctionContainer
public "lootTable"(table: $ResourceLocation$Type, seed: long): $FunctionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$Type, scores: $Map$Type<(string), (any)>): $ConditionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$Type, properties: $JsonObject$Type): $ConditionContainer
public "killedByPlayer"(): $ConditionContainer
public "randomChance"(chance: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootBuilderPool$Type = ($LootBuilderPool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootBuilderPool_ = $LootBuilderPool$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory" {
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BuilderFactory {

 "createBuilder"(arg0: $ResourceLocation$Type): $BuilderBase<(any)>

(arg0: $ResourceLocation$Type): $BuilderBase<(any)>
}

export namespace $BuilderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderFactory$Type = ($BuilderFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderFactory_ = $BuilderFactory$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$TinyMap$Entry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $TinyMap$Entry<K, V> extends $Record {

constructor(key: K, value: V)

public "value"(): V
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): K
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TinyMap$Entry$Type<K, V> = ($TinyMap$Entry<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TinyMap$Entry_<K, V> = $TinyMap$Entry$Type<(K), (V)>;
}}
declare module "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"

export interface $DescriptionContext {

 "typeName"(type: $Class$Type<(any)>): string
 "javaType"(type: $Class$Type<(any)>): $TypeDescJS
}

export namespace $DescriptionContext {
const DEFAULT: $DescriptionContext
const DISPLAY: $DescriptionContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptionContext$Type = ($DescriptionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptionContext_ = $DescriptionContext$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$GenericLootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$LootEventJS, $LootEventJS$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GenericLootEventJS extends $LootEventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "getType"(): string
public "addGeneric"(id: $ResourceLocation$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericLootEventJS$Type = ($GenericLootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericLootEventJS_ = $GenericLootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapperProvider" {
import {$CustomJavaToJsWrapper, $CustomJavaToJsWrapper$Type} from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"

export interface $CustomJavaToJsWrapperProvider<T> {

 "create"(arg0: T): $CustomJavaToJsWrapper

(arg0: T): $CustomJavaToJsWrapper
}

export namespace $CustomJavaToJsWrapperProvider {
const NONE: $CustomJavaToJsWrapperProvider<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomJavaToJsWrapperProvider$Type<T> = ($CustomJavaToJsWrapperProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomJavaToJsWrapperProvider_<T> = $CustomJavaToJsWrapperProvider$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidLike" {
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export interface $FluidLike extends $ReplacementMatch {

 "copy"(amount: long): $FluidLike
 "matches"(other: $FluidLike$Type): boolean
 "isEmpty"(): boolean
 "getAmount"(): long

(amount: long): $FluidLike
}

export namespace $FluidLike {
function of(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLike$Type = ($FluidLike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLike_ = $FluidLike$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/$CountingMap" {
import {$Object2LongEntry, $Object2LongEntry$Type} from "packages/dev/latvian/mods/rhino/mod/util/$Object2LongEntry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CountingMap {

constructor()

public "add"(key: any, value: long): long
public "get"(key: any): long
public "clear"(): void
public "set"(key: any, value: long): long
public "forEach"(forEach: $Consumer$Type<($Object2LongEntry$Type)>): void
public "getSize"(): integer
public "getEntries"(): $List<($Object2LongEntry)>
public "getKeys"(): $Set<(any)>
public "getTotalCount"(): long
public "getValues"(): $Collection<(long)>
get "size"(): integer
get "entries"(): $List<($Object2LongEntry)>
get "keys"(): $Set<(any)>
get "totalCount"(): long
get "values"(): $Collection<(long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CountingMap$Type = ($CountingMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CountingMap_ = $CountingMap$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$FinishUsingCallback" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ItemBuilder$FinishUsingCallback {

 "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}

export namespace $ItemBuilder$FinishUsingCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$FinishUsingCallback$Type = ($ItemBuilder$FinishUsingCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder$FinishUsingCallback_ = $ItemBuilder$FinishUsingCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$LootTablesKJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$LootDataId, $LootDataId$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootDataType, $LootDataType$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LootTablesKJS {

 "kjs$completeReload"(parsedMap: $Map$Type<($LootDataType$Type<(any)>), ($Map$Type<($ResourceLocation$Type), (any)>)>, elements: $Map$Type<($LootDataId$Type<(any)>), (any)>): void
}

export namespace $LootTablesKJS {
function kjs$postLootEvents(map: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTablesKJS$Type = ($LootTablesKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTablesKJS_ = $LootTablesKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptType" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ScriptTypePredicate, $ScriptTypePredicate$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptTypePredicate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScriptTypeHolder, $ScriptTypeHolder$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptType extends $Enum<($ScriptType)> implements $ScriptTypePredicate, $ScriptTypeHolder {
static readonly "STARTUP": $ScriptType
static readonly "SERVER": $ScriptType
static readonly "CLIENT": $ScriptType
static readonly "VALUES": ($ScriptType)[]
readonly "name": string
readonly "console": $ConsoleJS
readonly "path": $Path
readonly "nameStrip": string


public static "values"(): ($ScriptType)[]
public "test"(type: $ScriptType$Type): boolean
public static "valueOf"(name: string): $ScriptType
public "negate"(): $ScriptTypePredicate
public "isServer"(): boolean
public static "getCurrent"(cx: $Context$Type): $ScriptType
public "getValidTypes"(): $List<($ScriptType)>
public "kjs$getScriptType"(): $ScriptType
public "isClient"(): boolean
public "isStartup"(): boolean
public "getLogFile"(): $Path
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ScriptType)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ScriptType)>
public static "isEqual"<T>(arg0: any): $Predicate<($ScriptType)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ScriptType)>
get "server"(): boolean
get "validTypes"(): $List<($ScriptType)>
get "client"(): boolean
get "startup"(): boolean
get "logFile"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptType$Type = (("server") | ("startup") | ("client")) | ($ScriptType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptType_ = $ScriptType$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$FarmlandTrampledEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * Invoked when an entity attempts to trample farmland.
 */
export class $FarmlandTrampledEventJS extends $EntityEventJS {

constructor(l: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, d: float, e: $Entity$Type)

/**
 * The distance of the entity from the block.
 */
public "getDistance"(): float
/**
 * The farmland block.
 */
public "getBlock"(): $BlockContainerJS
/**
 * The entity that is attempting to trample the farmland.
 */
public "getEntity"(): $Entity
/**
 * The level that the farmland and the entity are in.
 */
public "getLevel"(): $Level
get "distance"(): float
get "block"(): $BlockContainerJS
get "entity"(): $Entity
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmlandTrampledEventJS$Type = ($FarmlandTrampledEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmlandTrampledEventJS_ = $FarmlandTrampledEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$WallBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$MultipartShapedBlockBuilder, $MultipartShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$MultipartShapedBlockBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $WallBlockBuilder extends $MultipartShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallBlockBuilder$Type = ($WallBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallBlockBuilder_ = $WallBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$ChestLootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$LootEventJS, $LootEventJS$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChestLootEventJS extends $LootEventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "getType"(): string
public "addChest"(id: $ResourceLocation$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestLootEventJS$Type = ($ChestLootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestLootEventJS_ = $ChestLootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$IngredientKJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IngredientSupplierKJS, $IngredientSupplierKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS"
import {$ItemStackSet, $ItemStackSet$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemStackSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$JsonSerializable, $JsonSerializable$Type} from "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable"

export interface $IngredientKJS extends $IngredientSupplierKJS, $JsonSerializable {

 "toJson"(): $JsonElement
 "getDisplayStacks"(): $ItemStackSet
 "canBeUsedForMatching"(): boolean
 "and"(ingredient: $Ingredient$Type): $Ingredient
 "subtract"(subtracted: $Ingredient$Type): $Ingredient
 "getItemTypes"(): $Set<($Item)>
 "or"(ingredient: $Ingredient$Type): $Ingredient
 "getItemIds"(): $Set<(string)>
 "getFirst"(): $ItemStack
 "getStacks"(): $ItemStackSet
 "testItem"(item: $Item$Type): boolean
 "asStack"(): $InputItem
 "isWildcard"(): boolean
 "asIngredient"(): $Ingredient
 "self"(): $Ingredient
 "withCount"(count: integer): $InputItem
}

export namespace $IngredientKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientKJS$Type = ($IngredientKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientKJS_ = $IngredientKJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$IdScriptableObject" {
import {$IdFunctionCall, $IdFunctionCall$Type} from "packages/dev/latvian/mods/rhino/$IdFunctionCall"
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$IdFunctionObject, $IdFunctionObject$Type} from "packages/dev/latvian/mods/rhino/$IdFunctionObject"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$Symbol, $Symbol$Type} from "packages/dev/latvian/mods/rhino/$Symbol"
import {$ScriptableObject, $ScriptableObject$Type} from "packages/dev/latvian/mods/rhino/$ScriptableObject"

export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall {
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "DONTENUM": integer
static readonly "PERMANENT": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "CONST": integer

constructor(scope: $Scriptable$Type, prototype: $Scriptable$Type)
constructor()

public "exportAsJSClass"(maxPrototypeId: integer, scope: $Scriptable$Type, sealed: boolean, cx: $Context$Type): $IdFunctionObject
public "execIdCall"(f: $IdFunctionObject$Type, cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[]): any
public "initPrototypeValue"(id: integer, name: string, value: any, attributes: integer): void
public "initPrototypeValue"(id: integer, key: $Symbol$Type, value: any, attributes: integer): void
public "hasPrototypeMap"(): boolean
public "get"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type): any
public "get"(cx: $Context$Type, name: string, start: $Scriptable$Type): any
public "put"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type, value: any): void
public "put"(cx: $Context$Type, name: string, start: $Scriptable$Type, value: any): void
public "delete"(cx: $Context$Type, key: $Symbol$Type): void
public "delete"(cx: $Context$Type, name: string): void
public "getAttributes"(cx: $Context$Type, name: string): integer
public "getAttributes"(cx: $Context$Type, key: $Symbol$Type): integer
public "has"(cx: $Context$Type, name: string, start: $Scriptable$Type): boolean
public "has"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type): boolean
public "setAttributes"(cx: $Context$Type, name: string, attributes: integer): void
public "defineOwnProperty"(cx: $Context$Type, key: any, desc: $ScriptableObject$Type): void
public "activatePrototypeMap"(maxPrototypeId: integer): void
public "initPrototypeConstructor"(f: $IdFunctionObject$Type, cx: $Context$Type): void
public "initPrototypeMethod"(tag: any, id: integer, key: $Symbol$Type, functionName: string, arity: integer, cx: $Context$Type): $IdFunctionObject
public "initPrototypeMethod"(tag: any, id: integer, name: string, arity: integer, cx: $Context$Type): $IdFunctionObject
public "initPrototypeMethod"(tag: any, id: integer, propertyName: string, functionName: string, arity: integer, cx: $Context$Type): $IdFunctionObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdScriptableObject$Type = ($IdScriptableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdScriptableObject_ = $IdScriptableObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$EntitySpawnedEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * Invoked when an entity is about to be added to the world.
 * 
 * This event also fires for existing entities when they are loaded from a save.
 */
export class $EntitySpawnedEventJS extends $EntityEventJS {

constructor(entity: $Entity$Type, level: $Level$Type)

/**
 * The entity being added to the world.
 */
public "getEntity"(): $Entity
/**
 * The level the entity is being added to.
 */
public "getLevel"(): $Level
get "entity"(): $Entity
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpawnedEventJS$Type = ($EntitySpawnedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySpawnedEventJS_ = $EntitySpawnedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/$SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "afterLoaded"(): void
public "createRecipe"(): $Recipe<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS$Type = ($SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS_ = $SequencedAssemblyRecipeSchema$SequencedAssemblyRecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$EventResult, $EventResult$Type} from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import {$IEventHandler, $IEventHandler$Type} from "packages/dev/latvian/mods/kubejs/event/$IEventHandler"
import {$EventExceptionHandler, $EventExceptionHandler$Type} from "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler"

export class $EventHandlerContainer {
readonly "extraId": any
readonly "handler": $IEventHandler
readonly "source": string
readonly "line": integer

constructor(extraId: any, handler: $IEventHandler$Type, source: string, line: integer)

public "add"(extraId: any, handler: $IEventHandler$Type, source: string, line: integer): void
public "toString"(): string
public static "isEmpty"(array: ($EventHandlerContainer$Type)[]): boolean
public "handle"(event: $EventJS$Type, exh: $EventExceptionHandler$Type): $EventResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerContainer$Type = ($EventHandlerContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventHandlerContainer_ = $EventHandlerContainer$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ShovelItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShovelItemBuilder extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemBuilder$Type = ($ShovelItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemBuilder_ = $ShovelItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/filter/mob/$MobFilter" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"

export interface $MobFilter extends $BiPredicate<($MobCategory), ($MobSpawnSettings$SpawnerData)> {

 "test"(arg0: $MobCategory$Type, arg1: $MobSpawnSettings$SpawnerData$Type): boolean
 "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($MobCategory), ($MobSpawnSettings$SpawnerData)>
 "negate"(): $BiPredicate<($MobCategory), ($MobSpawnSettings$SpawnerData)>
 "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($MobCategory), ($MobSpawnSettings$SpawnerData)>

(arg0: $MobCategory$Type, arg1: $MobSpawnSettings$SpawnerData$Type): boolean
}

export namespace $MobFilter {
const ALWAYS_TRUE: $MobFilter
const ALWAYS_FALSE: $MobFilter
function of(cx: $Context$Type, o: any): $MobFilter
function idFilter(cx: $Context$Type, s: string): $MobFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobFilter$Type = (Special.EntityType) | (($MobFilter$Type)[]) | ({"id"?: Special.EntityType, "category": string, "or"?: $MobFilter$Type, "type"?: Special.EntityType, "not"?: $MobFilter$Type}) | ($MobFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobFilter_ = $MobFilter$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$WrappedExecutable" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Executable, $Executable$Type} from "packages/java/lang/reflect/$Executable"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $WrappedExecutable {

 "invoke"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: any, arg3: (any)[]): any
 "getReturnType"(): $Class<(any)>
 "isStatic"(): boolean
 "unwrap"(): $Executable
 "construct"(cx: $Context$Type, scope: $Scriptable$Type, args: (any)[]): any

(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: any, arg3: (any)[]): any
}

export namespace $WrappedExecutable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedExecutable$Type = ($WrappedExecutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedExecutable_ = $WrappedExecutable$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/predicate/$BlockPredicate" {
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $BlockPredicate {

 "check"(arg0: $BlockContainerJS$Type): boolean

(arg0: $BlockContainerJS$Type): boolean
}

export namespace $BlockPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicate$Type = ($BlockPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPredicate_ = $BlockPredicate$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$AddJEIEventJS" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IJeiRuntime, $IJeiRuntime$Type} from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $AddJEIEventJS<T> extends $EventJS {

constructor(r: $IJeiRuntime$Type, t: $IIngredientType$Type<(T)>, f: $Function$Type<(any), (T)>, i: $Predicate$Type<(T)>)

public "add"(o: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddJEIEventJS$Type<T> = ($AddJEIEventJS<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddJEIEventJS_<T> = $AddJEIEventJS$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ShearsItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShearsItemBuilder extends $ItemBuilder {
static readonly "TAG": $ResourceLocation
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public static "isCustomShears"(stack: $ItemStack$Type): boolean
public "speedBaseline"(f: float): $ShearsItemBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShearsItemBuilder$Type = ($ShearsItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShearsItemBuilder_ = $ShearsItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$FallingBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $FallingBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "dustColor"(color: $Color$Type): $FallingBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockBuilder$Type = ($FallingBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingBlockBuilder_ = $FallingBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ArrayRecipeComponent, $ArrayRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent"
import {$AndRecipeComponent, $AndRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OrRecipeComponent<H, L> extends $Record implements $RecipeComponent<($Either<(H), (L)>)> {

constructor(high: $RecipeComponent$Type<(H)>, low: $RecipeComponent$Type<(L)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "componentType"(): string
public "write"(recipe: $RecipeJS$Type, value: $Either$Type<(H), (L)>): $JsonElement
public "read"(recipe: $RecipeJS$Type, from: any): $Either<(H), (L)>
public "high"(): $RecipeComponent<(H)>
public "low"(): $RecipeComponent<(L)>
public "componentClass"(): $Class<(any)>
public "replaceOutput"(recipe: $RecipeJS$Type, original: $Either$Type<(H), (L)>, match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): $Either<(H), (L)>
public "replaceInput"(recipe: $RecipeJS$Type, original: $Either$Type<(H), (L)>, match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): $Either<(H), (L)>
public "checkValueHasChanged"(oldValue: $Either$Type<(H), (L)>, newValue: $Either$Type<(H), (L)>): boolean
public "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
public "role"(): $ComponentRole
public "isOutput"(recipe: $RecipeJS$Type, value: $Either$Type<(H), (L)>, match: $ReplacementMatch$Type): boolean
public "isInput"(recipe: $RecipeJS$Type, value: $Either$Type<(H), (L)>, match: $ReplacementMatch$Type): boolean
public "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($Either$Type<(H), (L)>)>, json: $JsonObject$Type): void
public "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($Either$Type<(H), (L)>)>, json: $JsonObject$Type): void
public "orSelf"(): $RecipeComponent<($Either<(H), (L)>)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
public "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<($Either<(H), (L)>)>
public static "builder"(): $RecipeComponentBuilder
public static "builder"(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
public "key"(name: string): $RecipeKey<($Either<(H), (L)>)>
public "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<($Either<(H), (L)>), (O)>
public "asArray"(): $ArrayRecipeComponent<($Either<(H), (L)>)>
public "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<($Either<(H), (L)>), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
public "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<($Either<(H), (L)>)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
public "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<($Either<(H), (L)>)>
public "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), ($Either<(H), (L)>)>)>
public "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
public "checkEmpty"(key: $RecipeKey$Type<($Either$Type<(H), (L)>)>, value: $Either$Type<(H), (L)>): string
public "asPatternKey"(): $RecipeComponent<($TinyMap<(character), ($Either<(H), (L)>)>)>
public "asArrayOrSelf"(): $ArrayRecipeComponent<($Either<(H), (L)>)>
public "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($Either$Type<(H), (L)>)>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
public "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<($Either<(H), (L)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrRecipeComponent$Type<H, L> = ($OrRecipeComponent<(H), (L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrRecipeComponent_<H, L> = $OrRecipeComponent$Type<(H), (L)>;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockExplodedCallbackJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockExplodedCallbackJS {

constructor(level: $Level$Type, pos: $BlockPos$Type, explosion: $Explosion$Type)

public "getDamageSource"(): $DamageSource
public "getIgniter"(): $LivingEntity
public "getCause"(): $Entity
public "getBlock"(): $BlockContainerJS
public "getAffectedPlayers"(): $List<($Player)>
public "getExplosion"(): $Explosion
public "getLevel"(): $Level
public "getBlockState"(): $BlockState
public "getRadius"(): float
get "damageSource"(): $DamageSource
get "igniter"(): $LivingEntity
get "cause"(): $Entity
get "block"(): $BlockContainerJS
get "affectedPlayers"(): $List<($Player)>
get "explosion"(): $Explosion
get "level"(): $Level
get "blockState"(): $BlockState
get "radius"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExplodedCallbackJS$Type = ($BlockExplodedCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExplodedCallbackJS_ = $BlockExplodedCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$RecipeKJS" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $RecipeKJS {

 "getType"(): $ResourceLocation
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getSchema"(): $RecipeSchema
 "setGroup"(group: string): void
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getMod"(): string
}

export namespace $RecipeKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeKJS$Type = ($RecipeKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeKJS_ = $RecipeKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeNamespace" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RecipeSchemaType, $RecipeSchemaType$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $RecipeNamespace extends $LinkedHashMap<(string), ($RecipeSchemaType)> {
readonly "name": string

constructor(name: string)

public "shapeless"(id: string): $RecipeNamespace
public static "getMappedRecipes"(): $Map<(string), ($ResourceLocation)>
public "registerBasic"(id: string, ...keys: ($RecipeKey$Type<(any)>)[]): $RecipeNamespace
public "toString"(): string
public "register"(id: string, type: $RecipeSchema$Type): $RecipeNamespace
public static "getAll"(): $Map<(string), ($RecipeNamespace)>
public "shaped"(id: string): $RecipeNamespace
public "special"(id: string): $RecipeNamespace
public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "size"(): integer
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "mappedRecipes"(): $Map<(string), ($ResourceLocation)>
get "all"(): $Map<(string), ($RecipeNamespace)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeNamespace$Type = ($RecipeNamespace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeNamespace_ = $RecipeNamespace$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$SoundEventBuilder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SoundEventBuilder extends $BuilderBase<($SoundEvent)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventBuilder$Type = ($SoundEventBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEventBuilder_ = $SoundEventBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/predicate/$BlockIDPredicate$PropertyObject" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $BlockIDPredicate$PropertyObject extends $Record {

constructor(property: $Property$Type<(any)>, value: any)

public "value"(): any
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "property"(): $Property<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIDPredicate$PropertyObject$Type = ($BlockIDPredicate$PropertyObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIDPredicate$PropertyObject_ = $BlockIDPredicate$PropertyObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$SmithingTemplateItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LangEventJS, $LangEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$LangEventJS"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmithingTemplateItemBuilder extends $ItemBuilder {
 "appliesToText": $Component
 "ingredientsText": $Component
 "appliesToSlotDescriptionText": $Component
 "ingredientSlotDescriptionText": $Component
readonly "appliesToEmptyIcons": $List<($ResourceLocation)>
readonly "ingredientsSlotEmptyIcons": $List<($ResourceLocation)>
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

/**
 * Sets the name for this smithing template.
 * Note that the normal display name for all smithing templates is the same and cannot be changed, this instead sets the name in the tooltip (see vanilla smithing templates for what this looks like).
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$Type): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows in the item tooltip to describe what ingredients can be added.
 * Using 'Ingots & Crystals' or 'Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
 * THIS IS PURELY VISUAL
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
 */
public "ingredients"(text: string): $SmithingTemplateItemBuilder
public "generateLang"(lang: $LangEventJS$Type): void
/**
 * Sets the description text that shows in the item tooltip to describe what it can be applied to.
 * Using 'Armor' or 'Diamond Equipment' will use the vanilla language keys so it is translated into other languages automatically.
 * THIS IS PURELY VISUAL
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
 */
public "appliesTo"(text: string): $SmithingTemplateItemBuilder
/**
 * Adds the specified texture location to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "addIngredientsSlotIcon"(location: $ResourceLocation$Type): $SmithingTemplateItemBuilder
/**
 * Adds an ingot, dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "ingotAndCrystalIcons"(): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows when you hover over the ingredient slot when this item is put in smithing table as a template.
 * Using 'Add ingot or crystal' or 'Add Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `ingredientSlotDescriptionText` field.
 */
public "ingredientsSlotDescription"(text: string): $SmithingTemplateItemBuilder
/**
 * Adds the specified texture location to the list of base slot icons that the smithing table cycles through when this smithing template is put in.
 */
public "addAppliesToSlotIcon"(location: $ResourceLocation$Type): $SmithingTemplateItemBuilder
/**
 * Sets the description text that shows when you hover over the base item slot when this item is put in smithing table as a template.
 * Using 'Add a piece of armor' or 'Add diamond armor, weapon, or tool' will use the vanilla language keys so it is translated into other languages automatically.
 * 
 * If you wish to apply non standard formatting (like change the colour) set the `appliesToSlotDescriptionText` field.
 */
public "appliesToSlotDescription"(text: string): $SmithingTemplateItemBuilder
/**
 * Adds all armor and basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
 */
public "equipmentIcons"(): $SmithingTemplateItemBuilder
/**
 * Adds all armor icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
 */
public "armorIcons"(): $SmithingTemplateItemBuilder
/**
 * Adds a hoe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "hoeIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds boots to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "bootsIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds an ingot to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "ingotIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a axe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "axeIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds an emerald to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "emeraldIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a chestplate to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "chestplateIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a diamond to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "diamondIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a helmet to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "helmetIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds all basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
 */
public "toolIcons"(): $SmithingTemplateItemBuilder
/**
 * Adds a pickaxe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "pickaxeIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a lapis lazuli to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "lapisIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a dust to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "dustIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a shovel to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "shovelIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a quartz to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "quartzIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds leggings to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "leggingsIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a sword to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
 */
public "swordIcon"(): $SmithingTemplateItemBuilder
/**
 * Adds a dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "crystalIcons"(): $SmithingTemplateItemBuilder
/**
 * Adds an amethyst shard to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
 */
public "shardIcon"(): $SmithingTemplateItemBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTemplateItemBuilder$Type = ($SmithingTemplateItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTemplateItemBuilder_ = $SmithingTemplateItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/properties/$RemoveOresProperties" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"

export class $RemoveOresProperties {
 "worldgenLayer": $GenerationStep$Decoration
 "blocks": $BlockStatePredicate
 "biomes": $BiomeFilter

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveOresProperties$Type = ($RemoveOresProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveOresProperties_ = $RemoveOresProperties$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptSource" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScriptFileInfo, $ScriptFileInfo$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptSource {

 "readSource"(arg0: $ScriptFileInfo$Type): $List<(string)>

(arg0: $ScriptFileInfo$Type): $List<(string)>
}

export namespace $ScriptSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptSource$Type = ($ScriptSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptSource_ = $ScriptSource$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$ReleaseUsingCallback" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ItemBuilder$ReleaseUsingCallback {

 "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void

(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
}

export namespace $ItemBuilder$ReleaseUsingCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$ReleaseUsingCallback$Type = ($ItemBuilder$ReleaseUsingCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder$ReleaseUsingCallback_ = $ItemBuilder$ReleaseUsingCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/forge/$GenericForgeEventConsumer" {
import {$GenericEvent, $GenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$GenericEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $GenericForgeEventConsumer extends $Consumer<($GenericEvent<(any)>)> {

 "accept"(arg0: $GenericEvent$Type<(any)>): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<($GenericEvent<(any)>)>

(arg0: $GenericEvent$Type<(any)>): void
}

export namespace $GenericForgeEventConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericForgeEventConsumer$Type = ($GenericForgeEventConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericForgeEventConsumer_ = $GenericForgeEventConsumer$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$WindowKJS" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$IoSupplier, $IoSupplier$Type} from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export interface $WindowKJS {

 "kjs$loadIcons"(original: $List$Type<($IoSupplier$Type<($InputStream$Type)>)>): $List<($IoSupplier<($InputStream)>)>
}

export namespace $WindowKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowKJS$Type = ($WindowKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowKJS_ = $WindowKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/special/$KubeJSCraftingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IngredientAction, $IngredientAction$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $KubeJSCraftingRecipe extends $CraftingRecipe {

 "kjs$getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
 "kjs$getModifyResult"(): $ModifyRecipeResultCallback
 "kjs$getIngredientActions"(): $List<($IngredientAction)>
 "kjs$assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
 "kjs$getStage"(): string
 "category"(): $CraftingBookCategory
 "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "getToastSymbol"(): $ItemStack
 "showNotification"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
 "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "getType"(): $ResourceLocation
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getSchema"(): $RecipeSchema
 "setGroup"(group: string): void
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getMod"(): string
}

export namespace $KubeJSCraftingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCraftingRecipe$Type = ($KubeJSCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSCraftingRecipe_ = $KubeJSCraftingRecipe$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptFile" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ScriptPack, $ScriptPack$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptPack"
import {$ScriptFileInfo, $ScriptFileInfo$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo"
import {$ScriptSource, $ScriptSource$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptSource"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptFile implements $Comparable<($ScriptFile)> {
readonly "pack": $ScriptPack
readonly "info": $ScriptFileInfo
readonly "source": $ScriptSource

constructor(p: $ScriptPack$Type, i: $ScriptFileInfo$Type, s: $ScriptSource$Type)

public "compareTo"(o: $ScriptFile$Type): integer
public "load"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptFile$Type = ($ScriptFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptFile_ = $ScriptFile$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ItemStackKJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IngredientSupplierKJS, $IngredientSupplierKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpecialEquality, $SpecialEquality$Type} from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$NBTSerializable, $NBTSerializable$Type} from "packages/dev/latvian/mods/rhino/mod/util/$NBTSerializable"
import {$JsonSerializable, $JsonSerializable$Type} from "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemStackKJS extends $SpecialEquality, $NBTSerializable, $JsonSerializable, $IngredientSupplierKJS {

 "specialEquals"(o: any, shallow: boolean): boolean
 "toJson"(): $JsonObject
 "getEnchantments"(): $Map<(string), (integer)>
 "equalsIgnoringCount"(stack: $ItemStack$Type): boolean
 "getHarvestSpeed"(block: $BlockContainerJS$Type): float
 "getHarvestSpeed"(): float
 "asIngredient"(): $Ingredient
 "self"(): $ItemStack
 "hasTag"(tag: $ResourceLocation$Type): boolean
 "isBlock"(): boolean
 "withCount"(c: integer): $ItemStack
 "removeTag"(): void
 "getNbtString"(): string
 "withNBT"(nbt: $CompoundTag$Type): $ItemStack
 "getTags"(): $Collection<($ResourceLocation)>
 "weakNBT"(): $Ingredient
 "strongNBT"(): $Ingredient
/**
 * 
 * @deprecated
 */
 "ignoreNBT"(): $Ingredient
 "areItemsEqual"(other: $ItemStack$Type): boolean
 "isNBTEqual"(other: $ItemStack$Type): boolean
 "hasEnchantment"(enchantment: $Enchantment$Type, level: integer): boolean
 "enchant"(enchantment: $Enchantment$Type, level: integer): $ItemStack
 "enchant"(enchantments: $Map$Type<(any), (any)>): $ItemStack
 "withName"(displayName: $Component$Type): $ItemStack
 "toItemString"(): string
 "withChance"(chance: double): $OutputItem
 "withLore"(text: ($Component$Type)[]): $ItemStack
 "getIdLocation"(): $ResourceLocation
 "getId"(): string
 "getTypeData"(): $CompoundTag
 "getMod"(): string
}

export namespace $ItemStackKJS {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKJS$Type = ($ItemStackKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackKJS_ = $ItemStackKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$MinecraftClientKJS" {
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$ScheduledEvents, $ScheduledEvents$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MinecraftEnvironmentKJS, $MinecraftEnvironmentKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MinecraftEnvironmentKJS"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ScheduledEvents$Callback, $ScheduledEvents$Callback$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import {$ScheduledEvents$ScheduledEvent, $ScheduledEvents$ScheduledEvent$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {

 "runCommand"(command: string): integer
 "setTitle"(t: string): void
 "isKeyDown"(key: integer): boolean
 "isShiftDown"(): boolean
 "isAltDown"(): boolean
 "isCtrlDown"(): boolean
 "setCurrentScreen"(gui: $Screen$Type): void
 "getCurrentScreen"(): $Screen
 "getCurrentWorldName"(): string
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "self"(): $Minecraft
 "schedule"(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleRepeating"(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "getScheduledEvents"(): $ScheduledEvents
 "getDisplayName"(): $Component

(command: string): integer
}

export namespace $MinecraftClientKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientKJS$Type = ($MinecraftClientKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientKJS_ = $MinecraftClientKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback" {
import {$ScheduledEvents$ScheduledEvent, $ScheduledEvents$ScheduledEvent$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export interface $ScheduledEvents$Callback {

 "onCallback"(arg0: $ScheduledEvents$ScheduledEvent$Type): void

(arg0: $ScheduledEvents$ScheduledEvent$Type): void
}

export namespace $ScheduledEvents$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledEvents$Callback$Type = ($ScheduledEvents$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledEvents$Callback_ = $ScheduledEvents$Callback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export class $NotificationBuilder {
static readonly "NO_TEXT": ($Component)[]
static readonly "DEFAULT_DURATION": $Duration
static readonly "DEFAULT_BORDER_COLOR": $Color
static readonly "DEFAULT_BACKGROUND_COLOR": $Color
 "duration": $Duration
 "text": $Component
 "iconSize": integer
 "outlineColor": $Color
 "borderColor": $Color
 "backgroundColor": $Color
 "textShadow": boolean

constructor(buf: $FriendlyByteBuf$Type)
constructor()

public "setIcon"(icon: string): void
public "setItemIcon"(stack: $ItemStack$Type): void
public static "of"(cx: $Context$Type, object: any): $NotificationBuilder
public static "make"(consumer: $Consumer$Type<($NotificationBuilder$Type)>): $NotificationBuilder
public "write"(buf: $FriendlyByteBuf$Type): void
public "show"(): void
public "setAtlasIcon"(icon: string): void
set "icon"(value: string)
set "itemIcon"(value: $ItemStack$Type)
set "atlasIcon"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationBuilder$Type = ((builder: $NotificationBuilder) => void) | ($Component$Type) | ($NotificationBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationBuilder_ = $NotificationBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/$PainterObjectStorage" {
import {$Painter, $Painter$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ScreenPainterObject, $ScreenPainterObject$Type} from "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenPainterObject"
import {$PainterObject, $PainterObject$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject"

export class $PainterObjectStorage {
readonly "painter": $Painter

constructor(p: $Painter$Type)

public "remove"(id: string): void
public "clear"(): void
public "handle"(root: $CompoundTag$Type): void
public "getObject"(key: string): $PainterObject
public "createScreenObjects"(): ($ScreenPainterObject)[]
public "getObjects"(): $Collection<($PainterObject)>
get "objects"(): $Collection<($PainterObject)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PainterObjectStorage$Type = ($PainterObjectStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PainterObjectStorage_ = $PainterObjectStorage$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer" {
import {$LootContext$EntityTarget, $LootContext$EntityTarget$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ConditionalFunction, $ConditionalFunction$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CopyNameFunction$NameSource, $CopyNameFunction$NameSource$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $FunctionContainer {

 "addConditionalFunction"(func: $Consumer$Type<($ConditionalFunction$Type)>): $FunctionContainer
 "enchantRandomly"(enchantments: ($ResourceLocation$Type)[]): $FunctionContainer
 "enchantWithLevels"(levels: $NumberProvider$Type, treasure: boolean): $FunctionContainer
 "lootingEnchant"(count: $NumberProvider$Type, limit: integer): $FunctionContainer
 "copyName"(source: $CopyNameFunction$NameSource$Type): $FunctionContainer
 "furnaceSmelt"(): $FunctionContainer
 "name"(name: $Component$Type, entity: $LootContext$EntityTarget$Type): $FunctionContainer
 "name"(name: $Component$Type): $FunctionContainer
 "count"(count: $NumberProvider$Type): $FunctionContainer
 "damage"(damage: $NumberProvider$Type): $FunctionContainer
 "addFunction"(arg0: $JsonObject$Type): $FunctionContainer
 "nbt"(tag: $CompoundTag$Type): $FunctionContainer
 "lootTable"(table: $ResourceLocation$Type, seed: long): $FunctionContainer

(func: $Consumer$Type<($ConditionalFunction$Type)>): $FunctionContainer
}

export namespace $FunctionContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionContainer$Type = ($FunctionContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionContainer_ = $FunctionContainer$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$GeneratedClassLoader" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $GeneratedClassLoader {

 "linkClass"(arg0: $Class$Type<(any)>): void
 "defineClass"(arg0: string, arg1: (byte)[]): $Class<(any)>
}

export namespace $GeneratedClassLoader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedClassLoader$Type = ($GeneratedClassLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratedClassLoader_ = $GeneratedClassLoader$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$CustomIngredientActionCallback" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CustomIngredientActionCallback {

 "transform"(arg0: $ItemStack$Type, arg1: integer, arg2: $InventoryKJS$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: integer, arg2: $InventoryKJS$Type): $ItemStack
}

export namespace $CustomIngredientActionCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredientActionCallback$Type = ($CustomIngredientActionCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIngredientActionCallback_ = $CustomIngredientActionCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$BasicMobEffect$Builder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MobEffectBuilder, $MobEffectBuilder$Type} from "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BasicMobEffect$Builder extends $MobEffectBuilder {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $MobEffect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicMobEffect$Builder$Type = ($BasicMobEffect$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicMobEffect$Builder_ = $BasicMobEffect$Builder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/platform/forge/$IngredientForgeHelper" {
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IngredientPlatformHelper, $IngredientPlatformHelper$Type} from "packages/dev/latvian/mods/kubejs/platform/$IngredientPlatformHelper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IngredientForgeHelper implements $IngredientPlatformHelper {

constructor()

public "wildcard"(): $Ingredient
public "regex"(pattern: $Pattern$Type): $Ingredient
public static "register"(): void
public "mod"(mod: string): $Ingredient
public "or"(ingredients: ($Ingredient$Type)[]): $Ingredient
public "subtract"(base: $Ingredient$Type, subtracted: $Ingredient$Type): $Ingredient
public "and"(ingredients: ($Ingredient$Type)[]): $Ingredient
public "creativeTab"(tab: $CreativeModeTab$Type): $Ingredient
public "isWildcard"(ingredient: $Ingredient$Type): boolean
public "custom"(parent: $Ingredient$Type, predicate: $Predicate$Type<($ItemStack$Type)>): $Ingredient
public "custom"(parent: $Ingredient$Type, uuid: $UUID$Type): $Ingredient
public "weakNBT"(item: $ItemStack$Type): $Ingredient
public "strongNBT"(item: $ItemStack$Type): $Ingredient
public static "get"(): $IngredientPlatformHelper
public "stack"(ingredient: $Ingredient$Type, count: integer): $InputItem
public "tag"(tag: string): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientForgeHelper$Type = ($IngredientForgeHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientForgeHelper_ = $IngredientForgeHelper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$LevelKJS" {
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$ScriptTypeHolder, $ScriptTypeHolder$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WithAttachedData, $WithAttachedData$Type} from "packages/dev/latvian/mods/kubejs/core/$WithAttachedData"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FireworksJS, $FireworksJS$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ExplosionJS, $ExplosionJS$Type} from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $LevelKJS extends $WithAttachedData<($Level)>, $ScriptTypeHolder {

 "runCommand"(command: string): integer
 "getBlock"(blockEntity: $BlockEntity$Type): $BlockContainerJS
 "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
 "getBlock"(pos: $BlockPos$Type): $BlockContainerJS
 "getSide"(): $ScriptType
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "createExplosion"(x: double, y: double, z: double): $ExplosionJS
 "createEntityList"(entities: $Collection$Type<(any)>): $EntityArrayList
 "getEntitiesWithin"(aabb: $AABB$Type): $EntityArrayList
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "self"(): $Level
 "getDimension"(): $ResourceLocation
 "isOverworld"(): boolean
 "getPlayers"(): $EntityArrayList
 "getEntities"(): $EntityArrayList
 "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$Type): void
 "spawnParticles"(options: $ParticleOptions$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
 "createEntity"(type: $EntityType$Type<(any)>): $Entity
 "getData"(): $AttachedData<($Level)>
 "getDisplayName"(): $Component

(command: string): integer
}

export namespace $LevelKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelKJS$Type = ($LevelKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelKJS_ = $LevelKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$BlockEntityInfo, $BlockEntityInfo$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityInfo"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityAttachment, $BlockEntityAttachment$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityAttachment"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityJS extends $BlockEntity {
readonly "info": $BlockEntityInfo
readonly "x": integer
readonly "y": integer
readonly "z": integer
 "tick": integer
 "cycle": integer
 "data": $CompoundTag
readonly "attachments": ($BlockEntityAttachment)[]
 "inventory": $InventoryKJS
 "placerId": $UUID
 "blockState": $BlockState

constructor(blockPos: $BlockPos$Type, blockState: $BlockState$Type, entityInfo: $BlockEntityInfo$Type)

public "triggerEvent"(eventId: integer, data: integer): boolean
public "sync"(): void
public "save"(): void
public "getBlock"(): $BlockContainerJS
public "load"(tag: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "sendEvent"(eventId: integer, data: integer): void
get "block"(): $BlockContainerJS
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityJS$Type = ($BlockEntityJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityJS_ = $BlockEntityJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$Context" {
import {$GeneratedClassLoader, $GeneratedClassLoader$Type} from "packages/dev/latvian/mods/rhino/$GeneratedClassLoader"
import {$RegExp, $RegExp$Type} from "packages/dev/latvian/mods/rhino/regexp/$RegExp"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CustomJavaToJsWrapperProvider, $CustomJavaToJsWrapperProvider$Type} from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapperProvider"
import {$Script, $Script$Type} from "packages/dev/latvian/mods/rhino/$Script"
import {$ClassShutter, $ClassShutter$Type} from "packages/dev/latvian/mods/rhino/$ClassShutter"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$WrapFactory, $WrapFactory$Type} from "packages/dev/latvian/mods/rhino/$WrapFactory"
import {$Remapper, $Remapper$Type} from "packages/dev/latvian/mods/rhino/util/$Remapper"
import {$CustomJavaToJsWrapper, $CustomJavaToJsWrapper$Type} from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Callable, $Callable$Type} from "packages/dev/latvian/mods/rhino/$Callable"
import {$ErrorReporter, $ErrorReporter$Type} from "packages/dev/latvian/mods/rhino/$ErrorReporter"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"
import {$EvaluatorException, $EvaluatorException$Type} from "packages/dev/latvian/mods/rhino/$EvaluatorException"
import {$TypeWrappers, $TypeWrappers$Type} from "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrappers"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$ScriptableObject, $ScriptableObject$Type} from "packages/dev/latvian/mods/rhino/$ScriptableObject"

export class $Context {
readonly "lock": any
 "generateObserverCount": boolean


public "setApplicationClassLoader"(loader: $ClassLoader$Type): void
public "initStandardObjects"(): $ScriptableObject
public "initStandardObjects"(scope: $ScriptableObject$Type): $Scriptable
public "initStandardObjects"(scope: $ScriptableObject$Type, sealed: boolean): $ScriptableObject
public "getTopCallOrThrow"(): $Scriptable
public "setTopCall"(scope: $Scriptable$Type): void
public "setWrapFactory"(wrapFactory: $WrapFactory$Type): void
public "getClassShutter"(): $ClassShutter
public "hasTopCallScope"(): boolean
public "getTopCallScope"(): $Scriptable
public "callSync"(callable: $Callable$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[]): any
public "doTopCall"(scope: $Scriptable$Type, callable: $Callable$Type, thisObj: $Scriptable$Type, args: (any)[], isTopLevelStrict: boolean): any
public "storeScriptable"(value: $Scriptable$Type): void
public "addToScope"(scope: $Scriptable$Type, name: string, value: any): void
public "wrapCustomJavaToJs"(javaObject: any): $CustomJavaToJsWrapper
public "compileReader"(arg0: $Reader$Type, sourceName: string, lineno: integer, securityDomain: any): $Script
public "hasTypeWrappers"(): boolean
public "compileString"(source: string, sourceName: string, lineno: integer, securityDomain: any): $Script
public static "javaToJS"(cx: $Context$Type, value: any, scope: $Scriptable$Type): any
public "evaluateReader"(scope: $Scriptable$Type, arg1: $Reader$Type, sourceName: string, lineno: integer, securityDomain: any): any
public static "reportWarning"(message: string, cx: $Context$Type): void
public static "reportWarning"(cx: $Context$Type, message: string, sourceName: string, lineno: integer, lineSource: string, lineOffset: integer): void
public "evaluateString"(scope: $Scriptable$Type, source: string, sourceName: string, lineno: integer, securityDomain: any): any
public static "getUndefinedValue"(): any
public "removeThreadLocal"(key: any): void
public "putThreadLocal"(key: any, value: any): void
public "getThreadLocal"(key: any): any
public static "jsToJava"(cx: $Context$Type, value: any, desiredType: $Class$Type<(any)>): any
public "getWrapFactory"(): $WrapFactory
public "getProperty"<T>(key: string, def: T): T
public "getProperty"(key: string): any
public "newArray"(scope: $Scriptable$Type, elements: (any)[]): $Scriptable
public "newArray"(scope: $Scriptable$Type, length: integer): $Scriptable
public "setProperty"(key: string, value: any): void
public "createClassLoader"(parent: $ClassLoader$Type): $GeneratedClassLoader
public "getImplementationVersion"(): string
public static "reportError"(cx: $Context$Type, message: string, lineno: integer, lineSource: string, lineOffset: integer, sourceName: string): void
public static "reportError"(cx: $Context$Type, message: string): void
public "getErrorReporter"(): $ErrorReporter
public "isStrictMode"(): boolean
public static "throwAsScriptRuntimeEx"(e: $Throwable$Type, cx: $Context$Type): $RuntimeException
public static "enter"(): $Context
public static "reportRuntimeError1"(messageId: string, arg1: any, cx: $Context$Type): $EvaluatorException
public static "reportRuntimeError2"(messageId: string, arg1: any, arg2: any, cx: $Context$Type): $EvaluatorException
public "getTypeWrappers"(): $TypeWrappers
public "setClassShutter"(shutter: $ClassShutter$Type): void
public "setRemapper"(remapper: $Remapper$Type): void
public static "reportRuntimeError"(cx: $Context$Type, message: string, sourceName: string, lineno: integer, lineSource: string, lineOffset: integer): $EvaluatorException
public static "reportRuntimeError"(message: string, cx: $Context$Type): $EvaluatorException
public "getRegExp"(): $RegExp
public "newObject"(scope: $Scriptable$Type, constructorName: string, args: (any)[]): $Scriptable
public "newObject"(scope: $Scriptable$Type, constructorName: string): $Scriptable
public "newObject"(scope: $Scriptable$Type): $Scriptable
public "addCustomJavaToJsWrapper"<T>(type: $Class$Type<(T)>, provider: $CustomJavaToJsWrapperProvider$Type<(T)>): void
public "addCustomJavaToJsWrapper"<T>(predicate: $Predicate$Type<(T)>, provider: $CustomJavaToJsWrapperProvider$Type<(T)>): void
public "lastStoredScriptable"(): $Scriptable
public "getRemapper"(): $Remapper
public static "getSourcePositionFromStack"(cx: $Context$Type, linep: (integer)[]): string
public static "reportRuntimeError0"(messageId: string, cx: $Context$Type): $EvaluatorException
public "getMaximumInterpreterStackDepth"(): integer
public "setInstructionObserverThreshold"(threshold: integer): void
public "getInstructionObserverThreshold"(): integer
public "newClassSerialNumber"(): integer
public "getApplicationClassLoader"(): $ClassLoader
public "setMaximumInterpreterStackDepth"(max: integer): void
public static "reportRuntimeError3"(messageId: string, arg1: any, arg2: any, arg3: any, cx: $Context$Type): $EvaluatorException
public static "reportRuntimeError4"(messageId: string, arg1: any, arg2: any, arg3: any, arg4: any, cx: $Context$Type): $EvaluatorException
public "setGenerateObserverCount"(generateObserverCount: boolean): void
public "initSafeStandardObjects"(scope: $ScriptableObject$Type): $Scriptable
public "initSafeStandardObjects"(): $ScriptableObject
public "initSafeStandardObjects"(scope: $ScriptableObject$Type, sealed: boolean): $ScriptableObject
set "applicationClassLoader"(value: $ClassLoader$Type)
get "topCallOrThrow"(): $Scriptable
set "topCall"(value: $Scriptable$Type)
set "wrapFactory"(value: $WrapFactory$Type)
get "classShutter"(): $ClassShutter
get "topCallScope"(): $Scriptable
get "undefinedValue"(): any
get "wrapFactory"(): $WrapFactory
get "implementationVersion"(): string
get "errorReporter"(): $ErrorReporter
get "strictMode"(): boolean
get "typeWrappers"(): $TypeWrappers
set "classShutter"(value: $ClassShutter$Type)
set "remapper"(value: $Remapper$Type)
get "regExp"(): $RegExp
get "remapper"(): $Remapper
get "maximumInterpreterStackDepth"(): integer
set "instructionObserverThreshold"(value: integer)
get "instructionObserverThreshold"(): integer
get "applicationClassLoader"(): $ClassLoader
set "maximumInterpreterStackDepth"(value: integer)
set "generateObserverCount"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Context$Type = ($Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Context_ = $Context$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Face" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelGenerator$Face {

constructor()

public "tintindex"(i: integer): $ModelGenerator$Face
public "cull"(d: $Direction$Type): $ModelGenerator$Face
public "cull"(): $ModelGenerator$Face
public "tex"(t: string): $ModelGenerator$Face
public "uv"(u0: double, v0: double, u1: double, v1: double): $ModelGenerator$Face
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelGenerator$Face$Type = ($ModelGenerator$Face);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelGenerator$Face_ = $ModelGenerator$Face$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptPackInfo" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScriptFileInfo, $ScriptFileInfo$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptPackInfo {
readonly "namespace": string
readonly "displayName": $Component
readonly "scripts": $List<($ScriptFileInfo)>
readonly "pathStart": string

constructor(n: string, p: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptPackInfo$Type = ($ScriptPackInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptPackInfo_ = $ScriptPackInfo$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabIconSupplier" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeTabIconSupplier {

 "getIcon"(): $ItemStack

(): $ItemStack
}

export namespace $CreativeTabIconSupplier {
const DEFAULT: $CreativeTabIconSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabIconSupplier$Type = ($CreativeTabIconSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabIconSupplier_ = $CreativeTabIconSupplier$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/stages/$StageChangeEvent" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Stages, $Stages$Type} from "packages/dev/latvian/mods/kubejs/stages/$Stages"

export class $StageChangeEvent {


public "getStage"(): string
public "getPlayer"(): $Player
public "getPlayerStages"(): $Stages
get "stage"(): string
get "player"(): $Player
get "playerStages"(): $Stages
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageChangeEvent$Type = ($StageChangeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageChangeEvent_ = $StageChangeEvent$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/$OrderedCompoundTag" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TagType, $TagType$Type} from "packages/net/minecraft/nbt/$TagType"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"

export class $OrderedCompoundTag extends $CompoundTag {
readonly "tagMap": $Map<(string), ($Tag)>
static readonly "CODEC": $Codec<($CompoundTag)>
static readonly "TYPE": $TagType<($CompoundTag)>
readonly "tags": $Map<(string), ($Tag)>

constructor(map: $Map$Type<(string), ($Tag$Type)>)
constructor()

public "write"(dataOutput: $DataOutput$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderedCompoundTag$Type = ($OrderedCompoundTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderedCompoundTag_ = $OrderedCompoundTag$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemBuilder extends $ItemBuilder {
 "blockBuilder": $BlockBuilder
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "getTranslationKeyGroup"(): string
public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
public "createObject"(): $Item
get "translationKeyGroup"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemBuilder$Type = ($BlockItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemBuilder_ = $BlockItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$KMath" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $KMath {
static readonly "E": double
static readonly "PI": double
static readonly "DEGREES_TO_RADIANS": double
static readonly "RADIANS_TO_DEGREES": double

constructor()

public static "approachDegrees"(current: double, target: double, speed: double): double
public static "floor"(value: double): long
public static "ceil"(value: double): long
public static "map"(value: double, min0: double, max0: double, min1: double, max1: double): double
public static "v3"(x: double, y: double, z: double): $Vec3
public static "block"(x: double, y: double, z: double): $BlockPos
public static "rad"(value: double): double
public static "v3d"(x: double, y: double, z: double): $Vector3d
public static "lerp"(value: double, min: double, max: double): double
public static "isPowerOfTwo"(value: integer): boolean
public static "deg"(value: double): double
public static "approach"(current: double, target: double, speed: double): double
public static "poseStack"(): $PoseStack
public static "quaternion"(x: float, y: float, z: float, w: float): $Quaternionf
public static "clamp"(value: double, min: double, max: double): double
public static "degreesDifference"(current: double, target: double): double
public static "v4f"(x: float, y: float, z: float, w: float): $Vector4f
public static "rotateIfNecessary"(current: double, target: double, max: double): double
public static "wrapDegrees"(d: double): double
public static "m3f"(): $Matrix3f
public static "m4f"(): $Matrix4f
public static "clampedLerp"(value: double, min: double, max: double): double
public static "v3f"(x: float, y: float, z: float): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KMath$Type = ($KMath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KMath_ = $KMath$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/events/$BoilerHeaterHandlerEvent$BoilerHeaterCallback" {
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $BoilerHeaterHandlerEvent$BoilerHeaterCallback {

 "updateHeat"(arg0: $BlockContainerJS$Type): float

(arg0: $BlockContainerJS$Type): float
}

export namespace $BoilerHeaterHandlerEvent$BoilerHeaterCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerHeaterHandlerEvent$BoilerHeaterCallback$Type = ($BoilerHeaterHandlerEvent$BoilerHeaterCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoilerHeaterHandlerEvent$BoilerHeaterCallback_ = $BoilerHeaterHandlerEvent$BoilerHeaterCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ChestMenuClickEvent$Callback, $ChestMenuClickEvent$Callback$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent$Callback"
import {$ChestMenuInventoryClickEvent$Callback, $ChestMenuInventoryClickEvent$Callback$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuInventoryClickEvent$Callback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ChestMenuSlot, $ChestMenuSlot$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuSlot"

export class $ChestMenuData {
readonly "player": $ServerPlayer
 "title": $Component
readonly "rows": integer
readonly "slots": ($ChestMenuSlot)[]
 "anyClicked": $ChestMenuClickEvent$Callback
 "inventoryClicked": $ChestMenuInventoryClickEvent$Callback
 "playerSlots": boolean
 "closed": $Runnable
 "mouseItem": $ItemStack
 "capturedInventory": $Container

constructor(player: $ServerPlayer$Type, title: $Component$Type, rows: integer)

public "sync"(): void
public "slot"(x0: integer, y0: integer, x1: integer, y1: integer, slot: $Consumer$Type<($ChestMenuSlot$Type)>): void
public "slot"(x: integer, y: integer, slot: $Consumer$Type<($ChestMenuSlot$Type)>): void
public "getSlot"(x: integer, y: integer): $ChestMenuSlot
public "button"(x: integer, y: integer, stack: $ItemStack$Type, displayName: $Component$Type, leftClicked: $ChestMenuClickEvent$Callback$Type): void
public "handleClick"(index: integer, type: $ClickType$Type, button: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuData$Type = ($ChestMenuData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuData_ = $ChestMenuData$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/server/$ServerEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $ServerEventJS extends $EventJS {
readonly "server": $MinecraftServer

constructor(s: $MinecraftServer$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerEventJS$Type = ($ServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerEventJS_ = $ServerEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$LazyComponentKJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $LazyComponentKJS extends $Supplier<($Component)> {

 "get"(): $Component

(): $Component
}

export namespace $LazyComponentKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyComponentKJS$Type = ($LazyComponentKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyComponentKJS_ = $LazyComponentKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$CreativeTabContentSupplier, $CreativeTabContentSupplier$Type} from "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabContentSupplier"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CreativeTabIconSupplier, $CreativeTabIconSupplier$Type} from "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabIconSupplier"

export class $CreativeTabBuilder extends $BuilderBase<($CreativeModeTab)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "content"(content: $CreativeTabContentSupplier$Type): $CreativeTabBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "icon"(icon: $CreativeTabIconSupplier$Type): $CreativeTabBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabBuilder$Type = ($CreativeTabBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabBuilder_ = $CreativeTabBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentValueMap" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$IdentityHashMap, $IdentityHashMap$Type} from "packages/java/util/$IdentityHashMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ComponentValueMap extends $IdentityHashMap<($RecipeKey<(any)>), (any)> {

constructor(init: integer)

public "getValue"<T>(recipe: $RecipeJS$Type, key: $RecipeKey$Type<(T)>): T
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentValueMap$Type = ($ComponentValueMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentValueMap_ = $ComponentValueMap$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$ArrayRecipeComponent, $ArrayRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$OrRecipeComponent, $OrRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AndRecipeComponent<A, B> extends $Record implements $RecipeComponent<($Pair<(A), (B)>)> {

constructor(a: $RecipeComponent$Type<(A)>, b: $RecipeComponent$Type<(B)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "componentType"(): string
public "b"(): $RecipeComponent<(B)>
public "a"(): $RecipeComponent<(A)>
public "write"(recipe: $RecipeJS$Type, value: $Pair$Type<(A), (B)>): $JsonArray
public "componentClass"(): $Class<(any)>
public "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
public "role"(): $ComponentRole
public "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($Pair$Type<(A), (B)>)>, json: $JsonObject$Type): void
public "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($Pair$Type<(A), (B)>)>, json: $JsonObject$Type): void
public "orSelf"(): $RecipeComponent<($Pair<(A), (B)>)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
public "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<($Pair<(A), (B)>)>
public static "builder"(): $RecipeComponentBuilder
public static "builder"(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
public "key"(name: string): $RecipeKey<($Pair<(A), (B)>)>
public "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<($Pair<(A), (B)>), (O)>
public "asArray"(): $ArrayRecipeComponent<($Pair<(A), (B)>)>
public "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<($Pair<(A), (B)>), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
public "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<($Pair<(A), (B)>)>
public "replaceOutput"(recipe: $RecipeJS$Type, original: $Pair$Type<(A), (B)>, match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): $Pair<(A), (B)>
public "replaceInput"(recipe: $RecipeJS$Type, original: $Pair$Type<(A), (B)>, match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): $Pair<(A), (B)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
public "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<($Pair<(A), (B)>)>
public "checkValueHasChanged"(oldValue: $Pair$Type<(A), (B)>, newValue: $Pair$Type<(A), (B)>): boolean
public "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), ($Pair<(A), (B)>)>)>
public "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
public "checkEmpty"(key: $RecipeKey$Type<($Pair$Type<(A), (B)>)>, value: $Pair$Type<(A), (B)>): string
public "asPatternKey"(): $RecipeComponent<($TinyMap<(character), ($Pair<(A), (B)>)>)>
public "asArrayOrSelf"(): $ArrayRecipeComponent<($Pair<(A), (B)>)>
public "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($Pair$Type<(A), (B)>)>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
public "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<($Pair<(A), (B)>)>
public "isOutput"(recipe: $RecipeJS$Type, value: $Pair$Type<(A), (B)>, match: $ReplacementMatch$Type): boolean
public "isInput"(recipe: $RecipeJS$Type, value: $Pair$Type<(A), (B)>, match: $ReplacementMatch$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndRecipeComponent$Type<A, B> = ($AndRecipeComponent<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AndRecipeComponent_<A, B> = $AndRecipeComponent$Type<(A), (B)>;
}}
declare module "packages/dev/latvian/mods/kubejs/block/predicate/$BlockEntityPredicate" {
import {$BlockEntityPredicateDataCheck, $BlockEntityPredicateDataCheck$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockEntityPredicateDataCheck"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockPredicate"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BlockEntityPredicate implements $BlockPredicate {

constructor(i: $ResourceLocation$Type)

public "toString"(): string
public "data"(cd: $BlockEntityPredicateDataCheck$Type): $BlockEntityPredicate
public "check"(block: $BlockContainerJS$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityPredicate$Type = ($BlockEntityPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityPredicate_ = $BlockEntityPredicate$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"

export class $LivingEntityEventJS extends $EntityEventJS {

constructor()

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityEventJS$Type = ($LivingEntityEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityEventJS_ = $LivingEntityEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuSlot" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ChestMenuData, $ChestMenuData$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuData"
import {$ChestMenuClickHandler, $ChestMenuClickHandler$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChestMenuClickEvent$Callback, $ChestMenuClickEvent$Callback$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent$Callback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChestMenuSlot {
readonly "gui": $ChestMenuData
readonly "index": integer
readonly "x": integer
readonly "y": integer
 "clicked": integer
 "data": $Map<(string), (any)>
readonly "clickHandlers": $List<($ChestMenuClickHandler)>
 "inventory": $InventoryKJS
 "inventorySlot": integer

constructor(gui: $ChestMenuData$Type, index: integer)

public "toString"(): string
public "getItem"(): $ItemStack
public "setItem"(stack: $ItemStack$Type): void
public "setThrown"(callback: $ChestMenuClickEvent$Callback$Type): void
public "clicked"(type: $ClickType$Type, button: integer, callback: $ChestMenuClickEvent$Callback$Type, autoHandle: boolean): void
public "setShiftRightClicked"(callback: $ChestMenuClickEvent$Callback$Type): void
public "setShiftLeftClicked"(callback: $ChestMenuClickEvent$Callback$Type): void
public "setLeftClicked"(callback: $ChestMenuClickEvent$Callback$Type): void
public "resetClickHandlers"(): void
public "setMiddleClicked"(callback: $ChestMenuClickEvent$Callback$Type): void
public "setDoubleClicked"(callback: $ChestMenuClickEvent$Callback$Type): void
public "setRightClicked"(callback: $ChestMenuClickEvent$Callback$Type): void
public "setSwapped"(callback: $ChestMenuClickEvent$Callback$Type): void
get "item"(): $ItemStack
set "item"(value: $ItemStack$Type)
set "thrown"(value: $ChestMenuClickEvent$Callback$Type)
set "shiftRightClicked"(value: $ChestMenuClickEvent$Callback$Type)
set "shiftLeftClicked"(value: $ChestMenuClickEvent$Callback$Type)
set "leftClicked"(value: $ChestMenuClickEvent$Callback$Type)
set "middleClicked"(value: $ChestMenuClickEvent$Callback$Type)
set "doubleClicked"(value: $ChestMenuClickEvent$Callback$Type)
set "rightClicked"(value: $ChestMenuClickEvent$Callback$Type)
set "swapped"(value: $ChestMenuClickEvent$Callback$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuSlot$Type = ($ChestMenuSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuSlot_ = $ChestMenuSlot$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$FenceGateBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $FenceGateBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "behaviour"(wt: string): $FenceGateBlockBuilder
public "behaviour"(wt: $WoodType$Type): $FenceGateBlockBuilder
public "createObject"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceGateBlockBuilder$Type = ($FenceGateBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceGateBlockBuilder_ = $FenceGateBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemTintFunction" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemTintFunction {

 "getColor"(arg0: $ItemStack$Type, arg1: integer): $Color

(cx: $Context$Type, o: any): $ItemTintFunction
}

export namespace $ItemTintFunction {
const BLOCK: $ItemTintFunction
const POTION: $ItemTintFunction
const MAP: $ItemTintFunction
const DISPLAY_COLOR_NBT: $ItemTintFunction
function of(cx: $Context$Type, o: any): $ItemTintFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTintFunction$Type = (($ItemTintFunction$Type)[]) | (string) | ((stack: $ItemStack, index: integer) => void) | ($ItemTintFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTintFunction_ = $ItemTintFunction$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$JavaMembers$MethodInfo" {
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export class $JavaMembers$MethodInfo {
 "method": $Method
 "name": string
 "hidden": boolean

constructor(m: $Method$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JavaMembers$MethodInfo$Type = ($JavaMembers$MethodInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JavaMembers$MethodInfo_ = $JavaMembers$MethodInfo$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$RemoveJEICategoriesEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IJeiRuntime, $IJeiRuntime$Type} from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $RemoveJEICategoriesEvent extends $EventJS {

constructor(r: $IJeiRuntime$Type)

public "getCategoryIds"(): $Collection<($ResourceLocation)>
public "remove"(...categoriesToYeet: ($ResourceLocation$Type)[]): void
public "removeIf"(filter: $Predicate$Type<($IRecipeCategory$Type<(any)>)>): void
public "getCategories"(): $Collection<($IRecipeCategory<(any)>)>
get "categoryIds"(): $Collection<($ResourceLocation)>
get "categories"(): $Collection<($IRecipeCategory<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveJEICategoriesEvent$Type = ($RemoveJEICategoriesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveJEICategoriesEvent_ = $RemoveJEICategoriesEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$SimpleLevelEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $SimpleLevelEventJS extends $LevelEventJS {

constructor(l: $Level$Type)

public "getLevel"(): $Level
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleLevelEventJS$Type = ($SimpleLevelEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleLevelEventJS_ = $SimpleLevelEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IngredientActionFilter, $IngredientActionFilter$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientActionFilter"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IngredientAction extends $IngredientActionFilter {
static readonly "FACTORY_MAP": $Map<(string), ($Function<($JsonObject), ($IngredientAction)>)>
 "filterIndex": integer
 "filterIngredient": $Ingredient

constructor()

public "transform"(arg0: $ItemStack$Type, arg1: integer, arg2: $CraftingContainer$Type): $ItemStack
public "getType"(): string
public static "getRemaining"(container: $CraftingContainer$Type, index: integer, ingredientActions: $List$Type<($IngredientAction$Type)>): $ItemStack
public static "readList"(buf: $FriendlyByteBuf$Type): $List<($IngredientAction)>
public static "writeList"(buf: $FriendlyByteBuf$Type, list: $List$Type<($IngredientAction$Type)>): void
public "toJson"(json: $JsonObject$Type): void
public "toJson"(): $JsonObject
public static "parseList"(json: $JsonElement$Type): $List<($IngredientAction)>
get "type"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientAction$Type = ($IngredientAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientAction_ = $IngredientAction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrappers" {
import {$ClassWrapper, $ClassWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$ClassWrapper"
import {$ArgumentTypeWrapper, $ArgumentTypeWrapper$Type} from "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrapper"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CommandRegistryEventJS, $CommandRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/command/$CommandRegistryEventJS"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ArgumentTypeWrappers extends $Enum<($ArgumentTypeWrappers)> implements $ArgumentTypeWrapper {
static readonly "BOOLEAN": $ArgumentTypeWrappers
static readonly "FLOAT": $ArgumentTypeWrappers
static readonly "DOUBLE": $ArgumentTypeWrappers
static readonly "INTEGER": $ArgumentTypeWrappers
static readonly "LONG": $ArgumentTypeWrappers
static readonly "STRING": $ArgumentTypeWrappers
static readonly "GREEDY_STRING": $ArgumentTypeWrappers
static readonly "WORD": $ArgumentTypeWrappers
static readonly "ENTITY": $ArgumentTypeWrappers
static readonly "ENTITIES": $ArgumentTypeWrappers
static readonly "PLAYER": $ArgumentTypeWrappers
static readonly "PLAYERS": $ArgumentTypeWrappers
static readonly "GAME_PROFILE": $ArgumentTypeWrappers
static readonly "BLOCK_POS": $ArgumentTypeWrappers
static readonly "BLOCK_POS_LOADED": $ArgumentTypeWrappers
static readonly "COLUMN_POS": $ArgumentTypeWrappers
static readonly "VEC3": $ArgumentTypeWrappers
static readonly "VEC2": $ArgumentTypeWrappers
static readonly "VEC3_CENTERED": $ArgumentTypeWrappers
static readonly "VEC2_CENTERED": $ArgumentTypeWrappers
static readonly "BLOCK_STATE": $ArgumentTypeWrappers
static readonly "BLOCK_PREDICATE": $ArgumentTypeWrappers
static readonly "ITEM_STACK": $ArgumentTypeWrappers
static readonly "ITEM_PREDICATE": $ArgumentTypeWrappers
static readonly "COLOR": $ArgumentTypeWrappers
static readonly "COMPONENT": $ArgumentTypeWrappers
static readonly "MESSAGE": $ArgumentTypeWrappers
static readonly "NBT_COMPOUND": $ArgumentTypeWrappers
static readonly "NBT_TAG": $ArgumentTypeWrappers
static readonly "NBT_PATH": $ArgumentTypeWrappers
static readonly "PARTICLE": $ArgumentTypeWrappers
static readonly "ANGLE": $ArgumentTypeWrappers
static readonly "ROTATION": $ArgumentTypeWrappers
static readonly "SWIZZLE": $ArgumentTypeWrappers
static readonly "ITEM_SLOT": $ArgumentTypeWrappers
static readonly "RESOURCE_LOCATION": $ArgumentTypeWrappers
static readonly "ENTITY_ANCHOR": $ArgumentTypeWrappers
static readonly "INT_RANGE": $ArgumentTypeWrappers
static readonly "FLOAT_RANGE": $ArgumentTypeWrappers
static readonly "DIMENSION": $ArgumentTypeWrappers
static readonly "TIME": $ArgumentTypeWrappers
static readonly "UUID": $ArgumentTypeWrappers
static readonly "OBJECTIVE": $ArgumentTypeWrappers


public static "values"(): ($ArgumentTypeWrappers)[]
public static "valueOf"(name: string): $ArgumentTypeWrappers
public "create"(event: $CommandRegistryEventJS$Type): $ArgumentType<(any)>
public "getResult"(context: $CommandContext$Type<($CommandSourceStack$Type)>, input: string): any
public "time"(minRequired: integer): $ArgumentTypeWrapper
public static "printAll"(): void
public static "registry"<T>(event: $CommandRegistryEventJS$Type, reg: $ResourceLocation$Type): $ArgumentTypeWrapper
public static "byName"(name: $ResourceLocation$Type): $ClassWrapper<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeWrappers$Type = (("swizzle") | ("nbt_path") | ("string") | ("color") | ("item_slot") | ("integer") | ("float") | ("uuid") | ("long") | ("resource_location") | ("objective") | ("block_pos_loaded") | ("block_predicate") | ("game_profile") | ("angle") | ("particle") | ("int_range") | ("dimension") | ("nbt_compound") | ("player") | ("double") | ("greedy_string") | ("players") | ("float_range") | ("block_pos") | ("rotation") | ("vec3") | ("vec2") | ("message") | ("nbt_tag") | ("column_pos") | ("vec2_centered") | ("vec3_centered") | ("component") | ("boolean") | ("entities") | ("block_state") | ("item_stack") | ("entity_anchor") | ("time") | ("word") | ("entity") | ("item_predicate")) | ($ArgumentTypeWrappers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeWrappers_ = $ArgumentTypeWrappers$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/custom/$SandpaperItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SandpaperItemBuilder extends $ItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandpaperItemBuilder$Type = ($SandpaperItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandpaperItemBuilder_ = $SandpaperItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$GameRulesKJS" {
import {$GameRules$Value, $GameRules$Value$Type} from "packages/net/minecraft/world/level/$GameRules$Value"

export interface $GameRulesKJS {

 "kjs$getBoolean"(rule: string): boolean
 "kjs$getInt"(rule: string): integer
 "kjs$get"(arg0: string): $GameRules$Value<(any)>
 "kjs$getString"(rule: string): string
 "kjs$set"(arg0: string, arg1: string): void
}

export namespace $GameRulesKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesKJS$Type = ($GameRulesKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesKJS_ = $GameRulesKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$InputReplacementTransformer$Replacement, $InputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import {$WrappedJS, $WrappedJS$Type} from "packages/dev/latvian/mods/kubejs/util/$WrappedJS"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$InputFluid, $InputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid"
import {$OutputFluid, $OutputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import {$FluidLike, $FluidLike$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidLike"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputReplacementTransformer$Replacement, $OutputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement"
import {$InputReplacementTransformer, $InputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacementTransformer, $OutputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $FluidStackJS implements $WrappedJS, $InputFluid, $OutputFluid {

constructor()

public "getChance"(): double
public "copy"(arg0: long): $FluidStackJS
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(other: $FluidLike$Type): boolean
public static "of"(o: any): $FluidStackJS
public static "of"(o: any, amount: long, nbt: $CompoundTag$Type): $FluidStackJS
public "getId"(): string
public "copy"(): $FluidStackJS
public "getFluid"(): $Fluid
public "getTags"(): $Collection<($ResourceLocation)>
public "getNbt"(): $CompoundTag
public "getFluidStack"(): $FluidStack
public "setAmount"(arg0: long): void
public static "fromJson"(e: $JsonElement$Type): $FluidStackJS
public "toJson"(): $JsonObject
public "getAmount"(): long
public "setNbt"(arg0: $CompoundTag$Type): void
public "hasTag"(tag: $ResourceLocation$Type): boolean
public "toNBT"(): $CompoundTag
public "setChance"(c: double): void
public "strongEquals"(o: any): boolean
public "withNBT"(nbt: $CompoundTag$Type): $FluidStackJS
public "removeChance"(): void
public "hasChance"(): boolean
public "withChance"(c: double): $FluidStackJS
public "withAmount"(amount: long): $FluidStackJS
public "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
public "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
public "isEmpty"(): boolean
public "transform"(transformer: $InputReplacementTransformer$Type): $InputReplacementTransformer$Replacement
public "transform"(transformer: $OutputReplacementTransformer$Type): $OutputReplacementTransformer$Replacement
get "chance"(): double
get "id"(): string
get "fluid"(): $Fluid
get "tags"(): $Collection<($ResourceLocation)>
get "nbt"(): $CompoundTag
get "fluidStack"(): $FluidStack
set "amount"(value: long)
get "amount"(): long
set "nbt"(value: $CompoundTag$Type)
set "chance"(value: double)
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStackJS$Type = ($Fluid$Type) | ("-") | ({"amount"?: integer, "fluid": Special.Fluid, "nbt"?: object}) | ($FluidStackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStackJS_ = $FluidStackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabContentSupplier" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeTabContentSupplier {

 "getContent"(arg0: boolean): ($ItemStack)[]

(arg0: boolean): ($ItemStack)[]
}

export namespace $CreativeTabContentSupplier {
const DEFAULT: $CreativeTabContentSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabContentSupplier$Type = ($CreativeTabContentSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabContentSupplier_ = $CreativeTabContentSupplier$Type;
}}
declare module "packages/dev/latvian/mods/unit/function/$FunctionFactory" {
import {$FunctionFactory$Arg3, $FunctionFactory$Arg3$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$Arg3"
import {$FunctionFactory$Arg2, $FunctionFactory$Arg2$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$Arg2"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FunctionFactory$FuncSupplier, $FunctionFactory$FuncSupplier$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$FuncSupplier"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"
import {$FunctionFactory$Arg1, $FunctionFactory$Arg1$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$Arg1"

export class $FunctionFactory extends $Record {

constructor(name: string, minArgs: integer, maxArgs: integer, supplier: $FunctionFactory$FuncSupplier$Type)

public static "of2"(name: string, supplier: $FunctionFactory$Arg2$Type): $FunctionFactory
public static "of3"(name: string, supplier: $FunctionFactory$Arg3$Type): $FunctionFactory
public static "of1"(name: string, supplier: $FunctionFactory$Arg1$Type): $FunctionFactory
public "minArgs"(): integer
public "maxArgs"(): integer
public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(name: string, minArgs: integer, maxArgs: integer, supplier: $FunctionFactory$FuncSupplier$Type): $FunctionFactory
public static "of"(name: string, args: integer, supplier: $FunctionFactory$FuncSupplier$Type): $FunctionFactory
public "create"(args: ($Unit$Type)[]): $Unit
public "supplier"(): $FunctionFactory$FuncSupplier
public static "of0"(name: string, supplier: $Supplier$Type<($Unit$Type)>): $FunctionFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionFactory$Type = ($FunctionFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionFactory_ = $FunctionFactory$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/$SpecialEquality" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpecialEquality {

 "specialEquals"(o: any, shallow: boolean): boolean
}

export namespace $SpecialEquality {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialEquality$Type = ($SpecialEquality);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialEquality_ = $SpecialEquality$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $ReplacementMatch {

}

export namespace $ReplacementMatch {
const NONE: $ReplacementMatch
function of(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplacementMatch$Type = ($Ingredient$Type) | ($ReplacementMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplacementMatch_ = $ReplacementMatch$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$JsonIO" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$JsonPrimitive, $JsonPrimitive$Type} from "packages/com/google/gson/$JsonPrimitive"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JsonIO {

constructor()

public static "getJsonHashBytes"(json: $JsonElement$Type): (byte)[]
public static "toPrettyString"(json: $JsonElement$Type): string
public static "writeJsonHash"(stream: $DataOutputStream$Type, element: $JsonElement$Type): void
public static "parseRaw"(string: string): $JsonElement
public static "toString"(json: $JsonElement$Type): string
public static "toArray"(element: $JsonElement$Type): $JsonArray
public static "of"(o: any): $JsonElement
public static "write"(path: $Path$Type, json: $JsonObject$Type): void
public static "read"(path: $Path$Type): $Map<(any), (any)>
public static "copy"(element: $JsonElement$Type): $JsonElement
public static "parse"(string: string): any
public static "readString"(path: $Path$Type): string
public static "readJson"(path: $Path$Type): $JsonElement
public static "toPrimitive"(element: $JsonElement$Type): any
public static "toObject"(json: $JsonElement$Type): any
public static "primitiveOf"(o: any): $JsonPrimitive
public static "getJsonHashString"(json: $JsonElement$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonIO$Type = ($JsonIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonIO_ = $JsonIO$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ItemEntityKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityKJS, $EntityKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$EntityKJS"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $ItemEntityKJS extends $EntityKJS {

 "getTicksUntilDespawn"(): integer
 "setDefaultPickUpDelay"(): void
 "setInfinitePickUpDelay"(): void
 "setTicksUntilDespawn"(ticks: integer): void
 "setNoPickUpDelay"(): void
 "getItem"(): $ItemStack
 "setLifespan"(lifespan: integer): void
 "getLifespan"(): integer
 "setNoDespawn"(): void
 "runCommand"(command: string): integer
 "isPlayer"(): boolean
 "spawn"(): void
 "getProfile"(): $GameProfile
 "isLiving"(): boolean
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "isFrame"(): boolean
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getPersistentData"(): $CompoundTag
 "setStatusMessage"(message: $Component$Type): void
}

export namespace $ItemEntityKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityKJS$Type = ($ItemEntityKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityKJS_ = $ItemEntityKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$ChestEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InventoryEventJS, $InventoryEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$InventoryEventJS"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

/**
 * Invoked when a player opens a chest.
 * 
 * Same as `PlayerEvents.inventoryOpened`, but only for chests.
 */
export class $ChestEventJS extends $InventoryEventJS {

constructor(player: $Player$Type, menu: $AbstractContainerMenu$Type)

/**
 * Gets the chest block.
 */
public "getBlock"(): $BlockContainerJS
/**
 * Gets the chest inventory.
 */
public "getInventory"(): $Container
get "block"(): $BlockContainerJS
get "inventory"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestEventJS$Type = ($ChestEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestEventJS_ = $ChestEventJS$Type;
}}
declare module "packages/dev/latvian/mods/unit/$UnitVariables" {
import {$VariableSet, $VariableSet$Type} from "packages/dev/latvian/mods/unit/$VariableSet"

export interface $UnitVariables {

 "getVariables"(): $VariableSet

(): $VariableSet
}

export namespace $UnitVariables {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitVariables$Type = ($UnitVariables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitVariables_ = $UnitVariables$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/properties/$RemoveSpawnsProperties" {
import {$MobFilter, $MobFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/mob/$MobFilter"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"

export class $RemoveSpawnsProperties {
 "biomes": $BiomeFilter
 "mobs": $MobFilter

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveSpawnsProperties$Type = ($RemoveSpawnsProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveSpawnsProperties_ = $RemoveSpawnsProperties$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer" {
import {$LootContext$EntityTarget, $LootContext$EntityTarget$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ConditionContainer {

 "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
 "entityScores"(entity: $LootContext$EntityTarget$Type, scores: $Map$Type<(string), (any)>): $ConditionContainer
 "entityProperties"(entity: $LootContext$EntityTarget$Type, properties: $JsonObject$Type): $ConditionContainer
 "killedByPlayer"(): $ConditionContainer
 "randomChance"(chance: double): $ConditionContainer
 "survivesExplosion"(): $ConditionContainer
 "addCondition"(arg0: $JsonObject$Type): $ConditionContainer

(chance: double, multiplier: double): $ConditionContainer
}

export namespace $ConditionContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionContainer$Type = ($ConditionContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionContainer_ = $ConditionContainer$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$RecordItemJS$Builder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecordItemJS$Builder extends $ItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "getSoundEvent"(): $SoundEvent
/**
 * Sets the song that will play when this record is played.
 * 
 * @param s - The location of sound event.
 * @param seconds - The length of the song in seconds.
 */
public "song"(s: $ResourceLocation$Type, seconds: integer): $RecordItemJS$Builder
/**
 * Sets the redstone output of the jukebox when this record is played.
 */
public "analogOutput"(o: integer): $RecordItemJS$Builder
get "soundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordItemJS$Builder$Type = ($RecordItemJS$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordItemJS$Builder_ = $RecordItemJS$Builder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IngredientSupplierKJS {

 "kjs$asIngredient"(): $Ingredient
}

export namespace $IngredientSupplierKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientSupplierKJS$Type = ($IngredientSupplierKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientSupplierKJS_ = $IngredientSupplierKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ScheduledEvents$Callback, $ScheduledEvents$Callback$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$ScheduledEvents$ScheduledEvent, $ScheduledEvents$ScheduledEvent$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export class $ScheduledEvents {
readonly "factory": $Supplier<($ScheduledEvents$ScheduledEvent)>
readonly "events": $LinkedList<($ScheduledEvents$ScheduledEvent)>
readonly "futureEvents": $LinkedList<($ScheduledEvents$ScheduledEvent)>
readonly "nextId": $AtomicInteger
 "currentMillis": long
 "currentTick": long

constructor(factory: $Supplier$Type<($ScheduledEvents$ScheduledEvent$Type)>)

public "clear"(id: integer): void
public "schedule"(timer: $TemporalAmount$Type, repeating: boolean, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
public "schedule"(timer: long, ofTicks: boolean, repeating: boolean, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
public "tickAll"(nowTicks: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledEvents$Type = ($ScheduledEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledEvents_ = $ScheduledEvents$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/$PaintEventJS" {
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ShaderInstance, $ShaderInstance$Type} from "packages/net/minecraft/client/renderer/$ShaderInstance"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$ClientEventJS, $ClientEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $PaintEventJS extends $ClientEventJS {
readonly "mc": $Minecraft
readonly "font": $Font
readonly "graphics": $GuiGraphics
readonly "matrices": $PoseStack
readonly "tesselator": $Tesselator
readonly "buffer": $BufferBuilder
readonly "delta": float
readonly "screen": $Screen

constructor(m: $Minecraft$Type, g: $GuiGraphics$Type, d: float, s: $Screen$Type)

public "multiplyWithMatrix"(m: $Matrix4f$Type): void
public "resetShaderColor"(): void
public "setShaderInstance"(shader: $Supplier$Type<($ShaderInstance$Type)>): void
public "beginQuads"(format: $VertexFormat$Type): void
public "beginQuads"(texture: boolean): void
public "multiply"(q: $Quaternionf$Type): void
public "blend"(enabled: boolean): void
public "scale"(x: float, y: float, z: float): void
public "end"(): void
public "begin"(type: $VertexFormat$Mode$Type, format: $VertexFormat$Type): void
public "push"(): void
public "pop"(): void
public "setShaderColor"(r: float, g: float, b: float, a: float): void
public "setShaderTexture"(tex: $ResourceLocation$Type): void
public "setPositionColorTextureShader"(): void
public "setPositionColorShader"(): void
public "vertex"(m: $Matrix4f$Type, x: float, y: float, z: float, col: integer, u: float, v: float): void
public "vertex"(m: $Matrix4f$Type, x: float, y: float, z: float, col: integer): void
public "getMatrix"(): $Matrix4f
public "translate"(x: double, y: double, z: double): void
public "bindTextureForSetup"(tex: $ResourceLocation$Type): void
set "shaderInstance"(value: $Supplier$Type<($ShaderInstance$Type)>)
set "shaderTexture"(value: $ResourceLocation$Type)
get "matrix"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintEventJS$Type = ($PaintEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintEventJS_ = $PaintEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$HurtEnemyContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ItemBuilder$HurtEnemyContext extends $Record {

constructor(getItem: $ItemStack$Type, getTarget: $LivingEntity$Type, getAttacker: $LivingEntity$Type)

public "getAttacker"(): $LivingEntity
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getTarget"(): $LivingEntity
public "getItem"(): $ItemStack
get "attacker"(): $LivingEntity
get "target"(): $LivingEntity
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$HurtEnemyContext$Type = ($ItemBuilder$HurtEnemyContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder$HurtEnemyContext_ = $ItemBuilder$HurtEnemyContext$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$ItemWrapper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FireworksJS, $FireworksJS$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * Various item related helper methods
 */
export interface $ItemWrapper {

}

export namespace $ItemWrapper {
const KJS_BASE_ATTACK_DAMAGE_UUID: $UUID
const KJS_BASE_ATTACK_SPEED_UUID: $UUID
const KJS_ARMOR_MODIFIER_UUID_PER_SLOT: ($UUID)[]
function getTypeToStackMap(): $Map<($ResourceLocation), ($Collection<($ItemStack)>)>
function playerHead(name: string): $ItemStack
function playerHead(uuid: $UUID$Type, textureBase64: string): $ItemStack
function playerHeadFromUrl(url: string): $ItemStack
function of(arg0: $ItemStack$Type): $ItemStack
function of(arg0: $ItemStack$Type, tag: $CompoundTag$Type): $ItemStack
function of(arg0: $ItemStack$Type, count: integer, nbt: $CompoundTag$Type): $ItemStack
function of(arg0: $ItemStack$Type, count: integer): $ItemStack
function getId(item: $Item$Type): $ResourceLocation
function exists(id: $ResourceLocation$Type): boolean
function getItem(id: $ResourceLocation$Type): $Item
function getVariants(item: $ItemStack$Type): $Collection<($ItemStack)>
function getEmpty(): $ItemStack
function playerHeadFromSkinHash(hash: string): $ItemStack
function getTypeList(): $List<(string)>
function getList(): $List<($ItemStack)>
function withNBT(arg0: $ItemStack$Type, nbt: $CompoundTag$Type): $ItemStack
function fireworks(properties: $Map$Type<(string), (any)>): $FireworksJS
function isItem(o: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWrapper$Type = ($ItemWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWrapper_ = $ItemWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/server/tag/$TagWrapper" {
import {$TagEventJS, $TagEventJS$Type} from "packages/dev/latvian/mods/kubejs/server/tag/$TagEventJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagLoader$EntryWithSource, $TagLoader$EntryWithSource$Type} from "packages/net/minecraft/tags/$TagLoader$EntryWithSource"

export class $TagWrapper {
readonly "event": $TagEventJS
readonly "id": $ResourceLocation
readonly "entries": $List<($TagLoader$EntryWithSource)>

constructor(e: $TagEventJS$Type, i: $ResourceLocation$Type, t: $List$Type<($TagLoader$EntryWithSource$Type)>)

public "getObjectIds"(): $List<($ResourceLocation)>
public "add"(...filters: (any)[]): $TagWrapper
public "remove"(...filters: (any)[]): $TagWrapper
public "toString"(): string
public "removeAll"(): $TagWrapper
get "objectIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagWrapper$Type = ($TagWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagWrapper_ = $TagWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$PickaxeItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PickaxeItemBuilder extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickaxeItemBuilder$Type = ($PickaxeItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickaxeItemBuilder_ = $PickaxeItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/forge/$ForgeEventConsumer" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $ForgeEventConsumer extends $Consumer<($Event)> {

 "accept"(arg0: $Event$Type): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<($Event)>

(arg0: $Event$Type): void
}

export namespace $ForgeEventConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEventConsumer$Type = ($ForgeEventConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEventConsumer_ = $ForgeEventConsumer$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData" {
import {$ZipFile, $ZipFile$Type} from "packages/java/util/zip/$ZipFile"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ZipEntry, $ZipEntry$Type} from "packages/java/util/zip/$ZipEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IoSupplier, $IoSupplier$Type} from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import {$Lazy, $Lazy$Type} from "packages/dev/latvian/mods/kubejs/util/$Lazy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $GeneratedData extends $Record implements $IoSupplier<($InputStream)> {
static readonly "INTERNAL_RELOAD": $GeneratedData
static readonly "PACK_META": $GeneratedData
static readonly "PACK_ICON": $GeneratedData

constructor(id: $ResourceLocation$Type, data: $Lazy$Type<((byte)[])>, alwaysForget: boolean)

public "get"(): $InputStream
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): $Lazy<((byte)[])>
public "id"(): $ResourceLocation
public "alwaysForget"(): boolean
public static "create"(arg0: $ZipFile$Type, arg1: $ZipEntry$Type): $IoSupplier<($InputStream)>
public static "create"(arg0: $Path$Type): $IoSupplier<($InputStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedData$Type = ($GeneratedData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratedData_ = $GeneratedData$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$MinecraftEnvironmentKJS" {
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$ScheduledEvents, $ScheduledEvents$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MessageSenderKJS, $MessageSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"
import {$ScheduledEvents$Callback, $ScheduledEvents$Callback$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import {$ScheduledEvents$ScheduledEvent, $ScheduledEvents$ScheduledEvent$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {

 "schedule"(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleRepeating"(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
 "getScheduledEvents"(): $ScheduledEvents
 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void

(timer: $TemporalAmount$Type, callback: $ScheduledEvents$Callback$Type): $ScheduledEvents$ScheduledEvent
}

export namespace $MinecraftEnvironmentKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftEnvironmentKJS$Type = ($MinecraftEnvironmentKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftEnvironmentKJS_ = $MinecraftEnvironmentKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $KubeJSInventoryListener implements $ContainerListener {
readonly "player": $Player

constructor(p: $Player$Type)

public "slotChanged"(container: $AbstractContainerMenu$Type, index: integer, stack: $ItemStack$Type): void
public "dataChanged"(container: $AbstractContainerMenu$Type, id: integer, value: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSInventoryListener$Type = ($KubeJSInventoryListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSInventoryListener_ = $KubeJSInventoryListener$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemEntityInteractedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * Invoked when a player right clicks on an entity.
 */
export class $ItemEntityInteractedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, entity: $Entity$Type, hand: $InteractionHand$Type)

/**
 * The entity that was interacted with.
 */
public "getTarget"(): $Entity
/**
 * The item that was used to interact with the entity.
 */
public "getItem"(): $ItemStack
/**
 * The hand that was used to interact with the entity.
 */
public "getHand"(): $InteractionHand
get "target"(): $Entity
get "item"(): $ItemStack
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityInteractedEventJS$Type = ($ItemEntityInteractedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityInteractedEventJS_ = $ItemEntityInteractedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$InventoryEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

/**
 * Invoked when a player opens or closes a container.
 */
export class $InventoryEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, menu: $AbstractContainerMenu$Type)

/**
 * Gets the container that was opened or closed.
 */
public "getInventoryContainer"(): $AbstractContainerMenu
get "inventoryContainer"(): $AbstractContainerMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryEventJS$Type = ($InventoryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryEventJS_ = $InventoryEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $CustomJavaToJsWrapper {

 "convertJavaToJs"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: $Class$Type<(any)>): $Scriptable

(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: $Class$Type<(any)>): $Scriptable
}

export namespace $CustomJavaToJsWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomJavaToJsWrapper$Type = ($CustomJavaToJsWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomJavaToJsWrapper_ = $CustomJavaToJsWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ItemFrameEntityKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityKJS, $EntityKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$EntityKJS"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $ItemFrameEntityKJS extends $EntityKJS {

 "getItem"(): $ItemStack
 "isFrame"(): boolean
 "runCommand"(command: string): integer
 "isPlayer"(): boolean
 "spawn"(): void
 "getProfile"(): $GameProfile
 "isLiving"(): boolean
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getPersistentData"(): $CompoundTag
 "setStatusMessage"(message: $Component$Type): void
}

export namespace $ItemFrameEntityKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameEntityKJS$Type = ($ItemFrameEntityKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFrameEntityKJS_ = $ItemFrameEntityKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$NameCallback" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemBuilder$NameCallback {

 "apply"(arg0: $ItemStack$Type): $Component

(arg0: $ItemStack$Type): $Component
}

export namespace $ItemBuilder$NameCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$NameCallback$Type = ($ItemBuilder$NameCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder$NameCallback_ = $ItemBuilder$NameCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$ArrayRecipeComponent, $ArrayRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent"
import {$AndRecipeComponent, $AndRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$OrRecipeComponent, $OrRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeComponent<T> {

 "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, json: $JsonObject$Type): void
 "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, json: $JsonObject$Type): void
 "orSelf"(): $RecipeComponent<(T)>
 "componentType"(): string
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
 "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<(T)>
 "write"(arg0: $RecipeJS$Type, arg1: T): $JsonElement
 "key"(name: string): $RecipeKey<(T)>
 "read"(arg0: $RecipeJS$Type, arg1: any): T
 "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<(T), (O)>
 "asArray"(): $ArrayRecipeComponent<(T)>
 "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<(T), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
 "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<(T)>
 "componentClass"(): $Class<(any)>
 "replaceOutput"(recipe: $RecipeJS$Type, original: T, match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): T
 "replaceInput"(recipe: $RecipeJS$Type, original: T, match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): T
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
 "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<(T)>
 "checkValueHasChanged"(oldValue: T, newValue: T): boolean
 "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
 "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), (T)>)>
 "role"(): $ComponentRole
 "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
 "checkEmpty"(key: $RecipeKey$Type<(T)>, value: T): string
 "asPatternKey"(): $RecipeComponent<($TinyMap<(character), (T)>)>
 "asArrayOrSelf"(): $ArrayRecipeComponent<(T)>
 "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
 "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<(T)>
 "isOutput"(recipe: $RecipeJS$Type, value: T, match: $ReplacementMatch$Type): boolean
 "isInput"(recipe: $RecipeJS$Type, value: T, match: $ReplacementMatch$Type): boolean
}

export namespace $RecipeComponent {
function builder(): $RecipeComponentBuilder
function builder(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeComponent$Type<T> = ($RecipeComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeComponent_<T> = $RecipeComponent$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/rhino/$CustomProperty" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"

export interface $CustomProperty {

 "get"(arg0: $Context$Type): any

(arg0: $Context$Type): any
}

export namespace $CustomProperty {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomProperty$Type = ($CustomProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomProperty_ = $CustomProperty$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideCustomJEIEventJS" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$HideJEIEventJS, $HideJEIEventJS$Type} from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS"
import {$IJeiRuntime, $IJeiRuntime$Type} from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $HideCustomJEIEventJS extends $EventJS {

constructor(r: $IJeiRuntime$Type)

public "get"(s: $IIngredientType$Type<(any)>): $HideJEIEventJS<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HideCustomJEIEventJS$Type = ($HideCustomJEIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HideCustomJEIEventJS_ = $HideCustomJEIEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$MutableToolTier" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MutableToolTier implements $Tier {
readonly "parent": $Tier

constructor(p: $Tier$Type)

public "setSpeed"(f: float): void
public "setLevel"(i: integer): void
public "getUses"(): integer
public "getVanillaRepairIngredient"(): $Ingredient
public "getSpeed"(): float
public "getLevel"(): integer
public "getEnchantmentValue"(): integer
public "getAttackDamageBonus"(): float
public "setAttackDamageBonus"(f: float): void
public "setUses"(i: integer): void
public "setRepairIngredient"(arg0: $Ingredient$Type): void
public "setEnchantmentValue"(i: integer): void
public "getTag"(): $TagKey<($Block)>
set "speed"(value: float)
set "level"(value: integer)
get "uses"(): integer
get "vanillaRepairIngredient"(): $Ingredient
get "speed"(): float
get "level"(): integer
get "enchantmentValue"(): integer
get "attackDamageBonus"(): float
set "attackDamageBonus"(value: float)
set "uses"(value: integer)
set "repairIngredient"(value: $Ingredient$Type)
set "enchantmentValue"(value: integer)
get "tag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableToolTier$Type = ($MutableToolTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableToolTier_ = $MutableToolTier$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrappers" {
import {$TypeWrapperFactory$Simple, $TypeWrapperFactory$Simple$Type} from "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory$Simple"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TypeWrapperFactory, $TypeWrapperFactory$Type} from "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory"

export class $TypeWrappers {

constructor()

public "getWrapperFactory"(target: $Class$Type<(any)>, from: any): $TypeWrapperFactory<(any)>
public "register"<T>(target: $Class$Type<(T)>, factory: $TypeWrapperFactory$Type<(T)>): void
public "register"<T>(target: $Class$Type<(T)>, validator: $Predicate$Type<(any)>, factory: $TypeWrapperFactory$Type<(T)>): void
public "registerSimple"<T>(target: $Class$Type<(T)>, validator: $Predicate$Type<(any)>, factory: $TypeWrapperFactory$Simple$Type<(T)>): void
public "registerSimple"<T>(target: $Class$Type<(T)>, factory: $TypeWrapperFactory$Simple$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrappers$Type = ($TypeWrappers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeWrappers_ = $TypeWrappers$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder" {
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptTypeHolder {

 "kjs$getScriptType"(): $ScriptType

(): $ScriptType
}

export namespace $ScriptTypeHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptTypeHolder$Type = ($ScriptTypeHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptTypeHolder_ = $ScriptTypeHolder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeOptional" {
import {$RecipeSchemaType, $RecipeSchemaType$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType"

export interface $RecipeOptional<T> {

 "isDefault"(): boolean
 "getDefaultValue"(arg0: $RecipeSchemaType$Type): T

(): boolean
}

export namespace $RecipeOptional {
const DEFAULT: $RecipeOptional<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOptional$Type<T> = ($RecipeOptional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeOptional_<T> = $RecipeOptional$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$TinyMap" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TinyMap$Entry, $TinyMap$Entry$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TinyMap<K, V> extends $Record {

constructor(collection: $Collection$Type<($TinyMap$Entry$Type<(K), (V)>)>)
constructor(entries: ($TinyMap$Entry$Type<(K), (V)>)[])
constructor(map: $TinyMap$Type<(K), (V)>)

public static "ofMap"<K, V>(map: $Map$Type<(K), (V)>): $TinyMap<(K), (V)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "entries"(): ($TinyMap$Entry<(K), (V)>)[]
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TinyMap$Type<K, V> = ($TinyMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TinyMap_<K, V> = $TinyMap$Type<(K), (V)>;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/properties/$AddOreProperties" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$IntProvider, $IntProvider$Type} from "packages/net/minecraft/util/valueproviders/$IntProvider"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration$TargetBlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$VerticalAnchor, $VerticalAnchor$Type} from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import {$HeightRangePlacement, $HeightRangePlacement$Type} from "packages/net/minecraft/world/level/levelgen/placement/$HeightRangePlacement"

export class $AddOreProperties {
 "id": $ResourceLocation
 "worldgenLayer": $GenerationStep$Decoration
 "biomes": $BiomeFilter
 "targets": $List<($OreConfiguration$TargetBlockState)>
 "size": integer
 "noSurface": float
 "count": $IntProvider
 "chance": integer
 "squared": boolean
 "height": $HeightRangePlacement
 "retrogen": integer

constructor()

public "size"(s: integer): $AddOreProperties
public "count"(min: integer, max: integer): $AddOreProperties
public "count"(c: $IntProvider$Type): $AddOreProperties
public "count"(c: integer): $AddOreProperties
/**
 * 
 * @deprecated
 */
public "top"(): $VerticalAnchor
/**
 * 
 * @deprecated
 */
public "bottom"(): $VerticalAnchor
public "chance"(c: integer): $AddOreProperties
public "addTarget"(ruleTest: $RuleTest$Type, targetState: $BlockStatePredicate$Type): void
public "uniformHeight"(absolute: $VerticalAnchor$Type, absolute1: $VerticalAnchor$Type): $AddOreProperties
public "uniformHeight"(min: integer, max: integer): $AddOreProperties
public "squared"(): $AddOreProperties
public "triangleHeight"(min: integer, max: integer): $AddOreProperties
public "triangleHeight"(absolute: $VerticalAnchor$Type, absolute1: $VerticalAnchor$Type): $AddOreProperties
/**
 * 
 * @deprecated
 */
public "aboveBottom"(y: integer): $VerticalAnchor
/**
 * 
 * @deprecated
 */
public "belowTop"(y: integer): $VerticalAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddOreProperties$Type = ($AddOreProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddOreProperties_ = $AddOreProperties$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptManager" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$NativeJavaClass, $NativeJavaClass$Type} from "packages/dev/latvian/mods/rhino/$NativeJavaClass"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$ScriptPack, $ScriptPack$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptPack"
import {$ClassShutter, $ClassShutter$Type} from "packages/dev/latvian/mods/rhino/$ClassShutter"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptManager implements $ClassShutter {
readonly "scriptType": $ScriptType
readonly "packs": $Map<(string), ($ScriptPack)>
 "firstLoad": boolean
 "context": $Context
 "topLevelScope": $Scriptable
 "canListenEvents": boolean

constructor(t: $ScriptType$Type)

public "handler$ebl000$loadJavaClass"(name0: string, warn: boolean, cir: $CallbackInfoReturnable$Type<(any)>): void
public "load"(): void
public "unload"(): void
public "reload"(resourceManager: $ResourceManager$Type): void
public "loadFromDirectory"(): void
public static "getCurrentContext"(): $Context
public "isClassAllowed"(name: string): boolean
public "loadJavaClass"(name: string, error: boolean): $NativeJavaClass
public "visibleToScripts"(fullClassName: string, type: integer): boolean
get "currentContext"(): $Context
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptManager$Type = ($ScriptManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptManager_ = $ScriptManager$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ModifiableItemKJS" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $ModifiableItemKJS {

 "kjs$getAttributeMap"(): $Multimap<($Attribute), ($AttributeModifier)>
 "kjs$getMutableAttributeMap"(): $Multimap<($Attribute), ($AttributeModifier)>
 "kjs$setAttributeMap"(attributes: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
}

export namespace $ModifiableItemKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableItemKJS$Type = ($ModifiableItemKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableItemKJS_ = $ModifiableItemKJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/$Object2LongEntry" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Object2LongMap$Entry, $Object2LongMap$Entry$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2LongMap$Entry"

export class $Object2LongEntry implements $Comparable<($Object2LongEntry)> {
readonly "key": any
readonly "value": long

constructor(k: any, v: long)
constructor(entry: $Object2LongMap$Entry$Type<(any)>)

public "compareTo"(o: $Object2LongEntry$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Object2LongEntry$Type = ($Object2LongEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Object2LongEntry_ = $Object2LongEntry$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/platform/$IngredientPlatformHelper" {
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Lazy, $Lazy$Type} from "packages/dev/latvian/mods/kubejs/util/$Lazy"

export interface $IngredientPlatformHelper {

 "wildcard"(): $Ingredient
 "regex"(arg0: $Pattern$Type): $Ingredient
 "stack"(ingredient: $Ingredient$Type, count: integer): $InputItem
 "mod"(arg0: string): $Ingredient
 "or"(arg0: ($Ingredient$Type)[]): $Ingredient
 "tag"(tag: string): $Ingredient
 "subtract"(arg0: $Ingredient$Type, arg1: $Ingredient$Type): $Ingredient
 "and"(arg0: ($Ingredient$Type)[]): $Ingredient
 "creativeTab"(arg0: $CreativeModeTab$Type): $Ingredient
 "isWildcard"(arg0: $Ingredient$Type): boolean
 "custom"(arg0: $Ingredient$Type, arg1: $Predicate$Type<($ItemStack$Type)>): $Ingredient
 "custom"(arg0: $Ingredient$Type, arg1: $UUID$Type): $Ingredient
 "weakNBT"(arg0: $ItemStack$Type): $Ingredient
 "strongNBT"(arg0: $ItemStack$Type): $Ingredient
}

export namespace $IngredientPlatformHelper {
const INSTANCE: $Lazy<($IngredientPlatformHelper)>
function get(): $IngredientPlatformHelper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientPlatformHelper$Type = ($IngredientPlatformHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientPlatformHelper_ = $IngredientPlatformHelper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$OutputItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputReplacementTransformer$Replacement, $OutputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement"
import {$IntProvider, $IntProvider$Type} from "packages/net/minecraft/util/valueproviders/$IntProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacementTransformer, $OutputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $OutputItem implements $OutputReplacement {
static readonly "EMPTY": $OutputItem
readonly "item": $ItemStack
readonly "chance": double
readonly "rolls": $IntProvider


public "getChance"(): double
public "toString"(): string
public "isEmpty"(): boolean
public static "of"(from: $OutputItem$Type): $OutputItem
public static "of"(item: $ItemStack$Type, chance: double): $OutputItem
public "getCount"(): integer
public "getNbt"(): $CompoundTag
public "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
public "withCount"(count: integer): $OutputItem
public "weakNBT"(): $InputItem
public "strongNBT"(): $InputItem
/**
 * 
 * @deprecated
 */
public "ignoreNBT"(): $InputItem
public "withRolls"(rolls: $IntProvider$Type): $OutputItem
public "withRolls"(min: integer, max: integer): $OutputItem
public "hasChance"(): boolean
public "withChance"(chance: double): $OutputItem
public "transform"(transformer: $OutputReplacementTransformer$Type): $OutputReplacementTransformer$Replacement
get "chance"(): double
get "empty"(): boolean
get "count"(): integer
get "nbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputItem$Type = ($ItemStack$Type) | ({"item": Special.Item, "chance": double}) | ({"item": Special.Item, "maxRolls": integer, "minRolls": integer}) | ($OutputItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputItem_ = $OutputItem$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$PlayerKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Stages, $Stages$Type} from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import {$WithAttachedData, $WithAttachedData$Type} from "packages/dev/latvian/mods/kubejs/core/$WithAttachedData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DataSenderKJS, $DataSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS"
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NotificationBuilder, $NotificationBuilder$Type} from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EntityPotionEffectsJS, $EntityPotionEffectsJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntityKJS, $LivingEntityKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$LivingEntityKJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$KubeJSInventoryListener, $KubeJSInventoryListener$Type} from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import {$PlayerStatsJS, $PlayerStatsJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"

export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<($Player)> {

 "getInventory"(): $InventoryKJS
 "getStages"(): $Stages
 "getStats"(): $PlayerStatsJS
 "paint"(renderer: $CompoundTag$Type): void
 "isFake"(): boolean
 "isMiningBlock"(): boolean
 "isPlayer"(): boolean
 "give"(item: $ItemStack$Type): void
 "giveInHand"(item: $ItemStack$Type): void
 "getMouseItem"(): $ItemStack
 "setMouseItem"(item: $ItemStack$Type): void
 "addFood"(f: integer, m: float): void
 "spawn"(): void
 "getProfile"(): $GameProfile
 "addXPLevels"(l: integer): void
 "getXpLevel"(): integer
 "addXP"(xp: integer): void
 "setFoodLevel"(foodLevel: integer): void
 "getFoodLevel"(): integer
 "setXp"(xp: integer): void
 "setSaturation"(saturation: float): void
 "getXp"(): integer
 "setXpLevel"(l: integer): void
 "addExhaustion"(exhaustion: float): void
 "getSaturation"(): float
 "notify"(builder: $NotificationBuilder$Type): void
 "notify"(title: $Component$Type, text: $Component$Type): void
 "setStatusMessage"(message: $Component$Type): void
 "getSelectedSlot"(): integer
 "setSelectedSlot"(index: integer): void
 "addItemCooldown"(item: $Item$Type, ticks: integer): void
 "sendInventoryUpdate"(): void
 "boostElytraFlight"(): void
 "getInventoryChangeListener"(): $KubeJSInventoryListener
 "getOpenInventory"(): $AbstractContainerMenu
 "getCraftingGrid"(): $InventoryKJS
 "setDefaultMovementSpeedMultiplier"(speed: double): void
 "setTotalMovementSpeedMultiplier"(speed: double): void
 "foodEaten"(is: $ItemStack$Type): void
 "swing"(): void
 "swing"(hand: $InteractionHand$Type): void
 "isLiving"(): boolean
 "getEquipment"(slot: $EquipmentSlot$Type): $ItemStack
 "setMaxHealth"(hp: float): void
 "isUndead"(): boolean
 "setEquipment"(slot: $EquipmentSlot$Type, item: $ItemStack$Type): void
 "getHeldItem"(hand: $InteractionHand$Type): $ItemStack
 "setHeldItem"(hand: $InteractionHand$Type, item: $ItemStack$Type): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer): void
 "damageHeldItem"(): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "setOffHandItem"(item: $ItemStack$Type): void
 "rayTrace"(): $RayTraceResultJS
 "getOffHandItem"(): $ItemStack
 "setChestArmorItem"(item: $ItemStack$Type): void
 "setFeetArmorItem"(item: $ItemStack$Type): void
 "getReachDistance"(): double
 "modifyAttribute"(attribute: $Attribute$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): void
 "getMainHandItem"(): $ItemStack
 "getLegsArmorItem"(): $ItemStack
 "setDefaultMovementSpeed"(speed: double): void
 "getAttributeTotalValue"(attribute: $Attribute$Type): double
 "getPotionEffects"(): $EntityPotionEffectsJS
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer): void
 "damageEquipment"(slot: $EquipmentSlot$Type): void
 "removeAttribute"(attribute: $Attribute$Type, identifier: string): void
 "setMovementSpeedAddition"(speed: double): void
 "setAttributeBaseValue"(attribute: $Attribute$Type, value: double): void
 "setLegsArmorItem"(item: $ItemStack$Type): void
 "setHeadArmorItem"(item: $ItemStack$Type): void
 "getFeetArmorItem"(): $ItemStack
 "getAttributeBaseValue"(attribute: $Attribute$Type): double
 "getChestArmorItem"(): $ItemStack
 "getHeadArmorItem"(): $ItemStack
 "isHoldingInAnyHand"(i: $Ingredient$Type): boolean
 "setMainHandItem"(item: $ItemStack$Type): void
 "getDefaultMovementSpeed"(): double
 "getTotalMovementSpeed"(): double
 "canEntityBeSeen"(entity: $LivingEntity$Type): boolean
 "sendData"(channel: string, data: $CompoundTag$Type): void
 "sendData"(channel: string): void
 "getData"(): $AttachedData<($Player)>
 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "getItem"(): $ItemStack
 "isFrame"(): boolean
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getPersistentData"(): $CompoundTag

(): $InventoryKJS
}

export namespace $PlayerKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerKJS$Type = ($PlayerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerKJS_ = $PlayerKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityCallback" {
import {$BlockEntityJS, $BlockEntityJS$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityJS"

export interface $BlockEntityCallback {

 "accept"(arg0: $BlockEntityJS$Type): void

(arg0: $BlockEntityJS$Type): void
}

export namespace $BlockEntityCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityCallback$Type = ($BlockEntityCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityCallback_ = $BlockEntityCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SpecialEquality, $SpecialEquality$Type} from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import {$PainterObjectStorage, $PainterObjectStorage$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObjectStorage"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export class $PainterObject implements $SpecialEquality {
 "id": string
 "parent": $PainterObjectStorage
 "visible": $Unit

constructor()

public "specialEquals"(o: any, shallow: boolean): boolean
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "update"(tag: $CompoundTag$Type): void
public "id"(i: string): $PainterObject
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PainterObject$Type = ($PainterObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PainterObject_ = $PainterObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$SlabBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $SlabBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlabBlockBuilder$Type = ($SlabBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlabBlockBuilder_ = $SlabBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$ClassWrapper" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$CustomJavaToJsWrapper, $CustomJavaToJsWrapper$Type} from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $ClassWrapper<T> extends $Record implements $CustomJavaToJsWrapper {

constructor(wrappedClass: $Class$Type<(T)>)

public "convertJavaToJs"(cx: $Context$Type, scope: $Scriptable$Type, staticType: $Class$Type<(any)>): $Scriptable
public "wrappedClass"(): $Class<(T)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassWrapper$Type<T> = ($ClassWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassWrapper_<T> = $ClassWrapper$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$ParticleTypeBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ParticleTypeBuilder extends $BuilderBase<($ParticleType<(any)>)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "deserializer"(d: $ParticleOptions$Deserializer$Type<(any)>): $ParticleTypeBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "overrideLimiter"(o: boolean): $ParticleTypeBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTypeBuilder$Type = ($ParticleTypeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTypeBuilder_ = $ParticleTypeBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemStackKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackKey {
static "EMPTY": $ItemStackKey

constructor(item: $Item$Type, tag: $CompoundTag$Type)

public "equals"(obj: any): boolean
public "hashCode"(): integer
public static "of"(stack: $ItemStack$Type): $ItemStackKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKey$Type = ($ItemStackKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackKey_ = $ItemStackKey$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$BlockLootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LootEventJS, $LootEventJS$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockLootEventJS extends $LootEventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "build"(blocks: $BlockStatePredicate$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "getType"(): string
public "modifyBlock"(blocks: $BlockStatePredicate$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "addBlock"(blocks: $BlockStatePredicate$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "addSimpleBlock"(blocks: $BlockStatePredicate$Type, item: $ItemStack$Type): void
public "addSimpleBlock"(blocks: $BlockStatePredicate$Type): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLootEventJS$Type = ($BlockLootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLootEventJS_ = $BlockLootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/net/$NetworkEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

/**
 * Invoked when a network packet is received.
 * 
 * Note that the behaviour of this event is depending on the **script type**.
 * 
 * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
 * 
 * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
 */
export class $NetworkEventJS extends $PlayerEventJS {

constructor(p: $Player$Type, c: string, d: $CompoundTag$Type)

/**
 * The channel of the packet.
 */
public "getChannel"(): string
/**
 * The data of the packet.
 */
public "getData"(): $CompoundTag
/**
 * The player that sent the packet. Always `Minecraft.player` in `client_scripts`.
 */
public "getEntity"(): $Player
get "channel"(): string
get "data"(): $CompoundTag
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEventJS$Type = ($NetworkEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEventJS_ = $NetworkEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$PaintScreenEventJS" {
import {$Painter, $Painter$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AlignMode, $AlignMode$Type} from "packages/dev/latvian/mods/kubejs/client/painter/screen/$AlignMode"
import {$VariableSet, $VariableSet$Type} from "packages/dev/latvian/mods/unit/$VariableSet"
import {$UnitVariables, $UnitVariables$Type} from "packages/dev/latvian/mods/unit/$UnitVariables"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PaintEventJS, $PaintEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$PaintEventJS"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $PaintScreenEventJS extends $PaintEventJS implements $UnitVariables {
readonly "painter": $Painter
readonly "mouseX": integer
readonly "mouseY": integer
readonly "width": integer
readonly "height": integer
readonly "inventory": boolean
readonly "mc": $Minecraft
readonly "font": $Font
readonly "graphics": $GuiGraphics
readonly "matrices": $PoseStack
readonly "tesselator": $Tesselator
readonly "buffer": $BufferBuilder
readonly "delta": float
readonly "screen": $Screen

constructor(m: $Minecraft$Type, s: $Screen$Type, graphics: $GuiGraphics$Type, painter: $Painter$Type, mx: integer, my: integer, d: float)
constructor(m: $Minecraft$Type, graphics: $GuiGraphics$Type, painter: $Painter$Type, d: float)

public "getVariables"(): $VariableSet
public "alignX"(x: float, w: float, alignX: $AlignMode$Type): float
public "alignY"(y: float, h: float, alignY: $AlignMode$Type): float
public "rotateDeg"(angle: float): void
public "rotateRad"(angle: float): void
public "scale"(scale: float): void
public "scale"(x: float, y: float): void
public "text"(text: $Component$Type, x: integer, y: integer, color: integer, shadow: boolean): void
public "rawText"(text: $FormattedCharSequence$Type, x: integer, y: integer, color: integer, shadow: boolean): void
public "translate"(x: double, y: double): void
public "rectangle"(x: float, y: float, z: float, w: float, h: float, color: integer): void
public "rectangle"(x: float, y: float, z: float, w: float, h: float, color: integer, u0: float, v0: float, u1: float, v1: float): void
get "variables"(): $VariableSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintScreenEventJS$Type = ($PaintScreenEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintScreenEventJS_ = $PaintScreenEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$AABBWrapper" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $AABBWrapper {

}

export namespace $AABBWrapper {
const EMPTY: $AABB
const CUBE: $AABB
function ofSize(x: double, y: double, z: double): $AABB
function ofSize(vec3: $Vec3$Type, x: double, y: double, z: double): $AABB
function wrap(o: any): $AABB
function of(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double): $AABB
function ofBlocks(pos1: $BlockPos$Type, pos2: $BlockPos$Type): $AABB
function ofBlock(pos: $BlockPos$Type): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AABBWrapper$Type = ($AABBWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AABBWrapper_ = $AABBWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$EventResult" {
import {$EventResult$Type, $EventResult$Type$Type} from "packages/dev/latvian/mods/kubejs/event/$EventResult$Type"
import {$EventResult as $EventResult$0, $EventResult$Type as $EventResult$0$Type} from "packages/dev/architectury/event/$EventResult"
import {$CompoundEventResult, $CompoundEventResult$Type} from "packages/dev/architectury/event/$CompoundEventResult"

export class $EventResult {
static readonly "PASS": $EventResult


public "archCompound"<T>(): $CompoundEventResult<(T)>
public "type"(): $EventResult$Type
public "value"(): any
public "override"(): boolean
public "error"(): boolean
public "pass"(): boolean
public "interruptFalse"(): boolean
public "interruptTrue"(): boolean
public "arch"(): $EventResult$0
public "interruptDefault"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$Type = ($EventResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventResult_ = $EventResult$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/typings/desc/$ObjectDescJS" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$ObjectDescJS$Entry, $ObjectDescJS$Entry$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$ObjectDescJS$Entry"

export class $ObjectDescJS extends $Record implements $TypeDescJS {

constructor(types: $List$Type<($ObjectDescJS$Entry$Type)>)

public "build"(builder: $StringBuilder$Type): void
public "add"(key: string, value: $TypeDescJS$Type, optional: boolean): $ObjectDescJS
public "add"(key: string, value: $TypeDescJS$Type): $ObjectDescJS
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "types"(): $List<($ObjectDescJS$Entry)>
public "withGenerics"(...types: ($TypeDescJS$Type)[]): $TypeDescJS
public static "fixedArray"(...types: ($TypeDescJS$Type)[]): $TypeDescJS
public static "object"(init: integer): $ObjectDescJS
public static "object"(): $ObjectDescJS
public "build"(): string
public "or"(type: $TypeDescJS$Type): $TypeDescJS
public "asArray"(): $TypeDescJS
public static "any"(...types: ($TypeDescJS$Type)[]): $TypeDescJS
public "asMap"(key: $TypeDescJS$Type): $TypeDescJS
public "asMap"(): $TypeDescJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectDescJS$Type = ($ObjectDescJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectDescJS_ = $ObjectDescJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$WithPersistentData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MessageSenderKJS, $MessageSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"

export interface $WithPersistentData extends $MessageSenderKJS {

 "getPersistentData"(): $CompoundTag
 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
}

export namespace $WithPersistentData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithPersistentData$Type = ($WithPersistentData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithPersistentData_ = $WithPersistentData$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleMappingRecipeComponent<T> extends $MappingRecipeComponent<(T)> {

constructor(parent: $RecipeComponent$Type<(T)>, mappings: any)

public "componentType"(): string
public static "to"(o: any, mappings: $Map$Type<(string), (string)>): any
public static "from"(parentOutput: $JsonElement$Type, mappings: $Map$Type<(string), (string)>): $JsonElement
public static "builder"(): $RecipeComponentBuilder
public static "builder"(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMappingRecipeComponent$Type<T> = ($SimpleMappingRecipeComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMappingRecipeComponent_<T> = $SimpleMappingRecipeComponent$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$NBTIOWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"

export interface $NBTIOWrapper {

}

export namespace $NBTIOWrapper {
function write(path: $Path$Type, nbt: $CompoundTag$Type): void
function read(path: $Path$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTIOWrapper$Type = ($NBTIOWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTIOWrapper_ = $NBTIOWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/forge/$ForgeEventWrapper" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$GenericForgeEventConsumer, $GenericForgeEventConsumer$Type} from "packages/dev/latvian/mods/kubejs/forge/$GenericForgeEventConsumer"
import {$ForgeEventConsumer, $ForgeEventConsumer$Type} from "packages/dev/latvian/mods/kubejs/forge/$ForgeEventConsumer"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GenericEvent, $GenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$GenericEvent"

export class $ForgeEventWrapper extends $Record {

constructor(name: string, eventBus: $IEventBus$Type)

public "onGenericEvent"<T extends typeof $GenericEvent<(unknown)>>(eventClass: T, genericClass: any, consumer: (event: InstanceType<(T)>) => void): any
public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "eventBus"(): $IEventBus
public "onEvent"<T extends typeof $Event<(unknown)>>(eventClass: T, consumer: (event: InstanceType<(T)>) => void): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEventWrapper$Type = ($ForgeEventWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEventWrapper_ = $ForgeEventWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ArrayRecipeComponent, $ArrayRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent"
import {$AndRecipeComponent, $AndRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$RecipeComponentBuilderMap, $RecipeComponentBuilderMap$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilderMap"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$OrRecipeComponent, $OrRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipeComponentBuilder implements $RecipeComponent<($RecipeComponentBuilderMap)> {
readonly "keys": $List<($RecipeKey<(any)>)>
 "hasPriority": $Predicate<($Set<(string)>)>
 "role": $ComponentRole

constructor(init: integer)

public "inputRole"(): $RecipeComponentBuilder
public "outputRole"(): $RecipeComponentBuilder
public "add"(key: $RecipeKey$Type<(any)>): $RecipeComponentBuilder
public "toString"(): string
public "componentType"(): string
public "write"(recipe: $RecipeJS$Type, value: $RecipeComponentBuilderMap$Type): $JsonElement
public "read"(recipe: $RecipeJS$Type, from: any): $RecipeComponentBuilderMap
public "componentClass"(): $Class<(any)>
public "replaceOutput"(recipe: $RecipeJS$Type, original: $RecipeComponentBuilderMap$Type, match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): $RecipeComponentBuilderMap
public "replaceInput"(recipe: $RecipeJS$Type, original: $RecipeComponentBuilderMap$Type, match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): $RecipeComponentBuilderMap
public "checkValueHasChanged"(oldValue: $RecipeComponentBuilderMap$Type, newValue: $RecipeComponentBuilderMap$Type): boolean
public "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
public "role"(): $ComponentRole
public "createCopy"(): $RecipeComponentBuilder
public "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
public "hasPriority"(hasPriority: $Predicate$Type<($Set$Type<(string)>)>): $RecipeComponentBuilder
public "isOutput"(recipe: $RecipeJS$Type, value: $RecipeComponentBuilderMap$Type, match: $ReplacementMatch$Type): boolean
public "isInput"(recipe: $RecipeJS$Type, value: $RecipeComponentBuilderMap$Type, match: $ReplacementMatch$Type): boolean
public "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($RecipeComponentBuilderMap$Type)>, json: $JsonObject$Type): void
public "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($RecipeComponentBuilderMap$Type)>, json: $JsonObject$Type): void
public "orSelf"(): $RecipeComponent<($RecipeComponentBuilderMap)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
public "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<($RecipeComponentBuilderMap)>
public static "builder"(): $RecipeComponentBuilder
public static "builder"(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
public "key"(name: string): $RecipeKey<($RecipeComponentBuilderMap)>
public "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<($RecipeComponentBuilderMap), (O)>
public "asArray"(): $ArrayRecipeComponent<($RecipeComponentBuilderMap)>
public "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<($RecipeComponentBuilderMap), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
public "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<($RecipeComponentBuilderMap)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
public "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<($RecipeComponentBuilderMap)>
public "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), ($RecipeComponentBuilderMap)>)>
public "checkEmpty"(key: $RecipeKey$Type<($RecipeComponentBuilderMap$Type)>, value: $RecipeComponentBuilderMap$Type): string
public "asPatternKey"(): $RecipeComponent<($TinyMap<(character), ($RecipeComponentBuilderMap)>)>
public "asArrayOrSelf"(): $ArrayRecipeComponent<($RecipeComponentBuilderMap)>
public "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<($RecipeComponentBuilderMap$Type)>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
public "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<($RecipeComponentBuilderMap)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeComponentBuilder$Type = ($RecipeComponentBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeComponentBuilder_ = $RecipeComponentBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$CropBlockBuilder$ShapeBuilder" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CropBlockBuilder$ShapeBuilder {

constructor(age: integer)

/**
 * Describe the shape of the crop at a specific age.
 * 
 * min/max coordinates are double values between 0 and 16.
 */
public "shape"(age: integer, minX: double, minY: double, minZ: double, maxX: double, maxY: double, maxZ: double): $CropBlockBuilder$ShapeBuilder
public "getShapes"(): $List<($VoxelShape)>
get "shapes"(): $List<($VoxelShape)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockBuilder$ShapeBuilder$Type = ($CropBlockBuilder$ShapeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropBlockBuilder$ShapeBuilder_ = $CropBlockBuilder$ShapeBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$AdvancementJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export class $AdvancementJS {
readonly "advancement": $Advancement

constructor(a: $Advancement$Type)

public "getDisplayText"(): $Component
public "hasDisplay"(): boolean
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "getParent"(): $AdvancementJS
public "getId"(): $ResourceLocation
public "getDescription"(): $Component
public "getChildren"(): $Set<($AdvancementJS)>
public "addChild"(a: $AdvancementJS$Type): void
public "getTitle"(): $Component
get "displayText"(): $Component
get "parent"(): $AdvancementJS
get "description"(): $Component
get "children"(): $Set<($AdvancementJS)>
get "title"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementJS$Type = ($AdvancementJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementJS_ = $AdvancementJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemCraftedEventJS" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

/**
 * Invoked when a player crafts an item.
 */
export class $ItemCraftedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, crafted: $ItemStack$Type, container: $Container$Type)

/**
 * The item that was crafted.
 */
public "getItem"(): $ItemStack
/**
 * The inventory that the item was crafted in.
 */
public "getInventory"(): $InventoryKJS
get "item"(): $ItemStack
get "inventory"(): $InventoryKJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCraftedEventJS$Type = ($ItemCraftedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCraftedEventJS_ = $ItemCraftedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockTintFunction, $BlockTintFunction$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockTintFunction"
import {$BlockItemBuilder, $BlockItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockItemBuilder"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockExplodedCallbackJS, $BlockExplodedCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockExplodedCallbackJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DataJsonGenerator, $DataJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$DataJsonGenerator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockStateRotateCallbackJS, $BlockStateRotateCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateRotateCallbackJS"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$EntityFallenOnBlockCallbackJS, $EntityFallenOnBlockCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$EntityFallenOnBlockCallbackJS"
import {$BlockStateMirrorCallbackJS, $BlockStateMirrorCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateMirrorCallbackJS"
import {$BlockRightClickedEventJS, $BlockRightClickedEventJS$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockRightClickedEventJS"
import {$AfterEntityFallenOnBlockCallbackJS, $AfterEntityFallenOnBlockCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$AfterEntityFallenOnBlockCallbackJS"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$NoteBlockInstrument, $NoteBlockInstrument$Type} from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BlockStateModifyPlacementCallbackJS, $BlockStateModifyPlacementCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyPlacementCallbackJS"
import {$BlockEntityInfo, $BlockEntityInfo$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityInfo"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$EntitySteppedOnBlockCallbackJS, $EntitySteppedOnBlockCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$EntitySteppedOnBlockCallbackJS"
import {$BlockStateModifyCallbackJS, $BlockStateModifyCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyCallbackJS"
import {$CanBeReplacedCallbackJS, $CanBeReplacedCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$CanBeReplacedCallbackJS"

export class $BlockBuilder extends $BuilderBase<($Block)> {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

/**
 * Set if the block can be replaced by something else.
 */
public "canBeReplaced"(callbackJS: $Predicate$Type<($CanBeReplacedCallbackJS$Type)>): $BlockBuilder
/**
 * Sets the hardness of the block. Defaults to 1.5.
 * 
 * Setting this to -1 will make the block unbreakable like bedrock.
 */
public "hardness"(h: float): $BlockBuilder
/**
 * Set the default state of the block.
 */
public "defaultState"(callbackJS: $Consumer$Type<($BlockStateModifyCallbackJS$Type)>): $BlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
/**
 * Set the shape of the block.
 */
public "box"(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double): $BlockBuilder
/**
 * Set the shape of the block.
 */
public "box"(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double, scale16: boolean): $BlockBuilder
/**
 * Set the color of a specific layer of the block.
 */
public "color"(color: $BlockTintFunction$Type): $BlockBuilder
/**
 * Set the color of a specific layer of the block.
 */
public "color"(index: integer, color: $BlockTintFunction$Type): $BlockBuilder
/**
 * Sets the display name for this object, e.g. `Stone`.
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$Type): $BuilderBase<($Block)>
/**
 * Modifies the block's item representation.
 */
public "item"(i: $Consumer$Type<($BlockItemBuilder$Type)>): $BlockBuilder
/**
 * Add a blockstate property to the block.
 * 
 * For example, facing, lit, etc.
 */
public "property"(property: $Property$Type<(any)>): $BlockBuilder
/**
 * Makes the block can be waterlogged.
 */
public "waterlogged"(): $BlockBuilder
/**
 * Set the callback used for determining how the block rotates
 */
public "rotateState"(callbackJS: $Consumer$Type<($BlockStateRotateCallbackJS$Type)>): $BlockBuilder
/**
 * Sets random tick callback for this black.
 */
public "randomTick"(randomTickCallback: $Consumer$Type<($RandomTickCallbackJS$Type)>): $BlockBuilder
/**
 * Set the callback used for right-clicking on the block
 */
public "rightClick"(callbackJS: $Consumer$Type<($BlockRightClickedEventJS$Type)>): $BlockBuilder
/**
 * Sets the blast resistance of the block. Defaults to 3.
 */
public "resistance"(r: float): $BlockBuilder
public "material"(material: string): $BlockBuilder
public "createAdditionalObjects"(): void
/**
 * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
 */
public "renderType"(l: string): $BlockBuilder
/**
 * Set the block's model.
 */
public "model"(m: string): $BlockBuilder
public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
public "generateDataJsons"(generator: $DataJsonGenerator$Type): void
public static "createShape"(boxes: $List$Type<($AABB$Type)>): $VoxelShape
/**
 * Sets the light level of the block. Defaults to 0 (no light).
 */
public "lightLevel"(light: float): $BlockBuilder
/**
 * Sets the opacity of the block. Opaque blocks do not let light through.
 */
public "opaque"(o: boolean): $BlockBuilder
/**
 * Makes the block suffocating.
 */
public "suffocating"(b: boolean): $BlockBuilder
/**
 * Makes the block a redstone conductor.
 */
public "redstoneConductor"(b: boolean): $BlockBuilder
/**
 * Set how slippery the block is.
 */
public "slipperiness"(f: float): $BlockBuilder
/**
 * Texture the block on all sides with the same texture.
 */
public "textureAll"(tex: string): $BlockBuilder
/**
 * Makes the block view blocking.
 */
public "viewBlocking"(b: boolean): $BlockBuilder
/**
 * Makes mobs not spawn on the block.
 */
public "noValidSpawns"(b: boolean): $BlockBuilder
/**
 * Makes the block not be solid.
 */
public "notSolid"(): $BlockBuilder
/**
 * Makes the block unbreakable.
 */
public "unbreakable"(): $BlockBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
/**
 * Makes the block require a tool to have drops when broken.
 */
public "requiresTool"(f: boolean): $BlockBuilder
/**
 * Makes the block require a tool to have drops when broken.
 */
public "requiresTool"(): $BlockBuilder
public "transformObject"(obj: $Block$Type): $Block
/**
 * Sets the block should be a full block or not, like cactus or doors.
 */
public "fullBlock"(f: boolean): $BlockBuilder
/**
 * Texture a specific texture key of the block.
 */
public "texture"(id: string, tex: string): $BlockBuilder
/**
 * Sets the block's map color. Defaults to NONE.
 */
public "mapColor"(m: $MapColor$Type): $BlockBuilder
/**
 * Helper method for setting the render type of the block to `cutout` correctly.
 */
public "defaultCutout"(): $BlockBuilder
/**
 * Makes the block transparent.
 */
public "transparent"(b: boolean): $BlockBuilder
/**
 * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
 */
public "dynamicMapColor"(m: $Function$Type<($BlockState$Type), (any)>): $BlockBuilder
public "gravelSoundType"(): $BlockBuilder
public "glassSoundType"(): $BlockBuilder
public "noSoundType"(): $BlockBuilder
public "woodSoundType"(): $BlockBuilder
public "sandSoundType"(): $BlockBuilder
public "cropSoundType"(): $BlockBuilder
public "grassSoundType"(): $BlockBuilder
public "stoneSoundType"(): $BlockBuilder
/**
 * Tags both the block and the item with the given tag.
 */
public "tagBoth"(tag: $ResourceLocation$Type): $BlockBuilder
/**
 * Set the block to have no corresponding item.
 */
public "noItem"(): $BlockBuilder
/**
 * Helper method for setting the render type of the block to `translucent` correctly.
 */
public "defaultTranslucent"(): $BlockBuilder
/**
 * 
 * @deprecated
 */
public "setWaterlogged"(waterlogged: boolean): $BlockBuilder
/**
 * Tags the block with the given tag.
 */
public "tagBlock"(tag: $ResourceLocation$Type): $BlockBuilder
/**
 * Tags the item with the given tag.
 */
public "tagItem"(tag: $ResourceLocation$Type): $BlockBuilder
/**
 * 
 * @deprecated
 */
public "getWaterlogged"(): boolean
/**
 * Checks if the block can be waterlogged.
 */
public "canBeWaterlogged"(): boolean
/**
 * Clears all drops for the block.
 */
public "noDrops"(): $BlockBuilder
/**
 * Set the callback used for determining how the block is mirrored
 */
public "mirrorState"(callbackJS: $Consumer$Type<($BlockStateMirrorCallbackJS$Type)>): $BlockBuilder
/**
 * Set what happens when an entity steps on the block
 * This is called every tick for every entity standing on the block, so be careful what you do here.
 */
public "steppedOn"(callbackJS: $Consumer$Type<($EntitySteppedOnBlockCallbackJS$Type)>): $BlockBuilder
/**
 * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
 */
public "exploded"(callbackJS: $Consumer$Type<($BlockExplodedCallbackJS$Type)>): $BlockBuilder
/**
 * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
 * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
 */
public "afterFallenOn"(callbackJS: $Consumer$Type<($AfterEntityFallenOnBlockCallbackJS$Type)>): $BlockBuilder
/**
 * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
 */
public "fallenOn"(callbackJS: $Consumer$Type<($EntityFallenOnBlockCallbackJS$Type)>): $BlockBuilder
/**
 * Bounces entities that land on this block by bounciness * their fall velocity.
 * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
 */
public "bounciness"(bounciness: float): $BlockBuilder
/**
 * Creates a Block Entity for this block
 */
public "blockEntity"(callback: $Consumer$Type<($BlockEntityInfo$Type)>): $BlockBuilder
/**
 * Note block instrument.
 */
public "instrument"(i: $NoteBlockInstrument$Type): $BlockBuilder
/**
 * Texture a specific side of the block.
 */
public "textureSide"(direction: $Direction$Type, tex: string): $BlockBuilder
/**
 * Set how fast you can walk on the block.
 * 
 * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
 * 
 * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
 */
public "speedFactor"(f: float): $BlockBuilder
/**
 * Sets the block's sound type. Defaults to wood.
 */
public "soundType"(m: $SoundType$Type): $BlockBuilder
/**
 * Set how high you can jump on the block.
 */
public "jumpFactor"(f: float): $BlockBuilder
/**
 * Makes the block not collide with entities.
 */
public "noCollision"(): $BlockBuilder
/**
 * Set the callback for determining the blocks state when placed.
 */
public "placementState"(callbackJS: $Consumer$Type<($BlockStateModifyPlacementCallbackJS$Type)>): $BlockBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilder$Type = ($BlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBuilder_ = $BlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$RhinoException" {
import {$ScriptStackElement, $ScriptStackElement$Type} from "packages/dev/latvian/mods/rhino/$ScriptStackElement"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$PrintStream, $PrintStream$Type} from "packages/java/io/$PrintStream"

export class $RhinoException extends $RuntimeException {


public "getScriptStackTrace"(limit: integer, functionName: string): string
public "getScriptStackTrace"(): string
public "details"(): string
public "printStackTrace"(s: $PrintWriter$Type): void
public "printStackTrace"(s: $PrintStream$Type): void
public "lineNumber"(): integer
public "getMessage"(): string
public "columnNumber"(): integer
public "initLineNumber"(lineNumber: integer): void
public "initSourceName"(sourceName: string): void
public "initLineSource"(lineSource: string): void
public "initColumnNumber"(columnNumber: integer): void
public "lineSource"(): string
public "getScriptStack"(): ($ScriptStackElement)[]
public "getScriptStack"(limit: integer, hideFunction: string): ($ScriptStackElement)[]
public "sourceName"(): string
get "scriptStackTrace"(): string
get "message"(): string
get "scriptStack"(): ($ScriptStackElement)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RhinoException$Type = ($RhinoException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RhinoException_ = $RhinoException$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ConsoleLine" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$LogType, $LogType$Type} from "packages/dev/latvian/mods/kubejs/util/$LogType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ConsoleLine$SourceLine, $ConsoleLine$SourceLine$Type} from "packages/dev/latvian/mods/kubejs/script/$ConsoleLine$SourceLine"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConsoleLine {
static readonly "EMPTY_ARRAY": ($ConsoleLine)[]
readonly "console": $ConsoleJS
readonly "timestamp": long
 "message": string
 "type": $LogType
 "group": string
 "sourceLines": $Collection<($ConsoleLine$SourceLine)>
 "externalFile": $Path
 "stackTrace": $List<(string)>

constructor(console: $ConsoleJS$Type, timestamp: long, message: string)
constructor(buf: $FriendlyByteBuf$Type)

public "toString"(): string
public "getText"(): string
public "withSourceLine"(source: string, line: integer): $ConsoleLine
public "withExternalFile"(path: $Path$Type): $ConsoleLine
public static "writeToNet"(buf: $FriendlyByteBuf$Type, line: $ConsoleLine$Type): void
get "text"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsoleLine$Type = ($ConsoleLine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConsoleLine_ = $ConsoleLine$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeComponentFactory" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$CustomJavaToJsWrapper, $CustomJavaToJsWrapper$Type} from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeComponentFactory extends $CustomJavaToJsWrapper {

 "convertJavaToJs"(cx: $Context$Type, scope: $Scriptable$Type, staticType: $Class$Type<(any)>): $Scriptable
 "create"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: $Map$Type<(string), (any)>): $RecipeComponent<(any)>

(cx: $Context$Type, scope: $Scriptable$Type, staticType: $Class$Type<(any)>): $Scriptable
}

export namespace $RecipeComponentFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeComponentFactory$Type = ($RecipeComponentFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeComponentFactory_ = $RecipeComponentFactory$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$StartupEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"

export class $StartupEventJS extends $EventJS {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartupEventJS$Type = ($StartupEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartupEventJS_ = $StartupEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory$Simple" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$TypeWrapperFactory, $TypeWrapperFactory$Type} from "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory"

export interface $TypeWrapperFactory$Simple<T> extends $TypeWrapperFactory<(T)> {

 "wrap"(cx: $Context$Type, o: any): T
 "wrapSimple"(arg0: any): T

(cx: $Context$Type, o: any): T
}

export namespace $TypeWrapperFactory$Simple {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrapperFactory$Simple$Type<T> = ($TypeWrapperFactory$Simple<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeWrapperFactory$Simple_<T> = $TypeWrapperFactory$Simple$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor$Factory" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$ComponentValueMap, $ComponentValueMap$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentValueMap"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RecipeSchemaType, $RecipeSchemaType$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType"

export interface $RecipeConstructor$Factory {

 "create"(type: $RecipeTypeFunction$Type, schemaType: $RecipeSchemaType$Type, keys: ($RecipeKey$Type<(any)>)[], from: $ComponentValueMap$Type): $RecipeJS
 "setValues"(arg0: $RecipeJS$Type, arg1: $RecipeSchemaType$Type, arg2: ($RecipeKey$Type<(any)>)[], arg3: $ComponentValueMap$Type): void

(valueSupplier: $BiFunction$Type<($RecipeJS$Type), ($RecipeKey$Type<(any)>), (any)>): $RecipeConstructor$Factory
}

export namespace $RecipeConstructor$Factory {
const DEFAULT: $RecipeConstructor$Factory
function defaultWith(valueSupplier: $BiFunction$Type<($RecipeJS$Type), ($RecipeKey$Type<(any)>), (any)>): $RecipeConstructor$Factory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeConstructor$Factory$Type = ($RecipeConstructor$Factory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeConstructor$Factory_ = $RecipeConstructor$Factory$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$ExternalArrayData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExternalArrayData {

 "setArrayElement"(arg0: integer, arg1: any): void
 "getArrayLength"(): integer
 "getArrayElement"(arg0: integer): any
}

export namespace $ExternalArrayData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExternalArrayData$Type = ($ExternalArrayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExternalArrayData_ = $ExternalArrayData$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageProtectionFunction" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $EnchantmentBuilder$DamageProtectionFunction {

 "getDamageProtection"(arg0: integer, arg1: $DamageSource$Type): integer

(arg0: integer, arg1: $DamageSource$Type): integer
}

export namespace $EnchantmentBuilder$DamageProtectionFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentBuilder$DamageProtectionFunction$Type = ($EnchantmentBuilder$DamageProtectionFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentBuilder$DamageProtectionFunction_ = $EnchantmentBuilder$DamageProtectionFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemBuilder" {
import {$ItemTintFunction, $ItemTintFunction$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemTintFunction"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FoodBuilder, $FoodBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemBuilder$ReleaseUsingCallback, $ItemBuilder$ReleaseUsingCallback$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$ReleaseUsingCallback"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$DataJsonGenerator, $DataJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$DataJsonGenerator"
import {$ItemBuilder$NameCallback, $ItemBuilder$NameCallback$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$NameCallback"
import {$ItemBuilder$UseCallback, $ItemBuilder$UseCallback$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$UseCallback"
import {$ItemBuilder$HurtEnemyContext, $ItemBuilder$HurtEnemyContext$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$HurtEnemyContext"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBuilder$FinishUsingCallback, $ItemBuilder$FinishUsingCallback$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$FinishUsingCallback"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBuilder extends $BuilderBase<($Item)> {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createItemProperties"(): $Item$Properties
/**
 * Directly set the item's model json.
 */
public "modelJson"(json: $JsonObject$Type): $ItemBuilder
/**
 * Sets the item's model (parent).
 */
public "parentModel"(m: string): $ItemBuilder
/**
 * Sets the item's name dynamically.
 */
public "name"(name: $ItemBuilder$NameCallback$Type): $ItemBuilder
/**
 * 
 * @deprecated
 */
public "group"(g: string): $ItemBuilder
/**
 * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
 */
public "color"(index: integer, color: $ItemTintFunction$Type): $ItemBuilder
/**
 * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
 */
public "color"(callback: $ItemTintFunction$Type): $ItemBuilder
/**
 * Sets the item's max stack size. Default is 64.
 */
public "maxStackSize"(v: integer): $ItemBuilder
/**
 * Determines if player will start using the item.
 * 
 * For example, when eating food, returning true will make the player start eating the food.
 */
public "use"(use: $ItemBuilder$UseCallback$Type): $ItemBuilder
/**
 * When players finish using the item.
 * 
 * This is called only when `useDuration` ticks have passed.
 * 
 * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
 */
public "finishUsing"(finishUsing: $ItemBuilder$FinishUsingCallback$Type): $ItemBuilder
/**
 * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
 * 
 * The function should return a value between 0 and 13 (max width of the bar).
 */
public "barWidth"(barWidth: $ToIntFunction$Type<($ItemStack$Type)>): $ItemBuilder
/**
 * Gets called when the item is used to hurt an entity.
 * 
 * For example, when using a sword to hit a mob, this is called.
 */
public "hurtEnemy"(context: $Predicate$Type<($ItemBuilder$HurtEnemyContext$Type)>): $ItemBuilder
/**
 * When players did not finish using the item but released the right mouse button halfway through.
 * 
 * An example is the bow, where the arrow is shot when the player releases the right mouse button.
 * 
 * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
 */
public "releaseUsing"(releaseUsing: $ItemBuilder$ReleaseUsingCallback$Type): $ItemBuilder
/**
 * Makes the item glow like enchanted, even if it's not enchanted.
 */
public "glow"(v: boolean): $ItemBuilder
/**
 * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
 */
public "barColor"(barColor: $Function$Type<($ItemStack$Type), ($Color$Type)>): $ItemBuilder
/**
 * The duration when the item is used.
 * 
 * For example, when eating food, this is the time it takes to eat the food.
 * This can change the eating speed, or be used for other things (like making a custom bow).
 */
public "useDuration"(useDuration: $ToIntFunction$Type<($ItemStack$Type)>): $ItemBuilder
/**
 * Sets the item's rarity.
 */
public "rarity"(v: $Rarity$Type): $ItemBuilder
/**
 * Sets the item's max damage. Default is 0 (No durability).
 */
public "maxDamage"(v: integer): $ItemBuilder
/**
 * Set the food properties of the item.
 */
public "food"(b: $Consumer$Type<($FoodBuilder$Type)>): $ItemBuilder
/**
 * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
 * 
 * Each subtype will appear as a separate item in JEI and the creative inventory.
 */
public "subtypes"(fn: $Function$Type<($ItemStack$Type), ($Collection$Type<($ItemStack$Type)>)>): $ItemBuilder
/**
 * Directlys set the item's texture json.
 */
public "textureJson"(json: $JsonObject$Type): $ItemBuilder
public static "toArmorMaterial"(o: any): $ArmorMaterial
/**
 * Sets the item's container item, e.g. a bucket for a milk bucket.
 */
public "containerItem"(id: $ResourceLocation$Type): $ItemBuilder
public static "toToolTier"(o: any): $Tier
/**
 * Determines the animation of the item when used, e.g. eating food.
 */
public "useAnimation"(animation: $UseAnim$Type): $ItemBuilder
/**
 * Adds an attribute modifier to the item.
 * 
 * An attribute modifier is something like a damage boost or a speed boost.
 * On tools, they're applied when the item is held, on armor, they're
 * applied when the item is worn.
 * 
 * @param attribute - The resource location of the attribute, e.g. 'generic.attack_damage'
 * @param identifier - A unique identifier for the modifier. Modifiers are considered the same if they have the same identifier.
 * @param d - The amount of the modifier.
 * @param operation - The operation to apply the modifier with. Can be ADDITION, MULTIPLY_BASE, or MULTIPLY_TOTAL.
 */
public "modifyAttribute"(attribute: $ResourceLocation$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): $ItemBuilder
public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
public "generateDataJsons"(generator: $DataJsonGenerator$Type): void
/**
 * Sets the item's burn time. Default is 0 (Not a fuel).
 */
public "burnTime"(v: integer): $ItemBuilder
/**
 * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
 */
public "unstackable"(): $ItemBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "transformObject"(obj: $Item$Type): $Item
/**
 * Sets the item's texture (layer0).
 */
public "texture"(tex: string): $ItemBuilder
/**
 * Sets the item's texture by given key.
 */
public "texture"(key: string, tex: string): $ItemBuilder
/**
 * Adds a tooltip to the item.
 */
public "tooltip"(text: $Component$Type): $ItemBuilder
/**
 * Makes the item fire resistant like netherite tools (or not).
 */
public "fireResistant"(isFireResistant: boolean): $ItemBuilder
/**
 * Makes the item fire resistant like netherite tools.
 */
public "fireResistant"(): $ItemBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$Type = ($ItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder_ = $ItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$GiftLootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$LootEventJS, $LootEventJS$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GiftLootEventJS extends $LootEventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "getType"(): string
public "addGift"(id: $ResourceLocation$Type, b: $Consumer$Type<($LootBuilder$Type)>): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GiftLootEventJS$Type = ($GiftLootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiftLootEventJS_ = $GiftLootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityEventCallback" {
import {$BlockEntityJS, $BlockEntityJS$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityJS"

export interface $BlockEntityEventCallback {

 "accept"(arg0: $BlockEntityJS$Type, arg1: integer): void

(arg0: $BlockEntityJS$Type, arg1: integer): void
}

export namespace $BlockEntityEventCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityEventCallback$Type = ($BlockEntityEventCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityEventCallback_ = $BlockEntityEventCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export interface $ShapedRecipeSchema {

}

export namespace $ShapedRecipeSchema {
const RESULT: $RecipeKey<($OutputItem)>
const PATTERN: $RecipeKey<((string)[])>
const KEY: $RecipeKey<($TinyMap<(character), ($InputItem)>)>
const KJS_MIRROR: $RecipeKey<(boolean)>
const KJS_SHRINK: $RecipeKey<(boolean)>
const INGREDIENTS: $RecipeKey<((($InputItem)[])[])>
const SCHEMA: $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeSchema$Type = ($ShapedRecipeSchema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeSchema_ = $ShapedRecipeSchema$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptPack" {
import {$ScriptFile, $ScriptFile$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptFile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$ScriptPackInfo, $ScriptPackInfo$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptPackInfo"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptPack {
readonly "manager": $ScriptManager
readonly "info": $ScriptPackInfo
readonly "scripts": $List<($ScriptFile)>
 "scope": $Scriptable

constructor(m: $ScriptManager$Type, i: $ScriptPackInfo$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptPack$Type = ($ScriptPack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptPack_ = $ScriptPack$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/server/tag/$TagEventJS" {
import {$TagWrapper, $TagWrapper$Type} from "packages/dev/latvian/mods/kubejs/server/tag/$TagWrapper"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EventExceptionHandler, $EventExceptionHandler$Type} from "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TagEventJS extends $EventJS {
static readonly "TAG_EVENT_HANDLER": $EventExceptionHandler
static readonly "SOURCE": string
readonly "registry": $RegistryInfo<(any)>
readonly "vanillaRegistry": $Registry<(any)>
readonly "tags": $Map<($ResourceLocation), ($TagWrapper)>
 "totalAdded": integer
 "totalRemoved": integer

constructor(ri: $RegistryInfo$Type<(any)>, vr: $Registry$Type<(any)>)

public "removeAllTagsFrom"(...ids: (any)[]): void
public "getElementIds"(): $Set<($ResourceLocation)>
public "add"(tag: $ResourceLocation$Type, ...filters: (any)[]): $TagWrapper
public "remove"(tag: $ResourceLocation$Type, ...filters: (any)[]): $TagWrapper
public "get"(id: $ResourceLocation$Type): $TagWrapper
public "getType"(): $ResourceLocation
public "removeAll"(tag: $ResourceLocation$Type): $TagWrapper
get "elementIds"(): $Set<($ResourceLocation)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEventJS$Type = ($TagEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagEventJS_ = $TagEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MultipartBlockStateGenerator$Part, $MultipartBlockStateGenerator$Part$Type} from "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator$Part"

export class $MultipartBlockStateGenerator {

constructor()

public "part"(when: string, consumer: $Consumer$Type<($MultipartBlockStateGenerator$Part$Type)>): void
public "part"(when: string, model: string): void
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartBlockStateGenerator$Type = ($MultipartBlockStateGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartBlockStateGenerator_ = $MultipartBlockStateGenerator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Variant" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$VariantBlockStateGenerator$Model, $VariantBlockStateGenerator$Model$Type} from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Model"

export class $VariantBlockStateGenerator$Variant {

constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateGenerator$Variant$Type = ($VariantBlockStateGenerator$Variant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateGenerator$Variant_ = $VariantBlockStateGenerator$Variant$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemBuilder$UseCallback" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $ItemBuilder$UseCallback {

 "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean

(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): boolean
}

export namespace $ItemBuilder$UseCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$UseCallback$Type = ($ItemBuilder$UseCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder$UseCallback_ = $ItemBuilder$UseCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$PlayerAdvancementEventJS" {
import {$AdvancementJS, $AdvancementJS$Type} from "packages/dev/latvian/mods/kubejs/player/$AdvancementJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

/**
 * Invoked when a player gets an advancement.
 */
export class $PlayerAdvancementEventJS extends $PlayerEventJS {

constructor(player: $ServerPlayer$Type, advancement: $Advancement$Type)

/**
 * Returns the advancement that was obtained.
 */
public "getAdvancement"(): $AdvancementJS
get "advancement"(): $AdvancementJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancementEventJS$Type = ($PlayerAdvancementEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAdvancementEventJS_ = $PlayerAdvancementEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$StairBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $StairBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairBlockBuilder$Type = ($StairBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairBlockBuilder_ = $StairBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PlatformWrapper$ModInfo, $PlatformWrapper$ModInfo$Type} from "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper$ModInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PlatformWrapper {

constructor()

public static "getMcVersion"(): string
public static "breakpoint"(...args: (any)[]): void
public static "isGeneratingData"(): boolean
public static "getModVersion"(): string
public static "getName"(): string
public static "isLoaded"(modId: string): boolean
public static "getInfo"(modID: string): $PlatformWrapper$ModInfo
public static "isForge"(): boolean
public static "isDevelopmentEnvironment"(): boolean
public static "getMinecraftVersionString"(): string
public static "isClientEnvironment"(): boolean
public static "getMinecraftVersion"(): integer
public static "getMods"(): $Map<(string), ($PlatformWrapper$ModInfo)>
public static "getList"(): $Set<(string)>
public static "isFabric"(): boolean
public static "setModName"(modId: string, name: string): void
get "mcVersion"(): string
get "generatingData"(): boolean
get "modVersion"(): string
get "name"(): string
get "forge"(): boolean
get "developmentEnvironment"(): boolean
get "minecraftVersionString"(): string
get "clientEnvironment"(): boolean
get "minecraftVersion"(): integer
get "mods"(): $Map<(string), ($PlatformWrapper$ModInfo)>
get "list"(): $Set<(string)>
get "fabric"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformWrapper$Type = ($PlatformWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformWrapper_ = $PlatformWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/generator/$ResourceGenerator" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GeneratedData, $GeneratedData$Type} from "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourceGenerator {

constructor(c: $ConsoleJS$Type, m: $Map$Type<($ResourceLocation$Type), ($GeneratedData$Type)>)

public "add"(id: $ResourceLocation$Type, data: $Supplier$Type<((byte)[])>): void
public "add"(id: $ResourceLocation$Type, data: $Supplier$Type<((byte)[])>, alwaysForget: boolean): void
public "json"(id: $ResourceLocation$Type, json: $JsonElement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceGenerator$Type = ($ResourceGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceGenerator_ = $ResourceGenerator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement" {
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputReplacementTransformer$Replacement, $OutputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement"
import {$OutputReplacementTransformer, $OutputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export interface $OutputReplacement {

 "transform"(transformer: $OutputReplacementTransformer$Type): $OutputReplacementTransformer$Replacement
 "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
}

export namespace $OutputReplacement {
function of(o: any): $OutputReplacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputReplacement$Type = ($OutputItem$Type) | ($OutputReplacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputReplacement_ = $OutputReplacement$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$SimplePlayerEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $SimplePlayerEventJS extends $PlayerEventJS {

constructor(p: $Player$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplePlayerEventJS$Type = ($SimplePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplePlayerEventJS_ = $SimplePlayerEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$EventExit" {
import {$EventResult, $EventResult$Type} from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"

export class $EventExit extends $Exception {
readonly "result": $EventResult

constructor(result: $EventResult$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExit$Type = ($EventExit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExit_ = $EventExit$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/$Remapper" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export interface $Remapper {

 "getUnmappedClass"(from: string): string
 "getMappedClass"(from: $Class$Type<(any)>): string
 "getMappedField"(from: $Class$Type<(any)>, field: $Field$Type): string
 "getMappedMethod"(from: $Class$Type<(any)>, method: $Method$Type): string
}

export namespace $Remapper {
function getTypeName(type: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Remapper$Type = ($Remapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Remapper_ = $Remapper$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$EvaluatorException" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$RhinoException, $RhinoException$Type} from "packages/dev/latvian/mods/rhino/$RhinoException"

export class $EvaluatorException extends $RhinoException {

constructor(cx: $Context$Type, detail: string)
constructor(cx: $Context$Type, detail: string, sourceName: string, lineNumber: integer)
constructor(cx: $Context$Type, detail: string, sourceName: string, lineNumber: integer, lineSource: string, columnNumber: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvaluatorException$Type = ($EvaluatorException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvaluatorException_ = $EvaluatorException$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$FireworkRocketEntityKJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FireworkRocketEntityKJS {

 "setLifetimeKJS"(arg0: integer): void

(arg0: integer): void
}

export namespace $FireworkRocketEntityKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkRocketEntityKJS$Type = ($FireworkRocketEntityKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireworkRocketEntityKJS_ = $FireworkRocketEntityKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder$Chestplate" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ArmorItemBuilder, $ArmorItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArmorItemBuilder$Chestplate extends $ArmorItemBuilder {
readonly "armorType": $ArmorItem$Type
 "armorTier": $MutableArmorTier
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItemBuilder$Chestplate$Type = ($ArmorItemBuilder$Chestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorItemBuilder$Chestplate_ = $ArmorItemBuilder$Chestplate$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/forge/$LivingEntityDropsEventJS" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $LivingEntityDropsEventJS extends $LivingEntityEventJS {
 "eventDrops": $List<($ItemEntity)>

constructor(e: $LivingDropsEvent$Type)

public "getSource"(): $DamageSource
public "getDrops"(): $List<($ItemEntity)>
public "isRecentlyHit"(): boolean
public "getLootingLevel"(): integer
public "addDrop"(stack: $ItemStack$Type, chance: float): $ItemEntity
public "addDrop"(stack: $ItemStack$Type): $ItemEntity
get "source"(): $DamageSource
get "drops"(): $List<($ItemEntity)>
get "recentlyHit"(): boolean
get "lootingLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityDropsEventJS$Type = ($LivingEntityDropsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityDropsEventJS_ = $LivingEntityDropsEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$BasicItemJS$Builder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasicItemJS$Builder extends $ItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItemJS$Builder$Type = ($BasicItemJS$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItemJS$Builder_ = $BasicItemJS$Builder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$MultipartShapedBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $MultipartShapedBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type, ...suffixes: (string)[])

public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartShapedBlockBuilder$Type = ($MultipartShapedBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartShapedBlockBuilder_ = $MultipartShapedBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$JavaMembers$FieldInfo" {
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export class $JavaMembers$FieldInfo {
readonly "field": $Field
 "name": string

constructor(f: $Field$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JavaMembers$FieldInfo$Type = ($JavaMembers$FieldInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JavaMembers$FieldInfo_ = $JavaMembers$FieldInfo$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$PostFunction" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EnchantmentBuilder$PostFunction {

 "apply"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void

(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
}

export namespace $EnchantmentBuilder$PostFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentBuilder$PostFunction$Type = ($EnchantmentBuilder$PostFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentBuilder$PostFunction_ = $EnchantmentBuilder$PostFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$JavaWrapper" {
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

/**
 * Methods for working with Java classes. Reflection my beloved ♥
 */
export class $JavaWrapper {

constructor(manager: $ScriptManager$Type)

/**
 * Loads the specified class, and returns null if class is not found or allowed.
 * The returned object can have public static methods and fields accessed directly from it.
 * Constructors can be used with the new keyword.
 */
public "tryLoadClass"(className: string): any
/**
 * Loads the specified class, and throws error if class it not found or allowed.
 * The returned object can have public static methods and fields accessed directly from it.
 * Constructors can be used with the new keyword.
 */
public "loadClass"(className: string): any
/**
 * Creates a custom ConsoleJS instance for you to use to, well, log stuff
 */
public "createConsole"(name: string): $ConsoleJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JavaWrapper$Type = ($JavaWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JavaWrapper_ = $JavaWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS$Before" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$ExplosionEventJS, $ExplosionEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS"

/**
 * Invoked right before an explosion happens.
 */
export class $ExplosionEventJS$Before extends $ExplosionEventJS {

constructor(level: $Level$Type, explosion: $Explosion$Type)

/**
 * Returns the size of the explosion.
 */
public "getSize"(): float
/**
 * Sets the size of the explosion.
 */
public "setSize"(s: float): void
get "size"(): float
set "size"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionEventJS$Before$Type = ($ExplosionEventJS$Before);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionEventJS$Before_ = $ExplosionEventJS$Before$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/data/$ExportablePackResources" {
import {$PackResources$ResourceOutput, $PackResources$ResourceOutput$Type} from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$MetadataSectionSerializer, $MetadataSectionSerializer$Type} from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import {$IoSupplier, $IoSupplier$Type} from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PackResources, $PackResources$Type} from "packages/net/minecraft/server/packs/$PackResources"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ExportablePackResources extends $PackResources {

 "export"(arg0: $Path$Type): void
 "close"(): void
 "getResource"(arg0: $PackType$Type, arg1: $ResourceLocation$Type): $IoSupplier<($InputStream)>
 "packId"(): string
 "getMetadataSection"<T>(arg0: $MetadataSectionSerializer$Type<(T)>): T
 "isBuiltin"(): boolean
 "getRootResource"(...arg0: (string)[]): $IoSupplier<($InputStream)>
 "getNamespaces"(arg0: $PackType$Type): $Set<(string)>
 "listResources"(arg0: $PackType$Type, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput$Type): void
 "isHidden"(): boolean
 "getChildren"(): $Collection<($PackResources)>
}

export namespace $ExportablePackResources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExportablePackResources$Type = ($ExportablePackResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExportablePackResources_ = $ExportablePackResources$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder$Boots" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ArmorItemBuilder, $ArmorItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArmorItemBuilder$Boots extends $ArmorItemBuilder {
readonly "armorType": $ArmorItem$Type
 "armorTier": $MutableArmorTier
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItemBuilder$Boots$Type = ($ArmorItemBuilder$Boots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorItemBuilder$Boots_ = $ArmorItemBuilder$Boots$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputReplacementTransformer, $OutputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $OutputReplacementTransformer$Replacement extends $Record implements $OutputReplacement {

constructor(arg0: $OutputReplacement$Type, transformer: $OutputReplacementTransformer$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "transformer"(): $OutputReplacementTransformer
public "with"(): $OutputReplacement
public "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
public static "of"(o: any): $OutputReplacement
public "transform"(transformer: $OutputReplacementTransformer$Type): $OutputReplacementTransformer$Replacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputReplacementTransformer$Replacement$Type = ($OutputReplacementTransformer$Replacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputReplacementTransformer$Replacement_ = $OutputReplacementTransformer$Replacement$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$FenceBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$MultipartShapedBlockBuilder, $MultipartShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$MultipartShapedBlockBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $FenceBlockBuilder extends $MultipartShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceBlockBuilder$Type = ($FenceBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceBlockBuilder_ = $FenceBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$FoodEatenEventJS" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * Invoked when an entity eats food.
 */
export class $FoodEatenEventJS extends $EntityEventJS {

constructor(e: $LivingEntity$Type, is: $ItemStack$Type)

/**
 * The food that was eaten.
 */
public "getItem"(): $ItemStack
/**
 * The entity that ate the food.
 */
public "getEntity"(): $Entity
get "item"(): $ItemStack
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodEatenEventJS$Type = ($FoodEatenEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodEatenEventJS_ = $FoodEatenEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemTooltipEventJS$StaticTooltipHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemTooltipEventJS$StaticTooltipHandler {

 "tooltip"(arg0: $ItemStack$Type, arg1: boolean, arg2: $List$Type<($Component$Type)>): void

(arg0: $ItemStack$Type, arg1: boolean, arg2: $List$Type<($Component$Type)>): void
}

export namespace $ItemTooltipEventJS$StaticTooltipHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEventJS$StaticTooltipHandler$Type = ($ItemTooltipEventJS$StaticTooltipHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTooltipEventJS$StaticTooltipHandler_ = $ItemTooltipEventJS$StaticTooltipHandler$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$WrapFactory" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $WrapFactory {

constructor()

public "wrap"(cx: $Context$Type, scope: $Scriptable$Type, obj: any, staticType: $Class$Type<(any)>): any
public "setJavaPrimitiveWrap"(value: boolean): void
public "isJavaPrimitiveWrap"(): boolean
public "wrapNewObject"(scope: $Scriptable$Type, obj: any, cx: $Context$Type): $Scriptable
public "wrapAsJavaObject"(cx: $Context$Type, scope: $Scriptable$Type, javaObject: any, staticType: $Class$Type<(any)>): $Scriptable
public "wrapJavaClass"(cx: $Context$Type, scope: $Scriptable$Type, javaClass: $Class$Type<(any)>): $Scriptable
set "javaPrimitiveWrap"(value: boolean)
get "javaPrimitiveWrap"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrapFactory$Type = ($WrapFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrapFactory_ = $WrapFactory$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$RotationAxis" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $RotationAxis extends $Enum<($RotationAxis)> {
static readonly "XN": $RotationAxis
static readonly "XP": $RotationAxis
static readonly "YN": $RotationAxis
static readonly "YP": $RotationAxis
static readonly "ZN": $RotationAxis
static readonly "ZP": $RotationAxis
readonly "vec": $Vector3f


public static "values"(): ($RotationAxis)[]
public static "valueOf"(name: string): $RotationAxis
public "rad"(f: float): $Quaternionf
public "deg"(f: float): $Quaternionf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationAxis$Type = (("zn") | ("yn") | ("xn") | ("zp") | ("yp") | ("xp")) | ($RotationAxis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationAxis_ = $RotationAxis$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$BasicBlockJS$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BasicBlockJS$Builder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlockJS$Builder$Type = ($BasicBlockJS$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBlockJS$Builder_ = $BasicBlockJS$Builder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$HoeItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HoeItemBuilder extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItemBuilder$Type = ($HoeItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoeItemBuilder_ = $HoeItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$CustomStatBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomStatBuilder extends $BuilderBase<($ResourceLocation)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStatBuilder$Type = ($CustomStatBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomStatBuilder_ = $CustomStatBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $DataSenderKJS {

 "sendData"(channel: string, data: $CompoundTag$Type): void
 "sendData"(channel: string): void
}

export namespace $DataSenderKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSenderKJS$Type = ($DataSenderKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataSenderKJS_ = $DataSenderKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/stages/$Stages" {
import {$StageChangeEvent, $StageChangeEvent$Type} from "packages/dev/latvian/mods/kubejs/stages/$StageChangeEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StageCreationEvent, $StageCreationEvent$Type} from "packages/dev/latvian/mods/kubejs/stages/$StageCreationEvent"

export class $Stages {
readonly "player": $Player

constructor(p: $Player$Type)

public "sync"(): void
public "add"(stage: string): boolean
public "remove"(stage: string): boolean
public static "get"(player: $Player$Type): $Stages
public "clear"(): boolean
public "replace"(stages: $Collection$Type<(string)>): void
public "set"(stage: string, enabled: boolean): boolean
public static "create"(player: $Player$Type): $Stages
public static "added"(event: $Consumer$Type<($StageChangeEvent$Type)>): void
public static "removed"(event: $Consumer$Type<($StageChangeEvent$Type)>): void
public "has"(stage: string): boolean
public "getAll"(): $Collection<(string)>
public "toggle"(stage: string): boolean
public static "invokeAdded"(stages: $Stages$Type, stage: string): void
public "removeNoUpdate"(arg0: string): boolean
public static "overrideCreation"(event: $Consumer$Type<($StageCreationEvent$Type)>): void
public static "invokeRemoved"(stages: $Stages$Type, stage: string): void
public "addNoUpdate"(arg0: string): boolean
get "all"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stages$Type = ($Stages);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stages_ = $Stages$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$InputFluid" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$InputReplacementTransformer$Replacement, $InputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import {$FluidLike, $FluidLike$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidLike"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$InputReplacementTransformer, $InputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export interface $InputFluid extends $FluidLike, $InputReplacement {

 "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
 "copy"(amount: long): $FluidLike
 "matches"(other: $FluidLike$Type): boolean
 "isEmpty"(): boolean
 "getAmount"(): long
 "transform"(transformer: $InputReplacementTransformer$Type): $InputReplacementTransformer$Replacement

(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
}

export namespace $InputFluid {
function of(o: any): $InputReplacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputFluid$Type = ($InputFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputFluid_ = $InputFluid$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$ConsoleJS" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConsoleLine, $ConsoleLine$Type} from "packages/dev/latvian/mods/kubejs/script/$ConsoleLine"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$LogType, $LogType$Type} from "packages/dev/latvian/mods/kubejs/util/$LogType"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"

export class $ConsoleJS {
static "STARTUP": $ConsoleJS
static "SERVER": $ConsoleJS
static "CLIENT": $ConsoleJS
readonly "scriptType": $ScriptType

constructor(m: $ScriptType$Type, log: $Logger$Type)

public "group"(): void
public "log"(...message: (any)[]): void
public "flush"(sync: boolean): void
public "info"(message: any): $ConsoleLine
public "getLogger"(): $Logger
public "trace"(): void
public "debug"(message: any): $ConsoleLine
public "error"(message: string, error: $Throwable$Type, exitPattern: $Pattern$Type): $ConsoleLine
public "error"(message: any): $ConsoleLine
public "error"(message: string, throwable: $Throwable$Type): $ConsoleLine
public "warn"(message: string, error: $Throwable$Type, exitPattern: $Pattern$Type): $ConsoleLine
public "warn"(message: string, error: $Throwable$Type): $ConsoleLine
public "warn"(message: any): $ConsoleLine
public "groupEnd"(): void
public "writeToFile"(type: $LogType$Type, line: string): void
public "writeToFile"(type: $LogType$Type, timestamp: long, line: string): void
public static "getCurrent"(def: $ConsoleJS$Type): $ConsoleJS
public static "getCurrent"(cx: $Context$Type): $ConsoleJS
public "setCapturingErrors"(enabled: boolean): void
public "setDebugEnabled"(m: boolean): void
public "printObject"(o: any): void
public "printObject"(o: any, tree: boolean): void
public "handleError"(line: $ConsoleLine$Type, error: $Throwable$Type, exitPattern: $Pattern$Type, print: boolean): void
public "getMuted"(): boolean
public "setMuted"(m: boolean): void
public "setWriteToFile"(m: boolean): void
public "getWriteToFile"(): boolean
public "getDebugEnabled"(): boolean
public "printClass"(className: string): void
public "printClass"(className: string, tree: boolean): void
public "getScriptLine"(): integer
public "warnf"(message: string, ...args: (any)[]): $ConsoleLine
public "shouldPrintDebug"(): boolean
public "infof"(message: string, ...args: (any)[]): $ConsoleLine
public "errorf"(message: string, ...args: (any)[]): $ConsoleLine
public "debugf"(message: string, ...args: (any)[]): $ConsoleLine
public "resetFile"(): void
public "errorsComponent"(command: string): $Component
get "logger"(): $Logger
set "capturingErrors"(value: boolean)
set "debugEnabled"(value: boolean)
get "muted"(): boolean
set "muted"(value: boolean)
get "debugEnabled"(): boolean
get "scriptLine"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsoleJS$Type = ($ConsoleJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConsoleJS_ = $ConsoleJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/$NBTUtils" {
import {$ValueUnwrapper, $ValueUnwrapper$Type} from "packages/dev/latvian/mods/rhino/util/$ValueUnwrapper"
import {$TagType, $TagType$Type} from "packages/net/minecraft/nbt/$TagType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CollectionTag, $CollectionTag$Type} from "packages/net/minecraft/nbt/$CollectionTag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$OrderedCompoundTag, $OrderedCompoundTag$Type} from "packages/dev/latvian/mods/rhino/mod/util/$OrderedCompoundTag"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $NBTUtils {

}

export namespace $NBTUtils {
const VALUE_UNWRAPPER: $ValueUnwrapper
const COMPOUND_TYPE: $TagType<($OrderedCompoundTag)>
const LIST_TYPE: $TagType<($ListTag)>
function longTag(v: long): $Tag
function shortTag(v: short): $Tag
function byteTag(v: byte): $Tag
function intTag(v: integer): $Tag
function doubleTag(v: double): $Tag
function longArrayTag(v: (long)[]): $Tag
function accessTagMap(tag: $CompoundTag$Type): $Map<(string), ($Tag)>
function byteArrayTag(v: (byte)[]): $Tag
function intArrayTag(v: (integer)[]): $Tag
function floatTag(v: float): $Tag
function i(v: integer): $Tag
function b(v: byte): $Tag
function ba(v: (byte)[]): $Tag
function s(v: short): $Tag
function f(v: float): $Tag
function l(v: long): $Tag
function d(v: double): $Tag
function read(buf: $FriendlyByteBuf$Type): $OrderedCompoundTag
function convertType(tagType: $TagType$Type<(any)>): $TagType<(any)>
function stringTag(v: string): $Tag
function compoundTag(): $Tag
function compoundTag(map: $Map$Type<(any), (any)>): $Tag
function ia(v: (integer)[]): $Tag
function quoteAndEscapeForJS(stringBuilder: $StringBuilder$Type, string: string): void
function listTag(): $Tag
function listTag(list: $List$Type<(any)>): $Tag
function toJson(t: $Tag$Type): $JsonElement
function toTag(v: any): $Tag
function fromTag(t: $Tag$Type): any
function la(v: (long)[]): $Tag
function toTagCompound(v: any): $CompoundTag
function isTagCollection(o: any): boolean
function toTagList(list: any): $ListTag
function isTagCompound(o: any): boolean
function toTagCollection(c: $Collection$Type<(any)>): $CollectionTag<(any)>
function toTagCollection(v: any): $CollectionTag<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTUtils$Type = ($NBTUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTUtils_ = $NBTUtils$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $MutableArmorTier implements $ArmorMaterial {
readonly "parent": $ArmorMaterial

constructor(id: string, p: $ArmorMaterial$Type)

public "setName"(name: string): void
public "getDefenseForType"(equipmentSlot: $ArmorItem$Type$Type): integer
public "getVanillaRepairIngredient"(): $Ingredient
public "getKnockbackResistance"(): float
public "getDurabilityForType"(equipmentSlot: $ArmorItem$Type$Type): integer
public "getEquipSound"(): $SoundEvent
public "getToughness"(): float
public "getEnchantmentValue"(): integer
public "getName"(): string
public "setDurabilityMultiplier"(m: integer): void
public "setKnockbackResistance"(f: float): void
public "setRepairIngredient"(arg0: $Ingredient$Type): void
public "setEnchantmentValue"(i: integer): void
public "setSlotProtections"(p: (integer)[]): void
public "setEquipSound"(e: $SoundEvent$Type): void
public "setToughness"(f: float): void
set "name"(value: string)
get "vanillaRepairIngredient"(): $Ingredient
get "knockbackResistance"(): float
get "equipSound"(): $SoundEvent
get "toughness"(): float
get "enchantmentValue"(): integer
get "name"(): string
set "durabilityMultiplier"(value: integer)
set "knockbackResistance"(value: float)
set "repairIngredient"(value: $Ingredient$Type)
set "enchantmentValue"(value: integer)
set "slotProtections"(value: (integer)[])
set "equipSound"(value: $SoundEvent$Type)
set "toughness"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableArmorTier$Type = ($MutableArmorTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableArmorTier_ = $MutableArmorTier$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemStackSet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ItemStackSet implements $Iterable<($ItemStack)> {

constructor(...items: ($ItemStack$Type)[])
constructor()
constructor(initialSize: integer)

public "add"(stack: $ItemStack$Type): void
public "remove"(stack: $ItemStack$Type): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): ($ItemStack)[]
public "iterator"(): $Iterator<($ItemStack)>
public "toList"(): $List<($ItemStack)>
public "contains"(stack: $ItemStack$Type): boolean
public "forEach"(action: $Consumer$Type<(any)>): void
public "getFirst"(): $ItemStack
public "addItem"(item: $Item$Type): void
public "spliterator"(): $Spliterator<($ItemStack)>
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "empty"(): boolean
get "first"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackSet$Type = ($ItemStackSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackSet_ = $ItemStackSet$Type;
}}
declare module "packages/dev/latvian/mods/unit/$VariableSet" {
import {$MutableNumberUnit, $MutableNumberUnit$Type} from "packages/dev/latvian/mods/unit/$MutableNumberUnit"
import {$UnitVariables, $UnitVariables$Type} from "packages/dev/latvian/mods/unit/$UnitVariables"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export class $VariableSet implements $UnitVariables {

constructor()

public "getVariables"(): $VariableSet
public "setMutable"(name: string, initialValue: double): $MutableNumberUnit
public "createSubset"(): $VariableSet
public "get"(entry: string): $Unit
public "set"(name: string, value: $Unit$Type): $VariableSet
public "set"(name: string, value: double): $VariableSet
get "variables"(): $VariableSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableSet$Type = ($VariableSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableSet_ = $VariableSet$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/$NBTSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $NBTSerializable {

 "toNBT"(): $Tag

(): $Tag
}

export namespace $NBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTSerializable$Type = ($NBTSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTSerializable_ = $NBTSerializable$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$CanBeReplacedCallbackJS" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $CanBeReplacedCallbackJS {

constructor(blockPlaceContext: $BlockPlaceContext$Type, state: $BlockState$Type)

public "canBeReplaced"(): boolean
public "getClickedPos"(): $BlockPos
public "getClickedFace"(): $Direction
public "getClickLocation"(): $Vec3
public "isClickedPosIn"(fluid: $Fluid$Type): boolean
public "getItem"(): $ItemStack
public "getRotation"(): float
public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "getClickedBlock"(): $BlockContainerJS
public "getLevel"(): $Level
public "getHorizontalDirection"(): $Direction
public "isInside"(): boolean
public "getNearestLookingVerticalDirection"(): $Direction
public "getNearestLookingDirections"(): ($Direction)[]
public "isSecondaryUseActive"(): boolean
public "getFluidStateAtClickedPos"(): $FluidState
public "getNearestLookingDirection"(): $Direction
get "clickedPos"(): $BlockPos
get "clickedFace"(): $Direction
get "clickLocation"(): $Vec3
get "item"(): $ItemStack
get "rotation"(): float
get "hand"(): $InteractionHand
get "player"(): $Player
get "clickedBlock"(): $BlockContainerJS
get "level"(): $Level
get "horizontalDirection"(): $Direction
get "inside"(): boolean
get "nearestLookingVerticalDirection"(): $Direction
get "nearestLookingDirections"(): ($Direction)[]
get "secondaryUseActive"(): boolean
get "fluidStateAtClickedPos"(): $FluidState
get "nearestLookingDirection"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanBeReplacedCallbackJS$Type = ($CanBeReplacedCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanBeReplacedCallbackJS_ = $CanBeReplacedCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/$ProcessingRecipeSchema$ProcessingRecipeJS" {
import {$InputFluid, $InputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $ProcessingRecipeSchema$ProcessingRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "heated"(): $RecipeJS
public "superheated"(): $RecipeJS
public "writeInputFluid"(value: $InputFluid$Type): $JsonElement
public "readInputFluid"(from: any): $InputFluid
public "readOutputItem"(from: any): $OutputItem
public "inputFluidHasPriority"(from: any): boolean
public "inputItemHasPriority"(from: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingRecipeSchema$ProcessingRecipeJS$Type = ($ProcessingRecipeSchema$ProcessingRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessingRecipeSchema$ProcessingRecipeJS_ = $ProcessingRecipeSchema$ProcessingRecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$UUIDWrapper" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"

export interface $UUIDWrapper {

}

export namespace $UUIDWrapper {
function toString(id: $UUID$Type): string
function digits(sb: $StringBuilder$Type, val: long, digits: integer): void
function fromString(o: any): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UUIDWrapper$Type = ($UUIDWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UUIDWrapper_ = $UUIDWrapper$Type;
}}
declare module "packages/dev/latvian/mods/unit/$UnitContext" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"
import {$FunctionFactory, $FunctionFactory$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory"
import {$UnitTokenStream, $UnitTokenStream$Type} from "packages/dev/latvian/mods/unit/token/$UnitTokenStream"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnitContext {
static readonly "DEFAULT": $UnitContext
readonly "constants": $Map<(string), ($Unit)>

constructor()

public "getFunctionFactory"(name: string): $FunctionFactory
public "popDebug"(): void
public "createStream"(input: string): $UnitTokenStream
public "pushDebug"(): void
public "isDebug"(): boolean
public "parse"(input: string): $Unit
public "sub"(): $UnitContext
public "addConstant"(s: string, u: $Unit$Type): void
public "debugInfo"(s: string, values: $Collection$Type<(any)>): void
public "debugInfo"(s: string): void
public "addFunction"(factory: $FunctionFactory$Type): void
get "debug"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitContext$Type = ($UnitContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitContext_ = $UnitContext$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$MemberType" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MemberType extends $Enum<($MemberType)> {
static readonly "UNDEFINED": $MemberType
static readonly "OBJECT": $MemberType
static readonly "FUNCTION": $MemberType
static readonly "SYMBOL": $MemberType
static readonly "STRING": $MemberType
static readonly "NUMBER": $MemberType
static readonly "BOOLEAN": $MemberType


public static "get"(value: any, cx: $Context$Type): $MemberType
public "toString"(): string
public static "values"(): ($MemberType)[]
public static "valueOf"(name: string): $MemberType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemberType$Type = (("symbol") | ("number") | ("boolean") | ("string") | ("function") | ("undefined") | ("object")) | ($MemberType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemberType_ = $MemberType$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$AxeItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AxeItemBuilder extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemBuilder$Type = ($AxeItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemBuilder_ = $AxeItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS$After" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ExplosionEventJS, $ExplosionEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

/**
 * Invoked right after an explosion happens.
 */
export class $ExplosionEventJS$After extends $ExplosionEventJS {

constructor(level: $Level$Type, explosion: $Explosion$Type, affectedEntities: $List$Type<($Entity$Type)>)

/**
 * Remove all knockback from all affected *players*.
 */
public "removeKnockback"(): void
/**
 * Gets a list of all blocks affected by the explosion.
 */
public "getAffectedBlocks"(): $List<($BlockContainerJS)>
/**
 * Gets a list of all entities affected by the explosion.
 */
public "getAffectedEntities"(): $EntityArrayList
/**
 * Remove an entity from the list of affected entities.
 */
public "removeAffectedEntity"(entity: $Entity$Type): void
/**
 * Remove all entities from the list of affected entities.
 */
public "removeAllAffectedEntities"(): void
/**
 * Remove a block from the list of affected blocks.
 */
public "removeAffectedBlock"(block: $BlockContainerJS$Type): void
/**
 * Remove all blocks from the list of affected blocks.
 */
public "removeAllAffectedBlocks"(): void
get "affectedBlocks"(): $List<($BlockContainerJS)>
get "affectedEntities"(): $EntityArrayList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionEventJS$After$Type = ($ExplosionEventJS$After);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionEventJS$After_ = $ExplosionEventJS$After$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$LivingEntityKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityKJS, $EntityKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$EntityKJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$EntityPotionEffectsJS, $EntityPotionEffectsJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"

export interface $LivingEntityKJS extends $EntityKJS {

 "setDefaultMovementSpeedMultiplier"(speed: double): void
 "setTotalMovementSpeedMultiplier"(speed: double): void
 "foodEaten"(is: $ItemStack$Type): void
 "swing"(): void
 "swing"(hand: $InteractionHand$Type): void
 "isLiving"(): boolean
 "getEquipment"(slot: $EquipmentSlot$Type): $ItemStack
 "setMaxHealth"(hp: float): void
 "isUndead"(): boolean
 "setEquipment"(slot: $EquipmentSlot$Type, item: $ItemStack$Type): void
 "getHeldItem"(hand: $InteractionHand$Type): $ItemStack
 "setHeldItem"(hand: $InteractionHand$Type, item: $ItemStack$Type): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer): void
 "damageHeldItem"(): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "setOffHandItem"(item: $ItemStack$Type): void
 "rayTrace"(): $RayTraceResultJS
 "getOffHandItem"(): $ItemStack
 "self"(): $LivingEntity
 "setChestArmorItem"(item: $ItemStack$Type): void
 "setFeetArmorItem"(item: $ItemStack$Type): void
 "getReachDistance"(): double
 "modifyAttribute"(attribute: $Attribute$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): void
 "getMainHandItem"(): $ItemStack
 "getLegsArmorItem"(): $ItemStack
 "setDefaultMovementSpeed"(speed: double): void
 "getAttributeTotalValue"(attribute: $Attribute$Type): double
 "getPotionEffects"(): $EntityPotionEffectsJS
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer): void
 "damageEquipment"(slot: $EquipmentSlot$Type): void
 "removeAttribute"(attribute: $Attribute$Type, identifier: string): void
 "setMovementSpeedAddition"(speed: double): void
 "setAttributeBaseValue"(attribute: $Attribute$Type, value: double): void
 "setLegsArmorItem"(item: $ItemStack$Type): void
 "setHeadArmorItem"(item: $ItemStack$Type): void
 "getFeetArmorItem"(): $ItemStack
 "getAttributeBaseValue"(attribute: $Attribute$Type): double
 "getChestArmorItem"(): $ItemStack
 "getHeadArmorItem"(): $ItemStack
 "isHoldingInAnyHand"(i: $Ingredient$Type): boolean
 "setMainHandItem"(item: $ItemStack$Type): void
 "getDefaultMovementSpeed"(): double
 "getTotalMovementSpeed"(): double
 "canEntityBeSeen"(entity: $LivingEntity$Type): boolean
 "runCommand"(command: string): integer
 "isPlayer"(): boolean
 "spawn"(): void
 "getProfile"(): $GameProfile
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "getItem"(): $ItemStack
 "isFrame"(): boolean
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getPersistentData"(): $CompoundTag
 "setStatusMessage"(message: $Component$Type): void
}

export namespace $LivingEntityKJS {
const KJS_PLAYER_CUSTOM_SPEED: $UUID
const KJS_PLAYER_CUSTOM_SPEED_NAME: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityKJS$Type = ($LivingEntityKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityKJS_ = $LivingEntityKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/generator/$DataJsonGenerator" {
import {$ResourceGenerator, $ResourceGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$ResourceGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GeneratedData, $GeneratedData$Type} from "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DataJsonGenerator extends $ResourceGenerator {

constructor(m: $Map$Type<($ResourceLocation$Type), ($GeneratedData$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataJsonGenerator$Type = ($DataJsonGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataJsonGenerator_ = $DataJsonGenerator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$TextWrapper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ClickEvent, $ClickEvent$Type} from "packages/net/minecraft/network/chat/$ClickEvent"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

/**
 * The hub for all things text components. Format text to your hearts content!
 */
export class $TextWrapper {

constructor()

/**
 * Returns a component of the input, colored dark green
 */
public static "darkGreen"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored red
 */
public static "red"(text: any): $MutableComponent
/**
 * Checks if the passed in component, and all its children are empty
 */
public static "isEmpty"(component: $Component$Type): boolean
/**
 * Joins all components
 */
public static "join"(...texts: ($Component$Type)[]): $MutableComponent
/**
 * Joins all components in the list with the separator component
 */
public static "join"(separator: $MutableComponent$Type, texts: $Iterable$Type<(any)>): $MutableComponent
/**
 * Returns a Component of the input
 */
public static "of"(o: $MutableComponent$Type): $MutableComponent
/**
 * Returns an empty component
 */
public static "empty"(): $MutableComponent
/**
 * Returns a plain component of the passed in string, even if empty
 */
public static "string"(text: string): $MutableComponent
/**
 * Returns a plain component of the input
 */
public static "literal"(text: string): $MutableComponent
/**
 * Returns a translatable component of the input key, with args of the objects
 */
public static "translatable"(key: string, ...objects: (any)[]): $MutableComponent
/**
 * Returns a translatable component of the input key
 */
public static "translatable"(key: string): $MutableComponent
/**
 * Returns a component of the input, colored aqua
 */
public static "aqua"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored gray
 */
public static "gray"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored dark gray
 */
public static "darkGray"(text: any): $MutableComponent
/**
 * Returns a component displaying all entities matching the input selector, with a custom separator
 */
public static "selector"(selector: string, separator: $Component$Type): $MutableComponent
/**
 * Returns a component displaying all entities matching the input selector
 */
public static "selector"(selector: string): $MutableComponent
/**
 * Returns a keybinding component of the input keybinding descriptor
 */
public static "keybind"(keybind: string): $MutableComponent
/**
 * Returns a plain component of the string, or empty if it is an empty string
 */
public static "ofString"(s: string): $MutableComponent
/**
 * Returns a component of the input, colored gold
 */
public static "gold"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored black
 */
public static "black"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored blue
 */
public static "blue"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored green
 */
public static "green"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored yellow
 */
public static "yellow"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored white
 */
public static "white"(text: any): $MutableComponent
/**
 * Returns a translatable component of the input key
 */
public static "translate"(key: string): $MutableComponent
/**
 * Returns a translatable component of the input key, with args of the objects
 */
public static "translate"(key: string, ...objects: (any)[]): $MutableComponent
/**
 * Returns a score component of the input objective, for the provided selector
 */
public static "score"(selector: string, objective: string): $MutableComponent
/**
 * Returns a ClickEvent of the input
 */
public static "clickEventOf"(o: any): $ClickEvent
/**
 * Returns a component of the input, colored dark blue
 */
public static "darkBlue"(text: any): $MutableComponent
/**
 * Returns a colorful representation of the input nbt. Useful for displaying NBT to the player
 */
public static "prettyPrintNbt"(tag: $Tag$Type): $Component
/**
 * Returns a component of the input, colored dark purple
 */
public static "darkPurple"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored dark aqua
 */
public static "darkAqua"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored dark red
 */
public static "darkRed"(text: any): $MutableComponent
/**
 * Returns a component of the input, colored light purple
 */
public static "lightPurple"(text: any): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextWrapper$Type = ($TextWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextWrapper_ = $TextWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey" {
import {$RecipeOptional, $RecipeOptional$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeOptional"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"

export class $RecipeKey<T> {
readonly "component": $RecipeComponent<(T)>
readonly "name": string
readonly "names": $Set<(string)>
 "preferred": string
 "optional": $RecipeOptional<(T)>
 "excluded": boolean
 "noBuilders": boolean
 "allowEmpty": boolean
 "alwaysWrite": boolean

constructor(component: $RecipeComponent$Type<(T)>, name: string)

public "noBuilders"(): $RecipeKey<(T)>
public "defaultOptional"(): $RecipeKey<(T)>
public "alwaysWrite"(): $RecipeKey<(T)>
public "optional"(value: $RecipeOptional$Type<(T)>): $RecipeKey<(T)>
public "optional"(): boolean
public "optional"(value: T): $RecipeKey<(T)>
public "toString"(): string
public "hashCode"(): integer
public "exclude"(): $RecipeKey<(T)>
public "alt"(name: string): $RecipeKey<(T)>
public "alt"(...names: (string)[]): $RecipeKey<(T)>
public "preferred"(name: string): $RecipeKey<(T)>
public "includeInAutoConstructors"(): boolean
public "allowEmpty"(): $RecipeKey<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeKey$Type<T> = ($RecipeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeKey_<T> = $RecipeKey$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ServerLevelKJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FireworksJS, $FireworksJS$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WithPersistentData, $WithPersistentData$Type} from "packages/dev/latvian/mods/kubejs/core/$WithPersistentData"
import {$ExplosionJS, $ExplosionJS$Type} from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LevelKJS, $LevelKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$LevelKJS"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {

 "setTime"(time: long): void
 "spawnLightning"(x: double, y: double, z: double, effectOnly: boolean, player: $ServerPlayer$Type): void
 "spawnLightning"(x: double, y: double, z: double, effectOnly: boolean): void
 "getSide"(): $ScriptType
 "getEntities"(): $EntityArrayList
 "spawnParticles"(options: $ParticleOptions$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
 "runCommand"(command: string): integer
 "getBlock"(blockEntity: $BlockEntity$Type): $BlockContainerJS
 "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
 "getBlock"(pos: $BlockPos$Type): $BlockContainerJS
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "createExplosion"(x: double, y: double, z: double): $ExplosionJS
 "createEntityList"(entities: $Collection$Type<(any)>): $EntityArrayList
 "getEntitiesWithin"(aabb: $AABB$Type): $EntityArrayList
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "getDimension"(): $ResourceLocation
 "isOverworld"(): boolean
 "getPlayers"(): $EntityArrayList
 "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$Type): void
 "createEntity"(type: $EntityType$Type<(any)>): $Entity
 "getPersistentData"(): $CompoundTag
 "getData"(): $AttachedData<($Level)>
 "getDisplayName"(): $Component

(time: long): void
}

export namespace $ServerLevelKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelKJS$Type = ($ServerLevelKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelKJS_ = $ServerLevelKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$SwordItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SwordItemBuilder extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwordItemBuilder$Type = ($SwordItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwordItemBuilder_ = $SwordItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConditionContainer, $ConditionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FunctionContainer, $FunctionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import {$CopyNameFunction$NameSource, $CopyNameFunction$NameSource$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$LootContext$EntityTarget, $LootContext$EntityTarget$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConditionalFunction implements $FunctionContainer, $ConditionContainer {
 "function": $JsonObject
 "conditions": $JsonArray

constructor()

public "addConditionalFunction"(func: $Consumer$Type<($ConditionalFunction$Type)>): $FunctionContainer
public "enchantRandomly"(enchantments: ($ResourceLocation$Type)[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$Type, treasure: boolean): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$Type, limit: integer): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$Type): $FunctionContainer
public "furnaceSmelt"(): $FunctionContainer
public "name"(name: $Component$Type, entity: $LootContext$EntityTarget$Type): $FunctionContainer
public "name"(name: $Component$Type): $FunctionContainer
public "count"(count: $NumberProvider$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$Type): $FunctionContainer
public "lootTable"(table: $ResourceLocation$Type, seed: long): $FunctionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$Type, scores: $Map$Type<(string), (any)>): $ConditionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$Type, properties: $JsonObject$Type): $ConditionContainer
public "killedByPlayer"(): $ConditionContainer
public "randomChance"(chance: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalFunction$Type = ($ConditionalFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalFunction_ = $ConditionalFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/command/$CommandRegistryEventJS" {
import {$ClassWrapper, $ClassWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$ClassWrapper"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$LiteralCommandNode, $LiteralCommandNode$Type} from "packages/com/mojang/brigadier/tree/$LiteralCommandNode"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$LiteralArgumentBuilder, $LiteralArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder"
import {$ArgumentTypeWrappers, $ArgumentTypeWrappers$Type} from "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrappers"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Commands$CommandSelection, $Commands$CommandSelection$Type} from "packages/net/minecraft/commands/$Commands$CommandSelection"
import {$CommandDispatcher, $CommandDispatcher$Type} from "packages/com/mojang/brigadier/$CommandDispatcher"
import {$Commands, $Commands$Type} from "packages/net/minecraft/commands/$Commands"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export class $CommandRegistryEventJS extends $EventJS {
readonly "dispatcher": $CommandDispatcher<($CommandSourceStack)>
readonly "context": $CommandBuildContext
readonly "selection": $Commands$CommandSelection

constructor(dispatcher: $CommandDispatcher$Type<($CommandSourceStack$Type)>, context: $CommandBuildContext$Type, selection: $Commands$CommandSelection$Type)

public "isForMultiPlayer"(): boolean
public "isForSinglePlayer"(): boolean
public "register"(command: $LiteralArgumentBuilder$Type<($CommandSourceStack$Type)>): $LiteralCommandNode<($CommandSourceStack)>
public "getCommands"(): $ClassWrapper<($Commands)>
public "getArguments"(): $ClassWrapper<($ArgumentTypeWrappers)>
public "getRegistry"(): $CommandBuildContext
public "getBuiltinSuggestions"(): $ClassWrapper<($SharedSuggestionProvider)>
get "forMultiPlayer"(): boolean
get "forSinglePlayer"(): boolean
get "commands"(): $ClassWrapper<($Commands)>
get "arguments"(): $ClassWrapper<($ArgumentTypeWrappers)>
get "registry"(): $CommandBuildContext
get "builtinSuggestions"(): $ClassWrapper<($SharedSuggestionProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandRegistryEventJS$Type = ($CommandRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandRegistryEventJS_ = $CommandRegistryEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/$ValueUnwrapper" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $ValueUnwrapper {

 "unwrap"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: any): any

(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: any): any
}

export namespace $ValueUnwrapper {
const DEFAULT: $ValueUnwrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueUnwrapper$Type = ($ValueUnwrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueUnwrapper_ = $ValueUnwrapper$Type;
}}
declare module "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"

export interface $TypeWrapperFactory<T> {

 "wrap"(arg0: $Context$Type, arg1: any): T

(arg0: $Context$Type, arg1: any): T
}

export namespace $TypeWrapperFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeWrapperFactory$Type<T> = ($TypeWrapperFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeWrapperFactory_<T> = $TypeWrapperFactory$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/rhino/$Script" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $Script {

 "exec"(arg0: $Context$Type, arg1: $Scriptable$Type): any

(arg0: $Context$Type, arg1: $Scriptable$Type): any
}

export namespace $Script {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Script$Type = ($Script);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Script_ = $Script$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Element" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelGenerator$Face, $ModelGenerator$Face$Type} from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Face"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ModelGenerator$Element {

constructor()

public "box"(b: $AABB$Type): $ModelGenerator$Element
public "face"(direction: $Direction$Type, consumer: $Consumer$Type<($ModelGenerator$Face$Type)>): void
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelGenerator$Element$Type = ($ModelGenerator$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelGenerator$Element_ = $ModelGenerator$Element$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$CompostableRecipesEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Object2FloatMap, $Object2FloatMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatMap"

export class $CompostableRecipesEventJS extends $EventJS {
static "originalMap": $Object2FloatMap<($ItemLike)>

constructor()

public "add"(ingredient: $Ingredient$Type, f: float): void
public "remove"(ingredient: $Ingredient$Type): void
public "removeAll"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompostableRecipesEventJS$Type = ($CompostableRecipesEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompostableRecipesEventJS_ = $CompostableRecipesEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BiomeModifications$BiomeContext, $BiomeModifications$BiomeContext$Type} from "packages/dev/architectury/registry/level/biome/$BiomeModifications$BiomeContext"

export interface $BiomeFilter extends $Predicate<($BiomeModifications$BiomeContext)> {

 "test"(arg0: $BiomeModifications$BiomeContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BiomeModifications$BiomeContext)>
 "negate"(): $Predicate<($BiomeModifications$BiomeContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BiomeModifications$BiomeContext)>

(arg0: $BiomeModifications$BiomeContext$Type): boolean
}

export namespace $BiomeFilter {
const ALWAYS_TRUE: $BiomeFilter
const ALWAYS_FALSE: $BiomeFilter
function of(cx: $Context$Type, o: any): $BiomeFilter
function idFilter(cx: $Context$Type, s: string): $BiomeFilter
function isEqual<T>(arg0: any): $Predicate<($BiomeModifications$BiomeContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BiomeModifications$BiomeContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeFilter$Type = ($BiomeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeFilter_ = $BiomeFilter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemPickedUpEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

/**
 * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
 */
export class $ItemPickedUpEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, entity: $ItemEntity$Type, stack: $ItemStack$Type)

/**
 * The item entity that was picked up.
 */
public "getItemEntity"(): $ItemEntity
/**
 * The item that was picked up.
 */
public "getItem"(): $ItemStack
/**
 * The player that picked up the item.
 */
public "getEntity"(): $Player
get "itemEntity"(): $ItemEntity
get "item"(): $ItemStack
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPickedUpEventJS$Type = ($ItemPickedUpEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPickedUpEventJS_ = $ItemPickedUpEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyPlacementCallbackJS" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockStateModifyCallbackJS, $BlockStateModifyCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyCallbackJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockStateModifyPlacementCallbackJS extends $BlockStateModifyCallbackJS {
readonly "context": $BlockPlaceContext
readonly "minecraftBlock": $Block
 "block": $BlockContainerJS

constructor(context: $BlockPlaceContext$Type, block: $Block$Type)

/**
 * Checks if this block is in water
 */
public "isInWater"(): boolean
/**
 * Returns if the block being placed thinks it can be placed here. This is used for replacement checks, like placing blocks in water or tall grass
 */
public "canPlace"(): boolean
/**
 * Gets the clicked position in world
 */
public "getClickedPos"(): $BlockPos
/**
 * Gets the facing direction of the clicked block face
 */
public "getClickedFace"(): $Direction
/**
 * Gets the position in the block-space of where it was clicked
 */
public "getClickLocation"(): $Vec3
/**
 * Checks if the position clicked has a specified fluid there
 */
public "isClickedPosIn"(fluid: $Fluid$Type): boolean
/**
 * Checks if the block currently occupying the position this is being placed in is the same block type.
 * Used for things like candles, where multiple can be in the same block-space.
 */
public "isReplacingSelf"(): boolean
/**
 * Gets the item being placed
 */
public "getItem"(): $ItemStack
/**
 * Set if this block is waterlogged or not
 */
public "waterlogged"(waterlogged: boolean): $BlockStateModifyPlacementCallbackJS
/**
 * Set this block as waterlogged if it is in water
 */
public "waterlogged"(): $BlockStateModifyPlacementCallbackJS
/**
 * Get the horizontal rotation of the player
 */
public "getRotation"(): float
/**
 * Gets the hand that is placing the block
 */
public "getHand"(): $InteractionHand
/**
 * Gets the player placing the block, if available
 */
public "getPlayer"(): $Player
/**
 * Gets the clicked block
 */
public "getClickedBlock"(): $BlockContainerJS
/**
 * Gets the level
 */
public "getLevel"(): $Level
/**
 * Gets the nearest horizontal direction to where the player is looking. NORTH if there is no player
 */
public "getHorizontalDirection"(): $Direction
/**
 * Returns if the block being placed is replacing the block clicked
 */
public "replacingClickedOnBlock"(): boolean
/**
 * Returns if the hit posiiton in the block-space is inside the 1x1x1 cube of the block
 */
public "isInside"(): boolean
/**
 * Gets the vertical direction (UP/DOWN) closest to where the player is currently looking
 */
public "getNearestLookingVerticalDirection"(): $Direction
/**
 * Gets an array of all directions, ordered by which the player is looking closest to
 */
public "getNearestLookingDirections"(): ($Direction)[]
/**
 * Returns if the player is using the 'secondary' function of this item. Basically checks if they are holding shift
 */
public "isSecondaryUseActive"(): boolean
/**
 * Gets the FluidSate at the clicked position
 */
public "getFluidStateAtClickedPos"(): $FluidState
/**
 * Gets the direction closes to where the player is currently looking
 */
public "getNearestLookingDirection"(): $Direction
get "inWater"(): boolean
get "clickedPos"(): $BlockPos
get "clickedFace"(): $Direction
get "clickLocation"(): $Vec3
get "replacingSelf"(): boolean
get "item"(): $ItemStack
get "rotation"(): float
get "hand"(): $InteractionHand
get "player"(): $Player
get "clickedBlock"(): $BlockContainerJS
get "level"(): $Level
get "horizontalDirection"(): $Direction
get "inside"(): boolean
get "nearestLookingVerticalDirection"(): $Direction
get "nearestLookingDirections"(): ($Direction)[]
get "secondaryUseActive"(): boolean
get "fluidStateAtClickedPos"(): $FluidState
get "nearestLookingDirection"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateModifyPlacementCallbackJS$Type = ($BlockStateModifyPlacementCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateModifyPlacementCallbackJS_ = $BlockStateModifyPlacementCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$LangEventJS$Key" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $LangEventJS$Key extends $Record {

constructor(namespace: string, lang: string, key: string)

public "lang"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): string
public "namespace"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangEventJS$Key$Type = ($LangEventJS$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangEventJS$Key_ = $LangEventJS$Key$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$MutableToolTier, $MutableToolTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HandheldItemBuilder extends $ItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type, d: float, s: float)

public "tier"(t: $Tier$Type): $HandheldItemBuilder
/**
 * Sets the base attack damage of the tool. Different tools have different baselines.
 * 
 * For example, a sword has a baseline of 3, while an axe has a baseline of 6.
 * 
 * The actual damage is the sum of the baseline and the attackDamageBonus from tier.
 */
public "attackDamageBaseline"(f: float): $HandheldItemBuilder
/**
 * Sets the base attack speed of the tool. Different tools have different baselines.
 * 
 * For example, a sword has a baseline of -2.4, while an axe has a baseline of -3.1.
 * 
 * The actual speed is the sum of the baseline and the speed from tier + 4 (bare hand).
 */
public "speedBaseline"(f: float): $HandheldItemBuilder
/**
 * Modifies the tool tier.
 */
public "modifyTier"(callback: $Consumer$Type<($MutableToolTier$Type)>): $HandheldItemBuilder
/**
 * Sets the attack speed of the tool.
 */
public "speed"(f: float): $HandheldItemBuilder
/**
 * Sets the attack damage bonus of the tool.
 */
public "attackDamageBonus"(f: float): $HandheldItemBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandheldItemBuilder$Type = ($HandheldItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandheldItemBuilder_ = $HandheldItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LangEventJS, $LangEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$LangEventJS"
import {$DataJsonGenerator, $DataJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$DataJsonGenerator"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BuilderBase<T> implements $Supplier<(T)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

/**
 * Sets the translation key for this object, e.g. `block.minecraft.stone`.
 */
public "translationKey"(key: string): $BuilderBase<(T)>
public "get"(): T
public "toString"(): string
/**
 * Sets the display name for this object, e.g. `Stone`.
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$Type): $BuilderBase<(T)>
/**
 * Adds a tag to this object, e.g. `minecraft:stone`.
 */
public "tag"(tag: $ResourceLocation$Type): $BuilderBase<(T)>
public "getTranslationKeyGroup"(): string
public "getBuilderTranslationKey"(): string
public "createAdditionalObjects"(): void
/**
 * Makes displayName() override language files.
 */
public "formattedDisplayName"(): $BuilderBase<(T)>
/**
 * Combined method of formattedDisplayName().displayName(name).
 */
public "formattedDisplayName"(name: $Component$Type): $BuilderBase<(T)>
public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
public "generateLang"(lang: $LangEventJS$Type): void
public "generateDataJsons"(generator: $DataJsonGenerator$Type): void
public "getRegistryType"(): $RegistryInfo<(any)>
public "transformObject"(obj: T): T
public "newID"(pre: string, post: string): $ResourceLocation
public "createObject"(): T
get "translationKeyGroup"(): string
get "builderTranslationKey"(): string
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderBase$Type<T> = ($BuilderBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderBase_<T> = $BuilderBase$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$FireworksJS$Explosion" {
import {$FireworksJS$Shape, $FireworksJS$Shape$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS$Shape"
import {$IntOpenHashSet, $IntOpenHashSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntOpenHashSet"

export class $FireworksJS$Explosion {
 "shape": $FireworksJS$Shape
 "flicker": boolean
 "trail": boolean
readonly "colors": $IntOpenHashSet
readonly "fadeColors": $IntOpenHashSet

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworksJS$Explosion$Type = ($FireworksJS$Explosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireworksJS$Explosion_ = $FireworksJS$Explosion$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$IEventHandler" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"

export interface $IEventHandler {

 "onEvent"(arg0: $EventJS$Type): any

(arg0: $EventJS$Type): any
}

export namespace $IEventHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventHandler$Type = ($IEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventHandler_ = $IEventHandler$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateRotateCallbackJS" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockStateModifyCallbackJS, $BlockStateModifyCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyCallbackJS"

export class $BlockStateRotateCallbackJS extends $BlockStateModifyCallbackJS {

constructor(state: $BlockState$Type, rotation: $Rotation$Type)

/**
 * Rotates the specified direction
 */
public "rotate"(dir: $Direction$Type): $Direction
/**
 * Get the Rotation that this block is being rotated by
 */
public "getRotation"(): $Rotation
get "rotation"(): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRotateCallbackJS$Type = ($BlockStateRotateCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateRotateCallbackJS_ = $BlockStateRotateCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$JEISubtypesEventJS$Interpreter, $JEISubtypesEventJS$Interpreter$Type} from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS$Interpreter"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ISubtypeRegistration, $ISubtypeRegistration$Type} from "packages/mezz/jei/api/registration/$ISubtypeRegistration"

export class $JEISubtypesEventJS extends $EventJS {

constructor(r: $ISubtypeRegistration$Type)

public "useNBT"(items: $Ingredient$Type): void
public "useNBTKey"(items: $Ingredient$Type, key: string): void
public "registerInterpreter"(item: $Item$Type, interpreter: $JEISubtypesEventJS$Interpreter$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JEISubtypesEventJS$Type = ($JEISubtypesEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JEISubtypesEventJS_ = $JEISubtypesEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IJeiRuntime, $IJeiRuntime$Type} from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $HideJEIEventJS<T> extends $EventJS {

constructor(r: $IJeiRuntime$Type, t: $IIngredientType$Type<(T)>, f: $Function$Type<(any), ($Predicate$Type<(T)>)>, i: $Predicate$Type<(T)>)

public "getAllIngredients"(): $Collection<(T)>
public "hideAll"(): void
public "hide"(o: any): void
get "allIngredients"(): $Collection<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HideJEIEventJS$Type<T> = ($HideJEIEventJS<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HideJEIEventJS_<T> = $HideJEIEventJS$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArmorItemBuilder extends $ItemBuilder {
readonly "armorType": $ArmorItem$Type
 "armorTier": $MutableArmorTier
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean


public "tier"(t: $ArmorMaterial$Type): $ArmorItemBuilder
public "createObject"(): $Item
public "modifyTier"(callback: $Consumer$Type<($MutableArmorTier$Type)>): $ArmorItemBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItemBuilder$Type = ($ArmorItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorItemBuilder_ = $ArmorItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema$ShapedRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ShapedRecipeSchema$ShapedRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "afterLoaded"(): void
public "noMirror"(): $RecipeJS
public "noShrink"(): $RecipeJS
public "getSerializationTypeFunction"(): $RecipeTypeFunction
get "serializationTypeFunction"(): $RecipeTypeFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeSchema$ShapedRecipeJS$Type = ($ShapedRecipeSchema$ShapedRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeSchema$ShapedRecipeJS_ = $ShapedRecipeSchema$ShapedRecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$AndRecipeComponent, $AndRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$OrRecipeComponent, $OrRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArrayRecipeComponent<T> extends $Record implements $RecipeComponent<((T)[])> {

constructor(component: $RecipeComponent$Type<(T)>, canWriteSelf: boolean, arrayClass: $Class$Type<(any)>, emptyArray: (T)[])

public "canWriteSelf"(): boolean
public "add"(array: (T)[], value: T): (T)[]
public "remove"(array: (T)[], index: integer): (T)[]
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "newArray"(length: integer): (T)[]
public "componentType"(): string
public "addAll"(array: (T)[], ...values: (T)[]): (T)[]
public "component"(): $RecipeComponent<(T)>
public "write"(recipe: $RecipeJS$Type, value: (T)[]): $JsonElement
public "read"(recipe: $RecipeJS$Type, from: any): (T)[]
public "arrayClass"(): $Class<(any)>
public "emptyArray"(): (T)[]
public "componentClass"(): $Class<(any)>
public "replaceOutput"(recipe: $RecipeJS$Type, original: (T)[], match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): (T)[]
public "replaceInput"(recipe: $RecipeJS$Type, original: (T)[], match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): (T)[]
public "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
public "role"(): $ComponentRole
public "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
public "isOutput"(recipe: $RecipeJS$Type, value: (T)[], match: $ReplacementMatch$Type): boolean
public "isInput"(recipe: $RecipeJS$Type, value: (T)[], match: $ReplacementMatch$Type): boolean
public "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<((T)[])>, json: $JsonObject$Type): void
public "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<((T)[])>, json: $JsonObject$Type): void
public "orSelf"(): $RecipeComponent<((T)[])>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
public "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<((T)[])>
public static "builder"(): $RecipeComponentBuilder
public static "builder"(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
public "key"(name: string): $RecipeKey<((T)[])>
public "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<((T)[]), (O)>
public "asArray"(): $ArrayRecipeComponent<((T)[])>
public "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<((T)[]), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
public "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<((T)[])>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
public "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<((T)[])>
public "checkValueHasChanged"(oldValue: (T)[], newValue: (T)[]): boolean
public "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), ((T)[])>)>
public "checkEmpty"(key: $RecipeKey$Type<((T)[])>, value: (T)[]): string
public "asPatternKey"(): $RecipeComponent<($TinyMap<(character), ((T)[])>)>
public "asArrayOrSelf"(): $ArrayRecipeComponent<((T)[])>
public "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<((T)[])>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
public "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<((T)[])>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayRecipeComponent$Type<T> = ($ArrayRecipeComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayRecipeComponent_<T> = $ArrayRecipeComponent$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ClientPlayerKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Stages, $Stages$Type} from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NotificationBuilder, $NotificationBuilder$Type} from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EntityPotionEffectsJS, $EntityPotionEffectsJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$KubeJSInventoryListener, $KubeJSInventoryListener$Type} from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import {$PlayerStatsJS, $PlayerStatsJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$PlayerKJS, $PlayerKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$PlayerKJS"

export interface $ClientPlayerKJS extends $PlayerKJS {

 "getStats"(): $PlayerStatsJS
 "paint"(tag: $CompoundTag$Type): void
 "isMiningBlock"(): boolean
 "notify"(notification: $NotificationBuilder$Type): void
 "sendData"(channel: string, data: $CompoundTag$Type): void
 "isSelf"(): boolean
 "getInventory"(): $InventoryKJS
 "getStages"(): $Stages
 "isFake"(): boolean
 "isPlayer"(): boolean
 "give"(item: $ItemStack$Type): void
 "giveInHand"(item: $ItemStack$Type): void
 "getMouseItem"(): $ItemStack
 "setMouseItem"(item: $ItemStack$Type): void
 "addFood"(f: integer, m: float): void
 "spawn"(): void
 "getProfile"(): $GameProfile
 "addXPLevels"(l: integer): void
 "getXpLevel"(): integer
 "addXP"(xp: integer): void
 "setFoodLevel"(foodLevel: integer): void
 "getFoodLevel"(): integer
 "setXp"(xp: integer): void
 "setSaturation"(saturation: float): void
 "getXp"(): integer
 "setXpLevel"(l: integer): void
 "addExhaustion"(exhaustion: float): void
 "getSaturation"(): float
 "notify"(title: $Component$Type, text: $Component$Type): void
 "setStatusMessage"(message: $Component$Type): void
 "getSelectedSlot"(): integer
 "setSelectedSlot"(index: integer): void
 "addItemCooldown"(item: $Item$Type, ticks: integer): void
 "sendInventoryUpdate"(): void
 "boostElytraFlight"(): void
 "getInventoryChangeListener"(): $KubeJSInventoryListener
 "getOpenInventory"(): $AbstractContainerMenu
 "getCraftingGrid"(): $InventoryKJS
 "setDefaultMovementSpeedMultiplier"(speed: double): void
 "setTotalMovementSpeedMultiplier"(speed: double): void
 "foodEaten"(is: $ItemStack$Type): void
 "swing"(): void
 "swing"(hand: $InteractionHand$Type): void
 "isLiving"(): boolean
 "getEquipment"(slot: $EquipmentSlot$Type): $ItemStack
 "setMaxHealth"(hp: float): void
 "isUndead"(): boolean
 "setEquipment"(slot: $EquipmentSlot$Type, item: $ItemStack$Type): void
 "getHeldItem"(hand: $InteractionHand$Type): $ItemStack
 "setHeldItem"(hand: $InteractionHand$Type, item: $ItemStack$Type): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer): void
 "damageHeldItem"(): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "setOffHandItem"(item: $ItemStack$Type): void
 "rayTrace"(): $RayTraceResultJS
 "getOffHandItem"(): $ItemStack
 "setChestArmorItem"(item: $ItemStack$Type): void
 "setFeetArmorItem"(item: $ItemStack$Type): void
 "getReachDistance"(): double
 "modifyAttribute"(attribute: $Attribute$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): void
 "getMainHandItem"(): $ItemStack
 "getLegsArmorItem"(): $ItemStack
 "setDefaultMovementSpeed"(speed: double): void
 "getAttributeTotalValue"(attribute: $Attribute$Type): double
 "getPotionEffects"(): $EntityPotionEffectsJS
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer): void
 "damageEquipment"(slot: $EquipmentSlot$Type): void
 "removeAttribute"(attribute: $Attribute$Type, identifier: string): void
 "setMovementSpeedAddition"(speed: double): void
 "setAttributeBaseValue"(attribute: $Attribute$Type, value: double): void
 "setLegsArmorItem"(item: $ItemStack$Type): void
 "setHeadArmorItem"(item: $ItemStack$Type): void
 "getFeetArmorItem"(): $ItemStack
 "getAttributeBaseValue"(attribute: $Attribute$Type): double
 "getChestArmorItem"(): $ItemStack
 "getHeadArmorItem"(): $ItemStack
 "isHoldingInAnyHand"(i: $Ingredient$Type): boolean
 "setMainHandItem"(item: $ItemStack$Type): void
 "getDefaultMovementSpeed"(): double
 "getTotalMovementSpeed"(): double
 "canEntityBeSeen"(entity: $LivingEntity$Type): boolean
 "sendData"(channel: string): void
 "getData"(): $AttachedData<($Player)>
 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "getItem"(): $ItemStack
 "isFrame"(): boolean
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getPersistentData"(): $CompoundTag

(): $PlayerStatsJS
}

export namespace $ClientPlayerKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerKJS$Type = ($ClientPlayerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPlayerKJS_ = $ClientPlayerKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$LevelEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $LevelEventJS extends $EventJS {

constructor()

public "getServer"(): $MinecraftServer
public "getLevel"(): $Level
get "server"(): $MinecraftServer
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEventJS$Type = ($LevelEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEventJS_ = $LevelEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $MessageSenderKJS {

 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
}

export namespace $MessageSenderKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSenderKJS$Type = ($MessageSenderKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSenderKJS_ = $MessageSenderKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType" {
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeNamespace, $RecipeNamespace$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeNamespace"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeSchemaType {
readonly "namespace": $RecipeNamespace
readonly "id": $ResourceLocation
readonly "schema": $RecipeSchema
 "parent": $RecipeSchemaType

constructor(namespace: $RecipeNamespace$Type, id: $ResourceLocation$Type, schema: $RecipeSchema$Type)

public "toString"(): string
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSchemaType$Type = ($RecipeSchemaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSchemaType_ = $RecipeSchemaType$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $ExplosionEventJS extends $LevelEventJS {

constructor(level: $Level$Type, explosion: $Explosion$Type)

public "getPosition"(): $Vec3
public "getBlock"(): $BlockContainerJS
public "getY"(): double
public "getZ"(): double
public "getLevel"(): $Level
public "getX"(): double
public "getExploder"(): $LivingEntity
get "position"(): $Vec3
get "block"(): $BlockContainerJS
get "y"(): double
get "z"(): double
get "level"(): $Level
get "x"(): double
get "exploder"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionEventJS$Type = ($ExplosionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionEventJS_ = $ExplosionEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$BlockItemBuilder, $BlockItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockItemBuilder"
import {$FluidBuilder, $FluidBuilder$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidBuilder"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $FluidBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(b: $FluidBuilder$Type)

public "item"(i: $Consumer$Type<($BlockItemBuilder$Type)>): $BlockBuilder
public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBlockBuilder$Type = ($FluidBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBlockBuilder_ = $FluidBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/server/$CustomCommandEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CustomCommandEventJS extends $EntityEventJS {

constructor(l: $Level$Type, e: $Entity$Type, p: $BlockPos$Type, i: string)

public "getId"(): string
public "getBlock"(): $BlockContainerJS
public "getEntity"(): $Entity
public "getLevel"(): $Level
get "id"(): string
get "block"(): $BlockContainerJS
get "entity"(): $Entity
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCommandEventJS$Type = ($CustomCommandEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCommandEventJS_ = $CustomCommandEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$ClientInitEventJS" {
import {$EntityRendererProvider, $EntityRendererProvider$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MenuRegistry$ScreenFactory, $MenuRegistry$ScreenFactory$Type} from "packages/dev/architectury/registry/menu/$MenuRegistry$ScreenFactory"
import {$BlockEntityRendererProvider, $BlockEntityRendererProvider$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider"
import {$ClientEventJS, $ClientEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"

export class $ClientInitEventJS extends $ClientEventJS {

constructor()

public "registerMenuScreen"(type: $MenuType$Type<(any)>, screenFactory: $MenuRegistry$ScreenFactory$Type<(any), (any)>): void
public "registerBlockEntityRenderer"(type: $BlockEntityType$Type<(any)>, renderer: $BlockEntityRendererProvider$Type<(any)>): void
public "registerEntityRenderer"(type: $EntityType$Type<(any)>, renderer: $EntityRendererProvider$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientInitEventJS$Type = ($ClientInitEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientInitEventJS_ = $ClientInitEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeConstructor$Factory, $RecipeConstructor$Factory$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor$Factory"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RecipeConstructor, $RecipeConstructor$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $RecipeSchema {
static readonly "DEFAULT_UNIQUE_ID_FUNCTION": $Function<($RecipeJS), (string)>
readonly "recipeType": $Class<(any)>
readonly "factory": $Supplier<(any)>
readonly "keys": ($RecipeKey<(any)>)[]
 "uniqueIdFunction": $Function<($RecipeJS), (string)>

constructor(...keys: ($RecipeKey$Type<(any)>)[])
constructor(recipeType: $Class$Type<(any)>, factory: $Supplier$Type<(any)>, ...keys: ($RecipeKey$Type<(any)>)[])

public "outputCount"(): integer
public "uniqueOutputId"(resultItemKey: $RecipeKey$Type<($OutputItem$Type)>): $RecipeSchema
public static "normalizeId"(id: string): string
public "uniqueInputId"(resultItemKey: $RecipeKey$Type<($InputItem$Type)>): $RecipeSchema
public "addConstructor"(factory: $RecipeConstructor$Factory$Type, ...keys: ($RecipeKey$Type<(any)>)[]): $RecipeSchema
public "addConstructor"(...keys: ($RecipeKey$Type<(any)>)[]): $RecipeSchema
public "constructors"(): $Int2ObjectMap<($RecipeConstructor)>
public "inputCount"(): integer
public "deserialize"(type: $RecipeTypeFunction$Type, id: $ResourceLocation$Type, json: $JsonObject$Type): $RecipeJS
public "uniqueId"(uniqueIdFunction: $Function$Type<($RecipeJS$Type), (string)>): $RecipeSchema
public "uuid"(): $UUID
public "minRequiredArguments"(): integer
public "uniqueOutputArrayId"(resultItemKey: $RecipeKey$Type<(($OutputItem$Type)[])>): $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSchema$Type = ($RecipeSchema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSchema_ = $RecipeSchema$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$CropBlockBuilder$SurviveCallback" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $CropBlockBuilder$SurviveCallback {

 "survive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean

(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
}

export namespace $CropBlockBuilder$SurviveCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockBuilder$SurviveCallback$Type = ($CropBlockBuilder$SurviveCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropBlockBuilder$SurviveCallback_ = $CropBlockBuilder$SurviveCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$CarpetBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $CarpetBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "texture"(texture: string): $CarpetBlockBuilder
public "createObject"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarpetBlockBuilder$Type = ($CarpetBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarpetBlockBuilder_ = $CarpetBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/properties/$AddSpawnProperties" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"

export class $AddSpawnProperties {
 "_category": $MobCategory
 "biomes": $BiomeFilter
 "weight": integer
 "_entity": $EntityType<(any)>
 "minCount": integer
 "maxCount": integer

constructor()

public "setEntity"(s: string): void
public "setCategory"(s: string): void
set "entity"(value: string)
set "category"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSpawnProperties$Type = ($AddSpawnProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddSpawnProperties_ = $AddSpawnProperties$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$FoodBuilder" {
import {$FoodEatenEventJS, $FoodEatenEventJS$Type} from "packages/dev/latvian/mods/kubejs/item/$FoodEatenEventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FoodBuilder {
 "eaten": $Consumer<($FoodEatenEventJS)>

constructor()
constructor(properties: $FoodProperties$Type)

public "build"(): $FoodProperties
/**
 * Sets the hunger restored.
 */
public "hunger"(h: integer): $FoodBuilder
/**
 * Sets a callback that is called when the food is eaten.
 * 
 * Note: This is currently not having effect in `ItemEvents.modification`,
 * as firing this callback requires an `ItemBuilder` instance in the `Item`.
 */
public "eaten"(e: $Consumer$Type<($FoodEatenEventJS$Type)>): $FoodBuilder
/**
 * Sets whether the food is meat.
 */
public "meat"(flag: boolean): $FoodBuilder
/**
 * Sets the food is meat.
 */
public "meat"(): $FoodBuilder
/**
 * Adds an effect to the food. Note that the effect duration is in ticks (20 ticks = 1 second).
 * 
 * @param mobEffectId - The id of the effect. Can be either a string or a ResourceLocation.
 * @param duration - The duration of the effect in ticks.
 * @param amplifier - The amplifier of the effect. 0 means level 1, 1 means level 2, etc.
 * @param probability - The probability of the effect being applied. 1 = 100%.
 */
public "effect"(mobEffectId: $ResourceLocation$Type, duration: integer, amplifier: integer, probability: float): $FoodBuilder
/**
 * Sets the saturation modifier. Note that the saturation restored is hunger * saturation.
 */
public "saturation"(s: float): $FoodBuilder
/**
 * Sets whether the food is fast to eat (having half of the eating time).
 */
public "fastToEat"(flag: boolean): $FoodBuilder
/**
 * Sets the food is fast to eat (having half of the eating time).
 */
public "fastToEat"(): $FoodBuilder
/**
 * Sets the food is always edible.
 */
public "alwaysEdible"(): $FoodBuilder
/**
 * Sets whether the food is always edible.
 */
public "alwaysEdible"(flag: boolean): $FoodBuilder
/**
 * Removes an effect from the food.
 */
public "removeEffect"(mobEffect: $MobEffect$Type): $FoodBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodBuilder$Type = ($FoodBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodBuilder_ = $FoodBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemTooltipEventJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ItemTooltipEventJS$StaticTooltipHandler, $ItemTooltipEventJS$StaticTooltipHandler$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemTooltipEventJS$StaticTooltipHandler"
import {$ItemTooltipEventJS$StaticTooltipHandlerFromJS, $ItemTooltipEventJS$StaticTooltipHandlerFromJS$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemTooltipEventJS$StaticTooltipHandlerFromJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * Invoked when registering handlers for item tooltips.
 * 
 * `text` can be a component or a list of components.
 */
export class $ItemTooltipEventJS extends $EventJS {

constructor(m: $Map$Type<($Item$Type), ($List$Type<($ItemTooltipEventJS$StaticTooltipHandler$Type)>)>)

/**
 * Adds a dynamic tooltip handler to all items matching the ingredient.
 */
public "addAdvanced"(item: $Ingredient$Type, handler: $ItemTooltipEventJS$StaticTooltipHandlerFromJS$Type): void
/**
 * Is shift key pressed.
 */
public "isShift"(): boolean
/**
 * Adds a dynamic tooltip handler to all items.
 */
public "addAdvancedToAll"(handler: $ItemTooltipEventJS$StaticTooltipHandlerFromJS$Type): void
/**
 * Is control key pressed.
 */
public "isCtrl"(): boolean
/**
 * Is alt key pressed.
 */
public "isAlt"(): boolean
/**
 * Adds text to all items.
 */
public "addToAll"(text: any): void
/**
 * Adds text to all items matching the ingredient.
 */
public "add"(item: $Ingredient$Type, text: any): void
get "shift"(): boolean
get "ctrl"(): boolean
get "alt"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEventJS$Type = ($ItemTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTooltipEventJS_ = $ItemTooltipEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickHandler" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ChestMenuClickEvent, $ChestMenuClickEvent$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ChestMenuClickEvent$Callback, $ChestMenuClickEvent$Callback$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent$Callback"

export class $ChestMenuClickHandler extends $Record {

constructor(type: $ClickType$Type, button: integer, callback: $ChestMenuClickEvent$Callback$Type, autoHandle: boolean)

public "type"(): $ClickType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(event: $ChestMenuClickEvent$Type): boolean
public "callback"(): $ChestMenuClickEvent$Callback
public "button"(): integer
public "autoHandle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuClickHandler$Type = ($ChestMenuClickHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuClickHandler_ = $ChestMenuClickHandler$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderType" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BuilderFactory, $BuilderFactory$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory"

export class $BuilderType<T> extends $Record {

constructor(type: string, builderClass: $Class$Type<(any)>, factory: $BuilderFactory$Type)

public "type"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $BuilderFactory
public "builderClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderType$Type<T> = ($BuilderType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderType_<T> = $BuilderType$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$IngredientWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CustomIngredientActionCallback, $CustomIngredientActionCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$CustomIngredientActionCallback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

/**
 * Various Ingredient related helper methods
 */
export interface $IngredientWrapper {

}

export namespace $IngredientWrapper {
const none: $Ingredient
const all: $Ingredient
function customNBT(arg0: $Ingredient$Type, predicate: $Predicate$Type<($CompoundTag$Type)>): $Ingredient
function of(ingredient: $Ingredient$Type): $Ingredient
function of(ingredient: $Ingredient$Type, count: integer): $InputItem
function registerCustomIngredientAction(id: string, callback: $CustomIngredientActionCallback$Type): void
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $Ingredient
function custom(parent: $Ingredient$Type, predicate: $Predicate$Type<($ItemStack$Type)>): $Ingredient
function isIngredient(o: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientWrapper$Type = ($IngredientWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientWrapper_ = $IngredientWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilterParseEvent" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeFilter, $RecipeFilter$Type} from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeFilterParseEvent {

 "parse"(arg0: $Context$Type, arg1: $List$Type<($RecipeFilter$Type)>, arg2: $Map$Type<(any), (any)>): void

(arg0: $Context$Type, arg1: $List$Type<($RecipeFilter$Type)>, arg2: $Map$Type<(any), (any)>): void
}

export namespace $RecipeFilterParseEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFilterParseEvent$Type = ($RecipeFilterParseEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFilterParseEvent_ = $RecipeFilterParseEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$ButtonBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $ButtonBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "behaviour"(wt: string): $ButtonBlockBuilder
public "behaviour"(wt: $BlockSetType$Type): $ButtonBlockBuilder
public "arrowsCanPress"(b: boolean): $ButtonBlockBuilder
public "ticksToStayPressed"(t: integer): $ButtonBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonBlockBuilder$Type = ($ButtonBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonBlockBuilder_ = $ButtonBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$PotionBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionBuilder extends $BuilderBase<($Potion)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "addEffect"(effect: $MobEffectInstance$Type): $PotionBuilder
public "effect"(effect: $MobEffect$Type, duration: integer, amplifier: integer): $PotionBuilder
public "effect"(effect: $MobEffect$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean): $PotionBuilder
public "effect"(effect: $MobEffect$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance$Type): $PotionBuilder
public "effect"(effect: $MobEffect$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean): $PotionBuilder
public "effect"(effect: $MobEffect$Type, duration: integer): $PotionBuilder
public "effect"(effect: $MobEffect$Type): $PotionBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBuilder$Type = ($PotionBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBuilder_ = $PotionBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder$Leggings" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ArmorItemBuilder, $ArmorItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArmorItemBuilder$Leggings extends $ArmorItemBuilder {
readonly "armorType": $ArmorItem$Type
 "armorTier": $MutableArmorTier
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItemBuilder$Leggings$Type = ($ArmorItemBuilder$Leggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorItemBuilder$Leggings_ = $ArmorItemBuilder$Leggings$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$VariantBlockStateGenerator, $VariantBlockStateGenerator$Type} from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator"
import {$MultipartBlockStateGenerator, $MultipartBlockStateGenerator$Type} from "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator"
import {$ResourceGenerator, $ResourceGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$ResourceGenerator"
import {$ModelGenerator, $ModelGenerator$Type} from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GeneratedData, $GeneratedData$Type} from "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AssetJsonGenerator extends $ResourceGenerator {

constructor(m: $Map$Type<($ResourceLocation$Type), ($GeneratedData$Type)>)

public static "asItemModelLocation"(id: $ResourceLocation$Type): $ResourceLocation
public "blockState"(id: $ResourceLocation$Type, consumer: $Consumer$Type<($VariantBlockStateGenerator$Type)>): void
public "multipartState"(id: $ResourceLocation$Type, consumer: $Consumer$Type<($MultipartBlockStateGenerator$Type)>): void
public "stencil"(target: $ResourceLocation$Type, stencil: string, colors: $JsonObject$Type): void
public "blockModel"(id: $ResourceLocation$Type, consumer: $Consumer$Type<($ModelGenerator$Type)>): void
public "itemModel"(id: $ResourceLocation$Type, consumer: $Consumer$Type<($ModelGenerator$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssetJsonGenerator$Type = ($AssetJsonGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssetJsonGenerator_ = $AssetJsonGenerator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$DetectorBlock$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $DetectorBlock$Builder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "detectorId"(id: string): $DetectorBlock$Builder
public "generateAssetJsons"(generator: $AssetJsonGenerator$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$Builder$Type = ($DetectorBlock$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock$Builder_ = $DetectorBlock$Builder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuClickEvent" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ChestMenuSlot, $ChestMenuSlot$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuSlot"

export class $ChestMenuClickEvent {
readonly "slot": $ChestMenuSlot
readonly "type": $ClickType
readonly "button": integer

constructor(slot: $ChestMenuSlot$Type, type: $ClickType$Type, button: integer)

public "setHandled"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuClickEvent$Type = ($ChestMenuClickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuClickEvent_ = $ChestMenuClickEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptTypePredicate" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptTypePredicate extends $Predicate<($ScriptType)> {

 "test"(arg0: $ScriptType$Type): boolean
 "getValidTypes"(): $List<($ScriptType)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ScriptType)>
 "negate"(): $Predicate<($ScriptType)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ScriptType)>

(arg0: $ScriptType$Type): boolean
}

export namespace $ScriptTypePredicate {
const ALL: $ScriptTypePredicate
const COMMON: $ScriptTypePredicate
const STARTUP_OR_CLIENT: $ScriptTypePredicate
const STARTUP_OR_SERVER: $ScriptTypePredicate
function isEqual<T>(arg0: any): $Predicate<($ScriptType)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ScriptType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptTypePredicate$Type = ($ScriptTypePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptTypePredicate_ = $ScriptTypePredicate$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockPlacedEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * Invoked when a block is placed.
 */
export class $BlockPlacedEventJS extends $EntityEventJS {

constructor(entity: $Entity$Type, level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type)

/**
 * The block that is placed.
 */
public "getBlock"(): $BlockContainerJS
/**
 * The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
 */
public "getEntity"(): $Entity
/**
 * The level of the block that was placed.
 */
public "getLevel"(): $Level
get "block"(): $BlockContainerJS
get "entity"(): $Entity
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacedEventJS$Type = ($BlockPlacedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacedEventJS_ = $BlockPlacedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$JsonRecipeJS" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $JsonRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "deserialize"(merge: boolean): void
public "serialize"(): void
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonRecipeJS$Type = ($JsonRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonRecipeJS_ = $JsonRecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$LootTableEntry" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConditionalFunction, $ConditionalFunction$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import {$ConditionContainer, $ConditionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FunctionContainer, $FunctionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import {$CopyNameFunction$NameSource, $CopyNameFunction$NameSource$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$LootContext$EntityTarget, $LootContext$EntityTarget$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootTableEntry implements $FunctionContainer, $ConditionContainer {
readonly "json": $JsonObject

constructor(o: $JsonObject$Type)

public "quality"(quality: integer): $LootTableEntry
public "weight"(weight: integer): $LootTableEntry
public "addCondition"(o: $JsonObject$Type): $LootTableEntry
public "addConditionalFunction"(func: $Consumer$Type<($ConditionalFunction$Type)>): $FunctionContainer
public "enchantRandomly"(enchantments: ($ResourceLocation$Type)[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$Type, treasure: boolean): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$Type, limit: integer): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$Type): $FunctionContainer
public "furnaceSmelt"(): $FunctionContainer
public "name"(name: $Component$Type, entity: $LootContext$EntityTarget$Type): $FunctionContainer
public "name"(name: $Component$Type): $FunctionContainer
public "count"(count: $NumberProvider$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$Type): $FunctionContainer
public "lootTable"(table: $ResourceLocation$Type, seed: long): $FunctionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$Type, scores: $Map$Type<(string), (any)>): $ConditionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$Type, properties: $JsonObject$Type): $ConditionContainer
public "killedByPlayer"(): $ConditionContainer
public "randomChance"(chance: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEntry$Type = ($LootTableEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableEntry_ = $LootTableEntry$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$RecipeKJS, $RecipeKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeFilterParseEvent, $RecipeFilterParseEvent$Type} from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilterParseEvent"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export interface $RecipeFilter extends $Predicate<($RecipeKJS)> {

 "test"(arg0: $RecipeKJS$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($RecipeKJS)>
 "negate"(): $Predicate<($RecipeKJS)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($RecipeKJS)>

(arg0: $RecipeKJS$Type): boolean
}

export namespace $RecipeFilter {
const PARSE: $Event<($RecipeFilterParseEvent)>
function of(cx: $Context$Type, o: any): $RecipeFilter
function isEqual<T>(arg0: any): $Predicate<($RecipeKJS)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($RecipeKJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFilter$Type = (RegExp) | ("*") | ("-") | (($RecipeFilter$Type)[]) | ({"id"?: Special.RecipeId, "input"?: $InputItem$Type, "output"?: $OutputItem$Type, "or"?: $RecipeFilter$Type, "group"?: string, "type"?: Special.RecipeType, "mod"?: Special.Mod, "not"?: $RecipeFilter$Type}) | ($RecipeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFilter_ = $RecipeFilter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemTooltipEventJS$StaticTooltipHandlerFromJS" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemTooltipEventJS$StaticTooltipHandlerFromJS {

 "accept"(arg0: $ItemStack$Type, arg1: boolean, arg2: $List$Type<(any)>): void

(arg0: $ItemStack$Type, arg1: boolean, arg2: $List$Type<(any)>): void
}

export namespace $ItemTooltipEventJS$StaticTooltipHandlerFromJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEventJS$StaticTooltipHandlerFromJS$Type = ($ItemTooltipEventJS$StaticTooltipHandlerFromJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTooltipEventJS$StaticTooltipHandlerFromJS_ = $ItemTooltipEventJS$StaticTooltipHandlerFromJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$ClientEventJS" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"

export class $ClientEventJS extends $PlayerEventJS {

constructor()

public "getPlayer"(): $LocalPlayer
get "player"(): $LocalPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEventJS$Type = ($ClientEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEventJS_ = $ClientEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS" {
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$ObjectDescJS, $ObjectDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$ObjectDescJS"

export interface $TypeDescJS {

 "withGenerics"(...types: ($TypeDescJS$Type)[]): $TypeDescJS
 "build"(): string
 "build"(arg0: $StringBuilder$Type): void
 "or"(type: $TypeDescJS$Type): $TypeDescJS
 "asArray"(): $TypeDescJS
 "asMap"(key: $TypeDescJS$Type): $TypeDescJS
 "asMap"(): $TypeDescJS

(...types: ($TypeDescJS$Type)[]): $TypeDescJS
}

export namespace $TypeDescJS {
const ANY: $TypeDescJS
const NULL: $TypeDescJS
const STRING: $TypeDescJS
const NUMBER: $TypeDescJS
const BOOLEAN: $TypeDescJS
const MAP: $TypeDescJS
const ANY_MAP: $TypeDescJS
function fixedArray(...types: ($TypeDescJS$Type)[]): $TypeDescJS
function object(init: integer): $ObjectDescJS
function object(): $ObjectDescJS
function any(...types: ($TypeDescJS$Type)[]): $TypeDescJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescJS$Type = ($TypeDescJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescJS_ = $TypeDescJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/special/$ShapedKubeJSRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$IngredientAction, $IngredientAction$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KubeJSCraftingRecipe, $KubeJSCraftingRecipe$Type} from "packages/dev/latvian/mods/kubejs/recipe/special/$KubeJSCraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $ShapedKubeJSRecipe extends $ShapedRecipe implements $KubeJSCraftingRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(id: $ResourceLocation$Type, group: string, category: $CraftingBookCategory$Type, width: integer, height: integer, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type, mirror: boolean, ingredientActions: $List$Type<($IngredientAction$Type)>, modifyResult: $ModifyRecipeResultCallback$Type, stage: string)

public "matches"(craftingContainer: $CraftingContainer$Type, level: $Level$Type): boolean
public "getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "kjs$getModifyResult"(): $ModifyRecipeResultCallback
public "kjs$getIngredientActions"(): $List<($IngredientAction)>
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "kjs$getStage"(): string
public "kjs$getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "kjs$assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedKubeJSRecipe$Type = ($ShapedKubeJSRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedKubeJSRecipe_ = $ShapedKubeJSRecipe$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$EntityKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$MessageSenderKJS, $MessageSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$ScriptTypeHolder, $ScriptTypeHolder$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WithPersistentData, $WithPersistentData$Type} from "packages/dev/latvian/mods/kubejs/core/$WithPersistentData"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {

 "runCommand"(command: string): integer
 "isPlayer"(): boolean
 "spawn"(): void
 "getProfile"(): $GameProfile
 "isLiving"(): boolean
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "getItem"(): $ItemStack
 "isFrame"(): boolean
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "self"(): $Entity
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getPersistentData"(): $CompoundTag
 "setStatusMessage"(message: $Component$Type): void
}

export namespace $EntityKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityKJS$Type = ($EntityKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityKJS_ = $EntityKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientActionFilter" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IngredientActionFilter {
 "filterIndex": integer
 "filterIngredient": $Ingredient

constructor()

public "checkFilter"(index: integer, stack: $ItemStack$Type): boolean
public "copyFrom"(filter: $IngredientActionFilter$Type): void
public static "filterOf"(o: any): $IngredientActionFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientActionFilter$Type = (integer) | ($Ingredient$Type) | ({"item"?: $Ingredient$Type, "index"?: integer}) | ($IngredientActionFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientActionFilter_ = $IngredientActionFilter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityInfo" {
import {$BlockEntityEventCallback, $BlockEntityEventCallback$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityEventCallback"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockEntityCallback, $BlockEntityCallback$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityCallback"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockEntityInfo {

constructor(blockBuilder: $BlockBuilder$Type)

public "toString"(): string
public "eventHandler"(eventId: integer, callback: $BlockEntityEventCallback$Type): void
public "attach"(type: string, args: $Map$Type<(string), (any)>): void
public "clientTick"(frequency: integer, offset: integer, callback: $BlockEntityCallback$Type): void
public "clientTick"(callback: $BlockEntityCallback$Type): void
public "tick"(callback: $BlockEntityCallback$Type): void
public "tick"(frequency: integer, offset: integer, callback: $BlockEntityCallback$Type): void
public "serverTick"(frequency: integer, offset: integer, callback: $BlockEntityCallback$Type): void
public "serverTick"(callback: $BlockEntityCallback$Type): void
public "inventory"(width: integer, height: integer, inputFilter: $Ingredient$Type): void
public "inventory"(width: integer, height: integer): void
public "enableSync"(): void
public "initialData"(data: $CompoundTag$Type): void
public "rightClickOpensInventory"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityInfo$Type = ($BlockEntityInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityInfo_ = $BlockEntityInfo$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export class $RandomTickCallbackJS {
 "block": $BlockContainerJS
 "random": $RandomSource

constructor(containerJS: $BlockContainerJS$Type, random: $RandomSource$Type)

public "getServer"(): $MinecraftServer
public "getLevel"(): $Level
get "server"(): $MinecraftServer
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomTickCallbackJS$Type = ($RandomTickCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomTickCallbackJS_ = $RandomTickCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemSmeltedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

/**
 * Invoked when an item is smelted by a player.
 */
export class $ItemSmeltedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, smelted: $ItemStack$Type)

/**
 * The item that was smelted.
 */
public "getItem"(): $ItemStack
/**
 * The player that smelted the item.
 */
public "getEntity"(): $Player
get "item"(): $ItemStack
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSmeltedEventJS$Type = ($ItemSmeltedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSmeltedEventJS_ = $ItemSmeltedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/events/$SpecialSpoutHandlerEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$SpecialSpoutHandlerEvent$SpoutHandler, $SpecialSpoutHandlerEvent$SpoutHandler$Type} from "packages/dev/latvian/mods/kubejs/create/events/$SpecialSpoutHandlerEvent$SpoutHandler"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpecialSpoutHandlerEvent extends $EventJS {

constructor()

public "add"(path: $ResourceLocation$Type, block: $BlockStatePredicate$Type, handler: $SpecialSpoutHandlerEvent$SpoutHandler$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialSpoutHandlerEvent$Type = ($SpecialSpoutHandlerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialSpoutHandlerEvent_ = $SpecialSpoutHandlerEvent$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$ScriptableObject" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ConstProperties, $ConstProperties$Type} from "packages/dev/latvian/mods/rhino/$ConstProperties"
import {$Callable, $Callable$Type} from "packages/dev/latvian/mods/rhino/$Callable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MemberType, $MemberType$Type} from "packages/dev/latvian/mods/rhino/$MemberType"
import {$SymbolScriptable, $SymbolScriptable$Type} from "packages/dev/latvian/mods/rhino/$SymbolScriptable"
import {$WrappedExecutable, $WrappedExecutable$Type} from "packages/dev/latvian/mods/rhino/$WrappedExecutable"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$Symbol, $Symbol$Type} from "packages/dev/latvian/mods/rhino/$Symbol"
import {$ExternalArrayData, $ExternalArrayData$Type} from "packages/dev/latvian/mods/rhino/$ExternalArrayData"

export class $ScriptableObject implements $Scriptable, $SymbolScriptable, $ConstProperties {
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "DONTENUM": integer
static readonly "PERMANENT": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "CONST": integer

constructor()
constructor(scope: $Scriptable$Type, prototype: $Scriptable$Type)

public "get"(cx: $Context$Type, name: string, start: $Scriptable$Type): any
public "get"(cx: $Context$Type, key: any): any
public "get"(cx: $Context$Type, index: integer, start: $Scriptable$Type): any
public "get"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type): any
public "put"(cx: $Context$Type, name: string, start: $Scriptable$Type, value: any): void
public "put"(cx: $Context$Type, index: integer, start: $Scriptable$Type, value: any): void
public "put"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type, value: any): void
public static "getProperty"(obj: $Scriptable$Type, key: $Symbol$Type, cx: $Context$Type): any
public static "getProperty"(obj: $Scriptable$Type, index: integer, cx: $Context$Type): any
public static "getProperty"(obj: $Scriptable$Type, name: string, cx: $Context$Type): any
public "isEmpty"(): boolean
public "size"(): integer
public "isSealed"(cx: $Context$Type): boolean
public static "defineClass"<T extends $Scriptable>(scope: $Scriptable$Type, clazz: $Class$Type<(T)>, cx: $Context$Type): void
public static "defineClass"<T extends $Scriptable>(scope: $Scriptable$Type, clazz: $Class$Type<(T)>, sealed: boolean, mapInheritance: boolean, cx: $Context$Type): string
public static "defineClass"<T extends $Scriptable>(scope: $Scriptable$Type, clazz: $Class$Type<(T)>, sealed: boolean, cx: $Context$Type): void
public "delete"(cx: $Context$Type, key: $Symbol$Type): void
public "delete"(cx: $Context$Type, index: integer): void
public "delete"(cx: $Context$Type, name: string): void
public static "getDefaultValue"(object: $Scriptable$Type, typeHint: $Class$Type<(any)>, cx: $Context$Type): any
public "getDefaultValue"(cx: $Context$Type, typeHint: $Class$Type<(any)>): any
public "getAttributes"(cx: $Context$Type, name: string): integer
public "getAttributes"(cx: $Context$Type, sym: $Symbol$Type): integer
public "getAttributes"(cx: $Context$Type, index: integer): integer
public "getClassName"(): string
public "has"(cx: $Context$Type, name: string, start: $Scriptable$Type): boolean
public "has"(cx: $Context$Type, index: integer, start: $Scriptable$Type): boolean
public "has"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type): boolean
public "defineProperty"(cx: $Context$Type, propertyName: string, delegateTo: any, getter: $WrappedExecutable$Type, setter: $WrappedExecutable$Type, attributes: integer): void
public "defineProperty"(cx: $Context$Type, propertyName: string, value: any, attributes: integer): void
public static "defineProperty"(destination: $Scriptable$Type, propertyName: string, value: any, attributes: integer, cx: $Context$Type): void
public "defineProperty"(cx: $Context$Type, propertyName: string, clazz: $Class$Type<(any)>, attributes: integer): void
public "defineProperty"(cx: $Context$Type, key: $Symbol$Type, value: any, attributes: integer): void
public "isConst"(name: string): boolean
public "setAttributes"(cx: $Context$Type, name: string, attributes: integer): void
public "setAttributes"(cx: $Context$Type, key: $Symbol$Type, attributes: integer): void
public "setAttributes"(cx: $Context$Type, index: integer, attributes: integer): void
public static "getFunctionPrototype"(scope: $Scriptable$Type, cx: $Context$Type): $Scriptable
public static "hasProperty"(obj: $Scriptable$Type, name: string, cx: $Context$Type): boolean
public static "hasProperty"(obj: $Scriptable$Type, index: integer, cx: $Context$Type): boolean
public static "hasProperty"(obj: $Scriptable$Type, key: $Symbol$Type, cx: $Context$Type): boolean
public "defineFunctionProperties"(cx: $Context$Type, names: (string)[], clazz: $Class$Type<(any)>, attributes: integer): void
public static "defineConstProperty"(destination: $Scriptable$Type, propertyName: string, cx: $Context$Type): void
public "getExternalArrayLength"(): any
public "defineOwnProperties"(cx: $Context$Type, props: $ScriptableObject$Type): void
public "avoidObjectDetection"(): boolean
public "getExternalArrayData"(): $ExternalArrayData
public "setExternalArrayData"(cx: $Context$Type, array: $ExternalArrayData$Type): void
public static "getGeneratorFunctionPrototype"(scope: $Scriptable$Type, cx: $Context$Type): $Scriptable
public "setParentScope"(m: $Scriptable$Type): void
public "defineOwnProperty"(cx: $Context$Type, id: any, desc: $ScriptableObject$Type): void
public "isExtensible"(): boolean
public "preventExtensions"(): void
public "getIds"(cx: $Context$Type): (any)[]
public static "deleteProperty"(obj: $Scriptable$Type, name: string, cx: $Context$Type): boolean
public static "deleteProperty"(obj: $Scriptable$Type, index: integer, cx: $Context$Type): boolean
public "hasInstance"(cx: $Context$Type, instance: $Scriptable$Type): boolean
public static "getObjectPrototype"(scope: $Scriptable$Type, cx: $Context$Type): $Scriptable
public "getPrototype"(cx: $Context$Type): $Scriptable
public static "getArrayPrototype"(scope: $Scriptable$Type, cx: $Context$Type): $Scriptable
public "setPrototype"(m: $Scriptable$Type): void
public static "getClassPrototype"(scope: $Scriptable$Type, className: string, cx: $Context$Type): $Scriptable
public static "getTopLevelScope"(obj: $Scriptable$Type): $Scriptable
public "sealObject"(cx: $Context$Type): void
public static "getPropertyIds"(cx: $Context$Type, obj: $Scriptable$Type): (any)[]
public static "redefineProperty"(obj: $Scriptable$Type, name: string, isConst: boolean, cx: $Context$Type): void
public static "putProperty"(obj: $Scriptable$Type, index: integer, value: any, cx: $Context$Type): void
public static "putProperty"(obj: $Scriptable$Type, name: string, value: any, cx: $Context$Type): void
public static "putProperty"(obj: $Scriptable$Type, key: $Symbol$Type, value: any, cx: $Context$Type): void
public static "getTopScopeValue"(scope: $Scriptable$Type, key: any, cx: $Context$Type): any
public "defineConst"(cx: $Context$Type, name: string, start: $Scriptable$Type): void
public "putConst"(cx: $Context$Type, name: string, start: $Scriptable$Type, value: any): void
public static "putConstProperty"(obj: $Scriptable$Type, name: string, value: any, cx: $Context$Type): void
public "getAssociatedValue"(key: any): any
public "setGetterOrSetter"(cx: $Context$Type, name: string, index: integer, getterOrSetter: $Callable$Type, isSetter: boolean): void
public "getGetterOrSetter"(name: string, index: integer, isSetter: boolean): any
public "associateValue"(key: any, value: any): any
public "getParentScope"(): $Scriptable
public "getAllIds"(cx: $Context$Type): (any)[]
public "getTypeOf"(): $MemberType
public "enumerationIteratorHasNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
public "enumerationIteratorNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
get "empty"(): boolean
get "className"(): string
get "externalArrayLength"(): any
get "externalArrayData"(): $ExternalArrayData
set "parentScope"(value: $Scriptable$Type)
get "extensible"(): boolean
set "prototype"(value: $Scriptable$Type)
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptableObject$Type = ($ScriptableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptableObject_ = $ScriptableObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ComponentRole extends $Enum<($ComponentRole)> {
static readonly "INPUT": $ComponentRole
static readonly "OUTPUT": $ComponentRole
static readonly "OTHER": $ComponentRole


public static "values"(): ($ComponentRole)[]
public static "valueOf"(name: string): $ComponentRole
public "isOther"(): boolean
public "isOutput"(): boolean
public "isInput"(): boolean
get "other"(): boolean
get "output"(): boolean
get "input"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentRole$Type = (("output") | ("input") | ("other")) | ($ComponentRole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentRole_ = $ComponentRole$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$AtlasSpriteRegistryEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AtlasSpriteRegistryEventJS extends $EventJS {

constructor(registry: $Consumer$Type<($ResourceLocation$Type)>)

public "register"(id: $ResourceLocation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtlasSpriteRegistryEventJS$Type = ($AtlasSpriteRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtlasSpriteRegistryEventJS_ = $AtlasSpriteRegistryEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$ScriptStackElement" {
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"

export class $ScriptStackElement {
readonly "fileName": string
readonly "functionName": string
readonly "lineNumber": integer

constructor(fileName: string, functionName: string, lineNumber: integer)

public "toString"(): string
public "renderJavaStyle"(sb: $StringBuilder$Type): void
public "renderMozillaStyle"(sb: $StringBuilder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptStackElement$Type = ($ScriptStackElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptStackElement_ = $ScriptStackElement$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$FireworksJS$Shape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FireworksJS$Shape extends $Enum<($FireworksJS$Shape)> {
static readonly "SMALL_BALL": $FireworksJS$Shape
static readonly "LARGE_BALL": $FireworksJS$Shape
static readonly "STAR": $FireworksJS$Shape
static readonly "CREEPER": $FireworksJS$Shape
static readonly "BURST": $FireworksJS$Shape
static readonly "VALUES": ($FireworksJS$Shape)[]
readonly "type": integer


public static "get"(name: string): $FireworksJS$Shape
public static "values"(): ($FireworksJS$Shape)[]
public static "valueOf"(name: string): $FireworksJS$Shape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworksJS$Shape$Type = (("large_ball") | ("star") | ("burst") | ("creeper") | ("small_ball")) | ($FireworksJS$Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireworksJS$Shape_ = $FireworksJS$Shape$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export class $FluidWrapper {
static readonly "WATER_ID": $ResourceLocation
static readonly "LAVA_ID": $ResourceLocation

constructor()

public static "of"(o: $FluidStackJS$Type): $FluidStackJS
public static "of"(o: $FluidStackJS$Type, amount: integer, nbt: $CompoundTag$Type): $FluidStackJS
public static "of"(o: $FluidStackJS$Type, nbt: $CompoundTag$Type): $FluidStackJS
public static "of"(o: $FluidStackJS$Type, amount: integer): $FluidStackJS
public static "getId"(fluid: $Fluid$Type): $ResourceLocation
public static "getType"(id: $ResourceLocation$Type): $Fluid
public static "exists"(id: $ResourceLocation$Type): boolean
public static "lava"(): $FluidStackJS
public static "lava"(amount: integer): $FluidStackJS
public static "getEmpty"(): $FluidStackJS
public static "getTypes"(): $List<(string)>
public static "water"(): $FluidStackJS
public static "water"(amount: integer): $FluidStackJS
get "empty"(): $FluidStackJS
get "types"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidWrapper$Type = ($FluidWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidWrapper_ = $FluidWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidBuilder" {
import {$FluidBlockBuilder, $FluidBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidBlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$FlowingFluidBuilder, $FlowingFluidBuilder$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FlowingFluidBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidBucketItemBuilder, $FluidBucketItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidBucketItemBuilder"

export class $FluidBuilder extends $BuilderBase<($FlowingFluid)> {
 "attributes": $ArchitecturyFluidAttributes
 "flowingFluid": $FlowingFluidBuilder
 "block": $FluidBlockBuilder
 "bucketItem": $FluidBucketItemBuilder
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createAttributes"(): $ArchitecturyFluidAttributes
public "color"(c: $Color$Type): $FluidBuilder
public "displayName"(name: $Component$Type): $BuilderBase<($FlowingFluid)>
public "tag"(tag: $ResourceLocation$Type): $BuilderBase<($FlowingFluid)>
public "density"(density: integer): $FluidBuilder
public "createAdditionalObjects"(): void
public "translucent"(): $FluidBuilder
public "rarity"(rarity: $Rarity$Type): $FluidBuilder
public "gaseous"(): $FluidBuilder
public "renderType"(l: string): $FluidBuilder
public "temperature"(temperature: integer): $FluidBuilder
public "viscosity"(viscosity: integer): $FluidBuilder
public "noBucket"(): $FluidBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "createObject"(): $FlowingFluid
public "noBlock"(): $FluidBuilder
public "bucketColor"(c: $Color$Type): $FluidBuilder
public "thinTexture"(color: $Color$Type): $FluidBuilder
public "builtinTextures"(): $FluidBuilder
public "thickTexture"(color: $Color$Type): $FluidBuilder
public "stillTexture"(id: $ResourceLocation$Type): $FluidBuilder
public "flowingTexture"(id: $ResourceLocation$Type): $FluidBuilder
public "luminosity"(luminosity: integer): $FluidBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBuilder$Type = ($FluidBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBuilder_ = $FluidBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$EntityLootEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$LootEventJS, $LootEventJS$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityLootEventJS extends $LootEventJS {

constructor(c: $Map$Type<($ResourceLocation$Type), ($JsonElement$Type)>)

public "getType"(): string
public "addEntity"(type: $EntityType$Type<(any)>, b: $Consumer$Type<($LootBuilder$Type)>): void
public "modifyEntity"(type: $EntityType$Type<(any)>, b: $Consumer$Type<($LootBuilder$Type)>): void
public "getDirectory"(): string
get "type"(): string
get "directory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLootEventJS$Type = ($EntityLootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityLootEventJS_ = $EntityLootEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$CheckLivingEntitySpawnEventJS" {
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$BaseSpawner, $BaseSpawner$Type} from "packages/net/minecraft/world/level/$BaseSpawner"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

/**
 * Invoked before an entity is spawned into the world.
 * 
 * Only entities from a `BaseSpawner` or world generation will trigger this event.
 */
export class $CheckLivingEntitySpawnEventJS extends $LivingEntityEventJS {
readonly "x": double
readonly "y": double
readonly "z": double
readonly "type": $MobSpawnType
readonly "spawner": $BaseSpawner

constructor(entity: $LivingEntity$Type, level: $Level$Type, x: double, y: double, z: double, type: $MobSpawnType$Type, spawner: $BaseSpawner$Type)

/**
 * The type of spawn.
 */
public "getType"(): $MobSpawnType
/**
 * The block the entity is being spawned on.
 */
public "getBlock"(): $BlockContainerJS
/**
 * The spawner that spawned the entity. Can be null if the entity was spawned by worldgen.
 */
public "getSpawner"(): $BaseSpawner
/**
 * The level the entity is being spawned into.
 */
public "getLevel"(): $Level
get "type"(): $MobSpawnType
get "block"(): $BlockContainerJS
get "spawner"(): $BaseSpawner
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CheckLivingEntitySpawnEventJS$Type = ($CheckLivingEntitySpawnEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CheckLivingEntitySpawnEventJS_ = $CheckLivingEntitySpawnEventJS$Type;
}}
declare module "packages/dev/latvian/mods/unit/$MutableNumberUnit" {
import {$UnitVariables, $UnitVariables$Type} from "packages/dev/latvian/mods/unit/$UnitVariables"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export class $MutableNumberUnit extends $Unit {
 "value": double
static "EMPTY_ARRAY": ($Unit)[]

constructor(value: double)

public "get"(variables: $UnitVariables$Type): double
public "toString"(builder: $StringBuilder$Type): void
public "set"(value: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableNumberUnit$Type = ($MutableNumberUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableNumberUnit_ = $MutableNumberUnit$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityPotionEffectsJS {

constructor(e: $LivingEntity$Type)

public "add"(mobEffect: $MobEffect$Type, duration: integer): void
public "add"(mobEffect: $MobEffect$Type, duration: integer, amplifier: integer): void
public "add"(mobEffect: $MobEffect$Type): void
public "add"(mobEffect: $MobEffect$Type, duration: integer, amplifier: integer, ambient: boolean, showParticles: boolean): void
public "clear"(): void
public "isActive"(mobEffect: $MobEffect$Type): boolean
public "getMap"(): $Map<($MobEffect), ($MobEffectInstance)>
public "getDuration"(mobEffect: $MobEffect$Type): integer
public "getActive"(mobEffect: $MobEffect$Type): $MobEffectInstance
public "getActive"(): $Collection<($MobEffectInstance)>
public "isApplicable"(effect: $MobEffectInstance$Type): boolean
get "map"(): $Map<($MobEffect), ($MobEffectInstance)>
get "active"(): $Collection<($MobEffectInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPotionEffectsJS$Type = ($EntityPotionEffectsJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPotionEffectsJS_ = $EntityPotionEffectsJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent" {
import {$ScheduledEvents, $ScheduledEvents$Type} from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"

export class $ScheduledEvents$ScheduledEvent {
 "scheduledEvents": $ScheduledEvents
 "id": integer
 "ofTicks": boolean
 "repeating": boolean
 "timer": long
 "endTime": long

constructor()

public "clear"(): void
public "reschedule"(): $ScheduledEvents$ScheduledEvent
public "reschedule"(timer: long): $ScheduledEvents$ScheduledEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledEvents$ScheduledEvent$Type = ($ScheduledEvents$ScheduledEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledEvents$ScheduledEvent_ = $ScheduledEvents$ScheduledEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$BlockWrapper" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockPredicate"
import {$BlockIDPredicate, $BlockIDPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockIDPredicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntityPredicate, $BlockEntityPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockEntityPredicate"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * Various block related helper functions
 */
export class $BlockWrapper {

constructor()

public static "id"(id: $ResourceLocation$Type, properties: $Map$Type<(string), (any)>): $BlockIDPredicate
public static "id"(id: $ResourceLocation$Type): $BlockIDPredicate
/**
 * Gets a blocks id from the Block
 */
public static "getId"(block: $Block$Type): $ResourceLocation
/**
 * Gets a Block from a block id
 */
public static "getBlock"(id: $ResourceLocation$Type): $Block
public static "custom"(predicate: $BlockPredicate$Type): $BlockPredicate
public static "entity"(id: $ResourceLocation$Type): $BlockEntityPredicate
/**
 * Get a map of direction name to Direction. Functionally identical to Direction.ALL
 */
public static "getFacing"(): $Map<(string), ($Direction)>
/**
 * Gets a list of the classname of all registered blocks
 */
public static "getTypeList"(): $List<(string)>
/**
 * Gets a list of all blocks with tags
 */
public static "getTaggedIds"(tag: $ResourceLocation$Type): $List<($ResourceLocation)>
get "facing"(): $Map<(string), ($Direction)>
get "typeList"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWrapper$Type = ($BlockWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWrapper_ = $BlockWrapper$Type;
}}
declare module "packages/dev/latvian/mods/unit/token/$CharStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CharStream {
readonly "chars": (character)[]
 "position": integer
 "skipWhitespace": boolean

constructor(c: (character)[])

public "nextIf"(match: character): boolean
public "next"(): character
public "peek"(ahead: integer): character
public "peek"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharStream$Type = ($CharStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharStream_ = $CharStream$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback" {
import {$ModifyRecipeCraftingGrid, $ModifyRecipeCraftingGrid$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeCraftingGrid"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModifyRecipeResultCallback {

 "modify"(arg0: $ModifyRecipeCraftingGrid$Type, arg1: $ItemStack$Type): $ItemStack

(arg0: $ModifyRecipeCraftingGrid$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $ModifyRecipeResultCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyRecipeResultCallback$Type = ($ModifyRecipeResultCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyRecipeResultCallback_ = $ModifyRecipeResultCallback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/special/$ShapelessKubeJSRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$IngredientAction, $IngredientAction$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KubeJSCraftingRecipe, $KubeJSCraftingRecipe$Type} from "packages/dev/latvian/mods/kubejs/recipe/special/$KubeJSCraftingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $ShapelessKubeJSRecipe extends $ShapelessRecipe implements $KubeJSCraftingRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(original: $ShapelessRecipe$Type, ingredientActions: $List$Type<($IngredientAction$Type)>, modifyResult: $ModifyRecipeResultCallback$Type, stage: string)

public "getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "kjs$getModifyResult"(): $ModifyRecipeResultCallback
public "kjs$getIngredientActions"(): $List<($IngredientAction)>
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "kjs$getStage"(): string
public "kjs$getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "kjs$assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessKubeJSRecipe$Type = ($ShapelessKubeJSRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessKubeJSRecipe_ = $ShapelessKubeJSRecipe$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$ErrorReporter" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$EvaluatorException, $EvaluatorException$Type} from "packages/dev/latvian/mods/rhino/$EvaluatorException"

export interface $ErrorReporter {

 "runtimeError"(arg0: $Context$Type, arg1: string, arg2: string, arg3: integer, arg4: string, arg5: integer): $EvaluatorException
 "error"(arg0: $Context$Type, arg1: string, arg2: string, arg3: integer, arg4: string, arg5: integer): void
 "warning"(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: integer): void
}

export namespace $ErrorReporter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorReporter$Type = ($ErrorReporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErrorReporter_ = $ErrorReporter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ItemToolTierRegistryEventJS" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$MutableToolTier, $MutableToolTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"

/**
 * Invoked when the game is starting up and the item tool tiers are being registered.
 */
export class $ItemToolTierRegistryEventJS extends $StartupEventJS {

constructor()

/**
 * Adds a new tool tier.
 */
public "add"(id: string, tier: $Consumer$Type<($MutableToolTier$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemToolTierRegistryEventJS$Type = ($ItemToolTierRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemToolTierRegistryEventJS_ = $ItemToolTierRegistryEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeConstructor$Factory, $RecipeConstructor$Factory$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor$Factory"

export class $RecipeConstructor extends $Record {

constructor(schema: $RecipeSchema$Type, keys: ($RecipeKey$Type<(any)>)[], factory: $RecipeConstructor$Factory$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $RecipeConstructor$Factory
public "keys"(): ($RecipeKey<(any)>)[]
public "schema"(): $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeConstructor$Type = ($RecipeConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeConstructor_ = $RecipeConstructor$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$VariantBlockStateGenerator$Variant, $VariantBlockStateGenerator$Variant$Type} from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Variant"

export class $VariantBlockStateGenerator {

constructor()

public "variant"(key: string, consumer: $Consumer$Type<($VariantBlockStateGenerator$Variant$Type)>): void
public "simpleVariant"(key: string, model: string): void
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateGenerator$Type = ($VariantBlockStateGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateGenerator_ = $VariantBlockStateGenerator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$GenerateClientAssetsEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$VariantBlockStateGenerator, $VariantBlockStateGenerator$Type} from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator"
import {$MultipartBlockStateGenerator, $MultipartBlockStateGenerator$Type} from "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ModelGenerator, $ModelGenerator$Type} from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GenerateClientAssetsEventJS extends $EventJS {
readonly "generator": $AssetJsonGenerator

constructor(gen: $AssetJsonGenerator$Type)

public "addModel"(type: string, id: $ResourceLocation$Type, consumer: $Consumer$Type<($ModelGenerator$Type)>): void
public "add"(location: $ResourceLocation$Type, json: $JsonElement$Type): void
public "defaultHandheldItemModel"(id: $ResourceLocation$Type): void
public "addMultipartBlockState"(id: $ResourceLocation$Type, consumer: $Consumer$Type<($MultipartBlockStateGenerator$Type)>): void
public "defaultItemModel"(id: $ResourceLocation$Type): void
public "addBlockState"(id: $ResourceLocation$Type, consumer: $Consumer$Type<($VariantBlockStateGenerator$Type)>): void
public "addLang"(key: string, value: string): void
public "stencil"(target: $ResourceLocation$Type, stencil: string, colors: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerateClientAssetsEventJS$Type = ($GenerateClientAssetsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerateClientAssetsEventJS_ = $GenerateClientAssetsEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$LivingEntityDeathEventJS" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

/**
 * Invoked before a living entity dies.
 * 
 * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
 */
export class $LivingEntityDeathEventJS extends $LivingEntityEventJS {

constructor(entity: $LivingEntity$Type, source: $DamageSource$Type)

/**
 * The damage source that triggers the death.
 */
public "getSource"(): $DamageSource
/**
 * The entity that dies.
 */
public "getEntity"(): $LivingEntity
get "source"(): $DamageSource
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityDeathEventJS$Type = ($LivingEntityDeathEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityDeathEventJS_ = $LivingEntityDeathEventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$Function" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Callable, $Callable$Type} from "packages/dev/latvian/mods/rhino/$Callable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MemberType, $MemberType$Type} from "packages/dev/latvian/mods/rhino/$MemberType"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $Function extends $Scriptable, $Callable {

 "call"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: $Scriptable$Type, arg3: (any)[]): any
 "construct"(arg0: $Context$Type, arg1: $Scriptable$Type, arg2: (any)[]): $Scriptable
 "enumerationIteratorHasNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
 "enumerationIteratorNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
 "get"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): any
 "get"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type): any
 "put"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type, arg3: any): void
 "put"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type, arg3: any): void
 "delete"(arg0: $Context$Type, arg1: integer): void
 "delete"(arg0: $Context$Type, arg1: string): void
 "getDefaultValue"(arg0: $Context$Type, arg1: $Class$Type<(any)>): any
 "getClassName"(): string
 "has"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): boolean
 "has"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type): boolean
 "setParentScope"(arg0: $Scriptable$Type): void
 "getIds"(arg0: $Context$Type): (any)[]
 "hasInstance"(arg0: $Context$Type, arg1: $Scriptable$Type): boolean
 "getPrototype"(arg0: $Context$Type): $Scriptable
 "setPrototype"(arg0: $Scriptable$Type): void
 "getParentScope"(): $Scriptable
 "getAllIds"(cx: $Context$Type): (any)[]
 "getTypeOf"(): $MemberType
}

export namespace $Function {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$Type = ($Function);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_ = $Function$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$ColorWrapper" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ColorWrapper {

}

export namespace $ColorWrapper {
const MAP: $Map<(string), ($Color)>
const TEXT: $Map<(string), ($ChatFormatting)>
const DYE: $Map<(string), ($DyeColor)>
const NONE: $Color
const BLACK: $Color
const DARK_BLUE: $Color
const DARK_GREEN: $Color
const DARK_AQUA: $Color
const DARK_RED: $Color
const DARK_PURPLE: $Color
const GOLD: $Color
const GRAY: $Color
const DARK_GRAY: $Color
const BLUE: $Color
const GREEN: $Color
const AQUA: $Color
const RED: $Color
const LIGHT_PURPLE: $Color
const YELLOW: $Color
const WHITE: $Color
const WHITE_DYE: $Color
const ORANGE_DYE: $Color
const MAGENTA_DYE: $Color
const LIGHT_BLUE_DYE: $Color
const YELLOW_DYE: $Color
const LIME_DYE: $Color
const PINK_DYE: $Color
const GRAY_DYE: $Color
const LIGHT_GRAY_DYE: $Color
const CYAN_DYE: $Color
const PURPLE_DYE: $Color
const BLUE_DYE: $Color
const BROWN_DYE: $Color
const GREEN_DYE: $Color
const RED_DYE: $Color
const BLACK_DYE: $Color
function of(o: any): $Color
function rgba(r: integer, g: integer, b: integer, a: integer): $Color
function createMapped(o: any, ...names: (string)[]): $Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorWrapper$Type = ($ColorWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorWrapper_ = $ColorWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS$Interpreter" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $JEISubtypesEventJS$Interpreter extends $Function<($ItemStack), (any)> {

 "apply"(arg0: $ItemStack$Type): any
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), (any)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($ItemStack), (V)>

(arg0: $ItemStack$Type): any
}

export namespace $JEISubtypesEventJS$Interpreter {
function identity<T>(): $Function<($ItemStack), ($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JEISubtypesEventJS$Interpreter$Type = ($JEISubtypesEventJS$Interpreter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JEISubtypesEventJS$Interpreter_ = $JEISubtypesEventJS$Interpreter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper$ModInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PlatformWrapper$ModInfo {

constructor(i: string)

public "getName"(): string
public "setName"(n: string): void
public "getId"(): string
public "getVersion"(): string
public "getCustomName"(): string
get "name"(): string
set "name"(value: string)
get "id"(): string
get "version"(): string
get "customName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformWrapper$ModInfo$Type = ($PlatformWrapper$ModInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformWrapper$ModInfo_ = $PlatformWrapper$ModInfo$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$AfterRecipesLoadedEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$RecipeKJS, $RecipeKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeFilter, $RecipeFilter$Type} from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AfterRecipesLoadedEventJS extends $EventJS {

constructor(r: $Map$Type<($RecipeType$Type<(any)>), ($Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>)>, n: $Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>)

public "remove"(filter: $RecipeFilter$Type): integer
public "forEachRecipe"(filter: $RecipeFilter$Type, consumer: $Consumer$Type<($RecipeKJS$Type)>): void
public "countRecipes"(filter: $RecipeFilter$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AfterRecipesLoadedEventJS$Type = ($AfterRecipesLoadedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AfterRecipesLoadedEventJS_ = $AfterRecipesLoadedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$PlayerSelector" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export interface $PlayerSelector {

 "or"(fallback: $PlayerSelector$Type): $PlayerSelector
 "getPlayer"(arg0: $MinecraftServer$Type): $ServerPlayer

(name: string): $PlayerSelector
}

export namespace $PlayerSelector {
function name(name: string): $PlayerSelector
function of(o: any): $PlayerSelector
function identity(player: $ServerPlayer$Type): $PlayerSelector
function uuid(uuid: $UUID$Type): $PlayerSelector
function fuzzyName(name: string): $PlayerSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSelector$Type = (string) | ($PlayerSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSelector_ = $PlayerSelector$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$NativeJavaObject" {
import {$CustomProperty, $CustomProperty$Type} from "packages/dev/latvian/mods/rhino/$CustomProperty"
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MemberType, $MemberType$Type} from "packages/dev/latvian/mods/rhino/$MemberType"
import {$SymbolScriptable, $SymbolScriptable$Type} from "packages/dev/latvian/mods/rhino/$SymbolScriptable"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$Symbol, $Symbol$Type} from "packages/dev/latvian/mods/rhino/$Symbol"
import {$ScriptableObject, $ScriptableObject$Type} from "packages/dev/latvian/mods/rhino/$ScriptableObject"
import {$Wrapper, $Wrapper$Type} from "packages/dev/latvian/mods/rhino/$Wrapper"

export class $NativeJavaObject implements $Scriptable, $SymbolScriptable, $Wrapper {

constructor(scope: $Scriptable$Type, javaObject: any, staticType: $Class$Type<(any)>, cx: $Context$Type)
constructor(scope: $Scriptable$Type, javaObject: any, staticType: $Class$Type<(any)>, isAdapter: boolean, cx: $Context$Type)
constructor()

public "get"(cx: $Context$Type, index: integer, start: $Scriptable$Type): any
public "get"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type): any
public "get"(cx: $Context$Type, name: string, start: $Scriptable$Type): any
public "put"(cx: $Context$Type, name: string, start: $Scriptable$Type, value: any): void
public "put"(cx: $Context$Type, symbol: $Symbol$Type, start: $Scriptable$Type, value: any): void
public "put"(cx: $Context$Type, index: integer, start: $Scriptable$Type, value: any): void
public "delete"(cx: $Context$Type, key: $Symbol$Type): void
public "delete"(cx: $Context$Type, index: integer): void
public "delete"(cx: $Context$Type, name: string): void
public "getDefaultValue"(cx: $Context$Type, hint: $Class$Type<(any)>): any
public static "canConvert"(cx: $Context$Type, fromObj: any, to: $Class$Type<(any)>): boolean
public "unwrap"(): any
public "getClassName"(): string
public "has"(cx: $Context$Type, name: string, start: $Scriptable$Type): boolean
public "has"(cx: $Context$Type, key: $Symbol$Type, start: $Scriptable$Type): boolean
public "has"(cx: $Context$Type, index: integer, start: $Scriptable$Type): boolean
public "setParentScope"(m: $Scriptable$Type): void
public static "createInterfaceAdapter"(cx: $Context$Type, type: $Class$Type<(any)>, so: $ScriptableObject$Type): any
public "getIds"(cx: $Context$Type): (any)[]
public "hasInstance"(cx: $Context$Type, value: $Scriptable$Type): boolean
public "getPrototype"(cx: $Context$Type): $Scriptable
public "setPrototype"(m: $Scriptable$Type): void
public "addCustomProperty"(name: string, getter: $CustomProperty$Type): void
public "getParentScope"(): $Scriptable
public "enumerationIteratorHasNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
public "enumerationIteratorNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
public "getAllIds"(cx: $Context$Type): (any)[]
public "getTypeOf"(): $MemberType
public static "unwrapped"(o: any): any
get "className"(): string
set "parentScope"(value: $Scriptable$Type)
set "prototype"(value: $Scriptable$Type)
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeJavaObject$Type = ($NativeJavaObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeJavaObject_ = $NativeJavaObject$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"

export interface $JsonSerializable {

 "toJson"(): $JsonElement

(): $JsonElement
}

export namespace $JsonSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSerializable$Type = ($JsonSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSerializable_ = $JsonSerializable$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/server/$CommandEventJS" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$ServerEventJS, $ServerEventJS$Type} from "packages/dev/latvian/mods/kubejs/server/$ServerEventJS"
import {$CommandPerformEvent, $CommandPerformEvent$Type} from "packages/dev/architectury/event/events/common/$CommandPerformEvent"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ParseResults, $ParseResults$Type} from "packages/com/mojang/brigadier/$ParseResults"

export class $CommandEventJS extends $ServerEventJS {
readonly "server": $MinecraftServer

constructor(e: $CommandPerformEvent$Type)

public "getParseResults"(): $ParseResults<($CommandSourceStack)>
public "getCommandName"(): string
public "getException"(): $Throwable
public "getInput"(): string
public "setParseResults"(parse: $ParseResults$Type<($CommandSourceStack$Type)>): void
public "setException"(exception: $Throwable$Type): void
get "parseResults"(): $ParseResults<($CommandSourceStack)>
get "commandName"(): string
get "exception"(): $Throwable
get "input"(): string
set "parseResults"(value: $ParseResults$Type<($CommandSourceStack$Type)>)
set "exception"(value: $Throwable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandEventJS$Type = ($CommandEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandEventJS_ = $CommandEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockTintFunction" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$BlockTintFunction$Fixed, $BlockTintFunction$Fixed$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockTintFunction$Fixed"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $BlockTintFunction {

 "getColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): $Color

(cx: $Context$Type, o: any): $BlockTintFunction
}

export namespace $BlockTintFunction {
const GRASS: $BlockTintFunction
const DEFAULT_FOLIAGE_COLOR: $Color
const FOLIAGE: $BlockTintFunction
const EVERGREEN_FOLIAGE: $BlockTintFunction$Fixed
const BIRCH_FOLIAGE: $BlockTintFunction$Fixed
const MANGROVE_FOLIAGE: $BlockTintFunction$Fixed
const WATER: $BlockTintFunction
const REDSTONE_COLORS: ($Color)[]
const REDSTONE: $BlockTintFunction
function of(cx: $Context$Type, o: any): $BlockTintFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTintFunction$Type = (($BlockTintFunction$Type)[]) | (string) | ((state: $ItemStack, level: $BlockAndTintGetter, pos: $BlockPos, index: integer) => $Color$Type) | ($BlockTintFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTintFunction_ = $BlockTintFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$MobEffectBuilder$EffectTickCallback, $MobEffectBuilder$EffectTickCallback$Type} from "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder$EffectTickCallback"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MobEffectBuilder extends $BuilderBase<($MobEffect)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "effectTick"(effectTick: $MobEffectBuilder$EffectTickCallback$Type): $MobEffectBuilder
public "harmful"(): $MobEffectBuilder
public "beneficial"(): $MobEffectBuilder
public "color"(col: $Color$Type): $MobEffectBuilder
public "category"(c: $MobEffectCategory$Type): $MobEffectBuilder
public "modifyAttribute"(attribute: $ResourceLocation$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): $MobEffectBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectBuilder$Type = ($MobEffectBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectBuilder_ = $MobEffectBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$BlockBuilderProvider" {
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"

export interface $BlockBuilderProvider {

 "getBlockBuilder"(): $BlockBuilder
}

export namespace $BlockBuilderProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilderProvider$Type = ($BlockBuilderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBuilderProvider_ = $BlockBuilderProvider$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageBonusFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EnchantmentBuilder$DamageBonusFunction {

 "getDamageBonus"(arg0: integer, arg1: string): float

(arg0: integer, arg1: string): float
}

export namespace $EnchantmentBuilder$DamageBonusFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentBuilder$DamageBonusFunction$Type = ($EnchantmentBuilder$DamageBonusFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentBuilder$DamageBonusFunction_ = $EnchantmentBuilder$DamageBonusFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$VillagerTypeBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VillagerType, $VillagerType$Type} from "packages/net/minecraft/world/entity/npc/$VillagerType"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $VillagerTypeBuilder extends $BuilderBase<($VillagerType)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTypeBuilder$Type = ($VillagerTypeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTypeBuilder_ = $VillagerTypeBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$WrappedJS, $WrappedJS$Type} from "packages/dev/latvian/mods/kubejs/util/$WrappedJS"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $RecipeComponentValue<T> implements $WrappedJS, $Map$Entry<($RecipeKey<(T)>), (T)> {
static readonly "EMPTY_ARRAY": ($RecipeComponentValue<(any)>)[]
readonly "key": $RecipeKey<(T)>
readonly "index": integer
 "value": T
 "write": boolean

constructor(key: $RecipeKey$Type<(T)>, index: integer)

public "shouldWrite"(): boolean
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): T
public "write"(): void
public "setValue"(newValue: T): T
public "copy"(): $RecipeComponentValue<(T)>
public "getIndex"(): integer
public "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, arg2: $OutputReplacement$Type): boolean
public "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, arg2: $InputReplacement$Type): boolean
public "checkEmpty"(): string
public "isOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type): boolean
public "isInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type): boolean
public static "comparingByKey"<K extends $Comparable<(any)>, V>(): $Comparator<($Map$Entry<($RecipeKey<(T)>), (T)>)>
public static "comparingByKey"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<($RecipeKey<(T)>), (T)>)>
public static "comparingByValue"<K, V extends $Comparable<(any)>>(): $Comparator<($Map$Entry<($RecipeKey<(T)>), (T)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<($RecipeKey<(T)>), (T)>)>
public static "copyOf"<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<($RecipeKey<(T)>), (T)>
get "value"(): T
set "value"(value: T)
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeComponentValue$Type<T> = ($RecipeComponentValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeComponentValue_<T> = $RecipeComponentValue$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$LangEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$LangEventJS$Key, $LangEventJS$Key$Type} from "packages/dev/latvian/mods/kubejs/client/$LangEventJS$Key"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LangEventJS extends $EventJS {
static readonly "PATTERN": $Pattern
readonly "lang": string
readonly "map": $Map<($LangEventJS$Key), (string)>

constructor(lang: string, map: $Map$Type<($LangEventJS$Key$Type), (string)>)

public "add"(namespace: string, key: string, value: string): void
public "add"(key: string, value: string): void
public "addAll"(map: $Map$Type<(string), (string)>): void
public "addAll"(namespace: string, map: $Map$Type<(string), (string)>): void
public "renameItem"(item: $ItemStack$Type, name: string): void
public "renameBiome"(id: $ResourceLocation$Type, name: string): void
public "renameEntity"(id: $ResourceLocation$Type, name: string): void
public "renameBlock"(block: $Block$Type, name: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangEventJS$Type = ($LangEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangEventJS_ = $LangEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$ModelGenerator" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ModelGenerator$Element, $ModelGenerator$Element$Type} from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Element"

export class $ModelGenerator {

constructor()

public "parent"(s: string): void
public "element"(consumer: $Consumer$Type<($ModelGenerator$Element$Type)>): void
public "texture"(name: string, texture: string): void
public "textures"(json: $JsonObject$Type): void
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelGenerator$Type = ($ModelGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelGenerator_ = $ModelGenerator$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ItemArmorTierRegistryEventJS" {
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"

/**
 * Invoked when the game is starting up and the armor tier registry is being built.
 */
export class $ItemArmorTierRegistryEventJS extends $StartupEventJS {

constructor()

/**
 * Adds a new armor tier with a parent tier specified by string.
 */
public "add"(id: string, parent: string, tier: $Consumer$Type<($MutableArmorTier$Type)>): void
/**
 * Adds a new armor tier.
 */
public "add"(id: string, tier: $Consumer$Type<($MutableArmorTier$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemArmorTierRegistryEventJS$Type = ($ItemArmorTierRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemArmorTierRegistryEventJS_ = $ItemArmorTierRegistryEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/$ProcessingRecipeSchema$ItemApplicationRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$ProcessingRecipeSchema$ProcessingRecipeJS, $ProcessingRecipeSchema$ProcessingRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/create/$ProcessingRecipeSchema$ProcessingRecipeJS"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ProcessingRecipeSchema$ItemApplicationRecipeJS extends $ProcessingRecipeSchema$ProcessingRecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "keepHeldItem"(): $RecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingRecipeSchema$ItemApplicationRecipeJS$Type = ($ProcessingRecipeSchema$ItemApplicationRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessingRecipeSchema$ItemApplicationRecipeJS_ = $ProcessingRecipeSchema$ItemApplicationRecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$EventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EventJS {

constructor()

/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventJS$Type = ($EventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventJS_ = $EventJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$NativeJavaClass" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Function, $Function$Type} from "packages/dev/latvian/mods/rhino/$Function"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$NativeJavaObject, $NativeJavaObject$Type} from "packages/dev/latvian/mods/rhino/$NativeJavaObject"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $NativeJavaClass extends $NativeJavaObject implements $Function {

constructor()
constructor(cx: $Context$Type, scope: $Scriptable$Type, cl: $Class$Type<(any)>, isAdapter: boolean)
constructor(cx: $Context$Type, scope: $Scriptable$Type, cl: $Class$Type<(any)>)

public "get"(cx: $Context$Type, name: string, start: $Scriptable$Type): any
public "put"(cx: $Context$Type, name: string, start: $Scriptable$Type, value: any): void
public "toString"(): string
public "getDefaultValue"(cx: $Context$Type, hint: $Class$Type<(any)>): any
public "getClassName"(): string
public "call"(cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[]): any
public "has"(cx: $Context$Type, name: string, start: $Scriptable$Type): boolean
public "construct"(cx: $Context$Type, scope: $Scriptable$Type, args: (any)[]): $Scriptable
public "getClassObject"(): $Class<(any)>
public "getIds"(cx: $Context$Type): (any)[]
public "hasInstance"(cx: $Context$Type, value: $Scriptable$Type): boolean
public static "unwrapped"(o: any): any
get "className"(): string
get "classObject"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeJavaClass$Type = ($NativeJavaClass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeJavaClass_ = $NativeJavaClass$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$CustomBuilderObject" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomBuilderObject extends $BuilderBase<(any)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type, object: $Supplier$Type<(any)>, registry: $RegistryInfo$Type<(any)>)

public "getTranslationKeyGroup"(): string
public "getRegistryType"(): $RegistryInfo<(any)>
public "createObject"(): any
get "translationKeyGroup"(): string
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBuilderObject$Type = ($CustomBuilderObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBuilderObject_ = $CustomBuilderObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ScriptPackInfo, $ScriptPackInfo$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptPackInfo"
import {$ScriptSource, $ScriptSource$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptSource"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptFileInfo {
readonly "pack": $ScriptPackInfo
readonly "file": string
readonly "id": $ResourceLocation
readonly "location": string
 "lines": (string)[]

constructor(p: $ScriptPackInfo$Type, f: string)

public "getProperty"(s: string, def: string): string
public "getProperties"(s: string): $List<(string)>
public "getPriority"(): integer
public "skipLoading"(): string
public "preload"(source: $ScriptSource$Type): void
get "priority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptFileInfo$Type = ($ScriptFileInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptFileInfo_ = $ScriptFileInfo$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/data/$DataPackEventJS" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$MultiPackResourceManager, $MultiPackResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$MultiPackResourceManager"
import {$VirtualKubeJSDataPack, $VirtualKubeJSDataPack$Type} from "packages/dev/latvian/mods/kubejs/script/data/$VirtualKubeJSDataPack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataPackEventJS extends $EventJS {

constructor(d: $VirtualKubeJSDataPack$Type, rm: $MultiPackResourceManager$Type)

public "add"(id: $ResourceLocation$Type, content: string): void
public "addJson"(id: $ResourceLocation$Type, json: $JsonElement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataPackEventJS$Type = ($DataPackEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataPackEventJS_ = $DataPackEventJS$Type;
}}
declare module "packages/dev/latvian/mods/unit/$Unit" {
import {$UnitVariables, $UnitVariables$Type} from "packages/dev/latvian/mods/unit/$UnitVariables"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"

export class $Unit {
static "EMPTY_ARRAY": ($Unit)[]

constructor()

public "withAlpha"(a: $Unit$Type): $Unit
public "lte"(other: $Unit$Type): $Unit
public "gte"(other: $Unit$Type): $Unit
public "rsh"(other: $Unit$Type): $Unit
public "bitAnd"(other: $Unit$Type): $Unit
public "neq"(other: $Unit$Type): $Unit
public "boolNot"(): $Unit
public "bitNot"(): $Unit
public "lsh"(other: $Unit$Type): $Unit
public "bitOr"(other: $Unit$Type): $Unit
public "mulSet"(unit: $Unit$Type): $Unit
public "modSet"(unit: $Unit$Type): $Unit
public "divSet"(unit: $Unit$Type): $Unit
public "lt"(other: $Unit$Type): $Unit
public "atan"(): $Unit
public "log1p"(): $Unit
public "add"(other: $Unit$Type): $Unit
public "add"(value: double): $Unit
public "get"(arg0: $UnitVariables$Type): double
public "toString"(): string
public "toString"(builder: $StringBuilder$Type): void
public "abs"(): $Unit
public "sin"(): $Unit
public "cos"(): $Unit
public "tan"(): $Unit
public "atan2"(other: $Unit$Type): $Unit
public "sqrt"(): $Unit
public "log"(): $Unit
public "log10"(): $Unit
public "pow"(other: $Unit$Type): $Unit
public "min"(other: $Unit$Type): $Unit
public "max"(other: $Unit$Type): $Unit
public "floor"(): $Unit
public "ceil"(): $Unit
public "getBoolean"(variables: $UnitVariables$Type): boolean
public "getInt"(variables: $UnitVariables$Type): integer
public "getFloat"(variables: $UnitVariables$Type): float
public "set"(unit: $Unit$Type): $Unit
public "mod"(other: $Unit$Type): $Unit
public "mod"(value: double): $Unit
public "eq"(other: $Unit$Type): $Unit
public "sq"(): $Unit
public "or"(other: $Unit$Type): $Unit
public "sub"(value: double): $Unit
public "sub"(other: $Unit$Type): $Unit
public "mul"(other: $Unit$Type): $Unit
public "mul"(value: double): $Unit
public "negate"(): $Unit
public "and"(other: $Unit$Type): $Unit
public "xor"(other: $Unit$Type): $Unit
public "isFixed"(): boolean
public "subSet"(unit: $Unit$Type): $Unit
public "rad"(): $Unit
public "bool"(): $Unit
public "div"(other: $Unit$Type): $Unit
public "div"(value: double): $Unit
public "lerp"(a: $Unit$Type, b: $Unit$Type): $Unit
public "addSet"(unit: $Unit$Type): $Unit
public "deg"(): $Unit
public "smoothstep"(): $Unit
public "gt"(other: $Unit$Type): $Unit
public "clamp"(a: $Unit$Type, b: $Unit$Type): $Unit
public "positive"(): $Unit
get "fixed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unit$Type = (string) | (number) | ($Unit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Unit_ = $Unit$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$EntityArrayList" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MessageSenderKJS, $MessageSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$DataSenderKJS, $DataSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$EntitySelector, $EntitySelector$Type} from "packages/net/minecraft/commands/arguments/selector/$EntitySelector"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityArrayList extends $ArrayList<($Entity)> implements $MessageSenderKJS, $DataSenderKJS {
readonly "level": $Level

constructor(l: $Level$Type, size: integer)
constructor(l: $Level$Type, entities: $Iterable$Type<(any)>)

public "runCommand"(command: string): integer
public "filterSelector"(selector: $EntitySelector$Type): $EntityArrayList
public "filter"(filter: $Predicate$Type<($Entity$Type)>): $EntityArrayList
public "getFirst"(): $Entity
public "getDisplayName"(): $Component
public "sendData"(channel: string, data: $CompoundTag$Type): void
public "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$Type): void
public "setStatusMessage"(message: $Component$Type): void
public "runCommandSilent"(command: string): integer
public "getName"(): $Component
public "tell"(message: $Component$Type): void
public "kill"(): void
public "addAllIterable"(entities: $Iterable$Type<(any)>): void
public "sendData"(channel: string): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "first"(): $Entity
get "displayName"(): $Component
set "statusMessage"(value: $Component$Type)
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityArrayList$Type = ($EntityArrayList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityArrayList_ = $EntityArrayList$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$WithAttachedData" {
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MessageSenderKJS, $MessageSenderKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"

export interface $WithAttachedData<T> extends $MessageSenderKJS {

 "getData"(): $AttachedData<(T)>
 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "setStatusMessage"(message: $Component$Type): void
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void

(): $AttachedData<(T)>
}

export namespace $WithAttachedData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithAttachedData$Type<T> = ($WithAttachedData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithAttachedData_<T> = $WithAttachedData$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/stages/$StageCreationEvent" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Stages, $Stages$Type} from "packages/dev/latvian/mods/kubejs/stages/$Stages"

export class $StageCreationEvent {


public "setPlayerStages"(s: $Stages$Type): void
public "getPlayer"(): $Player
public "getPlayerStages"(): $Stages
set "playerStages"(value: $Stages$Type)
get "player"(): $Player
get "playerStages"(): $Stages
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageCreationEvent$Type = ($StageCreationEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageCreationEvent_ = $StageCreationEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/$RemoveWorldgenEventJS" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$RemoveSpawnsProperties, $RemoveSpawnsProperties$Type} from "packages/dev/latvian/mods/kubejs/level/gen/properties/$RemoveSpawnsProperties"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$RemoveOresProperties, $RemoveOresProperties$Type} from "packages/dev/latvian/mods/kubejs/level/gen/properties/$RemoveOresProperties"

export class $RemoveWorldgenEventJS extends $StartupEventJS {

constructor()

public "printFeaturesForType"(type: $GenerationStep$Decoration$Type, filter: $BiomeFilter$Type, afterRemoval: boolean): void
public "removeSpawns"(p: $Consumer$Type<($RemoveSpawnsProperties$Type)>): void
public "removeFeatureById"(type: $GenerationStep$Decoration$Type, ids: ($ResourceLocation$Type)[]): void
public "removeFeatureById"(filter: $BiomeFilter$Type, decoration: $GenerationStep$Decoration$Type, ids: ($ResourceLocation$Type)[]): void
public "printFiltered"(type: $GenerationStep$Decoration$Type): void
public "printFiltered"(): void
public "printFiltered"(type: $GenerationStep$Decoration$Type, filter: $BiomeFilter$Type): void
public "removeAllFeatures"(): void
public "removeAllFeatures"(filter: $BiomeFilter$Type): void
public "removeAllFeatures"(filter: $BiomeFilter$Type, type: $GenerationStep$Decoration$Type): void
public "removeOres"(p: $Consumer$Type<($RemoveOresProperties$Type)>): void
public "printFeatures"(type: $GenerationStep$Decoration$Type): void
public "printFeatures"(): void
public "printFeatures"(type: $GenerationStep$Decoration$Type, filter: $BiomeFilter$Type): void
public "removeAllSpawns"(): void
public "printSpawns"(category: $MobCategory$Type): void
public "printSpawns"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveWorldgenEventJS$Type = ($RemoveWorldgenEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveWorldgenEventJS_ = $RemoveWorldgenEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo" {
import {$PaintingVariant, $PaintingVariant$Type} from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MultiNoiseBiomeSourceParameterList, $MultiNoiseBiomeSourceParameterList$Type} from "packages/net/minecraft/world/level/biome/$MultiNoiseBiomeSourceParameterList"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StructureProcessorType, $StructureProcessorType$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorType"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FrogVariant, $FrogVariant$Type} from "packages/net/minecraft/world/entity/animal/$FrogVariant"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$TrimMaterial, $TrimMaterial$Type} from "packages/net/minecraft/world/item/armortrim/$TrimMaterial"
import {$BuilderType, $BuilderType$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderType"
import {$StructurePoolElementType, $StructurePoolElementType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElementType"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$Instrument, $Instrument$Type} from "packages/net/minecraft/world/item/$Instrument"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$VillagerType, $VillagerType$Type} from "packages/net/minecraft/world/entity/npc/$VillagerType"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$WorldCarver, $WorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import {$PosRuleTestType, $PosRuleTestType$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTestType"
import {$ChatType, $ChatType$Type} from "packages/net/minecraft/network/chat/$ChatType"
import {$StructurePlacementType, $StructurePlacementType$Type} from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacementType"
import {$WorldPreset, $WorldPreset$Type} from "packages/net/minecraft/world/level/levelgen/presets/$WorldPreset"
import {$BlockPredicateType, $BlockPredicateType$Type} from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import {$RegistryCallback, $RegistryCallback$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryCallback"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FloatProviderType, $FloatProviderType$Type} from "packages/net/minecraft/util/valueproviders/$FloatProviderType"
import {$FoliagePlacerType, $FoliagePlacerType$Type} from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacerType"
import {$StatType, $StatType$Type} from "packages/net/minecraft/stats/$StatType"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LevelStem, $LevelStem$Type} from "packages/net/minecraft/world/level/dimension/$LevelStem"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$FlatLevelGeneratorPreset, $FlatLevelGeneratorPreset$Type} from "packages/net/minecraft/world/level/levelgen/flat/$FlatLevelGeneratorPreset"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$TrimPattern, $TrimPattern$Type} from "packages/net/minecraft/world/item/armortrim/$TrimPattern"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NoiseGeneratorSettings, $NoiseGeneratorSettings$Type} from "packages/net/minecraft/world/level/levelgen/$NoiseGeneratorSettings"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import {$TreeDecoratorType, $TreeDecoratorType$Type} from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecoratorType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Schedule, $Schedule$Type} from "packages/net/minecraft/world/entity/schedule/$Schedule"
import {$StructureProcessorList, $StructureProcessorList$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorList"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$BlockStateProviderType, $BlockStateProviderType$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProviderType"
import {$BannerPattern, $BannerPattern$Type} from "packages/net/minecraft/world/level/block/entity/$BannerPattern"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$HeightProviderType, $HeightProviderType$Type} from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProviderType"
import {$RuleTestType, $RuleTestType$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTestType"
import {$StructureSet, $StructureSet$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSet"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$FeatureSizeType, $FeatureSizeType$Type} from "packages/net/minecraft/world/level/levelgen/feature/featuresize/$FeatureSizeType"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$LootItemFunctionType, $LootItemFunctionType$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BuilderFactory, $BuilderFactory$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory"
import {$DensityFunction, $DensityFunction$Type} from "packages/net/minecraft/world/level/levelgen/$DensityFunction"
import {$RootPlacerType, $RootPlacerType$Type} from "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$RootPlacerType"
import {$RuleBlockEntityModifierType, $RuleBlockEntityModifierType$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$LootNumberProviderType, $LootNumberProviderType$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$LootNumberProviderType"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$StructureTemplatePool, $StructureTemplatePool$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$TrunkPlacerType, $TrunkPlacerType$Type} from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$TrunkPlacerType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootScoreProviderType, $LootScoreProviderType$Type} from "packages/net/minecraft/world/level/storage/loot/providers/score/$LootScoreProviderType"
import {$TypeWrapperFactory, $TypeWrapperFactory$Type} from "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$Type} from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise$NoiseParameters"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"
import {$LootNbtProviderType, $LootNbtProviderType$Type} from "packages/net/minecraft/world/level/storage/loot/providers/nbt/$LootNbtProviderType"
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$IntProviderType, $IntProviderType$Type} from "packages/net/minecraft/util/valueproviders/$IntProviderType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$PositionSourceType, $PositionSourceType$Type} from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import {$CatVariant, $CatVariant$Type} from "packages/net/minecraft/world/entity/animal/$CatVariant"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LootItemConditionType, $LootItemConditionType$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemConditionType"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LootPoolEntryType, $LootPoolEntryType$Type} from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryType"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $RegistryInfo<T> implements $Iterable<($BuilderBase<(any)>)>, $TypeWrapperFactory<(T)> {
static readonly "MAP": $Map<($ResourceKey<(any)>), ($RegistryInfo<(any)>)>
static readonly "ALL_BUILDERS": $List<($BuilderBase<(any)>)>
static readonly "SOUND_EVENT": $RegistryInfo<($SoundEvent)>
static readonly "FLUID": $RegistryInfo<($Fluid)>
static readonly "MOB_EFFECT": $RegistryInfo<($MobEffect)>
static readonly "BLOCK": $RegistryInfo<($Block)>
static readonly "ENCHANTMENT": $RegistryInfo<($Enchantment)>
static readonly "ENTITY_TYPE": $RegistryInfo<($EntityType)>
static readonly "ITEM": $RegistryInfo<($Item)>
static readonly "POTION": $RegistryInfo<($Potion)>
static readonly "PARTICLE_TYPE": $RegistryInfo<($ParticleType)>
static readonly "BLOCK_ENTITY_TYPE": $RegistryInfo<($BlockEntityType)>
static readonly "PAINTING_VARIANT": $RegistryInfo<($PaintingVariant)>
static readonly "CUSTOM_STAT": $RegistryInfo<($ResourceLocation)>
static readonly "CHUNK_STATUS": $RegistryInfo<($ChunkStatus)>
static readonly "RULE_TEST": $RegistryInfo<($RuleTestType)>
static readonly "POS_RULE_TEST": $RegistryInfo<($PosRuleTestType)>
static readonly "MENU": $RegistryInfo<($MenuType)>
static readonly "RECIPE_TYPE": $RegistryInfo<($RecipeType)>
static readonly "RECIPE_SERIALIZER": $RegistryInfo<($RecipeSerializer)>
static readonly "ATTRIBUTE": $RegistryInfo<($Attribute)>
static readonly "GAME_EVENT": $RegistryInfo<($GameEvent)>
static readonly "POSITION_SOURCE_TYPE": $RegistryInfo<($PositionSourceType)>
static readonly "STAT_TYPE": $RegistryInfo<($StatType)>
static readonly "VILLAGER_TYPE": $RegistryInfo<($VillagerType)>
static readonly "VILLAGER_PROFESSION": $RegistryInfo<($VillagerProfession)>
static readonly "POINT_OF_INTEREST_TYPE": $RegistryInfo<($PoiType)>
static readonly "MEMORY_MODULE_TYPE": $RegistryInfo<($MemoryModuleType)>
static readonly "SENSOR_TYPE": $RegistryInfo<($SensorType)>
static readonly "SCHEDULE": $RegistryInfo<($Schedule)>
static readonly "ACTIVITY": $RegistryInfo<($Activity)>
static readonly "LOOT_ENTRY": $RegistryInfo<($LootPoolEntryType)>
static readonly "LOOT_FUNCTION": $RegistryInfo<($LootItemFunctionType)>
static readonly "LOOT_ITEM": $RegistryInfo<($LootItemConditionType)>
static readonly "LOOT_NUMBER_PROVIDER": $RegistryInfo<($LootNumberProviderType)>
static readonly "LOOT_NBT_PROVIDER": $RegistryInfo<($LootNbtProviderType)>
static readonly "LOOT_SCORE_PROVIDER": $RegistryInfo<($LootScoreProviderType)>
static readonly "COMMAND_ARGUMENT_TYPE": $RegistryInfo<($ArgumentTypeInfo)>
static readonly "DIMENSION_TYPE": $RegistryInfo<($DimensionType)>
static readonly "DIMENSION": $RegistryInfo<($Level)>
static readonly "LEVEL_STEM": $RegistryInfo<($LevelStem)>
static readonly "FLOAT_PROVIDER_TYPE": $RegistryInfo<($FloatProviderType)>
static readonly "INT_PROVIDER_TYPE": $RegistryInfo<($IntProviderType)>
static readonly "HEIGHT_PROVIDER_TYPE": $RegistryInfo<($HeightProviderType)>
static readonly "BLOCK_PREDICATE_TYPE": $RegistryInfo<($BlockPredicateType)>
static readonly "NOISE_GENERATOR_SETTINGS": $RegistryInfo<($NoiseGeneratorSettings)>
static readonly "CONFIGURED_CARVER": $RegistryInfo<($ConfiguredWorldCarver)>
static readonly "CONFIGURED_FEATURE": $RegistryInfo<($ConfiguredFeature)>
static readonly "PLACED_FEATURE": $RegistryInfo<($PlacedFeature)>
static readonly "STRUCTURE": $RegistryInfo<($Structure)>
static readonly "STRUCTURE_SET": $RegistryInfo<($StructureSet)>
static readonly "PROCESSOR_LIST": $RegistryInfo<($StructureProcessorList)>
static readonly "TEMPLATE_POOL": $RegistryInfo<($StructureTemplatePool)>
static readonly "BIOME": $RegistryInfo<($Biome)>
static readonly "NOISE": $RegistryInfo<($NormalNoise$NoiseParameters)>
static readonly "DENSITY_FUNCTION": $RegistryInfo<($DensityFunction)>
static readonly "WORLD_PRESET": $RegistryInfo<($WorldPreset)>
static readonly "FLAT_LEVEL_GENERATOR_PRESET": $RegistryInfo<($FlatLevelGeneratorPreset)>
static readonly "CARVER": $RegistryInfo<($WorldCarver)>
static readonly "FEATURE": $RegistryInfo<($Feature)>
static readonly "STRUCTURE_PLACEMENT_TYPE": $RegistryInfo<($StructurePlacementType)>
static readonly "STRUCTURE_PIECE": $RegistryInfo<($StructurePieceType)>
static readonly "STRUCTURE_TYPE": $RegistryInfo<($StructureType)>
static readonly "PLACEMENT_MODIFIER": $RegistryInfo<($PlacementModifierType)>
static readonly "BLOCK_STATE_PROVIDER_TYPE": $RegistryInfo<($BlockStateProviderType)>
static readonly "FOLIAGE_PLACER_TYPE": $RegistryInfo<($FoliagePlacerType)>
static readonly "TRUNK_PLACER_TYPE": $RegistryInfo<($TrunkPlacerType)>
static readonly "TREE_DECORATOR_TYPE": $RegistryInfo<($TreeDecoratorType)>
static readonly "ROOT_PLACER_TYPE": $RegistryInfo<($RootPlacerType)>
static readonly "FEATURE_SIZE_TYPE": $RegistryInfo<($FeatureSizeType)>
static readonly "BIOME_SOURCE": $RegistryInfo<($Codec)>
static readonly "CHUNK_GENERATOR": $RegistryInfo<($Codec)>
static readonly "CONDITION": $RegistryInfo<($Codec)>
static readonly "RULE": $RegistryInfo<($Codec)>
static readonly "DENSITY_FUNCTION_TYPE": $RegistryInfo<($Codec)>
static readonly "STRUCTURE_PROCESSOR": $RegistryInfo<($StructureProcessorType)>
static readonly "STRUCTURE_POOL_ELEMENT": $RegistryInfo<($StructurePoolElementType)>
static readonly "CHAT_TYPE": $RegistryInfo<($ChatType)>
static readonly "CAT_VARIANT": $RegistryInfo<($CatVariant)>
static readonly "FROG_VARIANT": $RegistryInfo<($FrogVariant)>
static readonly "BANNER_PATTERN": $RegistryInfo<($BannerPattern)>
static readonly "INSTRUMENT": $RegistryInfo<($Instrument)>
static readonly "TRIM_MATERIAL": $RegistryInfo<($TrimMaterial)>
static readonly "TRIM_PATTERN": $RegistryInfo<($TrimPattern)>
static readonly "CREATIVE_MODE_TAB": $RegistryInfo<($CreativeModeTab)>
static readonly "DAMAGE_TYPE": $RegistryInfo<($DamageType)>
static readonly "LOOT_CONDITION_TYPE": $RegistryInfo<($LootItemConditionType)>
static readonly "LOOT_FUNCTION_TYPE": $RegistryInfo<($LootItemFunctionType)>
static readonly "LOOT_NBT_PROVIDER_TYPE": $RegistryInfo<($LootNbtProviderType)>
static readonly "LOOT_NUMBER_PROVIDER_TYPE": $RegistryInfo<($LootNumberProviderType)>
static readonly "LOOT_POOL_ENTRY_TYPE": $RegistryInfo<($LootPoolEntryType)>
static readonly "LOOT_SCORE_PROVIDER_TYPE": $RegistryInfo<($LootScoreProviderType)>
static readonly "MATERIAL_CONDITION": $RegistryInfo<($Codec)>
static readonly "MATERIAL_RULE": $RegistryInfo<($Codec)>
static readonly "PLACEMENT_MODIFIER_TYPE": $RegistryInfo<($PlacementModifierType)>
static readonly "RULE_BLOCK_ENTITY_MODIFIER": $RegistryInfo<($RuleBlockEntityModifierType)>
static readonly "STRUCTURE_PLACEMENT": $RegistryInfo<($StructurePlacementType)>
static readonly "DECORATED_POT_PATTERNS": $RegistryInfo<(string)>
static readonly "NOISE_SETTINGS": $RegistryInfo<($NoiseGeneratorSettings)>
static readonly "MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST": $RegistryInfo<($MultiNoiseBiomeSourceParameterList)>
static readonly "AFTER_VANILLA": $LinkedList<($RegistryInfo<(any)>)>
readonly "key": $ResourceKey<(any)>
readonly "objectBaseClass": $Class<(any)>
readonly "types": $Map<(string), ($BuilderType<(T)>)>
readonly "objects": $Map<($ResourceLocation), ($BuilderBase<(any)>)>
 "hasDefaultTags": boolean
 "bypassServerOnly": boolean
 "autoWrap": boolean
 "languageKeyPrefix": string


public "getDefaultType"(): $BuilderType<(any)>
public "bypassServerOnly"(): $RegistryInfo<(T)>
public "noAutoWrap"(): $RegistryInfo<(T)>
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "wrap"(cx: $Context$Type, o: any): T
public "getValue"(id: $ResourceLocation$Type): T
public "iterator"(): $Iterator<($BuilderBase<(any)>)>
public static "of"(key: $ResourceKey$Type<(any)>): $RegistryInfo<(any)>
public static "of"<T>(key: $ResourceKey$Type<(any)>, type: $Class$Type<(T)>): $RegistryInfo<(T)>
public "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
public "getId"(value: T): $ResourceLocation
public "hasValue"(id: $ResourceLocation$Type): boolean
public "addType"(type: string, builderType: $Class$Type<(any)>, factory: $BuilderFactory$Type, isDefault: boolean): void
public "addType"(type: string, builderType: $Class$Type<(any)>, factory: $BuilderFactory$Type): void
public "registerObjects"(arg0: $RegistryCallback$Type<(T)>): integer
public "fireRegistryEvent"(): void
public "getArchitecturyRegistrar"(): $Registrar<(T)>
public "addBuilder"(builder: $BuilderBase$Type<(any)>): void
public "languageKeyPrefix"(prefix: string): $RegistryInfo<(T)>
public "getVanillaRegistry"(): $Registry<(T)>
public "spliterator"(): $Spliterator<($BuilderBase<(any)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$BuilderBase<(any)>>;
get "defaultType"(): $BuilderType<(any)>
get "architecturyRegistrar"(): $Registrar<(T)>
get "vanillaRegistry"(): $Registry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryInfo$Type<T> = ($RegistryInfo<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryInfo_<T> = $RegistryInfo$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/script/$ConsoleLine$SourceLine" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConsoleLine$SourceLine extends $Record {

constructor(buf: $FriendlyByteBuf$Type)
constructor(source: string, line: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "line"(): integer
public "source"(): string
public static "write"(buf: $FriendlyByteBuf$Type, sourceLine: $ConsoleLine$SourceLine$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsoleLine$SourceLine$Type = ($ConsoleLine$SourceLine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConsoleLine$SourceLine_ = $ConsoleLine$SourceLine$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryCallback" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryCallback<T> {

 "accept"(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>): void

(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>): void
}

export namespace $RegistryCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryCallback$Type<T> = ($RegistryCallback<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryCallback_<T> = $RegistryCallback$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$InformationJEIEventJS" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IRecipeRegistration, $IRecipeRegistration$Type} from "packages/mezz/jei/api/registration/$IRecipeRegistration"

export class $InformationJEIEventJS extends $EventJS {

constructor(reg: $IRecipeRegistration$Type)

public "addForType"<T>(type: $IIngredientType$Type<(T)>, o: any, s: ($Component$Type)[]): void
public "addItem"(item: $Ingredient$Type, s: ($Component$Type)[]): void
public "addFluid"(fluid: any, s: ($Component$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InformationJEIEventJS$Type = ($InformationJEIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InformationJEIEventJS_ = $InformationJEIEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$EntitySteppedOnBlockCallbackJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntitySteppedOnBlockCallbackJS {

constructor(level: $Level$Type, entity: $Entity$Type, pos: $BlockPos$Type, state: $BlockState$Type)

/**
 * Returns the BlockState
 */
public "getState"(): $BlockState
/**
 * Returns the block
 */
public "getBlock"(): $BlockContainerJS
/**
 * Returns the entity
 */
public "getEntity"(): $Entity
/**
 * Returns the block's position
 */
public "getPos"(): $BlockPos
/**
 * Returns the level
 */
public "getLevel"(): $Level
/**
 * Returns if the entity is suppressing bouncing (for players this is true if the player is crouching)
 */
public "isSuppressingBounce"(): boolean
get "state"(): $BlockState
get "block"(): $BlockContainerJS
get "entity"(): $Entity
get "pos"(): $BlockPos
get "level"(): $Level
get "suppressingBounce"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySteppedOnBlockCallbackJS$Type = ($EntitySteppedOnBlockCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySteppedOnBlockCallbackJS_ = $EntitySteppedOnBlockCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$FluidAmounts" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FluidAmounts {

}

export namespace $FluidAmounts {
const BUCKET: long
const MILLIBUCKET: long
const B: long
const MB: long
const INGOT: long
const NUGGET: long
const METAL_BLOCK: long
const BOTTLE: long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidAmounts$Type = ($FluidAmounts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidAmounts_ = $FluidAmounts$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/bindings/$UtilsWrapper" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Lazy, $Lazy$Type} from "packages/dev/latvian/mods/kubejs/util/$Lazy"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$CountingMap, $CountingMap$Type} from "packages/dev/latvian/mods/rhino/mod/util/$CountingMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DustParticleOptions, $DustParticleOptions$Type} from "packages/net/minecraft/core/particles/$DustParticleOptions"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * A collection of utilities
 */
export interface $UtilsWrapper {

}

export namespace $UtilsWrapper {
const ERROR_PARTICLE: $DustParticleOptions
function particleOptions(o: any): $ParticleOptions
function getStat(id: $ResourceLocation$Type): $Stat<($ResourceLocation)>
function regex(pattern: string, flags: integer): $Pattern
function regex(s: any): $Pattern
function id(id: $ResourceLocation$Type): $ResourceLocation
function id(namespace: string, path: string): $ResourceLocation
function emptyList<T>(): $List<(T)>
function isWrapped(o: any): boolean
function newMap(): $Map<(any), (any)>
function copy(o: any): any
function toTitleCase(s: string, ignoreSpecial: boolean): string
function toTitleCase(s: string): string
function parseInt(object: any, def: integer): integer
function parseDouble(object: any, def: double): double
function emptyMap<K, V>(): $Map<(K), (V)>
function lazy<T>(supplier: $Supplier$Type<(T)>): $Lazy<(T)>
function newList(): $List<(any)>
function getRandom(): $Random
function getSound(id: $ResourceLocation$Type): $SoundEvent
function snakeCaseToTitleCase(string: string): string
function supplyAsync(task: $Supplier$Type<(any)>): $CompletableFuture<(any)>
function getServer(): $MinecraftServer
function snakeCaseToCamelCase(string: string): string
function runAsync(task: $Runnable$Type): $CompletableFuture<(void)>
function getRegistry(id: $ResourceLocation$Type): $RegistryInfo<(any)>
function newRandom(seed: long): $Random
function newCountingMap(): $CountingMap
function randomOf(random: $Random$Type, objects: $Collection$Type<(any)>): any
function getSystemTime(): long
function getRegistryIds(id: $ResourceLocation$Type): $List<($ResourceLocation)>
function expiringLazy<T>(supplier: $Supplier$Type<(T)>, time: long): $Lazy<(T)>
function parseBlockState(o: any): $BlockState
function queueIO(runnable: $Runnable$Type): void
function rollChestLoot(id: $ResourceLocation$Type, entity: $Entity$Type): $List<($ItemStack)>
function rollChestLoot(id: $ResourceLocation$Type): $List<($ItemStack)>
function findCreativeTab(id: $ResourceLocation$Type): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UtilsWrapper$Type = ($UtilsWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UtilsWrapper_ = $UtilsWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$FireworksJS" {
import {$FireworksJS$Explosion, $FireworksJS$Explosion$Type} from "packages/dev/latvian/mods/kubejs/level/$FireworksJS$Explosion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FireworkRocketEntity, $FireworkRocketEntity$Type} from "packages/net/minecraft/world/entity/projectile/$FireworkRocketEntity"

export class $FireworksJS {
 "flight": integer
 "lifetime": integer
readonly "explosions": $List<($FireworksJS$Explosion)>

constructor()

public static "of"(o: any): $FireworksJS
public "createFireworkRocket"(w: $Level$Type, x: double, y: double, z: double): $FireworkRocketEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworksJS$Type = ($FireworksJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireworksJS_ = $FireworksJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/$BlockModificationEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockModificationEventJS extends $EventJS {

constructor()

/**
 * Modifies blocks that match the given predicate.
 * 
 * **NOTE**: tag predicates are not supported at this time.
 */
public "modify"(predicate: $BlockStatePredicate$Type, c: $Consumer$Type<($Block$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModificationEventJS$Type = ($BlockModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModificationEventJS_ = $BlockModificationEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/script/data/$VirtualKubeJSDataPack" {
import {$PackResources$ResourceOutput, $PackResources$ResourceOutput$Type} from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$AbstractPackResources, $AbstractPackResources$Type} from "packages/net/minecraft/server/packs/$AbstractPackResources"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$MetadataSectionSerializer, $MetadataSectionSerializer$Type} from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import {$IoSupplier, $IoSupplier$Type} from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExportablePackResources, $ExportablePackResources$Type} from "packages/dev/latvian/mods/kubejs/script/data/$ExportablePackResources"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VirtualKubeJSDataPack extends $AbstractPackResources implements $ExportablePackResources {
readonly "high": boolean

constructor(h: boolean)

public "toString"(): string
public "close"(): void
public "export"(root: $Path$Type): void
public "getResource"(type: $PackType$Type, location: $ResourceLocation$Type): $IoSupplier<($InputStream)>
public "hasNamespace"(key: string): boolean
public "addData"(id: $ResourceLocation$Type, data: string): void
public "packId"(): string
public "getMetadataSection"<T>(serializer: $MetadataSectionSerializer$Type<(T)>): T
public "getRootResource"(...path: (string)[]): $IoSupplier<($InputStream)>
public "getNamespaces"(type: $PackType$Type): $Set<(string)>
public "listResources"(packType: $PackType$Type, namespace: string, path: string, visitor: $PackResources$ResourceOutput$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualKubeJSDataPack$Type = ($VirtualKubeJSDataPack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualKubeJSDataPack_ = $VirtualKubeJSDataPack$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/events/$BoilerHeaterHandlerEvent" {
import {$BoilerHeaterHandlerEvent$BoilerHeaterCallback, $BoilerHeaterHandlerEvent$BoilerHeaterCallback$Type} from "packages/dev/latvian/mods/kubejs/create/events/$BoilerHeaterHandlerEvent$BoilerHeaterCallback"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BoilerHeaterHandlerEvent extends $EventJS {

constructor()

public "addAdvanced"(block: $BlockStatePredicate$Type, onUpdate: $BoilerHeaterHandlerEvent$BoilerHeaterCallback$Type): void
public "add"(block: $Block$Type, onUpdate: $BoilerHeaterHandlerEvent$BoilerHeaterCallback$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerHeaterHandlerEvent$Type = ($BoilerHeaterHandlerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoilerHeaterHandlerEvent_ = $BoilerHeaterHandlerEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentWithParent" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$ArrayRecipeComponent, $ArrayRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent"
import {$AndRecipeComponent, $AndRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$OrRecipeComponent, $OrRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MappingRecipeComponent, $MappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeComponentWithParent<T> extends $RecipeComponent<(T)> {

 "componentType"(): string
 "write"(recipe: $RecipeJS$Type, value: T): $JsonElement
 "read"(recipe: $RecipeJS$Type, from: any): T
 "componentClass"(): $Class<(any)>
 "parentComponent"(): $RecipeComponent<(T)>
 "replaceOutput"(recipe: $RecipeJS$Type, original: T, match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): T
 "replaceInput"(recipe: $RecipeJS$Type, original: T, match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): T
 "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
 "role"(): $ComponentRole
 "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
 "checkEmpty"(key: $RecipeKey$Type<(T)>, value: T): string
 "isOutput"(recipe: $RecipeJS$Type, value: T, match: $ReplacementMatch$Type): boolean
 "isInput"(recipe: $RecipeJS$Type, value: T, match: $ReplacementMatch$Type): boolean
 "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, json: $JsonObject$Type): void
 "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, json: $JsonObject$Type): void
 "orSelf"(): $RecipeComponent<(T)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
 "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<(T)>
 "key"(name: string): $RecipeKey<(T)>
 "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<(T), (O)>
 "asArray"(): $ArrayRecipeComponent<(T)>
 "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<(T), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
 "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<(T)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
 "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<(T)>
 "checkValueHasChanged"(oldValue: T, newValue: T): boolean
 "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), (T)>)>
 "asPatternKey"(): $RecipeComponent<($TinyMap<(character), (T)>)>
 "asArrayOrSelf"(): $ArrayRecipeComponent<(T)>
 "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
 "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<(T)>

(): string
}

export namespace $RecipeComponentWithParent {
function builder(): $RecipeComponentBuilder
function builder(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeComponentWithParent$Type<T> = ($RecipeComponentWithParent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeComponentWithParent_<T> = $RecipeComponentWithParent$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/misc/$VillagerProfessionBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $VillagerProfessionBuilder extends $BuilderBase<($VillagerProfession)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "poiType"(t: $ResourceLocation$Type): $VillagerProfessionBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "requestedItems"(t: ($Item$Type)[]): $VillagerProfessionBuilder
public "secondaryPoi"(t: ($Block$Type)[]): $VillagerProfessionBuilder
public "workSound"(t: $SoundEvent$Type): $VillagerProfessionBuilder
public "poiTypeTag"(t: $ResourceLocation$Type): $VillagerProfessionBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerProfessionBuilder$Type = ($VillagerProfessionBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerProfessionBuilder_ = $VillagerProfessionBuilder$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$IdFunctionObject" {
import {$IdFunctionCall, $IdFunctionCall$Type} from "packages/dev/latvian/mods/rhino/$IdFunctionCall"
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$BaseFunction, $BaseFunction$Type} from "packages/dev/latvian/mods/rhino/$BaseFunction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $IdFunctionObject extends $BaseFunction {
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "DONTENUM": integer
static readonly "PERMANENT": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "CONST": integer

constructor(idcall: $IdFunctionCall$Type, tag: any, id: integer, arity: integer)
constructor(idcall: $IdFunctionCall$Type, tag: any, id: integer, name: string, arity: integer, scope: $Scriptable$Type)

public "addAsProperty"(target: $Scriptable$Type, cx: $Context$Type): void
public "initFunction"(name: string, scope: $Scriptable$Type): void
public "markAsConstructor"(prototypeProperty: $Scriptable$Type): void
public "getLength"(): integer
public "call"(cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[]): any
public "getTag"(): any
public "getFunctionName"(): string
public "unknown"(): $RuntimeException
public "getArity"(): integer
public "createObject"(cx: $Context$Type, scope: $Scriptable$Type): $Scriptable
public "methodId"(): integer
public "getPrototype"(cx: $Context$Type): $Scriptable
public "hasTag"(tag: any): boolean
public "exportAsScopeProperty"(cx: $Context$Type): void
public "get"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): any
public "put"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type, arg3: any): void
public "delete"(arg0: $Context$Type, arg1: integer): void
public "getDefaultValue"(arg0: $Context$Type, arg1: $Class$Type<(any)>): any
public "has"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): boolean
public "setParentScope"(arg0: $Scriptable$Type): void
public "getIds"(arg0: $Context$Type): (any)[]
public "setPrototype"(arg0: $Scriptable$Type): void
public "getParentScope"(): $Scriptable
public "getAllIds"(cx: $Context$Type): (any)[]
get "length"(): integer
get "tag"(): any
get "functionName"(): string
get "arity"(): integer
set "parentScope"(value: $Scriptable$Type)
set "prototype"(value: $Scriptable$Type)
get "parentScope"(): $Scriptable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFunctionObject$Type = ($IdFunctionObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdFunctionObject_ = $IdFunctionObject$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemDroppedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

/**
 * Invoked when a player drops an item.
 */
export class $ItemDroppedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, entity: $ItemEntity$Type)

/**
 * The item entity that was spawned when dropping.
 */
public "getItemEntity"(): $ItemEntity
/**
 * The item that was dropped.
 */
public "getItem"(): $ItemStack
/**
 * The player that dropped the item.
 */
public "getEntity"(): $Player
get "itemEntity"(): $ItemEntity
get "item"(): $ItemStack
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDroppedEventJS$Type = ($ItemDroppedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDroppedEventJS_ = $ItemDroppedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$LogType" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"

export class $LogType extends $Enum<($LogType)> {
static readonly "INIT": $LogType
static readonly "DEBUG": $LogType
static readonly "INFO": $LogType
static readonly "WARN": $LogType
static readonly "ERROR": $LogType
static readonly "VALUES": ($LogType)[]
readonly "name": string
readonly "callback": $BiConsumer<($Logger), (string)>


public static "values"(): ($LogType)[]
public static "valueOf"(name: string): $LogType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogType$Type = (("init") | ("warn") | ("debug") | ("error") | ("info")) | ($LogType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogType_ = $LogType$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$CreativeTabCallback, $CreativeTabCallback$Type} from "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabCallback"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CreativeTabEvent extends $EventJS {
readonly "tab": $CreativeModeTab
readonly "showRestrictedItems": boolean

constructor(tab: $CreativeModeTab$Type, showRestrictedItems: boolean, callback: $CreativeTabCallback$Type)

public "setIcon"(icon: $ItemStack$Type): void
public "add"(items: ($ItemStack$Type)[]): void
public "add"(items: ($ItemStack$Type)[], visibility: $CreativeModeTab$TabVisibility$Type): void
public "remove"(filter: $Ingredient$Type): void
public "removeDisplay"(filter: $Ingredient$Type): void
public "removeSearch"(filter: $Ingredient$Type): void
public "addAfter"(order: $ItemStack$Type, items: ($ItemStack$Type)[]): void
public "addAfter"(order: $ItemStack$Type, items: ($ItemStack$Type)[], visibility: $CreativeModeTab$TabVisibility$Type): void
public "addBefore"(order: $ItemStack$Type, items: ($ItemStack$Type)[]): void
public "addBefore"(order: $ItemStack$Type, items: ($ItemStack$Type)[], visibility: $CreativeModeTab$TabVisibility$Type): void
public "setDisplayName"(component: $Component$Type): void
set "icon"(value: $ItemStack$Type)
set "displayName"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabEvent$Type = ($CreativeTabEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabEvent_ = $CreativeTabEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeKJS, $RecipeKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import {DocumentedRecipes, DocumentedRecipes$Type} from "packages/moe/wolfgirl/probejs/generated/DocumentedRecipes"
import {Shaped, Shaped$Type} from "packages/moe/wolfgirl/probejs/generated/schema/kubejs/Shaped"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {Stonecutting, Stonecutting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Stonecutting"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {SmithingTransform, SmithingTransform$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/SmithingTransform"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {Smelting, Smelting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Smelting"
import {Blasting, Blasting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Blasting"
import {CampfireCooking, CampfireCooking$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CampfireCooking"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {Shapeless, Shapeless$Type} from "packages/moe/wolfgirl/probejs/generated/schema/kubejs/Shapeless"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {Smoking, Smoking$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Smoking"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {SmithingTrim, SmithingTrim$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/SmithingTrim"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$RecipeFilter, $RecipeFilter$Type} from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipesEventJS extends $EventJS {
static readonly "SKIP_ERROR": $Pattern
readonly "originalRecipes": $Map<($ResourceLocation), ($RecipeJS)>
readonly "addedRecipes": $Collection<($RecipeJS)>
readonly "failedCount": $AtomicInteger
readonly "takenIds": $Map<($ResourceLocation), ($RecipeJS)>
readonly "shaped": (result: $OutputItem$Type, pattern: (string)[], key: {[k: string]: $InputItem$Type}) => Shaped
readonly "shapeless": (result: $OutputItem$Type, ingredients: ($InputItem$Type)[]) => Shapeless
readonly "smelting": (result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)) => Smelting
readonly "blasting": (result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)) => Blasting
readonly "smoking": (result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)) => Smoking
readonly "campfireCooking": (result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)) => CampfireCooking
readonly "stonecutting": (result: $OutputItem$Type, ingredient: $InputItem$Type) => Stonecutting
readonly "smithing": (result: $OutputItem$Type, template: $InputItem$Type, base: $InputItem$Type, addition: $InputItem$Type) => SmithingTransform
readonly "smithingTrim": (template: $InputItem$Type, base: $InputItem$Type, addition: $InputItem$Type) => SmithingTrim

constructor()

public "takeId"(recipe: $RecipeJS$Type, prefix: string, ids: string): $ResourceLocation
public "customFilter"(filter: $Predicate$Type<($RecipeKJS$Type)>): $RecipeFilter
public "handler$bkg000$injectRecipes"(arg0: $RecipeManager$Type, arg1: $Map$Type<(any), (any)>, arg2: $CallbackInfo$Type): void
public "remove"(filter: $RecipeFilter$Type): void
public "stage"(filter: $RecipeFilter$Type, stage: string): void
public "getRecipes"(): DocumentedRecipes
public "recipeStream"(filter: $RecipeFilter$Type): $Stream<($RecipeJS)>
public "addRecipe"(r: $RecipeJS$Type, json: boolean): $RecipeJS
public "printTypes"(): void
public "replaceOutput"(filter: $RecipeFilter$Type, match: $ReplacementMatch$Type, arg2: $OutputReplacement$Type): void
public "replaceInput"(filter: $RecipeFilter$Type, match: $ReplacementMatch$Type, arg2: $InputReplacement$Type): void
public "custom"(json: $JsonObject$Type): $RecipeJS
public "findRecipes"(filter: $RecipeFilter$Type): $Collection<($RecipeJS)>
public static "runInParallel"(runnable: $Runnable$Type): void
public static "runInParallel"<T>(callable: $Callable$Type<(T)>): T
public "forEachRecipe"(filter: $RecipeFilter$Type, consumer: $Consumer$Type<($RecipeJS$Type)>): void
public "findRecipeIds"(filter: $RecipeFilter$Type): $Collection<($ResourceLocation)>
public "containsRecipe"(filter: $RecipeFilter$Type): boolean
public "countRecipes"(filter: $RecipeFilter$Type): integer
public "setItemErrors"(b: boolean): void
public "printExamples"(type: string): void
public "printAllTypes"(): void
public "getRecipeFunction"(id: string): $RecipeTypeFunction
get "recipes"(): DocumentedRecipes
set "itemErrors"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipesEventJS$Type = ($RecipesEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipesEventJS_ = $RecipesEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$AlignMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AlignMode extends $Enum<($AlignMode)> {
static readonly "START": $AlignMode
static readonly "CENTER": $AlignMode
static readonly "END": $AlignMode


public static "values"(): ($AlignMode)[]
public static "valueOf"(name: string): $AlignMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlignMode$Type = (("center") | ("start") | ("end")) | ($AlignMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlignMode_ = $AlignMode$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuInventoryClickEvent$Callback" {
import {$ChestMenuInventoryClickEvent, $ChestMenuInventoryClickEvent$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuInventoryClickEvent"

export interface $ChestMenuInventoryClickEvent$Callback {

 "onClick"(arg0: $ChestMenuInventoryClickEvent$Type): void

(arg0: $ChestMenuInventoryClickEvent$Type): void
}

export namespace $ChestMenuInventoryClickEvent$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuInventoryClickEvent$Callback$Type = ($ChestMenuInventoryClickEvent$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuInventoryClickEvent$Callback_ = $ChestMenuInventoryClickEvent$Callback$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$RecipeKJS, $RecipeKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$InputFluid, $InputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid"
import {$OutputFluid, $OutputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import {$IngredientActionFilter, $IngredientActionFilter$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientActionFilter"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$IngredientAction, $IngredientAction$Type} from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$CustomJavaToJsWrapper, $CustomJavaToJsWrapper$Type} from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipeJS implements $RecipeKJS, $CustomJavaToJsWrapper {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "initValues"(created: boolean): void
public "inputValues"(): ($RecipeComponentValue<(any)>)[]
public "outputValues"(): ($RecipeComponentValue<(any)>)[]
public "modifyResult"(callback: $ModifyRecipeResultCallback$Type): $RecipeJS
public "getFromToString"(): string
public "afterLoaded"(): void
public "createRecipe"(): $Recipe<(any)>
public "convertJavaToJs"(cx: $Context$Type, scope: $Scriptable$Type, staticType: $Class$Type<(any)>): $Scriptable
public "getAllValueMap"(): $Map<(string), ($RecipeComponentValue<(any)>)>
public "getOriginalRecipe"(): $Recipe<(any)>
public "keepIngredient"(filter: $IngredientActionFilter$Type): $RecipeJS
public "ingredientAction"(filter: $IngredientActionFilter$Type, action: $IngredientAction$Type): $RecipeJS
public "consumeIngredient"(filter: $IngredientActionFilter$Type): $RecipeJS
public "damageIngredient"(filter: $IngredientActionFilter$Type): $RecipeJS
public "damageIngredient"(filter: $IngredientActionFilter$Type, damage: integer): $RecipeJS
public "replaceIngredient"(filter: $IngredientActionFilter$Type, item: $ItemStack$Type): $RecipeJS
public "outputFluidHasPriority"(from: any): boolean
public "group"(g: string): $RecipeJS
public "remove"(): void
public "get"(key: string): any
public "toString"(): string
public "getValue"<T>(key: $RecipeKey$Type<(T)>): T
public "merge"(j: $JsonObject$Type): $RecipeJS
public "id"(_id: $ResourceLocation$Type): $RecipeJS
public "set"(key: string, value: any): $RecipeJS
public "getId"(): string
public "save"(): void
public "setValue"<T>(key: $RecipeKey$Type<(T)>, value: T): $RecipeJS
public "getPath"(): string
public "stage"(s: string): $RecipeJS
public "deserialize"(merge: boolean): void
public "writeInputFluid"(value: $InputFluid$Type): $JsonElement
public "readInputFluid"(from: any): $InputFluid
public "readOutputItem"(from: any): $OutputItem
public "writeOutputItem"(value: $OutputItem$Type): $JsonElement
public "serialize"(): void
/**
 * 
 * @deprecated
 */
public "getType"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
/**
 * 
 * @deprecated
 */
public "getGroup"(): string
/**
 * 
 * @deprecated
 */
public "getSchema"(): $RecipeSchema
/**
 * 
 * @deprecated
 */
public "setGroup"(group: string): void
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "inputFluidHasPriority"(from: any): boolean
public "outputItemHasPriority"(from: any): boolean
public "getSerializationTypeFunction"(): $RecipeTypeFunction
public "getOriginalRecipeIngredients"(): $List<($Ingredient)>
public "customIngredientAction"(filter: $IngredientActionFilter$Type, id: string): $RecipeJS
public "getOriginalRecipeResult"(): $ItemStack
public "inputItemHasPriority"(from: any): boolean
public "hasChanged"(): boolean
public "writeInputItem"(value: $InputItem$Type): $JsonElement
public "readInputItem"(from: any): $InputItem
public "readOutputFluid"(from: any): $OutputFluid
public "writeOutputFluid"(value: $OutputFluid$Type): $JsonElement
public "getMod"(): string
get "fromToString"(): string
get "allValueMap"(): $Map<(string), ($RecipeComponentValue<(any)>)>
get "originalRecipe"(): $Recipe<(any)>
get "path"(): string
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializationTypeFunction"(): $RecipeTypeFunction
get "originalRecipeIngredients"(): $List<($Ingredient)>
get "originalRecipeResult"(): $ItemStack
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeJS$Type = ($RecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeJS_ = $RecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$Wrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Wrapper {

 "unwrap"(): any

(): any
}

export namespace $Wrapper {
function unwrapped(o: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapper$Type = ($Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapper_ = $Wrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityEventJS extends $LevelEventJS {

constructor()

public "getEntity"(): $Entity
public "getPlayer"(): $Player
public "getLevel"(): $Level
get "entity"(): $Entity
get "player"(): $Player
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEventJS$Type = ($EntityEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEventJS_ = $EntityEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$InventoryChangedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

/**
 * Invoked when a player's inventory changes.
 */
export class $InventoryChangedEventJS extends $PlayerEventJS {

constructor(p: $Player$Type, is: $ItemStack$Type, s: integer)

/**
 * Gets the slot that was changed.
 */
public "getSlot"(): integer
/**
 * Gets the item that was changed.
 */
public "getItem"(): $ItemStack
get "slot"(): integer
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangedEventJS$Type = ($InventoryChangedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangedEventJS_ = $InventoryChangedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$InputReplacementTransformer, $InputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export class $InputReplacementTransformer$Replacement extends $Record implements $InputReplacement {

constructor(arg0: $InputReplacement$Type, transformer: $InputReplacementTransformer$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "transformer"(): $InputReplacementTransformer
public "with"(): $InputReplacement
public static "of"(o: any): $InputReplacement
public "transform"(transformer: $InputReplacementTransformer$Type): $InputReplacementTransformer$Replacement
public "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputReplacementTransformer$Replacement$Type = ($InputReplacementTransformer$Replacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputReplacementTransformer$Replacement_ = $InputReplacementTransformer$Replacement$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$CreativeModeTabKJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeModeTabKJS {

 "kjs$setIcon"(arg0: $ItemStack$Type): void
 "kjs$setDisplayName"(arg0: $Component$Type): void
}

export namespace $CreativeModeTabKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTabKJS$Type = ($CreativeModeTabKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeModeTabKJS_ = $CreativeModeTabKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeComponentBuilder, $RecipeComponentBuilder$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$ArrayRecipeComponent, $ArrayRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent"
import {$AndRecipeComponent, $AndRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent"
import {$RecipeComponentWithParent, $RecipeComponentWithParent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentWithParent"
import {$ComponentRole, $ComponentRole$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole"
import {$RecipeComponentValue, $RecipeComponentValue$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue"
import {$TinyMap, $TinyMap$Type} from "packages/dev/latvian/mods/kubejs/util/$TinyMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$OrRecipeComponent, $OrRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent"
import {$RecipeComponent, $RecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$SimpleMappingRecipeComponent, $SimpleMappingRecipeComponent$Type} from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MappingRecipeComponent<T> implements $RecipeComponentWithParent<(T)> {

constructor(parent: $RecipeComponent$Type<(T)>, mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>)

public "componentType"(): string
public "write"(recipe: $RecipeJS$Type, value: T): $JsonElement
public "read"(recipe: $RecipeJS$Type, from: any): T
public "parentComponent"(): $RecipeComponent<(T)>
public "componentClass"(): $Class<(any)>
public "replaceOutput"(recipe: $RecipeJS$Type, original: T, match: $ReplacementMatch$Type, arg3: $OutputReplacement$Type): T
public "replaceInput"(recipe: $RecipeJS$Type, original: T, match: $ReplacementMatch$Type, arg3: $InputReplacement$Type): T
public "constructorDescription"(ctx: $DescriptionContext$Type): $TypeDescJS
public "role"(): $ComponentRole
public "hasPriority"(recipe: $RecipeJS$Type, from: any): boolean
public "checkEmpty"(key: $RecipeKey$Type<(T)>, value: T): string
public "isOutput"(recipe: $RecipeJS$Type, value: T, match: $ReplacementMatch$Type): boolean
public "isInput"(recipe: $RecipeJS$Type, value: T, match: $ReplacementMatch$Type): boolean
public "readFromJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, json: $JsonObject$Type): void
public "writeToJson"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, json: $JsonObject$Type): void
public "orSelf"(): $RecipeComponent<(T)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
 */
public "map"(mappingTo: $UnaryOperator$Type<(any)>, mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<(T)>
public static "builder"(): $RecipeComponentBuilder
public static "builder"(...key: ($RecipeKey$Type<(any)>)[]): $RecipeComponentBuilder
public "key"(name: string): $RecipeKey<(T)>
public "or"<O>(other: $RecipeComponent$Type<(O)>): $OrRecipeComponent<(T), (O)>
public "asArray"(): $ArrayRecipeComponent<(T)>
public "and"<O>(other: $RecipeComponent$Type<(O)>): $AndRecipeComponent<(T), (O)>
/**
 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
 * If you wish to handle those situations use the actual map function
 */
public "simpleMap"(mappings: any): $SimpleMappingRecipeComponent<(T)>
/**
 * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
 */
public "mapIn"(mappingTo: $UnaryOperator$Type<(any)>): $MappingRecipeComponent<(T)>
public "checkValueHasChanged"(oldValue: T, newValue: T): boolean
public "asMap"<K>(key: $RecipeComponent$Type<(K)>): $RecipeComponent<($TinyMap<(K), (T)>)>
public "asPatternKey"(): $RecipeComponent<($TinyMap<(character), (T)>)>
public "asArrayOrSelf"(): $ArrayRecipeComponent<(T)>
public "readFromMap"(recipe: $RecipeJS$Type, cv: $RecipeComponentValue$Type<(T)>, map: $Map$Type<(any), (any)>): void
/**
 * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
 */
public "mapOut"(mappingFrom: $UnaryOperator$Type<($JsonElement$Type)>): $MappingRecipeComponent<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappingRecipeComponent$Type<T> = ($MappingRecipeComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MappingRecipeComponent_<T> = $MappingRecipeComponent$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/player/$PlayerRespawnedEventJS" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"

/**
 * Invoked when a player respawns.
 * 
 * The reason of respawn can be either death or returning from the end.
 */
export class $PlayerRespawnedEventJS extends $PlayerEventJS {

constructor(player: $ServerPlayer$Type, oldPlayer: $ServerPlayer$Type, keepData: boolean)

/**
 * Gets the player that was before respawn. Note that this entity is already removed from the world.
 */
public "getOldPlayer"(): $ServerPlayer
/**
 * Gets whether the player's data was kept, e.g. when returning from the end.
 */
public "getKeepData"(): boolean
get "oldPlayer"(): $ServerPlayer
get "keepData"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRespawnedEventJS$Type = ($PlayerRespawnedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerRespawnedEventJS_ = $PlayerRespawnedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$InputItem" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$InputReplacementTransformer$Replacement, $InputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IngredientSupplierKJS, $IngredientSupplierKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS"
import {$InputReplacementTransformer, $InputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import {$JsonSerializable, $JsonSerializable$Type} from "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InputItem implements $IngredientSupplierKJS, $InputReplacement, $JsonSerializable {
static readonly "EMPTY": $InputItem
static readonly "PARSE_CACHE": $Map<(string), ($InputItem)>
readonly "ingredient": $Ingredient
readonly "count": integer


public "toString"(): string
public "isEmpty"(): boolean
public static "of"(ingredient: $Ingredient$Type, count: integer): $InputItem
public static "of"(o: $InputItem$Type): $InputItem
public "unwrap"(): $List<($InputItem)>
public "toJson"(): $JsonElement
public "toJson"(alwaysNest: boolean): $JsonElement
public "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
public "kjs$asIngredient"(): $Ingredient
public "withCount"(count: integer): $InputItem
public "validForMatching"(): boolean
public "transform"(transformer: $InputReplacementTransformer$Type): $InputReplacementTransformer$Replacement
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputItem$Type = ($Ingredient$Type) | (`${number}x ${Special.Item}`) | ($InputItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputItem_ = $InputItem$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$BlockKJS" {
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockBuilderProvider, $BlockBuilderProvider$Type} from "packages/dev/latvian/mods/kubejs/core/$BlockBuilderProvider"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export interface $BlockKJS extends $BlockBuilderProvider {

 "setNameKey"(key: string): void
 "setRandomTickCallback"(callback: $Consumer$Type<($RandomTickCallbackJS$Type)>): void
 "setExplosionResistance"(v: float): void
 "setLightEmission"(v: integer): void
 "setRequiresTool"(v: boolean): void
 "setBlockBuilder"(b: $BlockBuilder$Type): void
 "setIsRandomlyTicking"(v: boolean): void
 "setHasCollision"(v: boolean): void
 "setDestroySpeed"(v: float): void
 "getIdLocation"(): $ResourceLocation
 "getId"(): string
 "setJumpFactor"(v: float): void
 "setSpeedFactor"(v: float): void
 "getTypeData"(): $CompoundTag
 "setSoundType"(v: $SoundType$Type): void
 "setFriction"(v: float): void
 "getBlockStates"(): $List<($BlockState)>
 "getMod"(): string
 "getBlockBuilder"(): $BlockBuilder
}

export namespace $BlockKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKJS$Type = ($BlockKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKJS_ = $BlockKJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$IdFunctionCall" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$IdFunctionObject, $IdFunctionObject$Type} from "packages/dev/latvian/mods/rhino/$IdFunctionObject"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $IdFunctionCall {

 "execIdCall"(arg0: $IdFunctionObject$Type, arg1: $Context$Type, arg2: $Scriptable$Type, arg3: $Scriptable$Type, arg4: (any)[]): any

(arg0: $IdFunctionObject$Type, arg1: $Context$Type, arg2: $Scriptable$Type, arg3: $Scriptable$Type, arg4: (any)[]): any
}

export namespace $IdFunctionCall {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFunctionCall$Type = ($IdFunctionCall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdFunctionCall_ = $IdFunctionCall$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement" {
import {$InputReplacementTransformer$Replacement, $InputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$InputReplacementTransformer, $InputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export interface $InputReplacement {

 "transform"(transformer: $InputReplacementTransformer$Type): $InputReplacementTransformer$Replacement
 "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
}

export namespace $InputReplacement {
function of(o: any): $InputReplacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputReplacement$Type = ($InputItem$Type) | ($InputReplacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputReplacement_ = $InputReplacement$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$WrappedJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WrappedJS {

}

export namespace $WrappedJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedJS$Type = ($WrappedJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedJS_ = $WrappedJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$HorizontalDirectionalBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $HorizontalDirectionalBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "textureAll"(tex: string): $HorizontalDirectionalBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalDirectionalBlockBuilder$Type = ($HorizontalDirectionalBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalDirectionalBlockBuilder_ = $HorizontalDirectionalBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$Lazy" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Lazy<T> implements $Supplier<(T)> {


public "get"(): T
public static "of"<T>(supplier: $Supplier$Type<(T)>): $Lazy<(T)>
public static "of"<T>(supplier: $Supplier$Type<(T)>, expiresInMs: long): $Lazy<(T)>
public static "serviceLoader"<T>(type: $Class$Type<(T)>): $Lazy<(T)>
public "forget"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lazy$Type<T> = ($Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lazy_<T> = $Lazy$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/special/$ShapelessKubeJSRecipe$SerializerKJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShapelessKubeJSRecipe, $ShapelessKubeJSRecipe$Type} from "packages/dev/latvian/mods/kubejs/recipe/special/$ShapelessKubeJSRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessKubeJSRecipe$SerializerKJS implements $RecipeSerializer<($ShapelessKubeJSRecipe)> {

constructor()

public "fromNetwork"(id: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type): $ShapelessKubeJSRecipe
public "toNetwork"(buf: $FriendlyByteBuf$Type, r: $ShapelessKubeJSRecipe$Type): void
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): $ShapelessKubeJSRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessKubeJSRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessKubeJSRecipe$SerializerKJS$Type = ($ShapelessKubeJSRecipe$SerializerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessKubeJSRecipe$SerializerKJS_ = $ShapelessKubeJSRecipe$SerializerKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/$Painter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$MutableNumberUnit, $MutableNumberUnit$Type} from "packages/dev/latvian/mods/unit/$MutableNumberUnit"
import {$VariableSet, $VariableSet$Type} from "packages/dev/latvian/mods/unit/$VariableSet"
import {$UnitVariables, $UnitVariables$Type} from "packages/dev/latvian/mods/unit/$UnitVariables"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PainterObject, $PainterObject$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject"
import {$UnitContext, $UnitContext$Type} from "packages/dev/latvian/mods/unit/$UnitContext"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

export class $Painter implements $UnitVariables {
static readonly "INSTANCE": $Painter
readonly "id": string
readonly "unitContext": $UnitContext
readonly "deltaUnit": $MutableNumberUnit
readonly "screenWidthUnit": $MutableNumberUnit
readonly "screenHeightUnit": $MutableNumberUnit
readonly "mouseXUnit": $MutableNumberUnit
readonly "mouseYUnit": $MutableNumberUnit
readonly "defaultLineSizeUnit": $MutableNumberUnit

constructor(id: string)

public "getVariables"(): $VariableSet
public "inGameScreenDraw"(graphics: $GuiGraphics$Type, delta: float): void
public "guiScreenDraw"(screen: $Screen$Type, graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, delta: float): void
public "clear"(): void
public "make"(type: string): $PainterObject
public "getObject"(key: string): $PainterObject
public "paint"(root: $CompoundTag$Type): void
public "registerBuiltinObjects"(): void
public "unitOf"(cx: $Context$Type, o: any): $Unit
public "unitOf"(console: $ConsoleJS$Type, o: any): $Unit
public "setVariable"(key: string, variable: $Unit$Type): void
get "variables"(): $VariableSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Painter$Type = ($Painter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Painter_ = $Painter$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export class $ShapedBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type, ...suffixes: (string)[])

public "textureAll"(tex: string): $BlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedBlockBuilder$Type = ($ShapedBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedBlockBuilder_ = $ShapedBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$CraftingContainerKJS" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $CraftingContainerKJS {

 "getMenu"(): $AbstractContainerMenu
}

export namespace $CraftingContainerKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingContainerKJS$Type = ($CraftingContainerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingContainerKJS_ = $CraftingContainerKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$ServerPlayerKJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChestMenuData, $ChestMenuData$Type} from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Stages, $Stages$Type} from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NotificationBuilder, $NotificationBuilder$Type} from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$EntityPotionEffectsJS, $EntityPotionEffectsJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityArrayList, $EntityArrayList$Type} from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import {$AttachedData, $AttachedData$Type} from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import {$KubeJSGUI, $KubeJSGUI$Type} from "packages/dev/latvian/mods/kubejs/gui/$KubeJSGUI"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$KubeJSInventoryListener, $KubeJSInventoryListener$Type} from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import {$PlayerStatsJS, $PlayerStatsJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$PlayerKJS, $PlayerKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$PlayerKJS"

export interface $ServerPlayerKJS extends $PlayerKJS {

 "isOp"(): boolean
 "ban"(banner: string, reason: string, expiresInMillis: long): void
 "kick"(reason: $Component$Type): void
 "kick"(): void
 "openChestGUI"(title: $Component$Type, rows: integer, gui: $Consumer$Type<($ChestMenuData$Type)>): void
 "openGUI"(gui: $Consumer$Type<($KubeJSGUI$Type)>): void
 "getStats"(): $PlayerStatsJS
 "paint"(renderer: $CompoundTag$Type): void
 "isMiningBlock"(): boolean
 "setMouseItem"(item: $ItemStack$Type): void
 "notify"(builder: $NotificationBuilder$Type): void
 "sendData"(channel: string, data: $CompoundTag$Type): void
 "setSpawnLocation"(c: $BlockContainerJS$Type): void
 "setCreativeMode"(mode: boolean): void
 "isAdvancementDone"(id: $ResourceLocation$Type): boolean
 "getSpawnLocation"(): $BlockContainerJS
 "openInventoryGUI"(inventory: $InventoryKJS$Type, title: $Component$Type): void
 "captureInventory"(autoRestore: boolean): $Container
 "unlockAdvancement"(id: $ResourceLocation$Type): void
 "revokeAdvancement"(id: $ResourceLocation$Type): void
 "self"(): $ServerPlayer
 "setSelectedSlot"(index: integer): void
 "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
 "getInventory"(): $InventoryKJS
 "getStages"(): $Stages
 "isFake"(): boolean
 "isPlayer"(): boolean
 "give"(item: $ItemStack$Type): void
 "giveInHand"(item: $ItemStack$Type): void
 "getMouseItem"(): $ItemStack
 "addFood"(f: integer, m: float): void
 "spawn"(): void
 "getProfile"(): $GameProfile
 "addXPLevels"(l: integer): void
 "getXpLevel"(): integer
 "addXP"(xp: integer): void
 "setFoodLevel"(foodLevel: integer): void
 "getFoodLevel"(): integer
 "setXp"(xp: integer): void
 "setSaturation"(saturation: float): void
 "getXp"(): integer
 "setXpLevel"(l: integer): void
 "addExhaustion"(exhaustion: float): void
 "getSaturation"(): float
 "notify"(title: $Component$Type, text: $Component$Type): void
 "setStatusMessage"(message: $Component$Type): void
 "getSelectedSlot"(): integer
 "addItemCooldown"(item: $Item$Type, ticks: integer): void
 "sendInventoryUpdate"(): void
 "boostElytraFlight"(): void
 "getInventoryChangeListener"(): $KubeJSInventoryListener
 "getOpenInventory"(): $AbstractContainerMenu
 "getCraftingGrid"(): $InventoryKJS
 "setDefaultMovementSpeedMultiplier"(speed: double): void
 "setTotalMovementSpeedMultiplier"(speed: double): void
 "foodEaten"(is: $ItemStack$Type): void
 "swing"(): void
 "swing"(hand: $InteractionHand$Type): void
 "isLiving"(): boolean
 "getEquipment"(slot: $EquipmentSlot$Type): $ItemStack
 "setMaxHealth"(hp: float): void
 "isUndead"(): boolean
 "setEquipment"(slot: $EquipmentSlot$Type, item: $ItemStack$Type): void
 "getHeldItem"(hand: $InteractionHand$Type): $ItemStack
 "setHeldItem"(hand: $InteractionHand$Type, item: $ItemStack$Type): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer): void
 "damageHeldItem"(): void
 "damageHeldItem"(hand: $InteractionHand$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "setOffHandItem"(item: $ItemStack$Type): void
 "rayTrace"(): $RayTraceResultJS
 "getOffHandItem"(): $ItemStack
 "setChestArmorItem"(item: $ItemStack$Type): void
 "setFeetArmorItem"(item: $ItemStack$Type): void
 "getReachDistance"(): double
 "modifyAttribute"(attribute: $Attribute$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$Type): void
 "getMainHandItem"(): $ItemStack
 "getLegsArmorItem"(): $ItemStack
 "setDefaultMovementSpeed"(speed: double): void
 "getAttributeTotalValue"(attribute: $Attribute$Type): double
 "getPotionEffects"(): $EntityPotionEffectsJS
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer, onBroken: $Consumer$Type<($ItemStack$Type)>): void
 "damageEquipment"(slot: $EquipmentSlot$Type, amount: integer): void
 "damageEquipment"(slot: $EquipmentSlot$Type): void
 "removeAttribute"(attribute: $Attribute$Type, identifier: string): void
 "setMovementSpeedAddition"(speed: double): void
 "setAttributeBaseValue"(attribute: $Attribute$Type, value: double): void
 "setLegsArmorItem"(item: $ItemStack$Type): void
 "setHeadArmorItem"(item: $ItemStack$Type): void
 "getFeetArmorItem"(): $ItemStack
 "getAttributeBaseValue"(attribute: $Attribute$Type): double
 "getChestArmorItem"(): $ItemStack
 "getHeadArmorItem"(): $ItemStack
 "isHoldingInAnyHand"(i: $Ingredient$Type): boolean
 "setMainHandItem"(item: $ItemStack$Type): void
 "getDefaultMovementSpeed"(): double
 "getTotalMovementSpeed"(): double
 "canEntityBeSeen"(entity: $LivingEntity$Type): boolean
 "sendData"(channel: string): void
 "getData"(): $AttachedData<($Player)>
 "runCommand"(command: string): integer
 "getDisplayName"(): $Component
 "rayTrace"(distance: double): $RayTraceResultJS
 "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
 "getType"(): string
 "getLevel"(): $Level
 "getItem"(): $ItemStack
 "isFrame"(): boolean
 "getServer"(): $MinecraftServer
 "setMotionX"(x: double): void
 "setX"(x: double): void
 "setZ"(z: double): void
 "getMotionZ"(): double
 "isAnimal"(): boolean
 "teleportTo"(dimension: $ResourceLocation$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
 "getMotionY"(): double
 "setY"(y: double): void
 "getMotionX"(): double
 "isMonster"(): boolean
 "setMotionY"(y: double): void
 "setMotionZ"(z: double): void
 "setPosition"(x: double, y: double, z: double): void
 "setPosition"(block: $BlockContainerJS$Type): void
 "mergeNbt"(tag: $CompoundTag$Type): $Entity
 "playSound"(id: $SoundEvent$Type): void
 "playSound"(id: $SoundEvent$Type, volume: float, pitch: float): void
 "getFacing"(): $Direction
 "setRotation"(yaw: float, pitch: float): void
 "getBlock"(): $BlockContainerJS
 "getPassengers"(): $EntityArrayList
 "getNbt"(): $CompoundTag
 "getTeamId"(): string
 "setNbt"(nbt: $CompoundTag$Type): void
 "attack"(hp: float): void
 "getDistanceSq"(pos: $BlockPos$Type): double
 "getScriptType"(): $ScriptType
 "getDistance"(x: double, y: double, z: double): double
 "getDistance"(pos: $BlockPos$Type): double
 "runCommandSilent"(command: string): integer
 "getName"(): $Component
 "tell"(message: $Component$Type): void
 "isPeacefulCreature"(): boolean
 "isAmbientCreature"(): boolean
 "isWaterCreature"(): boolean
 "isOnScoreboardTeam"(teamId: string): boolean
 "getPersistentData"(): $CompoundTag

(): boolean
}

export namespace $ServerPlayerKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerKJS$Type = ($ServerPlayerKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerKJS_ = $ServerPlayerKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/forge/$ItemDestroyedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerDestroyItemEvent, $PlayerDestroyItemEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerDestroyItemEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemDestroyedEventJS extends $PlayerEventJS {

constructor(e: $PlayerDestroyItemEvent$Type)

public "getItem"(): $ItemStack
public "getHand"(): $InteractionHand
get "item"(): $ItemStack
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDestroyedEventJS$Type = ($ItemDestroyedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDestroyedEventJS_ = $ItemDestroyedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/unit/token/$UnitToken" {
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"
import {$UnitTokenStream, $UnitTokenStream$Type} from "packages/dev/latvian/mods/unit/token/$UnitTokenStream"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"

export interface $UnitToken {

 "nextUnaryOperator"(): boolean
 "unstack"(resultStack: $Stack$Type<($UnitToken$Type)>): void
 "interpret"(stream: $UnitTokenStream$Type): $Unit
}

export namespace $UnitToken {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitToken$Type = ($UnitToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitToken_ = $UnitToken$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/$ExplosionJS" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Level$ExplosionInteraction, $Level$ExplosionInteraction$Type} from "packages/net/minecraft/world/level/$Level$ExplosionInteraction"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExplosionJS {
readonly "x": double
readonly "y": double
readonly "z": double
 "exploder": $Entity
 "strength": float
 "causesFire": boolean
 "explosionMode": $Level$ExplosionInteraction

constructor(l: $LevelAccessor$Type, _x: double, _y: double, _z: double)

public "strength"(f: float): $ExplosionJS
public "explode"(): void
public "exploder"(entity: $Entity$Type): $ExplosionJS
public "causesFire"(b: boolean): $ExplosionJS
public "explosionMode"(mode: $Level$ExplosionInteraction$Type): $ExplosionJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionJS$Type = ($ExplosionJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionJS_ = $ExplosionJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemClickedEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RayTraceResultJS, $RayTraceResultJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

/**
 * Invoked when a player right clicks with an item **without targeting anything**.
 * 
 * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
 */
export class $ItemClickedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, hand: $InteractionHand$Type, item: $ItemStack$Type)

/**
 * The ray trace result of the click.
 */
public "getTarget"(): $RayTraceResultJS
/**
 * The item that was clicked with.
 */
public "getItem"(): $ItemStack
/**
 * The hand that the item was clicked with.
 */
public "getHand"(): $InteractionHand
get "target"(): $RayTraceResultJS
get "item"(): $ItemStack
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemClickedEventJS$Type = ($ItemClickedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemClickedEventJS_ = $ItemClickedEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityAttachment" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $BlockEntityAttachment {

 "writeAttachment"(): $CompoundTag
 "readAttachment"(tag: $CompoundTag$Type): void
 "onRemove"(newState: $BlockState$Type): void
}

export namespace $BlockEntityAttachment {
const EMPTY_ARRAY: ($BlockEntityAttachment)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAttachment$Type = ($BlockEntityAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityAttachment_ = $BlockEntityAttachment$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/typings/desc/$ObjectDescJS$Entry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"

export class $ObjectDescJS$Entry extends $Record {

constructor(key: string, value: $TypeDescJS$Type, optional: boolean)
constructor(key: string, value: $TypeDescJS$Type, optional: boolean, wrap: boolean)

public "optional"(): boolean
public "value"(): $TypeDescJS
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "wrap"(): boolean
public "key"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectDescJS$Entry$Type = ($ObjectDescJS$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectDescJS$Entry_ = $ObjectDescJS$Entry$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/create/$SequencedAssemblyItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SequencedAssemblyItemBuilder extends $ItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedAssemblyItemBuilder$Type = ($SequencedAssemblyItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedAssemblyItemBuilder_ = $SequencedAssemblyItemBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$EventResult$Type" {
import {$EventExit, $EventExit$Type} from "packages/dev/latvian/mods/kubejs/event/$EventExit"
import {$EventResult, $EventResult$Type} from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EventResult as $EventResult$0, $EventResult$Type as $EventResult$0$Type} from "packages/dev/architectury/event/$EventResult"

export class $EventResult$Type extends $Enum<($EventResult$Type)> {
static readonly "ERROR": $EventResult$Type
static readonly "PASS": $EventResult$Type
static readonly "INTERRUPT_DEFAULT": $EventResult$Type
static readonly "INTERRUPT_FALSE": $EventResult$Type
static readonly "INTERRUPT_TRUE": $EventResult$Type
readonly "defaultResult": $EventResult
readonly "defaultArchResult": $EventResult$0
readonly "defaultExit": $EventExit


public "exit"(value: any): $EventExit
public static "values"(): ($EventResult$Type)[]
public static "valueOf"(name: string): $EventResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$Type$Type = (("interrupt_default") | ("pass") | ("interrupt_false") | ("interrupt_true") | ("error")) | ($EventResult$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventResult$Type_ = $EventResult$Type$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenDrawMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ScreenDrawMode extends $Enum<($ScreenDrawMode)> {
static readonly "ALWAYS": $ScreenDrawMode
static readonly "INGAME": $ScreenDrawMode
static readonly "GUI": $ScreenDrawMode


public "ingame"(): boolean
public static "values"(): ($ScreenDrawMode)[]
public static "valueOf"(name: string): $ScreenDrawMode
public "gui"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawMode$Type = (("always") | ("gui") | ("ingame")) | ($ScreenDrawMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenDrawMode_ = $ScreenDrawMode$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapelessRecipeSchema$ShapelessRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ShapelessRecipeSchema$ShapelessRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "getSerializationTypeFunction"(): $RecipeTypeFunction
get "serializationTypeFunction"(): $RecipeTypeFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipeSchema$ShapelessRecipeJS$Type = ($ShapelessRecipeSchema$ShapelessRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessRecipeSchema$ShapelessRecipeJS_ = $ShapelessRecipeSchema$ShapelessRecipeJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/$InventoryKJS" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $InventoryKJS {

 "isEmpty"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getStackInSlot"(slot: integer): $ItemStack
 "getWidth"(): integer
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "getSlots"(): integer
 "setChanged"(): void
 "getHeight"(): integer
 "getSlotLimit"(slot: integer): integer
 "isMutable"(): boolean
 "asContainer"(): $Container
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "getBlock"(level: $Level$Type): $BlockContainerJS
}

export namespace $InventoryKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryKJS$Type = ($InventoryKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryKJS_ = $InventoryKJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/special/$SpecialRecipeSerializerManager" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpecialRecipeSerializerManager extends $EventJS {
static readonly "INSTANCE": $SpecialRecipeSerializerManager
static readonly "EVENT": $Event<($Runnable)>

constructor()

public "reset"(): void
public "isSpecial"(recipe: $Recipe$Type<(any)>): boolean
public "ignoreSpecialFlag"(id: $ResourceLocation$Type): void
public "addSpecialFlag"(id: $ResourceLocation$Type): void
public "addSpecialMod"(modid: string): void
public "ignoreSpecialMod"(modid: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialRecipeSerializerManager$Type = ($SpecialRecipeSerializerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialRecipeSerializerManager_ = $SpecialRecipeSerializerManager$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/level/gen/properties/$AddLakeProperties" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$BiomeFilter, $BiomeFilter$Type} from "packages/dev/latvian/mods/kubejs/level/gen/filter/biome/$BiomeFilter"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AddLakeProperties {
 "id": $ResourceLocation
 "worldgenLayer": $GenerationStep$Decoration
 "biomes": $BiomeFilter
 "fluid": $BlockStatePredicate
 "barrier": $BlockStatePredicate
 "chance": integer
 "retrogen": integer

constructor()

public "setInner"(p: $BlockStatePredicate$Type): void
public "setOuter"(p: $BlockStatePredicate$Type): void
set "inner"(value: $BlockStatePredicate$Type)
set "outer"(value: $BlockStatePredicate$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddLakeProperties$Type = ($AddLakeProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddLakeProperties_ = $AddLakeProperties$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyCallbackJS" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockStateModifyCallbackJS {

constructor(state: $BlockState$Type)

/**
 * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
 */
public "getOptionalValue"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>): $Optional<(T)>
public "populateNeighbours"(map: $Map$Type<($Map$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>)>), ($BlockState$Type)>): $BlockStateModifyCallbackJS
/**
 * Gets the value of the pased in property
 */
public "get"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>): T
public "toString"(): string
/**
 * Gets the value of the passed in property
 */
public "getValue"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>): T
/**
 * Sets the value of the specified boolean property
 */
public "set"(property: $BooleanProperty$Type, value: boolean): $BlockStateModifyCallbackJS
/**
 * Sets the value of the specified integer property
 */
public "set"(property: $IntegerProperty$Type, value: integer): $BlockStateModifyCallbackJS
/**
 * Sets the value of the specified enum property
 */
public "set"<T extends ($Enum<(T)>) & ($StringRepresentable)>(property: $EnumProperty$Type<(T)>, value: string): $BlockStateModifyCallbackJS
/**
 * Get the properties this block has that can be changed
 */
public "getProperties"(): $Collection<($Property<(any)>)>
/**
 * Gets the state. If it has been modified, gets the new state
 */
public "getState"(): $BlockState
/**
 * Sets the value of the specified property
 */
public "setValue"<T extends $Comparable<(T)>, V extends T>(property: $Property$Type<(T)>, comparable: V): $BlockStateModifyCallbackJS
/**
 * Rotate the block using the specified Rotation
 */
public "rotate"(rotation: $Rotation$Type): $BlockStateModifyCallbackJS
/**
 * Checks if this block has the specified property
 */
public "hasProperty"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>): boolean
/**
 * Mirror the block using the specified Mirror
 */
public "mirror"(mirror: $Mirror$Type): $BlockStateModifyCallbackJS
/**
 * Cycles the property
 */
public "cycle"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>): $BlockStateModifyCallbackJS
/**
 * Get a map of this blocks properties to it's value
 */
public "getValues"(): $ImmutableMap<($Property<(any)>), ($Comparable<(any)>)>
/**
 * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
 */
public "updateShape"(direction: $Direction$Type, blockState: $BlockState$Type, levelAccessor: $LevelAccessor$Type, blockPos: $BlockPos$Type, blockPos2: $BlockPos$Type): $BlockStateModifyCallbackJS
get "properties"(): $Collection<($Property<(any)>)>
get "state"(): $BlockState
get "values"(): $ImmutableMap<($Property<(any)>), ($Comparable<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateModifyCallbackJS$Type = ($BlockStateModifyCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateModifyCallbackJS_ = $BlockStateModifyCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$ConstProperties" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export interface $ConstProperties {

 "isConst"(arg0: string): boolean
 "defineConst"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type): void
 "putConst"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type, arg3: any): void
}

export namespace $ConstProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstProperties$Type = ($ConstProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstProperties_ = $ConstProperties$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/core/mixin/forge/$RecipeManagerAccessor" {
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export interface $RecipeManagerAccessor {

 "getContext"(): $ICondition$IContext

(): $ICondition$IContext
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$Type = ($RecipeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$Type;
}}
declare module "packages/dev/latvian/mods/rhino/regexp/$RegExp" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $RegExp {
static readonly "RA_MATCH": integer
static readonly "RA_REPLACE": integer
static readonly "RA_SEARCH": integer

constructor()

public "wrapRegExp"(cx: $Context$Type, scope: $Scriptable$Type, compiled: any): $Scriptable
public "isRegExp"(obj: $Scriptable$Type): boolean
public "js_split"(cx: $Context$Type, scope: $Scriptable$Type, target: string, args: (any)[]): any
public "find_split"(cx: $Context$Type, scope: $Scriptable$Type, target: string, separator: string, reObj: $Scriptable$Type, ip: (integer)[], matchlen: (integer)[], matched: (boolean)[], parensp: ((string)[])[]): integer
public "compileRegExp"(cx: $Context$Type, source: string, flags: string): any
public "action"(cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[], actionType: integer): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegExp$Type = ($RegExp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegExp_ = $RegExp$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/client/$DebugInfoEventJS" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ClientEventJS, $ClientEventJS$Type} from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"

/**
 * Invoked when the debug info is rendered.
 */
export class $DebugInfoEventJS extends $ClientEventJS {

constructor(l: $List$Type<(string)>)

/**
 * Whether the debug info should be rendered.
 */
public "getShowDebug"(): boolean
/**
 * The lines of debug info. Mutating this list will change the debug info.
 */
public "getLines"(): $List<(string)>
get "showDebug"(): boolean
get "lines"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugInfoEventJS$Type = ($DebugInfoEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugInfoEventJS_ = $DebugInfoEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$AfterEntityFallenOnBlockCallbackJS" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntitySteppedOnBlockCallbackJS, $EntitySteppedOnBlockCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$EntitySteppedOnBlockCallbackJS"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AfterEntityFallenOnBlockCallbackJS extends $EntitySteppedOnBlockCallbackJS {

constructor(blockGetter: $BlockGetter$Type, entity: $Entity$Type)

/**
 * Bounce the entity upwards by bounciness * their fall velocity.
 * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
 */
public "bounce"(bounciness: float): void
/**
 * Returns the Vec3 of the entity's velocity. Use .x, .y and .z to get the respective components of that
 */
public "getVelocity"(): $Vec3
/**
 * Sets the entity's velocity
 */
public "setVelocity"(x: float, y: float, z: float): void
/**
 * Sets the entity's velocity
 */
public "setVelocity"(vec: $Vec3$Type): void
get "velocity"(): $Vec3
set "velocity"(value: $Vec3$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AfterEntityFallenOnBlockCallbackJS$Type = ($AfterEntityFallenOnBlockCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AfterEntityFallenOnBlockCallbackJS_ = $AfterEntityFallenOnBlockCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeCraftingGrid" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ModifyRecipeCraftingGrid {

constructor(c: $CraftingContainer$Type)

public "get"(index: integer): $ItemStack
public "find"(ingredient: $Ingredient$Type, skip: integer): $ItemStack
public "find"(ingredient: $Ingredient$Type): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(ingredient: $Ingredient$Type): $List<($ItemStack)>
public "getWidth"(): integer
public "getHeight"(): integer
public "getPlayer"(): $Player
public "getMenu"(): $AbstractContainerMenu
get "width"(): integer
get "height"(): integer
get "player"(): $Player
get "menu"(): $AbstractContainerMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyRecipeCraftingGrid$Type = ($ModifyRecipeCraftingGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyRecipeCraftingGrid_ = $ModifyRecipeCraftingGrid$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/custom/$PressurePlateBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"
import {$ShapedBlockBuilder, $ShapedBlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $PressurePlateBlockBuilder extends $ShapedBlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "behaviour"(wt: string): $PressurePlateBlockBuilder
public "behaviour"(wt: $BlockSetType$Type): $PressurePlateBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurePlateBlockBuilder$Type = ($PressurePlateBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurePlateBlockBuilder_ = $PressurePlateBlockBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$EventHandlerContainer, $EventHandlerContainer$Type} from "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer"

export interface $EventExceptionHandler {

 "handle"(arg0: $EventJS$Type, arg1: $EventHandlerContainer$Type, arg2: $Throwable$Type): $Throwable

(arg0: $EventJS$Type, arg1: $EventHandlerContainer$Type, arg2: $Throwable$Type): $Throwable
}

export namespace $EventExceptionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExceptionHandler$Type = ($EventExceptionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExceptionHandler_ = $EventExceptionHandler$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$BaseFunction" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Function, $Function$Type} from "packages/dev/latvian/mods/rhino/$Function"
import {$IdFunctionObject, $IdFunctionObject$Type} from "packages/dev/latvian/mods/rhino/$IdFunctionObject"
import {$MemberType, $MemberType$Type} from "packages/dev/latvian/mods/rhino/$MemberType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IdScriptableObject, $IdScriptableObject$Type} from "packages/dev/latvian/mods/rhino/$IdScriptableObject"
import {$Scriptable, $Scriptable$Type} from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $BaseFunction extends $IdScriptableObject implements $Function {
static readonly "EMPTY": integer
static readonly "READONLY": integer
static readonly "DONTENUM": integer
static readonly "PERMANENT": integer
static readonly "UNINITIALIZED_CONST": integer
static readonly "CONST": integer

constructor(scope: $Scriptable$Type, prototype: $Scriptable$Type)
constructor()
constructor(isGenerator: boolean)

public "execIdCall"(f: $IdFunctionObject$Type, cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[]): any
public "toString"(): string
public "getLength"(): integer
public "getClassName"(): string
public "call"(cx: $Context$Type, scope: $Scriptable$Type, thisObj: $Scriptable$Type, args: (any)[]): any
public "construct"(cx: $Context$Type, scope: $Scriptable$Type, args: (any)[]): $Scriptable
public "getFunctionName"(): string
public "getArity"(): integer
public "createObject"(cx: $Context$Type, scope: $Scriptable$Type): $Scriptable
public "hasInstance"(cx: $Context$Type, instance: $Scriptable$Type): boolean
public "setImmunePrototypeProperty"(value: any): void
public "getTypeOf"(): $MemberType
public "get"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): any
public "put"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type, arg3: any): void
public "delete"(arg0: $Context$Type, arg1: integer): void
public "getDefaultValue"(arg0: $Context$Type, arg1: $Class$Type<(any)>): any
public "has"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): boolean
public "setParentScope"(arg0: $Scriptable$Type): void
public "getIds"(arg0: $Context$Type): (any)[]
public "getPrototype"(arg0: $Context$Type): $Scriptable
public "setPrototype"(arg0: $Scriptable$Type): void
public "getParentScope"(): $Scriptable
public "getAllIds"(cx: $Context$Type): (any)[]
get "length"(): integer
get "className"(): string
get "functionName"(): string
get "arity"(): integer
set "immunePrototypeProperty"(value: any)
get "typeOf"(): $MemberType
set "parentScope"(value: $Scriptable$Type)
set "prototype"(value: $Scriptable$Type)
get "parentScope"(): $Scriptable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFunction$Type = ($BaseFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFunction_ = $BaseFunction$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/predicate/$BlockIDPredicate" {
import {$BlockIDPredicate$PropertyObject, $BlockIDPredicate$PropertyObject$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockIDPredicate$PropertyObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockPredicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BlockIDPredicate implements $BlockPredicate {

constructor(i: $ResourceLocation$Type)

public "toString"(): string
public "check"(b: $BlockContainerJS$Type): boolean
public "checkState"(state: $BlockState$Type): boolean
public "with"(key: string, value: string): $BlockIDPredicate
public "getBlockProperties"(): $List<($BlockIDPredicate$PropertyObject)>
public "getBlockState"(): $BlockState
get "blockProperties"(): $List<($BlockIDPredicate$PropertyObject)>
get "blockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIDPredicate$Type = ($BlockIDPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIDPredicate_ = $BlockIDPredicate$Type;
}}
declare module "packages/dev/latvian/mods/rhino/mod/util/color/$Color" {
import {$SpecialEquality, $SpecialEquality$Type} from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export interface $Color extends $SpecialEquality {

 "getFireworkColorJS"(): integer
 "getHexJS"(): string
 "specialEquals"(o: any, shallow: boolean): boolean
 "getArgbJS"(): integer
 "getRgbJS"(): integer
 "getSerializeJS"(): string
 "createTextColorJS"(): $TextColor

(): integer
}

export namespace $Color {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = (("") | ("light_blue_dye") | ("BLUE_DYE") | ("purple_dye") | ("dark_red") | ("lightGrayDye") | ("DARK_AQUA") | ("none") | ("green_dye") | ("blackDye") | ("dark_blue") | ("red") | ("pink_dye") | ("aqua") | ("white") | ("WHITE_DYE") | ("dark_gray") | ("LIGHT_PURPLE") | ("BROWN_DYE") | ("BLACK") | ("darkPurple") | ("NONE") | ("LIGHT_BLUE_DYE") | ("AQUA") | ("lightBlueDye") | ("limeDye") | ("PURPLE_DYE") | ("GREEN_DYE") | ("magenta_dye") | ("-") | ("lime_dye") | ("yellowDye") | ("grayDye") | ("purpleDye") | ("DARK_PURPLE") | ("ORANGE_DYE") | ("darkGray") | ("brownDye") | ("YELLOW") | ("LIME_DYE") | ("blueDye") | ("white_dye") | ("pinkDye") | ("blue_dye") | ("cyanDye") | ("GOLD") | ("GRAY") | ("MAGENTA_DYE") | ("BLUE") | ("yellow") | ("darkBlue") | ("transparent") | ("orange_dye") | ("red_dye") | ("dark_purple") | ("gold") | ("gray") | ("light_purple") | ("darkRed") | ("greenDye") | ("DARK_RED") | ("redDye") | ("GRAY_DYE") | ("orangeDye") | ("yellow_dye") | ("black_dye") | ("magentaDye") | ("WHITE") | ("green") | ("LIGHT_GRAY_DYE") | ("BLACK_DYE") | ("darkGreen") | ("RED_DYE") | ("dark_green") | ("black") | ("lightPurple") | ("PINK_DYE") | ("DARK_BLUE") | ("GREEN") | ("darkAqua") | ("gray_dye") | ("CYAN_DYE") | ("RED") | ("brown_dye") | ("cyan_dye") | ("blue") | ("whiteDye") | ("dark_aqua") | ("YELLOW_DYE") | ("DARK_GREEN") | ("DARK_GRAY")) | (`#${string}`) | (integer) | ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateMirrorCallbackJS" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockStateModifyCallbackJS, $BlockStateModifyCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/callbacks/$BlockStateModifyCallbackJS"

export class $BlockStateMirrorCallbackJS extends $BlockStateModifyCallbackJS {

constructor(state: $BlockState$Type, mirror: $Mirror$Type)

/**
 * Gets the rotation of the direction passed in relative to this mirror
 */
public "getRotation"(dir: $Direction$Type): $Rotation
/**
 * Mirrors the direction passed in
 */
public "mirror"(dir: $Direction$Type): $Direction
/**
 * Gets the Mirror
 */
public "getMirror"(): $Mirror
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateMirrorCallbackJS$Type = ($BlockStateMirrorCallbackJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateMirrorCallbackJS_ = $BlockStateMirrorCallbackJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuInventoryClickEvent" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ChestMenuInventoryClickEvent {
readonly "type": $ClickType
readonly "button": integer

constructor(slot: $Slot$Type, type: $ClickType$Type, button: integer)

public "getIndex"(): integer
public "getItem"(): $ItemStack
public "setItem"(item: $ItemStack$Type): void
get "index"(): integer
get "item"(): $ItemStack
set "item"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenuInventoryClickEvent$Type = ($ChestMenuInventoryClickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestMenuInventoryClickEvent_ = $ChestMenuInventoryClickEvent$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/util/$AttachedData" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $AttachedData<T> extends $HashMap<(string), (any)> {

constructor(p: T)

public "add"(key: string, data: any): void
public "getParent"(): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "parent"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachedData$Type<T> = ($AttachedData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachedData_<T> = $AttachedData$Type<(T)>;
}}
declare module "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrapper" {
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CommandRegistryEventJS, $CommandRegistryEventJS$Type} from "packages/dev/latvian/mods/kubejs/command/$CommandRegistryEventJS"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $ArgumentTypeWrapper {

 "create"(arg0: $CommandRegistryEventJS$Type): $ArgumentType<(any)>
 "getResult"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): any
}

export namespace $ArgumentTypeWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeWrapper$Type = ($ArgumentTypeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeWrapper_ = $ArgumentTypeWrapper$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemModificationEventJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

/**
 * Invoked after all items are registered to modify them.
 */
export class $ItemModificationEventJS extends $EventJS {

constructor()

/**
 * Modifies items matching the given ingredient.
 * 
 * **NOTE**: tag ingredients are not supported at this time.
 */
public "modify"(arg0: $Ingredient$Type, c: $Consumer$Type<($Item$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModificationEventJS$Type = ($ItemModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModificationEventJS_ = $ItemModificationEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/fluid/$FlowingFluidBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$FluidBuilder, $FluidBuilder$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidBuilder"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FlowingFluidBuilder extends $BuilderBase<($FlowingFluid)> {
readonly "fluidBuilder": $FluidBuilder
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(b: $FluidBuilder$Type)

public "getRegistryType"(): $RegistryInfo<(any)>
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidBuilder$Type = ($FlowingFluidBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowingFluidBuilder_ = $FlowingFluidBuilder$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$Scriptable" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IdEnumerationIterator, $IdEnumerationIterator$Type} from "packages/dev/latvian/mods/rhino/$IdEnumerationIterator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MemberType, $MemberType$Type} from "packages/dev/latvian/mods/rhino/$MemberType"

export interface $Scriptable extends $IdEnumerationIterator {

 "enumerationIteratorHasNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
 "enumerationIteratorNext"(cx: $Context$Type, currentId: $Consumer$Type<(any)>): boolean
 "get"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): any
 "get"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type): any
 "put"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type, arg3: any): void
 "put"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type, arg3: any): void
 "delete"(arg0: $Context$Type, arg1: integer): void
 "delete"(arg0: $Context$Type, arg1: string): void
 "getDefaultValue"(arg0: $Context$Type, arg1: $Class$Type<(any)>): any
 "getClassName"(): string
 "has"(arg0: $Context$Type, arg1: integer, arg2: $Scriptable$Type): boolean
 "has"(arg0: $Context$Type, arg1: string, arg2: $Scriptable$Type): boolean
 "setParentScope"(arg0: $Scriptable$Type): void
 "getIds"(arg0: $Context$Type): (any)[]
 "hasInstance"(arg0: $Context$Type, arg1: $Scriptable$Type): boolean
 "getPrototype"(arg0: $Context$Type): $Scriptable
 "setPrototype"(arg0: $Scriptable$Type): void
 "getParentScope"(): $Scriptable
 "getAllIds"(cx: $Context$Type): (any)[]
 "getTypeOf"(): $MemberType
}

export namespace $Scriptable {
const NOT_FOUND: any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scriptable$Type = ($Scriptable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Scriptable_ = $Scriptable$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/loot/$LootBuilder" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConditionalFunction, $ConditionalFunction$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import {$LootBuilderPool, $LootBuilderPool$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilderPool"
import {$ConditionContainer, $ConditionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$FunctionContainer, $FunctionContainer$Type} from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import {$CopyNameFunction$NameSource, $CopyNameFunction$NameSource$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$LootContext$EntityTarget, $LootContext$EntityTarget$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootBuilder implements $FunctionContainer, $ConditionContainer {
 "type": string
 "customId": $ResourceLocation
 "pools": $JsonArray
 "functions": $JsonArray
 "conditions": $JsonArray

constructor(prev: $JsonElement$Type)

public "clearFunctions"(): void
public "clearConditions"(): void
public "clearPools"(): void
public "addPool"(p: $Consumer$Type<($LootBuilderPool$Type)>): void
public "toJson"(): $JsonObject
public "addConditionalFunction"(func: $Consumer$Type<($ConditionalFunction$Type)>): $FunctionContainer
public "enchantRandomly"(enchantments: ($ResourceLocation$Type)[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$Type, treasure: boolean): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$Type, limit: integer): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$Type): $FunctionContainer
public "furnaceSmelt"(): $FunctionContainer
public "name"(name: $Component$Type, entity: $LootContext$EntityTarget$Type): $FunctionContainer
public "name"(name: $Component$Type): $FunctionContainer
public "count"(count: $NumberProvider$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$Type): $FunctionContainer
public "lootTable"(table: $ResourceLocation$Type, seed: long): $FunctionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$Type, scores: $Map$Type<(string), (any)>): $ConditionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$Type, properties: $JsonObject$Type): $ConditionContainer
public "killedByPlayer"(): $ConditionContainer
public "randomChance"(chance: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootBuilder$Type = ($LootBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootBuilder_ = $LootBuilder$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/entity/$LivingEntityHurtEventJS" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

/**
 * Invoked before an entity is hurt by a damage source.
 */
export class $LivingEntityHurtEventJS extends $LivingEntityEventJS {

constructor(entity: $LivingEntity$Type, source: $DamageSource$Type, amount: float)

/**
 * The damage source.
 */
public "getSource"(): $DamageSource
/**
 * The entity that was hurt.
 */
public "getEntity"(): $LivingEntity
/**
 * The amount of damage.
 */
public "getDamage"(): float
get "source"(): $DamageSource
get "entity"(): $LivingEntity
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityHurtEventJS$Type = ($LivingEntityHurtEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityHurtEventJS_ = $LivingEntityHurtEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/$ItemModelPropertiesEventJS" {
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$ClampedItemPropertyFunction, $ClampedItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ClampedItemPropertyFunction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $ItemModelPropertiesEventJS extends $StartupEventJS {

constructor()

/**
 * Register a model property for all items.
 */
public "registerAll"(overwriteId: string, callback: $ClampedItemPropertyFunction$Type): void
/**
 * Register a model property for an item. Model properties are used to change the appearance of an item in the world.
 * 
 * More about model properties: https://minecraft.fandom.com/wiki/Model#Item_predicates
 */
public "register"(ingredient: $Ingredient$Type, overwriteId: string, callback: $ClampedItemPropertyFunction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelPropertiesEventJS$Type = ($ItemModelPropertiesEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelPropertiesEventJS_ = $ItemModelPropertiesEventJS$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleTest, $RuleTest$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration$TargetBlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export interface $BlockStatePredicate extends $Predicate<($BlockState)>, $ReplacementMatch {

 "test"(arg0: $BlockState$Type): boolean
 "check"(targetStates: $List$Type<($OreConfiguration$TargetBlockState$Type)>): boolean
 "getBlocks"(): $Collection<($Block)>
 "testBlock"(block: $Block$Type): boolean
 "asRuleTest"(): $RuleTest
 "getBlockIds"(): $Set<($ResourceLocation)>
 "getBlockStates"(): $Collection<($BlockState)>
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
 "negate"(): $Predicate<($BlockState)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>

(arg0: $BlockState$Type): boolean
}

export namespace $BlockStatePredicate {
const AIR_ID: $ResourceLocation
function of(o: any): $BlockStatePredicate
function fromString(s: string): $BlockStatePredicate
function ruleTestOf(o: any): $RuleTest
function isEqual<T>(arg0: any): $Predicate<($BlockState)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatePredicate$Type = (($BlockStatePredicate$Type)[]) | ({"or"?: $BlockStatePredicate$Type, "not"?: $BlockStatePredicate$Type}) | ($Block$Type) | (Special.BlockTag) | (RegExp) | ("*") | ("-") | ($BlockStatePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatePredicate_ = $BlockStatePredicate$Type;
}}
declare module "packages/dev/latvian/mods/unit/function/$FunctionFactory$Arg3" {
import {$FunctionFactory$FuncSupplier, $FunctionFactory$FuncSupplier$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$FuncSupplier"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export interface $FunctionFactory$Arg3 extends $FunctionFactory$FuncSupplier {

 "createArg"(arg0: $Unit$Type, arg1: $Unit$Type, arg2: $Unit$Type): $Unit
 "create"(args: ($Unit$Type)[]): $Unit

(arg0: $Unit$Type, arg1: $Unit$Type, arg2: $Unit$Type): $Unit
}

export namespace $FunctionFactory$Arg3 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionFactory$Arg3$Type = ($FunctionFactory$Arg3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionFactory$Arg3_ = $FunctionFactory$Arg3$Type;
}}
declare module "packages/dev/latvian/mods/unit/function/$FunctionFactory$Arg2" {
import {$FunctionFactory$FuncSupplier, $FunctionFactory$FuncSupplier$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$FuncSupplier"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export interface $FunctionFactory$Arg2 extends $FunctionFactory$FuncSupplier {

 "createArg"(arg0: $Unit$Type, arg1: $Unit$Type): $Unit
 "create"(args: ($Unit$Type)[]): $Unit

(arg0: $Unit$Type, arg1: $Unit$Type): $Unit
}

export namespace $FunctionFactory$Arg2 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionFactory$Arg2$Type = ($FunctionFactory$Arg2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionFactory$Arg2_ = $FunctionFactory$Arg2$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder$Helmet" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ArmorItemBuilder, $ArmorItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArmorItemBuilder$Helmet extends $ArmorItemBuilder {
readonly "armorType": $ArmorItem$Type
 "armorTier": $MutableArmorTier
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItemBuilder$Helmet$Type = ($ArmorItemBuilder$Helmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorItemBuilder$Helmet_ = $ArmorItemBuilder$Helmet$Type;
}}
declare module "packages/dev/latvian/mods/unit/function/$FunctionFactory$Arg1" {
import {$FunctionFactory$FuncSupplier, $FunctionFactory$FuncSupplier$Type} from "packages/dev/latvian/mods/unit/function/$FunctionFactory$FuncSupplier"
import {$Unit, $Unit$Type} from "packages/dev/latvian/mods/unit/$Unit"

export interface $FunctionFactory$Arg1 extends $FunctionFactory$FuncSupplier {

 "createArg"(arg0: $Unit$Type): $Unit
 "create"(args: ($Unit$Type)[]): $Unit

(arg0: $Unit$Type): $Unit
}

export namespace $FunctionFactory$Arg1 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionFactory$Arg1$Type = ($FunctionFactory$Arg1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionFactory$Arg1_ = $FunctionFactory$Arg1$Type;
}}
declare module "packages/dev/latvian/mods/rhino/$Symbol" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Symbol {

}

export namespace $Symbol {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Symbol$Type = ($Symbol);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Symbol_ = $Symbol$Type;
}}
declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$RemoveJEIRecipesEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IJeiRuntime, $IJeiRuntime$Type} from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $RemoveJEIRecipesEvent extends $EventJS {

constructor(r: $IJeiRuntime$Type)

public "getCategoryIds"(): $Collection<($ResourceLocation)>
public "remove"(category: $ResourceLocation$Type, recipesToRemove: ($ResourceLocation$Type)[]): void
public "getCategories"(): $Collection<($IRecipeCategory)>
get "categoryIds"(): $Collection<($ResourceLocation)>
get "categories"(): $Collection<($IRecipeCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveJEIRecipesEvent$Type = ($RemoveJEIRecipesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveJEIRecipesEvent_ = $RemoveJEIRecipesEvent$Type;
}}
