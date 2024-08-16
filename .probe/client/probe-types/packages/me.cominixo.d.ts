declare module "packages/me/cominixo/betterf3/ducks/$ClientChunkManagerAccess" {
import {$ClientChunkCache$Storage, $ClientChunkCache$Storage$Type} from "packages/net/minecraft/client/multiplayer/$ClientChunkCache$Storage"

export interface $ClientChunkManagerAccess {

 "getChunks"(): $ClientChunkCache$Storage

(): $ClientChunkCache$Storage
}

export namespace $ClientChunkManagerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkManagerAccess$Type = ($ClientChunkManagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkManagerAccess_ = $ClientChunkManagerAccess$Type;
}}
declare module "packages/me/cominixo/betterf3/ducks/$ClientChunkMapAccess" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$AtomicReferenceArray, $AtomicReferenceArray$Type} from "packages/java/util/concurrent/atomic/$AtomicReferenceArray"

export interface $ClientChunkMapAccess {

 "getChunks"(): $AtomicReferenceArray<($LevelChunk)>

(): $AtomicReferenceArray<($LevelChunk)>
}

export namespace $ClientChunkMapAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkMapAccess$Type = ($ClientChunkMapAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkMapAccess_ = $ClientChunkMapAccess$Type;
}}
declare module "packages/me/cominixo/betterf3/ducks/$ChunkBuilderAccess" {
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ChunkBuilderAccess {

 "getQueuedTaskCount"(): integer
 "getUploadQueue"(): $Queue<($Runnable)>
 "getBufferCount"(): integer
}

export namespace $ChunkBuilderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderAccess$Type = ($ChunkBuilderAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBuilderAccess_ = $ChunkBuilderAccess$Type;
}}
