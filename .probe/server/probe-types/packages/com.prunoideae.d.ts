declare module "packages/com/prunoideae/custom/brew/$BasicBrewJS$Builder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BrewBuilder, $BrewBuilder$Type} from "packages/com/prunoideae/custom/brew/$BrewBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Brew, $Brew$Type} from "packages/vazkii/botania/api/brew/$Brew"

export class $BasicBrewJS$Builder extends $BrewBuilder {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Brew
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBrewJS$Builder$Type = ($BasicBrewJS$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBrewJS$Builder_ = $BasicBrewJS$Builder$Type;
}}
declare module "packages/com/prunoideae/custom/brew/$BrewBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Brew, $Brew$Type} from "packages/vazkii/botania/api/brew/$Brew"

export class $BrewBuilder extends $BuilderBase<($Brew)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "color"(color: $Color$Type): $BrewBuilder
public "color"(colorProvider: $Function$Type<($ItemStack$Type), ($Color$Type)>): $BrewBuilder
public "effect"(effect: $ResourceLocation$Type, duration: integer, amplifier: integer): $BrewBuilder
public "effect"(effect: $ResourceLocation$Type, duration: integer, amplifier: integer, ambient: boolean): $BrewBuilder
public "effect"(effect: $ResourceLocation$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean): $BrewBuilder
public "effect"(effect: $ResourceLocation$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean): $BrewBuilder
public "effect"(effect: $ResourceLocation$Type, duration: integer): $BrewBuilder
public "effect"(effect: $ResourceLocation$Type): $BrewBuilder
public "getRegistryType"(): $RegistryInfo<(any)>
public "cost"(cost: integer): $BrewBuilder
public "noPendant"(): $BrewBuilder
public "noIncense"(): $BrewBuilder
get "registryType"(): $RegistryInfo<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewBuilder$Type = ($BrewBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrewBuilder_ = $BrewBuilder$Type;
}}
declare module "packages/com/prunoideae/custom/item/$RuneItemBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuneItemBuilder extends $ItemBuilder {
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
export type $RuneItemBuilder$Type = ($RuneItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuneItemBuilder_ = $RuneItemBuilder$Type;
}}
