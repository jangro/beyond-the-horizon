declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $BlockAccessor {

 "puzzleslib$setItem"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAccessor$Type = ($BlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAccessor_ = $BlockAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$BiomeSpecialEffectsBuilderForgeAccessor" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"

export interface $BiomeSpecialEffectsBuilderForgeAccessor {

 "puzzleslib$setBackgroundMusic"(arg0: $Optional$Type<($Music$Type)>): void
 "puzzleslib$setGrassColorOverride"(arg0: $Optional$Type<(integer)>): void
 "puzzleslib$setAmbientParticle"(arg0: $Optional$Type<($AmbientParticleSettings$Type)>): void
 "puzzleslib$setFoliageColorOverride"(arg0: $Optional$Type<(integer)>): void
 "puzzleslib$setAmbientMoodSettings"(arg0: $Optional$Type<($AmbientMoodSettings$Type)>): void
 "puzzleslib$setAmbientLoopSoundEvent"(arg0: $Optional$Type<($Holder$Type<($SoundEvent$Type)>)>): void
 "puzzleslib$setAmbientAdditionsSettings"(arg0: $Optional$Type<($AmbientAdditionsSettings$Type)>): void
}

export namespace $BiomeSpecialEffectsBuilderForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilderForgeAccessor$Type = ($BiomeSpecialEffectsBuilderForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilderForgeAccessor_ = $BiomeSpecialEffectsBuilderForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ModelBakeryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelBakeryAccessor {

}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$Type = ($ModelBakeryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$MobSpawnSettingsBuilderForgeAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MobSpawnSettingsBuilderForgeAccessor {

 "puzzleslib$getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>

(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
}

export namespace $MobSpawnSettingsBuilderForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilderForgeAccessor$Type = ($MobSpawnSettingsBuilderForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilderForgeAccessor_ = $MobSpawnSettingsBuilderForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor" {
import {$IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"

export interface $ForgeRegistryForgeAccessor<V> {

 "puzzleslib$getAdd"(): $IForgeRegistry$AddCallback<(V)>
 "puzzleslib$setAdd"(arg0: $IForgeRegistry$AddCallback$Type<(V)>): void
}

export namespace $ForgeRegistryForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistryForgeAccessor$Type<V> = ($ForgeRegistryForgeAccessor<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistryForgeAccessor_<V> = $ForgeRegistryForgeAccessor$Type<(V)>;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockItemAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockItemAccessor {

 "puzzleslib$setBlock"(arg0: $Block$Type): void

(arg0: $Block$Type): void
}

export namespace $BlockItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemAccessor$Type = ($BlockItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemAccessor_ = $BlockItemAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$FireBlockForgeAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockForgeAccessor {

 "puzzleslib$setFlammable"(arg0: $Block$Type, arg1: integer, arg2: integer): void

(arg0: $Block$Type, arg1: integer, arg2: integer): void
}

export namespace $FireBlockForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockForgeAccessor$Type = ($FireBlockForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockForgeAccessor_ = $FireBlockForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$LootTableForgeAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"

export interface $LootTableForgeAccessor {

 "puzzleslib$getPools"(): $List<($LootPool)>

(): $List<($LootPool)>
}

export namespace $LootTableForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableForgeAccessor$Type = ($LootTableForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableForgeAccessor_ = $LootTableForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/impl/data/$ExistingFileHelperHolder" {
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export interface $ExistingFileHelperHolder {

 "puzzleslib$setExistingFileHelper"(arg0: $ExistingFileHelper$Type): void

(arg0: $ExistingFileHelper$Type): void
}

export namespace $ExistingFileHelperHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelperHolder$Type = ($ExistingFileHelperHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelperHolder_ = $ExistingFileHelperHolder$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$TooltipAccessor" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TooltipAccessor {

 "puzzleslib$setCachedTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>): void

(arg0: $List$Type<($FormattedCharSequence$Type)>): void
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccessor$Type = ($TooltipAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipAccessor_ = $TooltipAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$BlockColorsForgeAccessor" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockColorsForgeAccessor {

 "puzzleslib$getBlockColors"(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>

(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>
}

export namespace $BlockColorsForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsForgeAccessor$Type = ($BlockColorsForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsForgeAccessor_ = $BlockColorsForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemForgeAccessor {

 "puzzleslib$setRenderProperties"(arg0: any): void
 "puzzleslib$getRenderProperties"(): any
}

export namespace $ItemForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemForgeAccessor$Type = ($ItemForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemForgeAccessor_ = $ItemForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemColorsForgeAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemColorsForgeAccessor {

 "puzzleslib$getItemColors"(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>

(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>
}

export namespace $ItemColorsForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsForgeAccessor$Type = ($ItemColorsForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsForgeAccessor_ = $ItemColorsForgeAccessor$Type;
}}
