declare module "packages/javax/security/auth/$Destroyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Destroyable {

 "destroy"(): void
 "isDestroyed"(): boolean
}

export namespace $Destroyable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Destroyable$Type = ($Destroyable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Destroyable_ = $Destroyable$Type;
}}
declare module "packages/javax/security/auth/$Subject" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PrivilegedAction, $PrivilegedAction$Type} from "packages/java/security/$PrivilegedAction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Principal, $Principal$Type} from "packages/java/security/$Principal"
import {$AccessControlContext, $AccessControlContext$Type} from "packages/java/security/$AccessControlContext"
import {$PrivilegedExceptionAction, $PrivilegedExceptionAction$Type} from "packages/java/security/$PrivilegedExceptionAction"

export class $Subject implements $Serializable {

constructor()
constructor(arg0: boolean, arg1: $Set$Type<(any)>, arg2: $Set$Type<(any)>, arg3: $Set$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setReadOnly"(): void
public "getPrincipals"<T extends $Principal>(arg0: $Class$Type<(T)>): $Set<(T)>
public "getPrincipals"(): $Set<($Principal)>
public "isReadOnly"(): boolean
/**
 * 
 * @deprecated
 */
public static "getSubject"(arg0: $AccessControlContext$Type): $Subject
public static "doAs"<T>(arg0: $Subject$Type, arg1: $PrivilegedExceptionAction$Type<(T)>): T
public static "doAs"<T>(arg0: $Subject$Type, arg1: $PrivilegedAction$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public static "doAsPrivileged"<T>(arg0: $Subject$Type, arg1: $PrivilegedExceptionAction$Type<(T)>, arg2: $AccessControlContext$Type): T
/**
 * 
 * @deprecated
 */
public static "doAsPrivileged"<T>(arg0: $Subject$Type, arg1: $PrivilegedAction$Type<(T)>, arg2: $AccessControlContext$Type): T
public "getPublicCredentials"(): $Set<(any)>
public "getPublicCredentials"<T>(arg0: $Class$Type<(T)>): $Set<(T)>
public "getPrivateCredentials"(): $Set<(any)>
public "getPrivateCredentials"<T>(arg0: $Class$Type<(T)>): $Set<(T)>
get "principals"(): $Set<($Principal)>
get "readOnly"(): boolean
get "publicCredentials"(): $Set<(any)>
get "privateCredentials"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subject$Type = ($Subject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Subject_ = $Subject$Type;
}}
