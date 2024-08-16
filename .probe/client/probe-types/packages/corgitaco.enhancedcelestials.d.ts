declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$MobEffectInstanceBuilder" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MobEffectInstanceBuilder extends $Record {
static readonly "CODEC": $Codec<($MobEffectInstanceBuilder)>

constructor(effect: $MobEffect$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean)

public "showIcon"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "visible"(): boolean
public "duration"(): integer
public "amplifier"(): integer
public "effect"(): $MobEffect
public "ambient"(): boolean
public "makeInstance"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceBuilder$Type = ($MobEffectInstanceBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectInstanceBuilder_ = $MobEffectInstanceBuilder$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$ChunkMapAccess" {
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export interface $ChunkMapAccess {

 "getLevel"(): $ServerLevel

(): $ServerLevel
}

export namespace $ChunkMapAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccess$Type = ($ChunkMapAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMapAccess_ = $ChunkMapAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/lunarevent/$LunarForecast$Data" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LunarEventInstance, $LunarEventInstance$Type} from "packages/corgitaco/enhancedcelestials/lunarevent/$LunarEventInstance"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarForecast$Data extends $Record {
static readonly "CODEC": $Codec<($LunarForecast$Data)>

constructor(forecast: $List$Type<($LunarEventInstance$Type)>, pastEvents: $List$Type<($LunarEventInstance$Type)>, lastCheckedGameTime: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "lastCheckedGameTime"(): long
public "forecast"(): $List<($LunarEventInstance)>
public "pastEvents"(): $List<($LunarEventInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarForecast$Data$Type = ($LunarForecast$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarForecast$Data_ = $LunarForecast$Data$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarMobSpawnInfo" {
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarMobSpawnInfo extends $Record {
static readonly "DEFAULT": $LunarMobSpawnInfo
static readonly "CODEC": $Codec<($LunarMobSpawnInfo)>

constructor(useBiomeSpawnSettings: boolean, forceSurfaceSpawning: boolean, slimesSpawnEverywhere: boolean, spawnInfo: $MobSpawnSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slimesSpawnEverywhere"(): boolean
public "useBiomeSpawnSettings"(): boolean
public "forceSurfaceSpawning"(): boolean
public "spawnInfo"(): $MobSpawnSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarMobSpawnInfo$Type = ($LunarMobSpawnInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarMobSpawnInfo_ = $LunarMobSpawnInfo$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarDimensionSettings" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LunarEvent, $LunarEvent$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarEvent"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarDimensionSettings extends $Record {
static readonly "CODEC": $Codec<($LunarDimensionSettings)>

constructor(defaultEvent: $ResourceKey$Type<($LunarEvent$Type)>, trackedPastEventsMaxCount: long, dayLength: long, yearLengthInDays: long, minDaysBetweenEvents: long, requiresClearSkies: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "trackedPastEventsMaxCount"(): long
public "minDaysBetweenEvents"(): long
public "dayLength"(): long
public "yearLengthInDays"(): long
public "defaultEvent"(): $ResourceKey<($LunarEvent)>
public "requiresClearSkies"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarDimensionSettings$Type = ($LunarDimensionSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarDimensionSettings_ = $LunarDimensionSettings$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/asm/$MixinRegistryAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinRegistryAccess {

}

export namespace $MixinRegistryAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinRegistryAccess$Type = ($MixinRegistryAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinRegistryAccess_ = $MixinRegistryAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/client/$LunarEventClientSettings" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ColorSettings, $ColorSettings$Type} from "packages/corgitaco/enhancedcelestials/api/client/$ColorSettings"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarEventClientSettings extends $Record {
static readonly "CODEC": $Codec<($LunarEventClientSettings)>

constructor(colorSettings: $ColorSettings$Type, moonSize: float, moonTextureLocation: $ResourceLocation$Type, soundTrack: $SoundEvent$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "moonSize"(): float
public "moonTextureLocation"(): $ResourceLocation
public "soundTrack"(): $SoundEvent
public "colorSettings"(): $ColorSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEventClientSettings$Type = ($LunarEventClientSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEventClientSettings_ = $LunarEventClientSettings$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/core/$EnhancedCelestialsContext" {
import {$LunarForecast, $LunarForecast$Type} from "packages/corgitaco/enhancedcelestials/lunarevent/$LunarForecast"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LunarForecast$Data, $LunarForecast$Data$Type} from "packages/corgitaco/enhancedcelestials/lunarevent/$LunarForecast$Data"

export class $EnhancedCelestialsContext {


public "save"(arg0: $Level$Type): void
public "chunkTick"(arg0: $Level$Type, arg1: $ChunkAccess$Type): void
public static "forLevel"(arg0: $Level$Type, arg1: $Optional$Type<($LunarForecast$Data$Type)>): $EnhancedCelestialsContext
public "getLunarForecast"(): $LunarForecast
public "tick"(arg0: $Level$Type): void
get "lunarForecast"(): $LunarForecast
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedCelestialsContext$Type = ($EnhancedCelestialsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnhancedCelestialsContext_ = $EnhancedCelestialsContext$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$StyleAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StyleAccess {

}

export namespace $StyleAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyleAccess$Type = ($StyleAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyleAccess_ = $StyleAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$EffectInstanceAccess" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $EffectInstanceAccess {

 "getEffect"(): $MobEffect

(): $MobEffect
}

export namespace $EffectInstanceAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectInstanceAccess$Type = ($EffectInstanceAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectInstanceAccess_ = $EffectInstanceAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarMobSettings" {
import {$MobEffectInstanceBuilder, $MobEffectInstanceBuilder$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$MobEffectInstanceBuilder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$LunarMobSpawnInfo, $LunarMobSpawnInfo$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarMobSpawnInfo"
import {$Condition, $Condition$Type} from "packages/corgitaco/corgilib/entity/condition/$Condition"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LunarMobSettings extends $Record {
static readonly "CODEC": $Codec<($LunarMobSettings)>
static readonly "DEFAULT": $LunarMobSettings

constructor(spawnCategoryMultiplier: $Map$Type<($MobCategory$Type), (double)>, lunarMobSpawnInfo: $LunarMobSpawnInfo$Type, effectsForEntityTag: $List$Type<($Pair$Type<($Condition$Type), ($MobEffectInstanceBuilder$Type)>)>, blockSleeping: $Condition$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "spawnCategoryMultiplier"(): $Map<($MobCategory), (double)>
public "effectsForEntityTag"(): $List<($Pair<($Condition), ($MobEffectInstanceBuilder)>)>
public "lunarMobSpawnInfo"(): $LunarMobSpawnInfo
public "blockSleeping"(): $Condition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarMobSettings$Type = ($LunarMobSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarMobSettings_ = $LunarMobSettings$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarEvent" {
import {$LunarMobSettings, $LunarMobSettings$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarMobSettings"
import {$DropSettings, $DropSettings$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$DropSettings"
import {$LunarTextComponents, $LunarTextComponents$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LunarEvent$SpawnRequirements, $LunarEvent$SpawnRequirements$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarEvent$SpawnRequirements"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LunarEventClientSettings, $LunarEventClientSettings$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/client/$LunarEventClientSettings"
import {$LunarMobSpawnInfo, $LunarMobSpawnInfo$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarMobSpawnInfo"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LunarTextComponents$Notification, $LunarTextComponents$Notification$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents$Notification"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LunarEvent {
static readonly "DIRECT_CODEC": $Codec<($LunarEvent)>

constructor(arg0: $Map$Type<($ResourceKey$Type<($Level$Type)>), ($LunarEvent$SpawnRequirements$Type)>, arg1: $LunarEventClientSettings$Type, arg2: $LunarTextComponents$Type, arg3: $LunarMobSettings$Type, arg4: $DropSettings$Type)

public "getEventChancesByDimension"(): $Map<($ResourceKey<($Level)>), ($LunarEvent$SpawnRequirements)>
public "blockSleeping"(arg0: $LivingEntity$Type): boolean
public "livingEntityTick"(arg0: $LivingEntity$Type): void
public "getLunarMobSettings"(): $LunarMobSettings
public "onBlockItemDrop"(arg0: $ServerLevel$Type, arg1: $ItemStack$Type): void
public "getSpawnMultiplierForMonsterCategory"(arg0: $MobCategory$Type): double
public "getClientSettings"(): $LunarEventClientSettings
public "endNotification"(): $LunarTextComponents$Notification
public "startNotification"(): $LunarTextComponents$Notification
public "getLunarSpawner"(): $LunarMobSpawnInfo
public "getTextComponents"(): $LunarTextComponents
public "getDropSettings"(): $DropSettings
get "eventChancesByDimension"(): $Map<($ResourceKey<($Level)>), ($LunarEvent$SpawnRequirements)>
get "lunarMobSettings"(): $LunarMobSettings
get "clientSettings"(): $LunarEventClientSettings
get "lunarSpawner"(): $LunarMobSpawnInfo
get "textComponents"(): $LunarTextComponents
get "dropSettings"(): $DropSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEvent$Type = ($LunarEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEvent_ = $LunarEvent$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/lunarevent/$LunarForecast" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceOrTagKeyArgument$Result, $ResourceOrTagKeyArgument$Result$Type} from "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument$Result"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LunarEvent, $LunarEvent$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarEvent"
import {$LunarEventInstance, $LunarEventInstance$Type} from "packages/corgitaco/enhancedcelestials/lunarevent/$LunarEventInstance"
import {$LunarForecast$Data, $LunarForecast$Data$Type} from "packages/corgitaco/enhancedcelestials/lunarevent/$LunarForecast$Data"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LunarDimensionSettings, $LunarDimensionSettings$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarDimensionSettings"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Long2LongFunction, $Long2LongFunction$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2LongFunction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $LunarForecast {

constructor(arg0: $Holder$Type<($LunarDimensionSettings$Type)>, arg1: $Registry$Type<($LunarEvent$Type)>, arg2: long, arg3: $LunarForecast$Data$Type)
constructor(arg0: $Holder$Type<($LunarDimensionSettings$Type)>, arg1: $Registry$Type<($LunarEvent$Type)>, arg2: long, arg3: $List$Type<($LunarEventInstance$Type)>, arg4: $List$Type<($LunarEventInstance$Type)>, arg5: long)
constructor(arg0: $Holder$Type<($LunarDimensionSettings$Type)>, arg1: $Registry$Type<($LunarEvent$Type)>, arg2: long)

public "data"(): $LunarForecast$Data
public static "updateForecast"(arg0: $ServerLevel$Type, arg1: $LunarDimensionSettings$Type, arg2: $LunarForecast$Type): boolean
public static "updateForecast"(arg0: $ServerLevel$Type, arg1: $LunarDimensionSettings$Type, arg2: $LunarForecast$Type, arg3: $Long2LongFunction$Type): boolean
public "recompute"(arg0: $ServerLevel$Type): void
public "getBlend"(): float
public "getMostRecentEvent"(): $Holder<($LunarEvent)>
public "getCurrentEventRaw"(): $Holder<($LunarEvent)>
public "getCurrentEvent"(arg0: boolean): $Holder<($LunarEvent)>
public "tick"(arg0: $Level$Type): void
public "getForecastComponent"(arg0: long): $Component
public "getLastCheckedGameTime"(): long
public "setOrReplaceEventWithResponse"(arg0: $ResourceOrTagKeyArgument$Result$Type<($LunarEvent$Type)>, arg1: long, arg2: $RandomSource$Type): $Pair<($Component), (boolean)>
public "getDimensionSettingsHolder"(): $Holder<($LunarDimensionSettings)>
public "setLastCheckedGameTime"(arg0: long): void
public "getForecast"(): $List<($LunarEventInstance)>
public "setCurrentEvent"(arg0: $ResourceKey$Type<($LunarEvent$Type)>): void
public "setCurrentEvent"(arg0: $Holder$Type<($LunarEvent$Type)>): void
public "getPastEvents"(): $List<($LunarEventInstance)>
get "blend"(): float
get "mostRecentEvent"(): $Holder<($LunarEvent)>
get "currentEventRaw"(): $Holder<($LunarEvent)>
get "lastCheckedGameTime"(): long
get "dimensionSettingsHolder"(): $Holder<($LunarDimensionSettings)>
set "lastCheckedGameTime"(value: long)
get "forecast"(): $List<($LunarEventInstance)>
set "currentEvent"(value: $ResourceKey$Type<($LunarEvent$Type)>)
set "currentEvent"(value: $Holder$Type<($LunarEvent$Type)>)
get "pastEvents"(): $List<($LunarEventInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarForecast$Type = ($LunarForecast);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarForecast_ = $LunarForecast$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarEvent$SpawnRequirements" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntArraySet, $IntArraySet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntArraySet"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarEvent$SpawnRequirements extends $Record {
static readonly "CODEC": $Codec<($LunarEvent$SpawnRequirements)>

constructor(arg0: double, arg1: integer, arg2: $Collection$Type<(integer)>)
constructor(chance: double, minNumberOfNights: integer, validMoonPhases: $IntArraySet$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "minNumberOfNights"(): integer
public "chance"(): double
public "validMoonPhases"(): $IntArraySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEvent$SpawnRequirements$Type = ($LunarEvent$SpawnRequirements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEvent$SpawnRequirements_ = $LunarEvent$SpawnRequirements$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/$EnhancedCelestialsWorldData" {
import {$EnhancedCelestialsContext, $EnhancedCelestialsContext$Type} from "packages/corgitaco/enhancedcelestials/core/$EnhancedCelestialsContext"

export interface $EnhancedCelestialsWorldData {

 "getLunarContext"(): $EnhancedCelestialsContext
 "setLunarContext"(arg0: $EnhancedCelestialsContext$Type): $EnhancedCelestialsContext
}

export namespace $EnhancedCelestialsWorldData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedCelestialsWorldData$Type = ($EnhancedCelestialsWorldData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnhancedCelestialsWorldData_ = $EnhancedCelestialsWorldData$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/util/$CustomTranslationTextComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CustomTranslationTextComponent {
static readonly "DEFAULT": $CustomTranslationTextComponent
static readonly "CODEC": $Codec<($CustomTranslationTextComponent)>

constructor(arg0: string, arg1: $Style$Type, arg2: $List$Type<($CustomTranslationTextComponent$Type)>)
constructor(arg0: string, arg1: $Style$Type, ...arg2: ($CustomTranslationTextComponent$Type)[])
constructor(arg0: string, ...arg1: ($CustomTranslationTextComponent$Type)[])

public "getKey"(): string
public "getStyle"(): $Style
public "getComponent"(): $Component
get "key"(): string
get "style"(): $Style
get "component"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTranslationTextComponent$Type = ($CustomTranslationTextComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTranslationTextComponent_ = $CustomTranslationTextComponent$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$JsonReloadListenerAccess" {
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"

export interface $JsonReloadListenerAccess {

 "ec_getGson"(): $Gson

(): $Gson
}

export namespace $JsonReloadListenerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReloadListenerAccess$Type = ($JsonReloadListenerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonReloadListenerAccess_ = $JsonReloadListenerAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$MobSpawnInfoAccess" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MobSpawnInfoAccess {

 "getSpawners"(): $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
 "getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
}

export namespace $MobSpawnInfoAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnInfoAccess$Type = ($MobSpawnInfoAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnInfoAccess_ = $MobSpawnInfoAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/client/$ColorSettings" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ColorSettings {
static readonly "CODEC": $Codec<($ColorSettings)>

constructor(arg0: string, arg1: string)
constructor(arg0: integer, arg1: integer)

public "getMoonTextureColor"(): integer
public "getGLMoonColor"(): $Vector3f
public "getSkyLightColor"(): integer
public "getGLSkyLightColor"(): $Vector3f
public static "tryParseColor"(arg0: string): integer
get "moonTextureColor"(): integer
get "gLMoonColor"(): $Vector3f
get "skyLightColor"(): integer
get "gLSkyLightColor"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorSettings$Type = ($ColorSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorSettings_ = $ColorSettings$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents$Notification" {
import {$LunarTextComponents$NotificationType, $LunarTextComponents$NotificationType$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents$NotificationType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$CustomTranslationTextComponent, $CustomTranslationTextComponent$Type} from "packages/corgitaco/enhancedcelestials/util/$CustomTranslationTextComponent"

export class $LunarTextComponents$Notification extends $Record {
static readonly "CODEC": $Codec<($LunarTextComponents$Notification)>

constructor(customTranslationTextComponent: $CustomTranslationTextComponent$Type, notificationType: $LunarTextComponents$NotificationType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "customTranslationTextComponent"(): $CustomTranslationTextComponent
public "notificationType"(): $LunarTextComponents$NotificationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarTextComponents$Notification$Type = ($LunarTextComponents$Notification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarTextComponents$Notification_ = $LunarTextComponents$Notification$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$ChunkAccessAccess" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $ChunkAccessAccess {

 "getLevel"(): $Level

(): $Level
}

export namespace $ChunkAccessAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAccessAccess$Type = ($ChunkAccessAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkAccessAccess_ = $ChunkAccessAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$DropSettings" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DropSettings extends $Record {
static readonly "EMPTY": $DropSettings
static "CODEC": $Codec<($DropSettings)>

constructor(dropEnhancer: $Map$Type<($TagKey$Type<($Item$Type)>), (double)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "dropEnhancer"(): $Map<($TagKey<($Item)>), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropSettings$Type = ($DropSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropSettings_ = $DropSettings$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/lunarevent/$LunarEventInstance" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LunarEvent, $LunarEvent$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarEvent"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarEventInstance {
static readonly "CODEC": $Codec<($LunarEventInstance)>

constructor(arg0: $ResourceKey$Type<($LunarEvent$Type)>, arg1: long)
constructor(arg0: $ResourceKey$Type<($LunarEvent$Type)>, arg1: long, arg2: boolean)

public "passed"(arg0: long): boolean
public "getDaysUntil"(arg0: long): long
public "scheduledDay"(): long
public "active"(arg0: long): boolean
public "getEvent"(arg0: $Registry$Type<($LunarEvent$Type)>): $Holder<($LunarEvent)>
public "getLunarEventKey"(): $ResourceKey<($LunarEvent)>
get "lunarEventKey"(): $ResourceKey<($LunarEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEventInstance$Type = ($LunarEventInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEventInstance_ = $LunarEventInstance$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents$NotificationType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LunarTextComponents$NotificationType extends $Enum<($LunarTextComponents$NotificationType)> implements $StringRepresentable {
static readonly "CHAT": $LunarTextComponents$NotificationType
static readonly "NONE": $LunarTextComponents$NotificationType
static readonly "HOT_BAR": $LunarTextComponents$NotificationType
static readonly "CODEC": $Codec<($LunarTextComponents$NotificationType)>


public static "values"(): ($LunarTextComponents$NotificationType)[]
public static "valueOf"(arg0: string): $LunarTextComponents$NotificationType
public "getSerializedName"(): string
public static "byName"(arg0: string): $LunarTextComponents$NotificationType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarTextComponents$NotificationType$Type = (("hot_bar") | ("chat") | ("none")) | ($LunarTextComponents$NotificationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarTextComponents$NotificationType_ = $LunarTextComponents$NotificationType$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$CustomTranslationTextComponent, $CustomTranslationTextComponent$Type} from "packages/corgitaco/enhancedcelestials/util/$CustomTranslationTextComponent"
import {$LunarTextComponents$Notification, $LunarTextComponents$Notification$Type} from "packages/corgitaco/enhancedcelestials/api/lunarevent/$LunarTextComponents$Notification"

export class $LunarTextComponents extends $Record {
static readonly "CODEC": $Codec<($LunarTextComponents)>

constructor(name: $CustomTranslationTextComponent$Type, riseNotification: $Optional$Type<($LunarTextComponents$Notification$Type)>, setNotification: $Optional$Type<($LunarTextComponents$Notification$Type)>)
constructor(arg0: $CustomTranslationTextComponent$Type, arg1: $LunarTextComponents$Notification$Type, arg2: $LunarTextComponents$Notification$Type)
constructor(arg0: $CustomTranslationTextComponent$Type, arg1: $CustomTranslationTextComponent$Type, arg2: $CustomTranslationTextComponent$Type)

public "name"(): $CustomTranslationTextComponent
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "riseNotification"(): $Optional<($LunarTextComponents$Notification)>
public "setNotification"(): $Optional<($LunarTextComponents$Notification)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarTextComponents$Type = ($LunarTextComponents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarTextComponents_ = $LunarTextComponents$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$DimensionTypeAccess" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $DimensionTypeAccess {

 "getEffectsServerSafe"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $DimensionTypeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionTypeAccess$Type = ($DimensionTypeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionTypeAccess_ = $DimensionTypeAccess$Type;
}}
declare module "packages/corgitaco/enhancedcelestials/mixin/access/$ColorAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ColorAccess {

 "getColorRaw"(): integer

(): integer
}

export namespace $ColorAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorAccess$Type = ($ColorAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorAccess_ = $ColorAccess$Type;
}}
