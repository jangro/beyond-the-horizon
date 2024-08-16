declare module "packages/snownee/jade/gui/$JadeFont" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JadeFont {

 "jade$setGlintStrength"(arg0: float, arg1: float): void
 "jade$setGlint"(arg0: float, arg1: float): void
}

export namespace $JadeFont {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeFont$Type = ($JadeFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeFont_ = $JadeFont$Type;
}}
