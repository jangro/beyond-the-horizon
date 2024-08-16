declare module "packages/java/beans/$PropertyChangeEvent" {
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"

export class $PropertyChangeEvent extends $EventObject {

constructor(arg0: any, arg1: string, arg2: any, arg3: any)

public "toString"(): string
public "getPropertyName"(): string
public "getOldValue"(): any
public "getNewValue"(): any
public "getPropagationId"(): any
public "setPropagationId"(arg0: any): void
get "propertyName"(): string
get "oldValue"(): any
get "newValue"(): any
get "propagationId"(): any
set "propagationId"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyChangeEvent$Type = ($PropertyChangeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyChangeEvent_ = $PropertyChangeEvent$Type;
}}
declare module "packages/java/beans/$PropertyChangeListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$PropertyChangeEvent, $PropertyChangeEvent$Type} from "packages/java/beans/$PropertyChangeEvent"

export interface $PropertyChangeListener extends $EventListener {

 "propertyChange"(arg0: $PropertyChangeEvent$Type): void

(arg0: $PropertyChangeEvent$Type): void
}

export namespace $PropertyChangeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyChangeListener$Type = ($PropertyChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyChangeListener_ = $PropertyChangeListener$Type;
}}
