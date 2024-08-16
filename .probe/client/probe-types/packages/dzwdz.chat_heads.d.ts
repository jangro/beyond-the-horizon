declare module "packages/dzwdz/chat_heads/mixininterface/$TextureLocationSettable" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TextureLocationSettable {

 "chatheads$setTextureLocation"(arg0: $ResourceLocation$Type): void

(arg0: $ResourceLocation$Type): void
}

export namespace $TextureLocationSettable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureLocationSettable$Type = ($TextureLocationSettable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureLocationSettable_ = $TextureLocationSettable$Type;
}}
declare module "packages/dzwdz/chat_heads/mixininterface/$Ownable" {
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export interface $Ownable {

 "chatheads$setOwner"(arg0: $PlayerInfo$Type): void
 "chatheads$getOwner"(): $PlayerInfo
}

export namespace $Ownable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ownable$Type = ($Ownable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ownable_ = $Ownable$Type;
}}
