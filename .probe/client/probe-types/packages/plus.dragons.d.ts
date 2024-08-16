declare module "packages/plus/dragons/visuality/particle/$VisualityParticleEngine" {
import {$ParticleProvider, $ParticleProvider$Type} from "packages/net/minecraft/client/particle/$ParticleProvider"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleEngine$SpriteParticleRegistration, $ParticleEngine$SpriteParticleRegistration$Type} from "packages/net/minecraft/client/particle/$ParticleEngine$SpriteParticleRegistration"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $VisualityParticleEngine {

 "registerVisuality"<O extends $ParticleOptions, T extends $ParticleType<(O)>>(arg0: $RegistryObject$Type<(T)>, arg1: $ParticleProvider$Type<(O)>): void
 "registerVisuality"<O extends $ParticleOptions, T extends $ParticleType<(O)>>(arg0: $RegistryObject$Type<(T)>, arg1: $ParticleEngine$SpriteParticleRegistration$Type<(O)>): void
}

export namespace $VisualityParticleEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualityParticleEngine$Type = ($VisualityParticleEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualityParticleEngine_ = $VisualityParticleEngine$Type;
}}
