declare module "packages/dev/wuffs/bcc/contract/$ServerDataExtension" {
import {$BetterStatus, $BetterStatus$Type} from "packages/dev/wuffs/bcc/data/$BetterStatus"

export interface $ServerDataExtension {

 "setBetterData"(arg0: $BetterStatus$Type): void
 "getBetterData"(): $BetterStatus
}

export namespace $ServerDataExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerDataExtension$Type = ($ServerDataExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerDataExtension_ = $ServerDataExtension$Type;
}}
declare module "packages/dev/wuffs/bcc/data/$BetterStatus" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BetterStatus extends $Record {
static "CODEC": $Codec<($BetterStatus)>

constructor(projectId: integer, name: string, version: string, versionId: integer, releaseType: string, isMetaData: boolean)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): string
public "hashCode"(): integer
public "versionId"(): integer
public "projectId"(): integer
public "releaseType"(): string
public "isMetaData"(): boolean
get "metaData"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterStatus$Type = ($BetterStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BetterStatus_ = $BetterStatus$Type;
}}
