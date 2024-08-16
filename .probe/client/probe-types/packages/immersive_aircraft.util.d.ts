declare module "packages/immersive_aircraft/util/$Rect2iCommon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rect2iCommon {

constructor(i: integer, j: integer, k: integer, l: integer)

public "contains"(x: integer, y: integer): boolean
public "getY"(): integer
public "setWidth"(width: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setX"(xPos: integer): void
public "setY"(yPos: integer): void
public "setHeight"(height: integer): void
public "getX"(): integer
public "setPosition"(xPos: integer, yPos: integer): void
get "y"(): integer
set "width"(value: integer)
get "width"(): integer
get "height"(): integer
set "x"(value: integer)
set "y"(value: integer)
set "height"(value: integer)
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect2iCommon$Type = ($Rect2iCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rect2iCommon_ = $Rect2iCommon$Type;
}}
declare module "packages/immersive_aircraft/util/$InterpolatedFloat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $InterpolatedFloat {

constructor(steps: float)
constructor()

public "get"(tickDelta: float): float
public "update"(n: float): void
public "getValue"(): float
public "getSmooth"(): float
public "getSmooth"(tickDelta: float): float
public "decay"(towards: float, decay: float): void
public "getDiff"(): float
public "setSteps"(steps: float): void
get "value"(): float
get "smooth"(): float
get "diff"(): float
set "steps"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterpolatedFloat$Type = ($InterpolatedFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterpolatedFloat_ = $InterpolatedFloat$Type;
}}
