declare module "packages/javax/swing/text/$AttributeSet" {
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"

export interface $AttributeSet {

 "containsAttribute"(arg0: any, arg1: any): boolean
 "containsAttributes"(arg0: $AttributeSet$Type): boolean
 "getResolveParent"(): $AttributeSet
 "isDefined"(arg0: any): boolean
 "getAttribute"(arg0: any): any
 "isEqual"(arg0: $AttributeSet$Type): boolean
 "getAttributeCount"(): integer
 "copyAttributes"(): $AttributeSet
 "getAttributeNames"(): $Enumeration<(any)>
}

export namespace $AttributeSet {
const NameAttribute: any
const ResolveAttribute: any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeSet$Type = ($AttributeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeSet_ = $AttributeSet$Type;
}}
