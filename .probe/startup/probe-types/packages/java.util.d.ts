declare module "packages/java/util/$RandomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RandomAccess {

}

export namespace $RandomAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomAccess$Type = ($RandomAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomAccess_ = $RandomAccess$Type;
}}
declare module "packages/java/util/concurrent/$ConcurrentHashMap$KeySetView" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ConcurrentHashMap$CollectionView, $ConcurrentHashMap$CollectionView$Type} from "packages/java/util/concurrent/$ConcurrentHashMap$CollectionView"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ConcurrentHashMap$KeySetView<K, V> extends $ConcurrentHashMap$CollectionView<(K), (V), (K)> implements $Set<(K)>, $Serializable {


public "add"(arg0: K): boolean
public "remove"(arg0: any): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "iterator"(): $Iterator<(K)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(K)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "getMappedValue"(): V
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
public static "of"<E>(arg0: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
public static "of"<E>(...arg0: (K)[]): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K): $Set<(K)>
public static "of"<E>(): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K): $Set<(K)>
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "mappedValue"(): V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$KeySetView$Type<K, V> = ($ConcurrentHashMap$KeySetView<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentHashMap$KeySetView_<K, V> = $ConcurrentHashMap$KeySetView$Type<(K), (V)>;
}}
declare module "packages/java/util/$SortedSet" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $SortedSet<E> extends $Set<(E)> {

 "last"(): E
 "spliterator"(): $Spliterator<(E)>
 "first"(): E
 "comparator"(): $Comparator<(any)>
 "subSet"(arg0: E, arg1: E): $SortedSet<(E)>
 "headSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E): $SortedSet<(E)>
 "add"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $SortedSet {
function copyOf<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
function of<E>(arg0: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
function of<E>(...arg0: (E)[]): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
function of<E>(): $Set<(E)>
function of<E>(arg0: E, arg1: E): $Set<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedSet$Type<E> = ($SortedSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortedSet_<E> = $SortedSet$Type<(E)>;
}}
declare module "packages/java/util/$Deque" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"

export interface $Deque<E> extends $Queue<(E)> {

 "add"(arg0: E): boolean
 "remove"(): E
 "remove"(arg0: any): boolean
 "size"(): integer
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "poll"(): E
 "peek"(): E
 "element"(): E
 "push"(arg0: E): void
 "pop"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "pollFirst"(): E
 "pollLast"(): E
 "offerLast"(arg0: E): boolean
 "removeFirst"(): E
 "getFirst"(): E
 "peekFirst"(): E
 "removeFirstOccurrence"(arg0: any): boolean
 "offerFirst"(arg0: E): boolean
 "removeLast"(): E
 "getLast"(): E
 "peekLast"(): E
 "removeLastOccurrence"(arg0: any): boolean
 "offer"(arg0: E): boolean
 "descendingIterator"(): $Iterator<(E)>
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Deque {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deque$Type<E> = ($Deque<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deque_<E> = $Deque$Type<(E)>;
}}
declare module "packages/java/util/$ResourceBundle" {
import {$ResourceBundle$Control, $ResourceBundle$Control$Type} from "packages/java/util/$ResourceBundle$Control"
import {$Module, $Module$Type} from "packages/java/lang/$Module"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $ResourceBundle {

constructor()

public "containsKey"(arg0: string): boolean
public "keySet"(): $Set<(string)>
public "getObject"(arg0: string): any
public "getString"(arg0: string): string
public "getKeys"(): $Enumeration<(string)>
public static "clearCache"(arg0: $ClassLoader$Type): void
public static "clearCache"(): void
public static "getBundle"(arg0: string, arg1: $Locale$Type, arg2: $ClassLoader$Type): $ResourceBundle
public static "getBundle"(arg0: string, arg1: $Locale$Type, arg2: $ResourceBundle$Control$Type): $ResourceBundle
public static "getBundle"(arg0: string, arg1: $Locale$Type, arg2: $ClassLoader$Type, arg3: $ResourceBundle$Control$Type): $ResourceBundle
public static "getBundle"(arg0: string): $ResourceBundle
public static "getBundle"(arg0: string, arg1: $ResourceBundle$Control$Type): $ResourceBundle
public static "getBundle"(arg0: string, arg1: $Locale$Type): $ResourceBundle
public static "getBundle"(arg0: string, arg1: $Module$Type): $ResourceBundle
public static "getBundle"(arg0: string, arg1: $Locale$Type, arg2: $Module$Type): $ResourceBundle
public "getBaseBundleName"(): string
public "getStringArray"(arg0: string): (string)[]
public "getLocale"(): $Locale
get "keys"(): $Enumeration<(string)>
get "baseBundleName"(): string
get "locale"(): $Locale
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBundle$Type = ($ResourceBundle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBundle_ = $ResourceBundle$Type;
}}
declare module "packages/java/util/function/$LongToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToDoubleFunction {

 "applyAsDouble"(arg0: long): double

(arg0: long): double
}

export namespace $LongToDoubleFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongToDoubleFunction$Type = ($LongToDoubleFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongToDoubleFunction_ = $LongToDoubleFunction$Type;
}}
declare module "packages/java/util/$IdentityHashMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$AbstractMap, $AbstractMap$Type} from "packages/java/util/$AbstractMap"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $IdentityHashMap<K, V> extends $AbstractMap<(K), (V)> implements $Map<(K), (V)>, $Serializable, $Cloneable {

constructor(arg0: integer)
constructor()
constructor(arg0: $Map$Type<(any), (any)>)

public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdentityHashMap$Type<K, V> = ($IdentityHashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdentityHashMap_<K, V> = $IdentityHashMap$Type<(K), (V)>;
}}
declare module "packages/java/util/zip/$ZipEntry" {
import {$FileTime, $FileTime$Type} from "packages/java/nio/file/attribute/$FileTime"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$ZipConstants, $ZipConstants$Type} from "packages/java/util/zip/$ZipConstants"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipEntry implements $ZipConstants, $Cloneable {
static readonly "STORED": integer
static readonly "DEFLATED": integer

constructor(arg0: string)
constructor(arg0: $ZipEntry$Type)

public "getName"(): string
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "getMethod"(): integer
public "getSize"(): long
public "getComment"(): string
public "isDirectory"(): boolean
public "getLastModifiedTime"(): $FileTime
public "setLastModifiedTime"(arg0: $FileTime$Type): $ZipEntry
public "getTime"(): long
public "setTime"(arg0: long): void
public "setTimeLocal"(arg0: $LocalDateTime$Type): void
public "getTimeLocal"(): $LocalDateTime
public "setLastAccessTime"(arg0: $FileTime$Type): $ZipEntry
public "getLastAccessTime"(): $FileTime
public "setCreationTime"(arg0: $FileTime$Type): $ZipEntry
public "getCreationTime"(): $FileTime
public "setSize"(arg0: long): void
public "getCompressedSize"(): long
public "setCompressedSize"(arg0: long): void
public "setCrc"(arg0: long): void
public "getCrc"(): long
public "setMethod"(arg0: integer): void
public "setExtra"(arg0: (byte)[]): void
public "getExtra"(): (byte)[]
public "setComment"(arg0: string): void
get "name"(): string
get "method"(): integer
get "size"(): long
get "comment"(): string
get "directory"(): boolean
get "lastModifiedTime"(): $FileTime
set "lastModifiedTime"(value: $FileTime$Type)
get "time"(): long
set "time"(value: long)
set "timeLocal"(value: $LocalDateTime$Type)
get "timeLocal"(): $LocalDateTime
set "lastAccessTime"(value: $FileTime$Type)
get "lastAccessTime"(): $FileTime
set "creationTime"(value: $FileTime$Type)
get "creationTime"(): $FileTime
set "size"(value: long)
get "compressedSize"(): long
set "compressedSize"(value: long)
set "crc"(value: long)
get "crc"(): long
set "method"(value: integer)
set "extra"(value: (byte)[])
get "extra"(): (byte)[]
set "comment"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipEntry$Type = ($ZipEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipEntry_ = $ZipEntry$Type;
}}
declare module "packages/java/util/$Locale$Category" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Locale$Category extends $Enum<($Locale$Category)> {
static readonly "DISPLAY": $Locale$Category
static readonly "FORMAT": $Locale$Category


public static "values"(): ($Locale$Category)[]
public static "valueOf"(arg0: string): $Locale$Category
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$Category$Type = (("display") | ("format")) | ($Locale$Category);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$Category_ = $Locale$Category$Type;
}}
declare module "packages/java/util/$OptionalLong" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $OptionalLong {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $LongStream
public static "of"(arg0: long): $OptionalLong
public static "empty"(): $OptionalLong
public "isPresent"(): boolean
public "orElse"(arg0: long): long
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): long
public "orElseThrow"(): long
public "ifPresentOrElse"(arg0: $LongConsumer$Type, arg1: $Runnable$Type): void
public "orElseGet"(arg0: $LongSupplier$Type): long
public "ifPresent"(arg0: $LongConsumer$Type): void
public "getAsLong"(): long
get "present"(): boolean
get "asLong"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalLong$Type = ($OptionalLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalLong_ = $OptionalLong$Type;
}}
declare module "packages/java/util/regex/$MatchResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MatchResult {

 "group"(): string
 "group"(arg0: integer): string
 "start"(arg0: integer): integer
 "start"(): integer
 "end"(arg0: integer): integer
 "end"(): integer
 "groupCount"(): integer
}

export namespace $MatchResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatchResult$Type = ($MatchResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatchResult_ = $MatchResult$Type;
}}
declare module "packages/java/util/$Map$Entry" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export interface $Map$Entry<K, V> {

 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "getValue"(): V
 "getKey"(): K
 "setValue"(arg0: V): V
}

export namespace $Map$Entry {
function comparingByKey<K, V>(): $Comparator<($Map$Entry<(K), (V)>)>
function comparingByKey<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
function comparingByValue<K, V>(): $Comparator<($Map$Entry<(K), (V)>)>
function comparingByValue<K, V>(arg0: $Comparator$Type<(any)>): $Comparator<($Map$Entry<(K), (V)>)>
function copyOf<K, V>(arg0: $Map$Entry$Type<(any), (any)>): $Map$Entry<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Map$Entry$Type<K, V> = ($Map$Entry<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Map$Entry_<K, V> = $Map$Entry$Type<(K), (V)>;
}}
declare module "packages/java/util/$PrimitiveIterator" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $PrimitiveIterator<T, T_CONS> extends $Iterator<(T)> {

 "forEachRemaining"(arg0: T_CONS): void
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "hasNext"(): boolean
 "next"(): T
}

export namespace $PrimitiveIterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$Type<T, T_CONS> = ($PrimitiveIterator<(T), (T_CONS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator_<T, T_CONS> = $PrimitiveIterator$Type<(T), (T_CONS)>;
}}
declare module "packages/java/util/$EventObject" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $EventObject implements $Serializable {

constructor(arg0: any)

public "toString"(): string
public "getSource"(): any
get "source"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventObject$Type = ($EventObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventObject_ = $EventObject$Type;
}}
declare module "packages/java/util/zip/$ZipFile" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ZipEntry, $ZipEntry$Type} from "packages/java/util/zip/$ZipEntry"
import {$ZipConstants, $ZipConstants$Type} from "packages/java/util/zip/$ZipConstants"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipFile implements $ZipConstants, $Closeable {
static readonly "OPEN_READ": integer
static readonly "OPEN_DELETE": integer

constructor(arg0: string, arg1: $Charset$Type)
constructor(arg0: $File$Type, arg1: $Charset$Type)
constructor(arg0: string)
constructor(arg0: $File$Type, arg1: integer)
constructor(arg0: $File$Type)
constructor(arg0: $File$Type, arg1: integer, arg2: $Charset$Type)

public "getName"(): string
public "size"(): integer
public "stream"(): $Stream<(any)>
public "close"(): void
public "entries"(): $Enumeration<(any)>
public "getInputStream"(arg0: $ZipEntry$Type): $InputStream
public "getEntry"(arg0: string): $ZipEntry
public "getComment"(): string
get "name"(): string
get "comment"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipFile$Type = ($ZipFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipFile_ = $ZipFile$Type;
}}
declare module "packages/java/util/$AbstractList" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractCollection, $AbstractCollection$Type} from "packages/java/util/$AbstractCollection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $AbstractList<E> extends $AbstractCollection<(E)> implements $List<(E)> {


public "add"(arg0: integer, arg1: E): void
public "add"(arg0: E): boolean
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "sort"(arg0: $Comparator$Type<(any)>): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
[index: number]: E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractList$Type<E> = ($AbstractList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractList_<E> = $AbstractList$Type<(E)>;
}}
declare module "packages/java/util/function/$Predicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Predicate<T> {

 "test"(arg0: T): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
 "negate"(): $Predicate<(T)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>

(arg0: T): boolean
}

export namespace $Predicate {
function isEqual<T>(arg0: any): $Predicate<(T)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$Type<T> = ($Predicate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Predicate_<T> = $Predicate$Type<(T)>;
}}
declare module "packages/java/util/stream/$DoubleStream$DoubleMapMultiConsumer" {
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"

export interface $DoubleStream$DoubleMapMultiConsumer {

 "accept"(arg0: double, arg1: $DoubleConsumer$Type): void

(arg0: double, arg1: $DoubleConsumer$Type): void
}

export namespace $DoubleStream$DoubleMapMultiConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$DoubleMapMultiConsumer$Type = ($DoubleStream$DoubleMapMultiConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleStream$DoubleMapMultiConsumer_ = $DoubleStream$DoubleMapMultiConsumer$Type;
}}
declare module "packages/java/util/function/$IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntSupplier {

 "getAsInt"(): integer

(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$Type = ($IntSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSupplier_ = $IntSupplier$Type;
}}
declare module "packages/java/util/function/$ToDoubleBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleBiFunction<T, U> {

 "applyAsDouble"(arg0: T, arg1: U): double

(arg0: T, arg1: U): double
}

export namespace $ToDoubleBiFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToDoubleBiFunction$Type<T, U> = ($ToDoubleBiFunction<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToDoubleBiFunction_<T, U> = $ToDoubleBiFunction$Type<(T), (U)>;
}}
declare module "packages/java/util/concurrent/$ConcurrentHashMap$CollectionView" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ConcurrentHashMap, $ConcurrentHashMap$Type} from "packages/java/util/concurrent/$ConcurrentHashMap"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ConcurrentHashMap$CollectionView<K, V, E> implements $Collection<(E)>, $Serializable {


public "remove"(arg0: any): boolean
public "toString"(): string
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "getMap"(): $ConcurrentHashMap<(K), (V)>
public "add"(arg0: E): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(E)>
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
get "map"(): $ConcurrentHashMap<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$CollectionView$Type<K, V, E> = ($ConcurrentHashMap$CollectionView<(K), (V), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentHashMap$CollectionView_<K, V, E> = $ConcurrentHashMap$CollectionView$Type<(K), (V), (E)>;
}}
declare module "packages/java/util/$AbstractQueue" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractCollection, $AbstractCollection$Type} from "packages/java/util/$AbstractCollection"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"

export class $AbstractQueue<E> extends $AbstractCollection<(E)> implements $Queue<(E)> {


public "add"(arg0: E): boolean
public "remove"(): E
public "clear"(): void
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "element"(): E
public "poll"(): E
public "peek"(): E
public "offer"(arg0: E): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractQueue$Type<E> = ($AbstractQueue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractQueue_<E> = $AbstractQueue$Type<(E)>;
}}
declare module "packages/java/util/jar/$Attributes" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Attributes$Name, $Attributes$Name$Type} from "packages/java/util/jar/$Attributes$Name"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Attributes implements $Map<(any), (any)>, $Cloneable {

constructor(arg0: $Attributes$Type)
constructor(arg0: integer)
constructor()

public "remove"(arg0: any): any
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "equals"(arg0: any): boolean
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "getValue"(arg0: string): string
public "getValue"(arg0: $Attributes$Name$Type): string
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "putValue"(arg0: string, arg1: string): string
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(any), (any)>
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): $Map<(any), (any)>
public static "of"<K, V>(): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any, arg18: any, arg19: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any): $Map<(any), (any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$Type<(any), (any), (any)>): any
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public static "entry"<K, V>(arg0: any, arg1: any): $Map$Entry<(any), (any)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$Type<(any), (any)>): any
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(any), (any)>
[index: string | number]: any
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attributes$Type = ($Attributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attributes_ = $Attributes$Type;
}}
declare module "packages/java/util/stream/$DoubleStream" {
import {$ObjDoubleConsumer, $ObjDoubleConsumer$Type} from "packages/java/util/function/$ObjDoubleConsumer"
import {$DoubleStream$Builder, $DoubleStream$Builder$Type} from "packages/java/util/stream/$DoubleStream$Builder"
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$OptionalDouble, $OptionalDouble$Type} from "packages/java/util/$OptionalDouble"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"
import {$DoubleUnaryOperator, $DoubleUnaryOperator$Type} from "packages/java/util/function/$DoubleUnaryOperator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$DoubleFunction, $DoubleFunction$Type} from "packages/java/util/function/$DoubleFunction"
import {$DoubleToIntFunction, $DoubleToIntFunction$Type} from "packages/java/util/function/$DoubleToIntFunction"
import {$DoubleToLongFunction, $DoubleToLongFunction$Type} from "packages/java/util/function/$DoubleToLongFunction"
import {$DoubleStream$DoubleMapMultiConsumer, $DoubleStream$DoubleMapMultiConsumer$Type} from "packages/java/util/stream/$DoubleStream$DoubleMapMultiConsumer"
import {$DoubleBinaryOperator, $DoubleBinaryOperator$Type} from "packages/java/util/function/$DoubleBinaryOperator"
import {$BaseStream, $BaseStream$Type} from "packages/java/util/stream/$BaseStream"
import {$DoubleSummaryStatistics, $DoubleSummaryStatistics$Type} from "packages/java/util/$DoubleSummaryStatistics"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$DoublePredicate, $DoublePredicate$Type} from "packages/java/util/function/$DoublePredicate"

export interface $DoubleStream extends $BaseStream<(double), ($DoubleStream)> {

 "min"(): $OptionalDouble
 "max"(): $OptionalDouble
 "toArray"(): (double)[]
 "map"(arg0: $DoubleUnaryOperator$Type): $DoubleStream
 "collect"<R>(arg0: $Supplier$Type<(R)>, arg1: $ObjDoubleConsumer$Type<(R)>, arg2: $BiConsumer$Type<(R), (R)>): R
 "count"(): long
 "limit"(arg0: long): $DoubleStream
 "filter"(arg0: $DoublePredicate$Type): $DoubleStream
 "anyMatch"(arg0: $DoublePredicate$Type): boolean
 "flatMap"(arg0: $DoubleFunction$Type<(any)>): $DoubleStream
 "forEach"(arg0: $DoubleConsumer$Type): void
 "findAny"(): $OptionalDouble
 "skip"(arg0: long): $DoubleStream
 "peek"(arg0: $DoubleConsumer$Type): $DoubleStream
 "sum"(): double
 "reduce"(arg0: double, arg1: $DoubleBinaryOperator$Type): double
 "reduce"(arg0: $DoubleBinaryOperator$Type): $OptionalDouble
 "distinct"(): $DoubleStream
 "findFirst"(): $OptionalDouble
 "allMatch"(arg0: $DoublePredicate$Type): boolean
 "parallel"(): $DoubleStream
 "forEachOrdered"(arg0: $DoubleConsumer$Type): void
 "mapToInt"(arg0: $DoubleToIntFunction$Type): $IntStream
 "mapToLong"(arg0: $DoubleToLongFunction$Type): $LongStream
 "mapMulti"(arg0: $DoubleStream$DoubleMapMultiConsumer$Type): $DoubleStream
 "takeWhile"(arg0: $DoublePredicate$Type): $DoubleStream
 "dropWhile"(arg0: $DoublePredicate$Type): $DoubleStream
 "noneMatch"(arg0: $DoublePredicate$Type): boolean
 "sorted"(): $DoubleStream
 "mapToObj"<U>(arg0: $DoubleFunction$Type<(any)>): $Stream<(U)>
 "boxed"(): $Stream<(double)>
 "average"(): $OptionalDouble
 "summaryStatistics"(): $DoubleSummaryStatistics
 "close"(): void
 "isParallel"(): boolean
 "unordered"(): $DoubleStream
 "onClose"(arg0: $Runnable$Type): $DoubleStream
}

export namespace $DoubleStream {
function of(...arg0: (double)[]): $DoubleStream
function of(arg0: double): $DoubleStream
function builder(): $DoubleStream$Builder
function concat(arg0: $DoubleStream$Type, arg1: $DoubleStream$Type): $DoubleStream
function empty(): $DoubleStream
function iterate(arg0: double, arg1: $DoubleUnaryOperator$Type): $DoubleStream
function iterate(arg0: double, arg1: $DoublePredicate$Type, arg2: $DoubleUnaryOperator$Type): $DoubleStream
function generate(arg0: $DoubleSupplier$Type): $DoubleStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$Type = ($DoubleStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleStream_ = $DoubleStream$Type;
}}
declare module "packages/java/util/$EventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EventListener {

}

export namespace $EventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventListener$Type = ($EventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventListener_ = $EventListener$Type;
}}
declare module "packages/java/util/$OptionalInt" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $OptionalInt {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $IntStream
public static "of"(arg0: integer): $OptionalInt
public static "empty"(): $OptionalInt
public "isPresent"(): boolean
public "orElse"(arg0: integer): integer
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): integer
public "orElseThrow"(): integer
public "ifPresentOrElse"(arg0: $IntConsumer$Type, arg1: $Runnable$Type): void
public "orElseGet"(arg0: $IntSupplier$Type): integer
public "ifPresent"(arg0: $IntConsumer$Type): void
public "getAsInt"(): integer
get "present"(): boolean
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalInt$Type = ($OptionalInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalInt_ = $OptionalInt$Type;
}}
declare module "packages/java/util/function/$ToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleFunction<T> {

 "applyAsDouble"(arg0: T): double

(arg0: T): double
}

export namespace $ToDoubleFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToDoubleFunction$Type<T> = ($ToDoubleFunction<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToDoubleFunction_<T> = $ToDoubleFunction$Type<(T)>;
}}
declare module "packages/java/util/function/$DoubleToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToIntFunction {

 "applyAsInt"(arg0: double): integer

(arg0: double): integer
}

export namespace $DoubleToIntFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleToIntFunction$Type = ($DoubleToIntFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleToIntFunction_ = $DoubleToIntFunction$Type;
}}
declare module "packages/java/util/function/$BiPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiPredicate<T, U> {

 "test"(arg0: T, arg1: U): boolean
 "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(T), (U)>
 "negate"(): $BiPredicate<(T), (U)>
 "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(T), (U)>

(arg0: T, arg1: U): boolean
}

export namespace $BiPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiPredicate$Type<T, U> = ($BiPredicate<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiPredicate_<T, U> = $BiPredicate$Type<(T), (U)>;
}}
declare module "packages/java/util/stream/$Collectors" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ConcurrentMap, $ConcurrentMap$Type} from "packages/java/util/concurrent/$ConcurrentMap"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$LongSummaryStatistics, $LongSummaryStatistics$Type} from "packages/java/util/$LongSummaryStatistics"
import {$IntSummaryStatistics, $IntSummaryStatistics$Type} from "packages/java/util/$IntSummaryStatistics"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DoubleSummaryStatistics, $DoubleSummaryStatistics$Type} from "packages/java/util/$DoubleSummaryStatistics"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Collectors {


public static "joining"(): $Collector<(charseq), (any), (string)>
public static "joining"(arg0: charseq, arg1: charseq, arg2: charseq): $Collector<(charseq), (any), (string)>
public static "joining"(arg0: charseq): $Collector<(charseq), (any), (string)>
public static "toList"<T>(): $Collector<(T), (any), ($List<(T)>)>
public static "toMap"<T, K, U, M extends $Map<(K), (U)>>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(U)>, arg3: $Supplier$Type<(M)>): $Collector<(T), (any), (M)>
public static "toMap"<T, K, U>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Collector<(T), (any), ($Map<(K), (U)>)>
public static "toMap"<T, K, U>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(U)>): $Collector<(T), (any), ($Map<(K), (U)>)>
public static "toSet"<T>(): $Collector<(T), (any), ($Set<(T)>)>
public static "maxBy"<T>(arg0: $Comparator$Type<(any)>): $Collector<(T), (any), ($Optional<(T)>)>
public static "minBy"<T>(arg0: $Comparator$Type<(any)>): $Collector<(T), (any), ($Optional<(T)>)>
public static "partitioningBy"<T, D, A>(arg0: $Predicate$Type<(any)>, arg1: $Collector$Type<(any), (A), (D)>): $Collector<(T), (any), ($Map<(boolean), (D)>)>
public static "partitioningBy"<T>(arg0: $Predicate$Type<(any)>): $Collector<(T), (any), ($Map<(boolean), ($List<(T)>)>)>
public static "summingLong"<T>(arg0: $ToLongFunction$Type<(any)>): $Collector<(T), (any), (long)>
public static "reducing"<T>(arg0: T, arg1: $BinaryOperator$Type<(T)>): $Collector<(T), (any), (T)>
public static "reducing"<T, U>(arg0: U, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(U)>): $Collector<(T), (any), (U)>
public static "reducing"<T>(arg0: $BinaryOperator$Type<(T)>): $Collector<(T), (any), ($Optional<(T)>)>
public static "groupingBy"<T, K>(arg0: $Function$Type<(any), (any)>): $Collector<(T), (any), ($Map<(K), ($List<(T)>)>)>
public static "groupingBy"<T, K, A, D>(arg0: $Function$Type<(any), (any)>, arg1: $Collector$Type<(any), (A), (D)>): $Collector<(T), (any), ($Map<(K), (D)>)>
public static "groupingBy"<T, K, D, A, M extends $Map<(K), (D)>>(arg0: $Function$Type<(any), (any)>, arg1: $Supplier$Type<(M)>, arg2: $Collector$Type<(any), (A), (D)>): $Collector<(T), (any), (M)>
public static "groupingByConcurrent"<T, K, A, D, M extends $ConcurrentMap<(K), (D)>>(arg0: $Function$Type<(any), (any)>, arg1: $Supplier$Type<(M)>, arg2: $Collector$Type<(any), (A), (D)>): $Collector<(T), (any), (M)>
public static "groupingByConcurrent"<T, K, A, D>(arg0: $Function$Type<(any), (any)>, arg1: $Collector$Type<(any), (A), (D)>): $Collector<(T), (any), ($ConcurrentMap<(K), (D)>)>
public static "groupingByConcurrent"<T, K>(arg0: $Function$Type<(any), (any)>): $Collector<(T), (any), ($ConcurrentMap<(K), ($List<(T)>)>)>
public static "collectingAndThen"<T, A, R, RR>(arg0: $Collector$Type<(T), (A), (R)>, arg1: $Function$Type<(R), (RR)>): $Collector<(T), (A), (RR)>
public static "toConcurrentMap"<T, K, U>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Collector<(T), (any), ($ConcurrentMap<(K), (U)>)>
public static "toConcurrentMap"<T, K, U>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(U)>): $Collector<(T), (any), ($ConcurrentMap<(K), (U)>)>
public static "toConcurrentMap"<T, K, U, M extends $ConcurrentMap<(K), (U)>>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(U)>, arg3: $Supplier$Type<(M)>): $Collector<(T), (any), (M)>
public static "toCollection"<T, C extends $Collection<(T)>>(arg0: $Supplier$Type<(C)>): $Collector<(T), (any), (C)>
public static "toUnmodifiableList"<T>(): $Collector<(T), (any), ($List<(T)>)>
public static "toUnmodifiableSet"<T>(): $Collector<(T), (any), ($Set<(T)>)>
public static "mapping"<T, U, A, R>(arg0: $Function$Type<(any), (any)>, arg1: $Collector$Type<(any), (A), (R)>): $Collector<(T), (any), (R)>
public static "flatMapping"<T, U, A, R>(arg0: $Function$Type<(any), (any)>, arg1: $Collector$Type<(any), (A), (R)>): $Collector<(T), (any), (R)>
public static "filtering"<T, A, R>(arg0: $Predicate$Type<(any)>, arg1: $Collector$Type<(any), (A), (R)>): $Collector<(T), (any), (R)>
public static "counting"<T>(): $Collector<(T), (any), (long)>
public static "summingInt"<T>(arg0: $ToIntFunction$Type<(any)>): $Collector<(T), (any), (integer)>
public static "summingDouble"<T>(arg0: $ToDoubleFunction$Type<(any)>): $Collector<(T), (any), (double)>
public static "averagingInt"<T>(arg0: $ToIntFunction$Type<(any)>): $Collector<(T), (any), (double)>
public static "averagingLong"<T>(arg0: $ToLongFunction$Type<(any)>): $Collector<(T), (any), (double)>
public static "averagingDouble"<T>(arg0: $ToDoubleFunction$Type<(any)>): $Collector<(T), (any), (double)>
public static "toUnmodifiableMap"<T, K, U>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Collector<(T), (any), ($Map<(K), (U)>)>
public static "toUnmodifiableMap"<T, K, U>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(U)>): $Collector<(T), (any), ($Map<(K), (U)>)>
public static "summarizingInt"<T>(arg0: $ToIntFunction$Type<(any)>): $Collector<(T), (any), ($IntSummaryStatistics)>
public static "summarizingLong"<T>(arg0: $ToLongFunction$Type<(any)>): $Collector<(T), (any), ($LongSummaryStatistics)>
public static "summarizingDouble"<T>(arg0: $ToDoubleFunction$Type<(any)>): $Collector<(T), (any), ($DoubleSummaryStatistics)>
public static "teeing"<T, R1, R2, R>(arg0: $Collector$Type<(any), (any), (R1)>, arg1: $Collector$Type<(any), (any), (R2)>, arg2: $BiFunction$Type<(any), (any), (R)>): $Collector<(T), (any), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collectors$Type = ($Collectors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collectors_ = $Collectors$Type;
}}
declare module "packages/java/util/concurrent/locks/$ReadWriteLock" {
import {$Lock, $Lock$Type} from "packages/java/util/concurrent/locks/$Lock"

export interface $ReadWriteLock {

 "readLock"(): $Lock
 "writeLock"(): $Lock
}

export namespace $ReadWriteLock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadWriteLock$Type = ($ReadWriteLock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadWriteLock_ = $ReadWriteLock$Type;
}}
declare module "packages/java/util/$Set" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export interface $Set<E> extends $Collection<(E)> {

 "add"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Set {
function copyOf<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
function of<E>(arg0: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
function of<E>(...arg0: (E)[]): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
function of<E>(): $Set<(E)>
function of<E>(arg0: E, arg1: E): $Set<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Set$Type<E> = ((E)[]) | ($Set<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Set_<E> = $Set$Type<(E)>;
}}
declare module "packages/java/util/$Hashtable" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Dictionary, $Dictionary$Type} from "packages/java/util/$Dictionary"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Hashtable<K, V> extends $Dictionary<(K), (V)> implements $Map<(K), (V)>, $Cloneable, $Serializable {

constructor(arg0: $Map$Type<(any), (any)>)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)

public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "keys"(): $Enumeration<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hashtable$Type<K, V> = ($Hashtable<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Hashtable_<K, V> = $Hashtable$Type<(K), (V)>;
}}
declare module "packages/java/util/$Comparator" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"

export interface $Comparator<T> {

 "equals"(arg0: any): boolean
 "compare"(arg0: T, arg1: T): integer
 "thenComparing"(arg0: $Comparator$Type<(any)>): $Comparator<(T)>
 "thenComparing"<U>(arg0: $Function$Type<(any), (any)>, arg1: $Comparator$Type<(any)>): $Comparator<(T)>
 "thenComparing"<U extends $Comparable<(any)>>(arg0: $Function$Type<(any), (any)>): $Comparator<(T)>
 "reversed"(): $Comparator<(T)>
 "thenComparingInt"(arg0: $ToIntFunction$Type<(any)>): $Comparator<(T)>
 "thenComparingLong"(arg0: $ToLongFunction$Type<(any)>): $Comparator<(T)>
 "thenComparingDouble"(arg0: $ToDoubleFunction$Type<(any)>): $Comparator<(T)>
}

export namespace $Comparator {
function reverseOrder<T>(): $Comparator<(T)>
function comparing<T, U>(arg0: $Function$Type<(any), (any)>): $Comparator<(T)>
function comparing<T, U>(arg0: $Function$Type<(any), (any)>, arg1: $Comparator$Type<(any)>): $Comparator<(T)>
function comparingInt<T>(arg0: $ToIntFunction$Type<(any)>): $Comparator<(T)>
function comparingLong<T>(arg0: $ToLongFunction$Type<(any)>): $Comparator<(T)>
function comparingDouble<T>(arg0: $ToDoubleFunction$Type<(any)>): $Comparator<(T)>
function naturalOrder<T>(): $Comparator<(T)>
function nullsFirst<T>(arg0: $Comparator$Type<(any)>): $Comparator<(T)>
function nullsLast<T>(arg0: $Comparator$Type<(any)>): $Comparator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Comparator$Type<T> = ($Comparator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Comparator_<T> = $Comparator$Type<(T)>;
}}
declare module "packages/java/util/function/$IntToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToLongFunction {

 "applyAsLong"(arg0: integer): long

(arg0: integer): long
}

export namespace $IntToLongFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntToLongFunction$Type = ($IntToLongFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntToLongFunction_ = $IntToLongFunction$Type;
}}
declare module "packages/java/util/$Locale$IsoCountryCode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Locale$IsoCountryCode extends $Enum<($Locale$IsoCountryCode)> {
static readonly "PART1_ALPHA2": $Locale$IsoCountryCode
static readonly "PART1_ALPHA3": $Locale$IsoCountryCode
static readonly "PART3": $Locale$IsoCountryCode


public static "values"(): ($Locale$IsoCountryCode)[]
public static "valueOf"(arg0: string): $Locale$IsoCountryCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$IsoCountryCode$Type = (("part3") | ("part1_alpha2") | ("part1_alpha3")) | ($Locale$IsoCountryCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$IsoCountryCode_ = $Locale$IsoCountryCode$Type;
}}
declare module "packages/java/util/concurrent/$Future" {
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

export interface $Future<V> {

 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "cancel"(arg0: boolean): boolean
 "isCancelled"(): boolean
 "isDone"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$Type<V> = ($Future<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future_<V> = $Future$Type<(V)>;
}}
declare module "packages/java/util/function/$ToLongBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongBiFunction<T, U> {

 "applyAsLong"(arg0: T, arg1: U): long

(arg0: T, arg1: U): long
}

export namespace $ToLongBiFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToLongBiFunction$Type<T, U> = ($ToLongBiFunction<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToLongBiFunction_<T, U> = $ToLongBiFunction$Type<(T), (U)>;
}}
declare module "packages/java/util/function/$ToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongFunction<T> {

 "applyAsLong"(arg0: T): long

(arg0: T): long
}

export namespace $ToLongFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToLongFunction$Type<T> = ($ToLongFunction<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToLongFunction_<T> = $ToLongFunction$Type<(T)>;
}}
declare module "packages/java/util/function/$LongBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongBinaryOperator {

 "applyAsLong"(arg0: long, arg1: long): long

(arg0: long, arg1: long): long
}

export namespace $LongBinaryOperator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongBinaryOperator$Type = ($LongBinaryOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongBinaryOperator_ = $LongBinaryOperator$Type;
}}
declare module "packages/java/util/$WeakHashMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractMap, $AbstractMap$Type} from "packages/java/util/$AbstractMap"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $WeakHashMap<K, V> extends $AbstractMap<(K), (V)> implements $Map<(K), (V)> {

constructor(arg0: $Map$Type<(any), (any)>)
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor()

public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $Collection<(V)>
public "clear"(): void
public "isEmpty"(): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakHashMap$Type<K, V> = ($WeakHashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakHashMap_<K, V> = $WeakHashMap$Type<(K), (V)>;
}}
declare module "packages/java/util/function/$LongPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongPredicate {

 "test"(arg0: long): boolean
 "or"(arg0: $LongPredicate$Type): $LongPredicate
 "negate"(): $LongPredicate
 "and"(arg0: $LongPredicate$Type): $LongPredicate

(arg0: long): boolean
}

export namespace $LongPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongPredicate$Type = ($LongPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongPredicate_ = $LongPredicate$Type;
}}
declare module "packages/java/util/$AbstractCollection" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $AbstractCollection<E> implements $Collection<(E)> {


public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "toString"(): string
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(E)>
public "spliterator"(): $Spliterator<(E)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCollection$Type<E> = ($AbstractCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCollection_<E> = $AbstractCollection$Type<(E)>;
}}
declare module "packages/java/util/$Random" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$RandomGenerator, $RandomGenerator$Type} from "packages/java/util/random/$RandomGenerator"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"

export class $Random implements $RandomGenerator, $Serializable {

constructor()
constructor(arg0: long)

public "nextDouble"(): double
public "nextInt"(): integer
public "nextInt"(arg0: integer): integer
public "nextBytes"(arg0: (byte)[]): void
public "ints"(arg0: integer, arg1: integer): $IntStream
public "ints"(arg0: long): $IntStream
public "ints"(): $IntStream
public "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
public "nextBoolean"(): boolean
public "nextLong"(): long
public "nextFloat"(): float
public "longs"(arg0: long): $LongStream
public "longs"(arg0: long, arg1: long, arg2: long): $LongStream
public "longs"(arg0: long, arg1: long): $LongStream
public "longs"(): $LongStream
public "doubles"(arg0: double, arg1: double): $DoubleStream
public "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
public "doubles"(arg0: long): $DoubleStream
public "doubles"(): $DoubleStream
public "setSeed"(arg0: long): void
public "nextGaussian"(): double
public "nextDouble"(arg0: double): double
public "nextDouble"(arg0: double, arg1: double): double
public static "getDefault"(): $RandomGenerator
public static "of"(arg0: string): $RandomGenerator
public "nextInt"(arg0: integer, arg1: integer): integer
public "nextLong"(arg0: long, arg1: long): long
public "nextLong"(arg0: long): long
public "nextFloat"(arg0: float): float
public "nextFloat"(arg0: float, arg1: float): float
public "nextGaussian"(arg0: double, arg1: double): double
public "isDeprecated"(): boolean
public "nextExponential"(): double
set "seed"(value: long)
get "default"(): $RandomGenerator
get "deprecated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Random$Type = ($Random);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Random_ = $Random$Type;
}}
declare module "packages/java/util/concurrent/$Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Callable<V> {

 "call"(): V

(): V
}

export namespace $Callable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callable$Type<V> = ($Callable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Callable_<V> = $Callable$Type<(V)>;
}}
declare module "packages/java/util/stream/$DoubleStream$Builder" {
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"

export interface $DoubleStream$Builder extends $DoubleConsumer {

 "build"(): $DoubleStream
 "add"(arg0: double): $DoubleStream$Builder
 "accept"(arg0: double): void
 "andThen"(arg0: $DoubleConsumer$Type): $DoubleConsumer
}

export namespace $DoubleStream$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$Builder$Type = ($DoubleStream$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleStream$Builder_ = $DoubleStream$Builder$Type;
}}
declare module "packages/java/util/stream/$LongStream$Builder" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"

export interface $LongStream$Builder extends $LongConsumer {

 "build"(): $LongStream
 "add"(arg0: long): $LongStream$Builder
 "accept"(arg0: long): void
 "andThen"(arg0: $LongConsumer$Type): $LongConsumer
}

export namespace $LongStream$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$Builder$Type = ($LongStream$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongStream$Builder_ = $LongStream$Builder$Type;
}}
declare module "packages/java/util/$Vector" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractList, $AbstractList$Type} from "packages/java/util/$AbstractList"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$RandomAccess, $RandomAccess$Type} from "packages/java/util/$RandomAccess"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $Vector<E> extends $AbstractList<(E)> implements $List<(E)>, $RandomAccess, $Cloneable, $Serializable {

constructor(arg0: $Collection$Type<(any)>)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "remove"(arg0: integer): E
public "remove"(arg0: any): boolean
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "indexOf"(arg0: any): integer
public "indexOf"(arg0: any, arg1: integer): integer
public "clear"(): void
public "lastIndexOf"(arg0: any, arg1: integer): integer
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
public "size"(): integer
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(E)>
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "elementAt"(arg0: integer): E
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "sort"(arg0: $Comparator$Type<(any)>): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "copyInto"(arg0: (any)[]): void
public "setSize"(arg0: integer): void
public "removeElementAt"(arg0: integer): void
public "removeElement"(arg0: any): boolean
public "insertElementAt"(arg0: E, arg1: integer): void
public "removeAllElements"(): void
public "firstElement"(): E
public "lastElement"(): E
public "setElementAt"(arg0: E, arg1: integer): void
public "addElement"(arg0: E): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector$Type<E> = ($Vector<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector_<E> = $Vector$Type<(E)>;
}}
declare module "packages/java/util/function/$LongToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToIntFunction {

 "applyAsInt"(arg0: long): integer

(arg0: long): integer
}

export namespace $LongToIntFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongToIntFunction$Type = ($LongToIntFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongToIntFunction_ = $LongToIntFunction$Type;
}}
declare module "packages/java/util/function/$DoubleBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleBinaryOperator {

 "applyAsDouble"(arg0: double, arg1: double): double

(arg0: double, arg1: double): double
}

export namespace $DoubleBinaryOperator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBinaryOperator$Type = ($DoubleBinaryOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleBinaryOperator_ = $DoubleBinaryOperator$Type;
}}
declare module "packages/java/util/function/$UnaryOperator" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export interface $UnaryOperator<T> extends $Function<(T), (T)> {

 "apply"(arg0: T): T
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<(T), (V)>

(): $UnaryOperator<(T)>
}

export namespace $UnaryOperator {
function identity<T>(): $UnaryOperator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnaryOperator$Type<T> = ($UnaryOperator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnaryOperator_<T> = $UnaryOperator$Type<(T)>;
}}
declare module "packages/java/util/function/$ObjLongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjLongConsumer<T> {

 "accept"(arg0: T, arg1: long): void

(arg0: T, arg1: long): void
}

export namespace $ObjLongConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjLongConsumer$Type<T> = ($ObjLongConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjLongConsumer_<T> = $ObjLongConsumer$Type<(T)>;
}}
declare module "packages/java/util/$Collection" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $Collection<E> extends $Iterable<(E)> {

 "add"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Collection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collection$Type<E> = ((E)[]) | ($Collection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collection_<E> = $Collection$Type<(E)>;
}}
declare module "packages/java/util/function/$DoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleFunction<R> {

 "apply"(arg0: double): R

(arg0: double): R
}

export namespace $DoubleFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleFunction$Type<R> = ($DoubleFunction<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleFunction_<R> = $DoubleFunction$Type<(R)>;
}}
declare module "packages/java/util/function/$Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Function<T, R> {

 "apply"(arg0: T): R
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<(T), (V)>

(arg0: T): R
}

export namespace $Function {
function identity<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$Type<T, R> = ($Function<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_<T, R> = $Function$Type<(T), (R)>;
}}
declare module "packages/java/util/concurrent/$AbstractExecutorService" {
import {$ExecutorService, $ExecutorService$Type} from "packages/java/util/concurrent/$ExecutorService"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $AbstractExecutorService implements $ExecutorService {

constructor()

public "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
public "submit"(arg0: $Runnable$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
public "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future<(T)>)>
public "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
public "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
public "shutdown"(): void
public "isShutdown"(): boolean
public "shutdownNow"(): $List<($Runnable)>
public "isTerminated"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
public "execute"(arg0: $Runnable$Type): void
get "terminated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractExecutorService$Type = ($AbstractExecutorService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractExecutorService_ = $AbstractExecutorService$Type;
}}
declare module "packages/java/util/function/$ObjIntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjIntConsumer<T> {

 "accept"(arg0: T, arg1: integer): void

(arg0: T, arg1: integer): void
}

export namespace $ObjIntConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjIntConsumer$Type<T> = ($ObjIntConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjIntConsumer_<T> = $ObjIntConsumer$Type<(T)>;
}}
declare module "packages/java/util/$Date" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Date implements $Serializable, $Cloneable, $Comparable<($Date)> {

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: string)
constructor()
constructor(arg0: long)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "before"(arg0: $Date$Type): boolean
public "after"(arg0: $Date$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "compareTo"(arg0: $Date$Type): integer
public static "from"(arg0: $Instant$Type): $Date
/**
 * 
 * @deprecated
 */
public static "parse"(arg0: string): long
/**
 * 
 * @deprecated
 */
public "getMonth"(): integer
public "getTime"(): long
/**
 * 
 * @deprecated
 */
public "getYear"(): integer
/**
 * 
 * @deprecated
 */
public "getSeconds"(): integer
public "toInstant"(): $Instant
/**
 * 
 * @deprecated
 */
public static "UTC"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): long
public "setTime"(arg0: long): void
/**
 * 
 * @deprecated
 */
public "setDate"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setMonth"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getHours"(): integer
/**
 * 
 * @deprecated
 */
public "getMinutes"(): integer
/**
 * 
 * @deprecated
 */
public "setHours"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setMinutes"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setSeconds"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setYear"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getDay"(): integer
/**
 * 
 * @deprecated
 */
public "toLocaleString"(): string
/**
 * 
 * @deprecated
 */
public "toGMTString"(): string
/**
 * 
 * @deprecated
 */
public "getTimezoneOffset"(): integer
/**
 * 
 * @deprecated
 */
public "getDate"(): integer
get "month"(): integer
get "time"(): long
get "year"(): integer
get "seconds"(): integer
set "time"(value: long)
set "date"(value: integer)
set "month"(value: integer)
get "hours"(): integer
get "minutes"(): integer
set "hours"(value: integer)
set "minutes"(value: integer)
set "seconds"(value: integer)
set "year"(value: integer)
get "day"(): integer
get "timezoneOffset"(): integer
get "date"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Date$Type = ($Date);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Date_ = $Date$Type;
}}
declare module "packages/java/util/$LinkedHashSet" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $LinkedHashSet<E> extends $HashSet<(E)> implements $Set<(E)>, $Cloneable, $Serializable {

constructor(arg0: $Collection$Type<(any)>)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)

public "spliterator"(): $Spliterator<(E)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedHashSet$Type<E> = ($LinkedHashSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedHashSet_<E> = $LinkedHashSet$Type<(E)>;
}}
declare module "packages/java/util/$IntSummaryStatistics" {
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"

export class $IntSummaryStatistics implements $IntConsumer {

constructor()
constructor(arg0: long, arg1: integer, arg2: integer, arg3: long)

public "toString"(): string
public "accept"(arg0: integer): void
public "combine"(arg0: $IntSummaryStatistics$Type): void
public "getCount"(): long
public "getMin"(): integer
public "getMax"(): integer
public "getSum"(): long
public "getAverage"(): double
public "andThen"(arg0: $IntConsumer$Type): $IntConsumer
get "count"(): long
get "min"(): integer
get "max"(): integer
get "sum"(): long
get "average"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSummaryStatistics$Type = ($IntSummaryStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSummaryStatistics_ = $IntSummaryStatistics$Type;
}}
declare module "packages/java/util/concurrent/atomic/$AtomicReference" {
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"

export class $AtomicReference<V> implements $Serializable {

constructor(arg0: V)
constructor()

public "get"(): V
public "toString"(): string
public "set"(arg0: V): void
public "getOpaque"(): V
public "setOpaque"(arg0: V): void
public "getAcquire"(): V
public "setRelease"(arg0: V): void
public "compareAndSet"(arg0: V, arg1: V): boolean
public "compareAndExchange"(arg0: V, arg1: V): V
public "compareAndExchangeAcquire"(arg0: V, arg1: V): V
public "compareAndExchangeRelease"(arg0: V, arg1: V): V
public "weakCompareAndSetPlain"(arg0: V, arg1: V): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: V, arg1: V): boolean
public "weakCompareAndSetAcquire"(arg0: V, arg1: V): boolean
public "weakCompareAndSetRelease"(arg0: V, arg1: V): boolean
public "getAndSet"(arg0: V): V
public "lazySet"(arg0: V): void
public "weakCompareAndSetVolatile"(arg0: V, arg1: V): boolean
public "getAndUpdate"(arg0: $UnaryOperator$Type<(V)>): V
public "updateAndGet"(arg0: $UnaryOperator$Type<(V)>): V
public "getAndAccumulate"(arg0: V, arg1: $BinaryOperator$Type<(V)>): V
public "accumulateAndGet"(arg0: V, arg1: $BinaryOperator$Type<(V)>): V
public "getPlain"(): V
public "setPlain"(arg0: V): void
get "opaque"(): V
set "opaque"(value: V)
get "acquire"(): V
set "release"(value: V)
get "plain"(): V
set "plain"(value: V)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicReference$Type<V> = ($AtomicReference<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicReference_<V> = $AtomicReference$Type<(V)>;
}}
declare module "packages/java/util/function/$BiFunction" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export interface $BiFunction<T, U, R> {

 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<(T), (U), (V)>

(arg0: T, arg1: U): R
}

export namespace $BiFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiFunction$Type<T, U, R> = ($BiFunction<(T), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiFunction_<T, U, R> = $BiFunction$Type<(T), (U), (R)>;
}}
declare module "packages/java/util/function/$IntBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntBinaryOperator {

 "applyAsInt"(arg0: integer, arg1: integer): integer

(arg0: integer, arg1: integer): integer
}

export namespace $IntBinaryOperator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBinaryOperator$Type = ($IntBinaryOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBinaryOperator_ = $IntBinaryOperator$Type;
}}
declare module "packages/java/util/$PriorityQueue" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractQueue, $AbstractQueue$Type} from "packages/java/util/$AbstractQueue"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $PriorityQueue<E> extends $AbstractQueue<(E)> implements $Serializable {

constructor(arg0: integer, arg1: $Comparator$Type<(any)>)
constructor(arg0: $Collection$Type<(any)>)
constructor(arg0: $PriorityQueue$Type<(any)>)
constructor(arg0: $SortedSet$Type<(any)>)
constructor()
constructor(arg0: integer)
constructor(arg0: $Comparator$Type<(any)>)

public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "poll"(): E
public "peek"(): E
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "comparator"(): $Comparator<(any)>
public "offer"(arg0: E): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriorityQueue$Type<E> = ($PriorityQueue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PriorityQueue_<E> = $PriorityQueue$Type<(E)>;
}}
declare module "packages/java/util/$UUID" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $UUID implements $Serializable, $Comparable<($UUID)> {

constructor(arg0: long, arg1: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): integer
public "hashCode"(): integer
public "compareTo"(arg0: $UUID$Type): integer
public "timestamp"(): long
public "node"(): long
public "variant"(): integer
public static "fromString"(arg0: string): $UUID
public static "nameUUIDFromBytes"(arg0: (byte)[]): $UUID
public "getLeastSignificantBits"(): long
public "getMostSignificantBits"(): long
public "clockSequence"(): integer
public static "randomUUID"(): $UUID
get "leastSignificantBits"(): long
get "mostSignificantBits"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UUID$Type = (string) | ($UUID);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UUID_ = $UUID$Type;
}}
declare module "packages/java/util/jar/$Attributes$Name" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Attributes$Name {
static readonly "MANIFEST_VERSION": $Attributes$Name
static readonly "SIGNATURE_VERSION": $Attributes$Name
static readonly "CONTENT_TYPE": $Attributes$Name
static readonly "CLASS_PATH": $Attributes$Name
static readonly "MAIN_CLASS": $Attributes$Name
static readonly "SEALED": $Attributes$Name
static readonly "EXTENSION_LIST": $Attributes$Name
static readonly "EXTENSION_NAME": $Attributes$Name
/**
 * 
 * @deprecated
 */
static readonly "EXTENSION_INSTALLATION": $Attributes$Name
static readonly "IMPLEMENTATION_TITLE": $Attributes$Name
static readonly "IMPLEMENTATION_VERSION": $Attributes$Name
static readonly "IMPLEMENTATION_VENDOR": $Attributes$Name
/**
 * 
 * @deprecated
 */
static readonly "IMPLEMENTATION_VENDOR_ID": $Attributes$Name
/**
 * 
 * @deprecated
 */
static readonly "IMPLEMENTATION_URL": $Attributes$Name
static readonly "SPECIFICATION_TITLE": $Attributes$Name
static readonly "SPECIFICATION_VERSION": $Attributes$Name
static readonly "SPECIFICATION_VENDOR": $Attributes$Name
static readonly "MULTI_RELEASE": $Attributes$Name

constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attributes$Name$Type = ($Attributes$Name);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attributes$Name_ = $Attributes$Name$Type;
}}
declare module "packages/java/util/function/$BiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiConsumer<T, U> {

 "accept"(arg0: T, arg1: U): void
 "andThen"(arg0: $BiConsumer$Type<(any), (any)>): $BiConsumer<(T), (U)>

(arg0: T, arg1: U): void
}

export namespace $BiConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiConsumer$Type<T, U> = ($BiConsumer<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiConsumer_<T, U> = $BiConsumer$Type<(T), (U)>;
}}
declare module "packages/java/util/function/$ToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntFunction<T> {

 "applyAsInt"(arg0: T): integer

(arg0: T): integer
}

export namespace $ToIntFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToIntFunction$Type<T> = ($ToIntFunction<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToIntFunction_<T> = $ToIntFunction$Type<(T)>;
}}
declare module "packages/java/util/function/$Consumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Consumer<T> {

 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(T)>

(arg0: T): void
}

export namespace $Consumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Consumer$Type<T> = ($Consumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Consumer_<T> = $Consumer$Type<(T)>;
}}
declare module "packages/java/util/concurrent/$CompletionStage" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $CompletionStage<T> {

 "handle"<U>(arg0: $BiFunction$Type<(any), ($Throwable$Type), (any)>): $CompletionStage<(U)>
 "whenComplete"(arg0: $BiConsumer$Type<(any), (any)>): $CompletionStage<(T)>
 "toCompletableFuture"(): $CompletableFuture<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$Type<($Throwable$Type), (any)>, arg1: $Executor$Type): $CompletionStage<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$Type<($Throwable$Type), (any)>): $CompletionStage<(T)>
 "exceptionallyCompose"(arg0: $Function$Type<($Throwable$Type), (any)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$Type<($Throwable$Type), (any)>, arg1: $Executor$Type): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$Type<($Throwable$Type), (any)>): $CompletionStage<(T)>
 "exceptionally"(arg0: $Function$Type<($Throwable$Type), (any)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$Type<(any), (any)>, arg1: $Executor$Type): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$Type<(any), (any)>): $CompletionStage<(T)>
 "handleAsync"<U>(arg0: $BiFunction$Type<(any), ($Throwable$Type), (any)>, arg1: $Executor$Type): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$Type<(any), ($Throwable$Type), (any)>): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$Type<(any), (any)>, arg1: $Executor$Type): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$Type<(any), (any)>): $CompletionStage<(U)>
 "thenCompose"<U>(arg0: $Function$Type<(any), (any)>): $CompletionStage<(U)>
 "runAfterEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type): $CompletionStage<(void)>
 "runAfterEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type, arg2: $Executor$Type): $CompletionStage<(void)>
 "runAfterEither"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Consumer$Type<(any)>): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Consumer$Type<(any)>, arg2: $Executor$Type): $CompletionStage<(void)>
 "acceptEither"(arg0: $CompletionStage$Type<(any)>, arg1: $Consumer$Type<(any)>): $CompletionStage<(void)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $Function$Type<(any), (U)>, arg2: $Executor$Type): $CompletionStage<(U)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $Function$Type<(any), (U)>): $CompletionStage<(U)>
 "applyToEither"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $Function$Type<(any), (U)>): $CompletionStage<(U)>
 "runAfterBothAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type, arg2: $Executor$Type): $CompletionStage<(void)>
 "runAfterBothAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type): $CompletionStage<(void)>
 "runAfterBoth"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $BiConsumer$Type<(any), (any)>): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $BiConsumer$Type<(any), (any)>, arg2: $Executor$Type): $CompletionStage<(void)>
 "thenAcceptBoth"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $BiConsumer$Type<(any), (any)>): $CompletionStage<(void)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$Type<(any)>, arg1: $BiFunction$Type<(any), (any), (any)>, arg2: $Executor$Type): $CompletionStage<(V)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$Type<(any)>, arg1: $BiFunction$Type<(any), (any), (any)>): $CompletionStage<(V)>
 "thenCombine"<U, V>(arg0: $CompletionStage$Type<(any)>, arg1: $BiFunction$Type<(any), (any), (any)>): $CompletionStage<(V)>
 "thenRunAsync"(arg0: $Runnable$Type, arg1: $Executor$Type): $CompletionStage<(void)>
 "thenRunAsync"(arg0: $Runnable$Type): $CompletionStage<(void)>
 "thenRun"(arg0: $Runnable$Type): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$Type<(any)>): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$Type<(any)>, arg1: $Executor$Type): $CompletionStage<(void)>
 "thenAccept"(arg0: $Consumer$Type<(any)>): $CompletionStage<(void)>
 "thenApplyAsync"<U>(arg0: $Function$Type<(any), (any)>, arg1: $Executor$Type): $CompletionStage<(U)>
 "thenApplyAsync"<U>(arg0: $Function$Type<(any), (any)>): $CompletionStage<(U)>
 "thenApply"<U>(arg0: $Function$Type<(any), (any)>): $CompletionStage<(U)>
}

export namespace $CompletionStage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletionStage$Type<T> = ($CompletionStage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompletionStage_<T> = $CompletionStage$Type<(T)>;
}}
declare module "packages/java/util/$PrimitiveIterator$OfDouble" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"
import {$PrimitiveIterator, $PrimitiveIterator$Type} from "packages/java/util/$PrimitiveIterator"

export interface $PrimitiveIterator$OfDouble extends $PrimitiveIterator<(double), ($DoubleConsumer)> {

 "nextDouble"(): double
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$Type): void
 "next"(): double
 "remove"(): void
 "hasNext"(): boolean
}

export namespace $PrimitiveIterator$OfDouble {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfDouble$Type = ($PrimitiveIterator$OfDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator$OfDouble_ = $PrimitiveIterator$OfDouble$Type;
}}
declare module "packages/java/util/stream/$IntStream$Builder" {
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"

export interface $IntStream$Builder extends $IntConsumer {

 "build"(): $IntStream
 "add"(arg0: integer): $IntStream$Builder
 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$Type): $IntConsumer
}

export namespace $IntStream$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$Builder$Type = ($IntStream$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream$Builder_ = $IntStream$Builder$Type;
}}
declare module "packages/java/util/concurrent/$ConcurrentMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $ConcurrentMap<K, V> extends $Map<(K), (V)> {

 "remove"(arg0: any, arg1: any): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "remove"(arg0: any): V
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
}

export namespace $ConcurrentMap {
function copyOf<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentMap$Type<K, V> = ($ConcurrentMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentMap_<K, V> = $ConcurrentMap$Type<(K), (V)>;
}}
declare module "packages/java/util/$Enumeration" {
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $Enumeration<E> {

 "asIterator"(): $Iterator<(E)>
 "hasMoreElements"(): boolean
 "nextElement"(): E
}

export namespace $Enumeration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enumeration$Type<E> = ($Enumeration<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Enumeration_<E> = $Enumeration$Type<(E)>;
}}
declare module "packages/java/util/jar/$Manifest" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Attributes, $Attributes$Type} from "packages/java/util/jar/$Attributes"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Manifest implements $Cloneable {

constructor(arg0: $Manifest$Type)
constructor(arg0: $InputStream$Type)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "write"(arg0: $OutputStream$Type): void
public "read"(arg0: $InputStream$Type): void
public "getMainAttributes"(): $Attributes
public "getEntries"(): $Map<(string), ($Attributes)>
public "getAttributes"(arg0: string): $Attributes
get "mainAttributes"(): $Attributes
get "entries"(): $Map<(string), ($Attributes)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Manifest$Type = ($Manifest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Manifest_ = $Manifest$Type;
}}
declare module "packages/java/util/function/$DoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleConsumer {

 "accept"(arg0: double): void
 "andThen"(arg0: $DoubleConsumer$Type): $DoubleConsumer

(arg0: double): void
}

export namespace $DoubleConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConsumer$Type = ($DoubleConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConsumer_ = $DoubleConsumer$Type;
}}
declare module "packages/java/util/$Calendar" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Calendar implements $Serializable, $Cloneable, $Comparable<($Calendar)> {
static readonly "ERA": integer
static readonly "YEAR": integer
static readonly "MONTH": integer
static readonly "WEEK_OF_YEAR": integer
static readonly "WEEK_OF_MONTH": integer
static readonly "DATE": integer
static readonly "DAY_OF_MONTH": integer
static readonly "DAY_OF_YEAR": integer
static readonly "DAY_OF_WEEK": integer
static readonly "DAY_OF_WEEK_IN_MONTH": integer
static readonly "AM_PM": integer
static readonly "HOUR": integer
static readonly "HOUR_OF_DAY": integer
static readonly "MINUTE": integer
static readonly "SECOND": integer
static readonly "MILLISECOND": integer
static readonly "ZONE_OFFSET": integer
static readonly "DST_OFFSET": integer
static readonly "FIELD_COUNT": integer
static readonly "SUNDAY": integer
static readonly "MONDAY": integer
static readonly "TUESDAY": integer
static readonly "WEDNESDAY": integer
static readonly "THURSDAY": integer
static readonly "FRIDAY": integer
static readonly "SATURDAY": integer
static readonly "JANUARY": integer
static readonly "FEBRUARY": integer
static readonly "MARCH": integer
static readonly "APRIL": integer
static readonly "MAY": integer
static readonly "JUNE": integer
static readonly "JULY": integer
static readonly "AUGUST": integer
static readonly "SEPTEMBER": integer
static readonly "OCTOBER": integer
static readonly "NOVEMBER": integer
static readonly "DECEMBER": integer
static readonly "UNDECIMBER": integer
static readonly "AM": integer
static readonly "PM": integer
static readonly "ALL_STYLES": integer
static readonly "SHORT": integer
static readonly "LONG": integer
static readonly "NARROW_FORMAT": integer
static readonly "NARROW_STANDALONE": integer
static readonly "SHORT_FORMAT": integer
static readonly "LONG_FORMAT": integer
static readonly "SHORT_STANDALONE": integer
static readonly "LONG_STANDALONE": integer


public "before"(arg0: any): boolean
public "after"(arg0: any): boolean
public "add"(arg0: integer, arg1: integer): void
public "get"(arg0: integer): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "compareTo"(arg0: $Calendar$Type): integer
public "clear"(arg0: integer): void
public "clear"(): void
public static "getInstance"(): $Calendar
public static "getInstance"(arg0: $Locale$Type): $Calendar
public static "getInstance"(arg0: $TimeZone$Type, arg1: $Locale$Type): $Calendar
public static "getInstance"(arg0: $TimeZone$Type): $Calendar
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "isSet"(arg0: integer): boolean
public "getTime"(): $Date
public "toInstant"(): $Instant
public "getDisplayName"(arg0: integer, arg1: integer, arg2: $Locale$Type): string
public static "getAvailableLocales"(): ($Locale)[]
public "setTime"(arg0: $Date$Type): void
public "getMinimum"(arg0: integer): integer
public "getMaximum"(arg0: integer): integer
public "getDisplayNames"(arg0: integer, arg1: integer, arg2: $Locale$Type): $Map<(string), (integer)>
public "getTimeInMillis"(): long
public "getCalendarType"(): string
public "getTimeZone"(): $TimeZone
public "setTimeZone"(arg0: $TimeZone$Type): void
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "getFirstDayOfWeek"(): integer
public "getMinimalDaysInFirstWeek"(): integer
public "setTimeInMillis"(arg0: long): void
public "isWeekDateSupported"(): boolean
public "getWeekYear"(): integer
public "getLeastMaximum"(arg0: integer): integer
public "roll"(arg0: integer, arg1: integer): void
public "roll"(arg0: integer, arg1: boolean): void
public "getGreatestMinimum"(arg0: integer): integer
public static "getAvailableCalendarTypes"(): $Set<(string)>
public "setFirstDayOfWeek"(arg0: integer): void
public "setMinimalDaysInFirstWeek"(arg0: integer): void
public "setWeekDate"(arg0: integer, arg1: integer, arg2: integer): void
public "getWeeksInWeekYear"(): integer
public "getActualMinimum"(arg0: integer): integer
public "getActualMaximum"(arg0: integer): integer
get "instance"(): $Calendar
get "time"(): $Date
get "availableLocales"(): ($Locale)[]
set "time"(value: $Date$Type)
get "timeInMillis"(): long
get "calendarType"(): string
get "timeZone"(): $TimeZone
set "timeZone"(value: $TimeZone$Type)
set "lenient"(value: boolean)
get "lenient"(): boolean
get "firstDayOfWeek"(): integer
get "minimalDaysInFirstWeek"(): integer
set "timeInMillis"(value: long)
get "weekDateSupported"(): boolean
get "weekYear"(): integer
get "availableCalendarTypes"(): $Set<(string)>
set "firstDayOfWeek"(value: integer)
set "minimalDaysInFirstWeek"(value: integer)
get "weeksInWeekYear"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Calendar$Type = ($Calendar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Calendar_ = $Calendar$Type;
}}
declare module "packages/java/util/$LinkedList" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AbstractSequentialList, $AbstractSequentialList$Type} from "packages/java/util/$AbstractSequentialList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $LinkedList<E> extends $AbstractSequentialList<(E)> implements $List<(E)>, $Deque<(E)>, $Cloneable, $Serializable {

constructor()
constructor(arg0: $Collection$Type<(any)>)

public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "remove"(arg0: any): boolean
public "remove"(): E
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "clone"(): any
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "poll"(): E
public "peek"(): E
public "element"(): E
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "push"(arg0: E): void
public "pop"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "pollFirst"(): E
public "pollLast"(): E
public "offerLast"(arg0: E): boolean
public "removeFirst"(): E
public "getFirst"(): E
public "peekFirst"(): E
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: E): boolean
public "removeLast"(): E
public "getLast"(): E
public "peekLast"(): E
public "removeLastOccurrence"(arg0: any): boolean
public "offer"(arg0: E): boolean
public "descendingIterator"(): $Iterator<(E)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedList$Type<E> = ($LinkedList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedList_<E> = $LinkedList$Type<(E)>;
}}
declare module "packages/java/util/$HashSet" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$AbstractSet, $AbstractSet$Type} from "packages/java/util/$AbstractSet"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $HashSet<E> extends $AbstractSet<(E)> implements $Set<(E)>, $Cloneable, $Serializable {

constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor(arg0: $Collection$Type<(any)>)
constructor()

public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashSet$Type<E> = ($HashSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashSet_<E> = $HashSet$Type<(E)>;
}}
declare module "packages/java/util/stream/$Stream" {
import {$Stream$Builder, $Stream$Builder$Type} from "packages/java/util/stream/$Stream$Builder"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$BaseStream, $BaseStream$Type} from "packages/java/util/stream/$BaseStream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $Stream<T> extends $BaseStream<(T), ($Stream<(T)>)> {

 "min"(arg0: $Comparator$Type<(any)>): $Optional<(T)>
 "max"(arg0: $Comparator$Type<(any)>): $Optional<(T)>
 "toArray"(): (any)[]
 "toArray"<A>(arg0: $IntFunction$Type<((A)[])>): (A)[]
 "map"<R>(arg0: $Function$Type<(any), (any)>): $Stream<(R)>
 "collect"<R>(arg0: $Supplier$Type<(R)>, arg1: $BiConsumer$Type<(R), (any)>, arg2: $BiConsumer$Type<(R), (R)>): R
 "collect"<R, A>(arg0: $Collector$Type<(any), (A), (R)>): R
 "toList"(): $List<(T)>
 "count"(): long
 "limit"(arg0: long): $Stream<(T)>
 "filter"(arg0: $Predicate$Type<(any)>): $Stream<(T)>
 "anyMatch"(arg0: $Predicate$Type<(any)>): boolean
 "flatMap"<R>(arg0: $Function$Type<(any), (any)>): $Stream<(R)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "findAny"(): $Optional<(T)>
 "skip"(arg0: long): $Stream<(T)>
 "peek"(arg0: $Consumer$Type<(any)>): $Stream<(T)>
 "reduce"<U>(arg0: U, arg1: $BiFunction$Type<(U), (any), (U)>, arg2: $BinaryOperator$Type<(U)>): U
 "reduce"(arg0: T, arg1: $BinaryOperator$Type<(T)>): T
 "reduce"(arg0: $BinaryOperator$Type<(T)>): $Optional<(T)>
 "distinct"(): $Stream<(T)>
 "findFirst"(): $Optional<(T)>
 "allMatch"(arg0: $Predicate$Type<(any)>): boolean
 "forEachOrdered"(arg0: $Consumer$Type<(any)>): void
 "mapToInt"(arg0: $ToIntFunction$Type<(any)>): $IntStream
 "mapToLong"(arg0: $ToLongFunction$Type<(any)>): $LongStream
 "mapToDouble"(arg0: $ToDoubleFunction$Type<(any)>): $DoubleStream
 "flatMapToInt"(arg0: $Function$Type<(any), (any)>): $IntStream
 "flatMapToDouble"(arg0: $Function$Type<(any), (any)>): $DoubleStream
 "flatMapToLong"(arg0: $Function$Type<(any), (any)>): $LongStream
 "mapMulti"<R>(arg0: $BiConsumer$Type<(any), (any)>): $Stream<(R)>
 "mapMultiToInt"(arg0: $BiConsumer$Type<(any), (any)>): $IntStream
 "mapMultiToLong"(arg0: $BiConsumer$Type<(any), (any)>): $LongStream
 "mapMultiToDouble"(arg0: $BiConsumer$Type<(any), (any)>): $DoubleStream
 "takeWhile"(arg0: $Predicate$Type<(any)>): $Stream<(T)>
 "dropWhile"(arg0: $Predicate$Type<(any)>): $Stream<(T)>
 "noneMatch"(arg0: $Predicate$Type<(any)>): boolean
 "sorted"(arg0: $Comparator$Type<(any)>): $Stream<(T)>
 "sorted"(): $Stream<(T)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
 "parallel"(): $Stream<(T)>
 "isParallel"(): boolean
 "unordered"(): $Stream<(T)>
 "onClose"(arg0: $Runnable$Type): $Stream<(T)>
 "sequential"(): $Stream<(T)>
}

export namespace $Stream {
function of<T>(...arg0: (T)[]): $Stream<(T)>
function of<T>(arg0: T): $Stream<(T)>
function builder<T>(): $Stream$Builder<(T)>
function concat<T>(arg0: $Stream$Type<(any)>, arg1: $Stream$Type<(any)>): $Stream<(T)>
function empty<T>(): $Stream<(T)>
function iterate<T>(arg0: T, arg1: $UnaryOperator$Type<(T)>): $Stream<(T)>
function iterate<T>(arg0: T, arg1: $Predicate$Type<(any)>, arg2: $UnaryOperator$Type<(T)>): $Stream<(T)>
function generate<T>(arg0: $Supplier$Type<(any)>): $Stream<(T)>
function ofNullable<T>(arg0: T): $Stream<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stream$Type<T> = ($Stream<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stream_<T> = $Stream$Type<(T)>;
}}
declare module "packages/java/util/function/$LongSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongSupplier {

 "getAsLong"(): long

(): long
}

export namespace $LongSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSupplier$Type = ($LongSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSupplier_ = $LongSupplier$Type;
}}
declare module "packages/java/util/stream/$Collector" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Collector$Characteristics, $Collector$Characteristics$Type} from "packages/java/util/stream/$Collector$Characteristics"

export interface $Collector<T, A, R> {

 "characteristics"(): $Set<($Collector$Characteristics)>
 "combiner"(): $BinaryOperator<(A)>
 "supplier"(): $Supplier<(A)>
 "accumulator"(): $BiConsumer<(A), (T)>
 "finisher"(): $Function<(A), (R)>
}

export namespace $Collector {
function of<T, A, R>(arg0: $Supplier$Type<(A)>, arg1: $BiConsumer$Type<(A), (T)>, arg2: $BinaryOperator$Type<(A)>, arg3: $Function$Type<(A), (R)>, ...arg4: ($Collector$Characteristics$Type)[]): $Collector<(T), (A), (R)>
function of<T, R>(arg0: $Supplier$Type<(R)>, arg1: $BiConsumer$Type<(R), (T)>, arg2: $BinaryOperator$Type<(R)>, ...arg3: ($Collector$Characteristics$Type)[]): $Collector<(T), (R), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$Type<T, A, R> = ($Collector<(T), (A), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collector_<T, A, R> = $Collector$Type<(T), (A), (R)>;
}}
declare module "packages/java/util/$Locale$FilteringMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Locale$FilteringMode extends $Enum<($Locale$FilteringMode)> {
static readonly "AUTOSELECT_FILTERING": $Locale$FilteringMode
static readonly "EXTENDED_FILTERING": $Locale$FilteringMode
static readonly "IGNORE_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "MAP_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "REJECT_EXTENDED_RANGES": $Locale$FilteringMode


public static "values"(): ($Locale$FilteringMode)[]
public static "valueOf"(arg0: string): $Locale$FilteringMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$FilteringMode$Type = (("extended_filtering") | ("reject_extended_ranges") | ("map_extended_ranges") | ("ignore_extended_ranges") | ("autoselect_filtering")) | ($Locale$FilteringMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$FilteringMode_ = $Locale$FilteringMode$Type;
}}
declare module "packages/java/util/function/$DoublePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublePredicate {

 "test"(arg0: double): boolean
 "or"(arg0: $DoublePredicate$Type): $DoublePredicate
 "negate"(): $DoublePredicate
 "and"(arg0: $DoublePredicate$Type): $DoublePredicate

(arg0: double): boolean
}

export namespace $DoublePredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoublePredicate$Type = ($DoublePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoublePredicate_ = $DoublePredicate$Type;
}}
declare module "packages/java/util/stream/$LongStream$LongMapMultiConsumer" {
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"

export interface $LongStream$LongMapMultiConsumer {

 "accept"(arg0: long, arg1: $LongConsumer$Type): void

(arg0: long, arg1: $LongConsumer$Type): void
}

export namespace $LongStream$LongMapMultiConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$LongMapMultiConsumer$Type = ($LongStream$LongMapMultiConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongStream$LongMapMultiConsumer_ = $LongStream$LongMapMultiConsumer$Type;
}}
declare module "packages/java/util/$Spliterator$OfInt" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$Type} from "packages/java/util/$Spliterator$OfPrimitive"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"

export interface $Spliterator$OfInt extends $Spliterator$OfPrimitive<(integer), ($IntConsumer), ($Spliterator$OfInt)> {

 "forEachRemaining"(arg0: $IntConsumer$Type): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "tryAdvance"(arg0: $Consumer$Type<(any)>): boolean
 "tryAdvance"(arg0: $IntConsumer$Type): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(any)>
}

export namespace $Spliterator$OfInt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfInt$Type = ($Spliterator$OfInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfInt_ = $Spliterator$OfInt$Type;
}}
declare module "packages/java/util/concurrent/$ScheduledFuture" {
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Delayed, $Delayed$Type} from "packages/java/util/concurrent/$Delayed"

export interface $ScheduledFuture<V> extends $Delayed, $Future<(V)> {

 "getDelay"(arg0: $TimeUnit$Type): long
 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "cancel"(arg0: boolean): boolean
 "isCancelled"(): boolean
 "isDone"(): boolean
 "compareTo"(arg0: $Delayed$Type): integer
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$Type<(V)>;
}}
declare module "packages/java/util/concurrent/$ThreadFactory" {
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ThreadFactory {

 "newThread"(arg0: $Runnable$Type): $Thread

(arg0: $Runnable$Type): $Thread
}

export namespace $ThreadFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadFactory$Type = ($ThreadFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadFactory_ = $ThreadFactory$Type;
}}
declare module "packages/java/util/$PrimitiveIterator$OfLong" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"
import {$PrimitiveIterator, $PrimitiveIterator$Type} from "packages/java/util/$PrimitiveIterator"

export interface $PrimitiveIterator$OfLong extends $PrimitiveIterator<(long), ($LongConsumer)> {

 "forEachRemaining"(arg0: $LongConsumer$Type): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "nextLong"(): long
 "remove"(): void
 "hasNext"(): boolean
}

export namespace $PrimitiveIterator$OfLong {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfLong$Type = ($PrimitiveIterator$OfLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator$OfLong_ = $PrimitiveIterator$OfLong$Type;
}}
declare module "packages/java/util/$LongSummaryStatistics" {
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"

export class $LongSummaryStatistics implements $LongConsumer, $IntConsumer {

constructor()
constructor(arg0: long, arg1: long, arg2: long, arg3: long)

public "toString"(): string
public "accept"(arg0: integer): void
public "accept"(arg0: long): void
public "combine"(arg0: $LongSummaryStatistics$Type): void
public "getCount"(): long
public "getMin"(): long
public "getMax"(): long
public "getSum"(): long
public "getAverage"(): double
public "andThen"(arg0: $LongConsumer$Type): $LongConsumer
public "andThen"(arg0: $IntConsumer$Type): $IntConsumer
get "count"(): long
get "min"(): long
get "max"(): long
get "sum"(): long
get "average"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSummaryStatistics$Type = ($LongSummaryStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSummaryStatistics_ = $LongSummaryStatistics$Type;
}}
declare module "packages/java/util/concurrent/locks/$Condition" {
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

export interface $Condition {

 "signal"(): void
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(): void
 "awaitNanos"(arg0: long): long
 "signalAll"(): void
 "awaitUninterruptibly"(): void
 "awaitUntil"(arg0: $Date$Type): boolean
}

export namespace $Condition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Condition$Type = ($Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Condition_ = $Condition$Type;
}}
declare module "packages/java/util/$Locale" {
import {$Locale$FilteringMode, $Locale$FilteringMode$Type} from "packages/java/util/$Locale$FilteringMode"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Locale$IsoCountryCode, $Locale$IsoCountryCode$Type} from "packages/java/util/$Locale$IsoCountryCode"
import {$Locale$Category, $Locale$Category$Type} from "packages/java/util/$Locale$Category"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Locale$LanguageRange, $Locale$LanguageRange$Type} from "packages/java/util/$Locale$LanguageRange"

export class $Locale implements $Cloneable, $Serializable {
static readonly "ENGLISH": $Locale
static readonly "FRENCH": $Locale
static readonly "GERMAN": $Locale
static readonly "ITALIAN": $Locale
static readonly "JAPANESE": $Locale
static readonly "KOREAN": $Locale
static readonly "CHINESE": $Locale
static readonly "SIMPLIFIED_CHINESE": $Locale
static readonly "TRADITIONAL_CHINESE": $Locale
static readonly "FRANCE": $Locale
static readonly "GERMANY": $Locale
static readonly "ITALY": $Locale
static readonly "JAPAN": $Locale
static readonly "KOREA": $Locale
static readonly "UK": $Locale
static readonly "US": $Locale
static readonly "CANADA": $Locale
static readonly "CANADA_FRENCH": $Locale
static readonly "ROOT": $Locale
static readonly "CHINA": $Locale
static readonly "PRC": $Locale
static readonly "TAIWAN": $Locale
static readonly "PRIVATE_USE_EXTENSION": character
static readonly "UNICODE_LOCALE_EXTENSION": character

constructor(arg0: string)
constructor(arg0: string, arg1: string)
constructor(arg0: string, arg1: string, arg2: string)

public "getLanguage"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public static "getDefault"(): $Locale
public static "getDefault"(arg0: $Locale$Category$Type): $Locale
public static "lookup"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Collection$Type<($Locale$Type)>): $Locale
public static "filter"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Collection$Type<($Locale$Type)>, arg2: $Locale$FilteringMode$Type): $List<($Locale)>
public static "filter"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Collection$Type<($Locale$Type)>): $List<($Locale)>
public "getScript"(): string
public "getCountry"(): string
public "getVariant"(): string
public static "setDefault"(arg0: $Locale$Category$Type, arg1: $Locale$Type): void
public static "setDefault"(arg0: $Locale$Type): void
public "hasExtensions"(): boolean
public "getUnicodeLocaleAttributes"(): $Set<(string)>
public "getUnicodeLocaleType"(arg0: string): string
public "getUnicodeLocaleKeys"(): $Set<(string)>
public "getDisplayLanguage"(arg0: $Locale$Type): string
public "getDisplayLanguage"(): string
public "getDisplayScript"(arg0: $Locale$Type): string
public "getDisplayScript"(): string
public "getDisplayCountry"(): string
public "getDisplayCountry"(arg0: $Locale$Type): string
public "getDisplayVariant"(arg0: $Locale$Type): string
public "getDisplayVariant"(): string
public "getDisplayName"(arg0: $Locale$Type): string
public "getDisplayName"(): string
public static "filterTags"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Collection$Type<(string)>): $List<(string)>
public static "filterTags"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Collection$Type<(string)>, arg2: $Locale$FilteringMode$Type): $List<(string)>
public static "lookupTag"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Collection$Type<(string)>): string
public static "getAvailableLocales"(): ($Locale)[]
public static "getISOCountries"(): (string)[]
public static "getISOCountries"(arg0: $Locale$IsoCountryCode$Type): $Set<(string)>
public static "getISOLanguages"(): (string)[]
public "stripExtensions"(): $Locale
public "getExtension"(arg0: character): string
public "getExtensionKeys"(): $Set<(character)>
public "toLanguageTag"(): string
public static "forLanguageTag"(arg0: string): $Locale
public "getISO3Language"(): string
public "getISO3Country"(): string
get "language"(): string
get "default"(): $Locale
get "script"(): string
get "country"(): string
get "variant"(): string
set "default"(value: $Locale$Type)
get "unicodeLocaleAttributes"(): $Set<(string)>
get "unicodeLocaleKeys"(): $Set<(string)>
get "displayLanguage"(): string
get "displayScript"(): string
get "displayCountry"(): string
get "displayVariant"(): string
get "displayName"(): string
get "availableLocales"(): ($Locale)[]
get "iSOCountries"(): (string)[]
get "iSOLanguages"(): (string)[]
get "extensionKeys"(): $Set<(character)>
get "iSO3Language"(): string
get "iSO3Country"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$Type = ($Locale);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale_ = $Locale$Type;
}}
declare module "packages/java/util/$ArrayList" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractList, $AbstractList$Type} from "packages/java/util/$AbstractList"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$RandomAccess, $RandomAccess$Type} from "packages/java/util/$RandomAccess"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ArrayList<E> extends $AbstractList<(E)> implements $List<(E)>, $RandomAccess, $Cloneable, $Serializable {

constructor(arg0: $Collection$Type<(any)>)
constructor()
constructor(arg0: integer)

public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "remove"(arg0: any): boolean
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
public "size"(): integer
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "sort"(arg0: $Comparator$Type<(any)>): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayList$Type<E> = ($ArrayList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayList_<E> = $ArrayList$Type<(E)>;
}}
declare module "packages/java/util/zip/$ZipConstants" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ZipConstants {

}

export namespace $ZipConstants {
const LOCSIG: long
const EXTSIG: long
const CENSIG: long
const ENDSIG: long
const LOCHDR: integer
const EXTHDR: integer
const CENHDR: integer
const ENDHDR: integer
const LOCVER: integer
const LOCFLG: integer
const LOCHOW: integer
const LOCTIM: integer
const LOCCRC: integer
const LOCSIZ: integer
const LOCLEN: integer
const LOCNAM: integer
const LOCEXT: integer
const EXTCRC: integer
const EXTSIZ: integer
const EXTLEN: integer
const CENVEM: integer
const CENVER: integer
const CENFLG: integer
const CENHOW: integer
const CENTIM: integer
const CENCRC: integer
const CENSIZ: integer
const CENLEN: integer
const CENNAM: integer
const CENEXT: integer
const CENCOM: integer
const CENDSK: integer
const CENATT: integer
const CENATX: integer
const CENOFF: integer
const ENDSUB: integer
const ENDTOT: integer
const ENDSIZ: integer
const ENDOFF: integer
const ENDCOM: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipConstants$Type = ($ZipConstants);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipConstants_ = $ZipConstants$Type;
}}
declare module "packages/java/util/$Spliterator$OfLong" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$Type} from "packages/java/util/$Spliterator$OfPrimitive"

export interface $Spliterator$OfLong extends $Spliterator$OfPrimitive<(long), ($LongConsumer), ($Spliterator$OfLong)> {

 "forEachRemaining"(arg0: $LongConsumer$Type): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "tryAdvance"(arg0: $Consumer$Type<(any)>): boolean
 "tryAdvance"(arg0: $LongConsumer$Type): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(any)>
}

export namespace $Spliterator$OfLong {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfLong$Type = ($Spliterator$OfLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfLong_ = $Spliterator$OfLong$Type;
}}
declare module "packages/java/util/$ResourceBundle$Control" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$ResourceBundle, $ResourceBundle$Type} from "packages/java/util/$ResourceBundle"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $ResourceBundle$Control {
static readonly "FORMAT_DEFAULT": $List<(string)>
static readonly "FORMAT_CLASS": $List<(string)>
static readonly "FORMAT_PROPERTIES": $List<(string)>
static readonly "TTL_DONT_CACHE": long
static readonly "TTL_NO_EXPIRATION_CONTROL": long


public "toResourceName"(arg0: string, arg1: string): string
public "getFormats"(arg0: string): $List<(string)>
public "getCandidateLocales"(arg0: string, arg1: $Locale$Type): $List<($Locale)>
public static "getNoFallbackControl"(arg0: $List$Type<(string)>): $ResourceBundle$Control
public static "getControl"(arg0: $List$Type<(string)>): $ResourceBundle$Control
public "toBundleName"(arg0: string, arg1: $Locale$Type): string
public "getFallbackLocale"(arg0: string, arg1: $Locale$Type): $Locale
public "newBundle"(arg0: string, arg1: $Locale$Type, arg2: string, arg3: $ClassLoader$Type, arg4: boolean): $ResourceBundle
public "getTimeToLive"(arg0: string, arg1: $Locale$Type): long
public "needsReload"(arg0: string, arg1: $Locale$Type, arg2: string, arg3: $ClassLoader$Type, arg4: $ResourceBundle$Type, arg5: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBundle$Control$Type = ($ResourceBundle$Control);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBundle$Control_ = $ResourceBundle$Control$Type;
}}
declare module "packages/java/util/function/$IntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntConsumer {

 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$Type): $IntConsumer

(arg0: integer): void
}

export namespace $IntConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConsumer$Type = ($IntConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConsumer_ = $IntConsumer$Type;
}}
declare module "packages/java/util/concurrent/$TimeUnit" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChronoUnit, $ChronoUnit$Type} from "packages/java/time/temporal/$ChronoUnit"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export class $TimeUnit extends $Enum<($TimeUnit)> {
static readonly "NANOSECONDS": $TimeUnit
static readonly "MICROSECONDS": $TimeUnit
static readonly "MILLISECONDS": $TimeUnit
static readonly "SECONDS": $TimeUnit
static readonly "MINUTES": $TimeUnit
static readonly "HOURS": $TimeUnit
static readonly "DAYS": $TimeUnit


public "toNanos"(arg0: long): long
public static "values"(): ($TimeUnit)[]
public "convert"(arg0: long, arg1: $TimeUnit$Type): long
public "convert"(arg0: $Duration$Type): long
public static "valueOf"(arg0: string): $TimeUnit
public static "of"(arg0: $ChronoUnit$Type): $TimeUnit
public "sleep"(arg0: long): void
public "toMillis"(arg0: long): long
public "toMicros"(arg0: long): long
public "toSeconds"(arg0: long): long
public "toMinutes"(arg0: long): long
public "toHours"(arg0: long): long
public "toDays"(arg0: long): long
public "timedWait"(arg0: any, arg1: long): void
public "timedJoin"(arg0: $Thread$Type, arg1: long): void
public "toChronoUnit"(): $ChronoUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeUnit$Type = (("milliseconds") | ("seconds") | ("hours") | ("minutes") | ("days") | ("nanoseconds") | ("microseconds")) | ($TimeUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeUnit_ = $TimeUnit$Type;
}}
declare module "packages/java/util/$AbstractMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractMap<K, V> implements $Map<(K), (V)> {


public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMap$Type<K, V> = ($AbstractMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMap_<K, V> = $AbstractMap$Type<(K), (V)>;
}}
declare module "packages/java/util/$TimeZone" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $TimeZone implements $Serializable, $Cloneable {
static readonly "SHORT": integer
static readonly "LONG": integer

constructor()

public "clone"(): any
public static "getDefault"(): $TimeZone
public "getOffset"(arg0: long): integer
public "getOffset"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public static "setDefault"(arg0: $TimeZone$Type): void
public "getID"(): string
public "getDisplayName"(arg0: boolean, arg1: integer): string
public "getDisplayName"(arg0: boolean, arg1: integer, arg2: $Locale$Type): string
public "getDisplayName"(arg0: $Locale$Type): string
public "getDisplayName"(): string
public "toZoneId"(): $ZoneId
public "inDaylightTime"(arg0: $Date$Type): boolean
public "getRawOffset"(): integer
public "getDSTSavings"(): integer
public "useDaylightTime"(): boolean
public static "getAvailableIDs"(): (string)[]
public static "getAvailableIDs"(arg0: integer): (string)[]
public "setID"(arg0: string): void
public "setRawOffset"(arg0: integer): void
public "observesDaylightTime"(): boolean
public "hasSameRules"(arg0: $TimeZone$Type): boolean
public static "getTimeZone"(arg0: string): $TimeZone
public static "getTimeZone"(arg0: $ZoneId$Type): $TimeZone
get "default"(): $TimeZone
set "default"(value: $TimeZone$Type)
get "iD"(): string
get "displayName"(): string
get "rawOffset"(): integer
get "dSTSavings"(): integer
get "availableIDs"(): (string)[]
set "iD"(value: string)
set "rawOffset"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeZone$Type = ($TimeZone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeZone_ = $TimeZone$Type;
}}
declare module "packages/java/util/function/$Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Supplier<T> {

 "get"(): T

(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$Type<T> = ($Supplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Supplier_<T> = $Supplier$Type<(T)>;
}}
declare module "packages/java/util/$Properties" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$PrintStream, $PrintStream$Type} from "packages/java/io/$PrintStream"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Properties extends $Hashtable<(any), (any)> {

constructor(arg0: $Properties$Type)
constructor(arg0: integer)
constructor()

public "remove"(arg0: any): any
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "getProperty"(arg0: string): string
public "getProperty"(arg0: string, arg1: string): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "load"(arg0: $Reader$Type): void
public "load"(arg0: $InputStream$Type): void
public "store"(arg0: $OutputStream$Type, arg1: string): void
public "store"(arg0: $Writer$Type, arg1: string): void
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replace"(arg0: any, arg1: any): any
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "contains"(arg0: any): boolean
public "list"(arg0: $PrintStream$Type): void
public "list"(arg0: $PrintWriter$Type): void
public "elements"(): $Enumeration<(any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$Type<(any), (any), (any)>): any
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public "setProperty"(arg0: string, arg1: string): any
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: any, arg1: $Function$Type<(any), (any)>): any
public "storeToXML"(arg0: $OutputStream$Type, arg1: string, arg2: string): void
public "storeToXML"(arg0: $OutputStream$Type, arg1: string): void
public "storeToXML"(arg0: $OutputStream$Type, arg1: string, arg2: $Charset$Type): void
public "keys"(): $Enumeration<(any)>
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
/**
 * 
 * @deprecated
 */
public "save"(arg0: $OutputStream$Type, arg1: string): void
public "loadFromXML"(arg0: $InputStream$Type): void
public "propertyNames"(): $Enumeration<(any)>
public "stringPropertyNames"(): $Set<(string)>
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Properties$Type = ($Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Properties_ = $Properties$Type;
}}
declare module "packages/java/util/function/$LongUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongUnaryOperator {

 "applyAsLong"(arg0: long): long
 "compose"(arg0: $LongUnaryOperator$Type): $LongUnaryOperator
 "andThen"(arg0: $LongUnaryOperator$Type): $LongUnaryOperator

(): $LongUnaryOperator
}

export namespace $LongUnaryOperator {
function identity(): $LongUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongUnaryOperator$Type = ($LongUnaryOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongUnaryOperator_ = $LongUnaryOperator$Type;
}}
declare module "packages/java/util/function/$DoubleSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleSupplier {

 "getAsDouble"(): double

(): double
}

export namespace $DoubleSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSupplier$Type = ($DoubleSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleSupplier_ = $DoubleSupplier$Type;
}}
declare module "packages/java/util/$Queue" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export interface $Queue<E> extends $Collection<(E)> {

 "add"(arg0: E): boolean
 "remove"(): E
 "poll"(): E
 "peek"(): E
 "element"(): E
 "offer"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Queue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Queue$Type<E> = ($Queue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Queue_<E> = $Queue$Type<(E)>;
}}
declare module "packages/java/util/$Iterator" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $Iterator<E> {

 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "hasNext"(): boolean
 "next"(): E
}

export namespace $Iterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Iterator$Type<E> = ($Iterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Iterator_<E> = $Iterator$Type<(E)>;
}}
declare module "packages/java/util/stream/$Stream$Builder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $Stream$Builder<T> extends $Consumer<(T)> {

 "build"(): $Stream<(T)>
 "add"(arg0: T): $Stream$Builder<(T)>
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(T)>
}

export namespace $Stream$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stream$Builder$Type<T> = ($Stream$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stream$Builder_<T> = $Stream$Builder$Type<(T)>;
}}
declare module "packages/java/util/concurrent/$ScheduledExecutorService" {
import {$ExecutorService, $ExecutorService$Type} from "packages/java/util/concurrent/$ExecutorService"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/java/util/concurrent/$ScheduledFuture"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ScheduledExecutorService extends $ExecutorService {

 "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
 "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "shutdown"(): void
 "isShutdown"(): boolean
 "shutdownNow"(): $List<($Runnable)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "submit"(arg0: $Runnable$Type): $Future<(any)>
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "execute"(arg0: $Runnable$Type): void
}

export namespace $ScheduledExecutorService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledExecutorService$Type = ($ScheduledExecutorService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledExecutorService_ = $ScheduledExecutorService$Type;
}}
declare module "packages/java/util/function/$DoubleUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleUnaryOperator {

 "applyAsDouble"(arg0: double): double
 "compose"(arg0: $DoubleUnaryOperator$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$Type): $DoubleUnaryOperator

(): $DoubleUnaryOperator
}

export namespace $DoubleUnaryOperator {
function identity(): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleUnaryOperator$Type = ($DoubleUnaryOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleUnaryOperator_ = $DoubleUnaryOperator$Type;
}}
declare module "packages/java/util/concurrent/$Delayed" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

export interface $Delayed extends $Comparable<($Delayed)> {

 "getDelay"(arg0: $TimeUnit$Type): long
 "compareTo"(arg0: $Delayed$Type): integer
}

export namespace $Delayed {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Delayed$Type = ($Delayed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Delayed_ = $Delayed$Type;
}}
declare module "packages/java/util/$HashMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$AbstractMap, $AbstractMap$Type} from "packages/java/util/$AbstractMap"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $HashMap<K, V> extends $AbstractMap<(K), (V)> implements $Map<(K), (V)>, $Cloneable, $Serializable {

constructor(arg0: integer, arg1: float)
constructor(arg0: $Map$Type<(any), (any)>)
constructor(arg0: integer)
constructor()

public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $Collection<(V)>
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashMap$Type<K, V> = ($HashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashMap_<K, V> = $HashMap$Type<(K), (V)>;
}}
declare module "packages/java/util/function/$BooleanSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanSupplier {

 "getAsBoolean"(): boolean

(): boolean
}

export namespace $BooleanSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanSupplier$Type = ($BooleanSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanSupplier_ = $BooleanSupplier$Type;
}}
declare module "packages/java/util/$BitSet" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $BitSet implements $Cloneable, $Serializable {

constructor(arg0: integer)
constructor()

public "get"(arg0: integer, arg1: integer): $BitSet
public "get"(arg0: integer): boolean
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public static "valueOf"(arg0: (long)[]): $BitSet
public static "valueOf"(arg0: $LongBuffer$Type): $BitSet
public static "valueOf"(arg0: (byte)[]): $BitSet
public static "valueOf"(arg0: $ByteBuffer$Type): $BitSet
public "clear"(arg0: integer, arg1: integer): void
public "clear"(arg0: integer): void
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "stream"(): $IntStream
public "set"(arg0: integer): void
public "set"(arg0: integer, arg1: boolean): void
public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: integer, arg1: integer, arg2: boolean): void
public "toByteArray"(): (byte)[]
public "flip"(arg0: integer, arg1: integer): void
public "flip"(arg0: integer): void
public "nextClearBit"(arg0: integer): integer
public "or"(arg0: $BitSet$Type): void
public "and"(arg0: $BitSet$Type): void
public "xor"(arg0: $BitSet$Type): void
public "andNot"(arg0: $BitSet$Type): void
public "cardinality"(): integer
public "nextSetBit"(arg0: integer): integer
public "toLongArray"(): (long)[]
public "previousSetBit"(arg0: integer): integer
public "previousClearBit"(arg0: integer): integer
public "intersects"(arg0: $BitSet$Type): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitSet$Type = ($BitSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitSet_ = $BitSet$Type;
}}
declare module "packages/java/util/$ListIterator" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $ListIterator<E> extends $Iterator<(E)> {

 "add"(arg0: E): void
 "remove"(): void
 "hasNext"(): boolean
 "next"(): E
 "set"(arg0: E): void
 "nextIndex"(): integer
 "previousIndex"(): integer
 "hasPrevious"(): boolean
 "previous"(): E
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ListIterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListIterator$Type<E> = ($ListIterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListIterator_<E> = $ListIterator$Type<(E)>;
}}
declare module "packages/java/util/$LinkedHashMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $LinkedHashMap<K, V> extends $HashMap<(K), (V)> implements $Map<(K), (V)> {

constructor()
constructor(arg0: integer, arg1: float, arg2: boolean)
constructor(arg0: $Map$Type<(any), (any)>)
constructor(arg0: integer, arg1: float)
constructor(arg0: integer)

public "get"(arg0: any): V
public "values"(): $Collection<(V)>
public "clear"(): void
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "size"(): integer
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedHashMap$Type<K, V> = ($LinkedHashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedHashMap_<K, V> = $LinkedHashMap$Type<(K), (V)>;
}}
declare module "packages/java/util/$Dictionary" {
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"

export class $Dictionary<K, V> {

constructor()

public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "isEmpty"(): boolean
public "size"(): integer
public "elements"(): $Enumeration<(V)>
public "keys"(): $Enumeration<(K)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dictionary$Type<K, V> = ($Dictionary<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dictionary_<K, V> = $Dictionary$Type<(K), (V)>;
}}
declare module "packages/java/util/$Currency" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $Currency implements $Serializable {


public "toString"(): string
public static "getInstance"(arg0: string): $Currency
public static "getInstance"(arg0: $Locale$Type): $Currency
public "getDisplayName"(): string
public "getDisplayName"(arg0: $Locale$Type): string
public "getCurrencyCode"(): string
public "getSymbol"(arg0: $Locale$Type): string
public "getSymbol"(): string
public static "getAvailableCurrencies"(): $Set<($Currency)>
public "getDefaultFractionDigits"(): integer
public "getNumericCode"(): integer
public "getNumericCodeAsString"(): string
get "displayName"(): string
get "currencyCode"(): string
get "symbol"(): string
get "availableCurrencies"(): $Set<($Currency)>
get "defaultFractionDigits"(): integer
get "numericCode"(): integer
get "numericCodeAsString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Currency$Type = ($Currency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Currency_ = $Currency$Type;
}}
declare module "packages/java/util/stream/$LongStream" {
import {$ObjLongConsumer, $ObjLongConsumer$Type} from "packages/java/util/function/$ObjLongConsumer"
import {$LongFunction, $LongFunction$Type} from "packages/java/util/function/$LongFunction"
import {$LongConsumer, $LongConsumer$Type} from "packages/java/util/function/$LongConsumer"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$OptionalDouble, $OptionalDouble$Type} from "packages/java/util/$OptionalDouble"
import {$LongBinaryOperator, $LongBinaryOperator$Type} from "packages/java/util/function/$LongBinaryOperator"
import {$LongStream$Builder, $LongStream$Builder$Type} from "packages/java/util/stream/$LongStream$Builder"
import {$LongSummaryStatistics, $LongSummaryStatistics$Type} from "packages/java/util/$LongSummaryStatistics"
import {$LongUnaryOperator, $LongUnaryOperator$Type} from "packages/java/util/function/$LongUnaryOperator"
import {$Spliterator$OfLong, $Spliterator$OfLong$Type} from "packages/java/util/$Spliterator$OfLong"
import {$LongToIntFunction, $LongToIntFunction$Type} from "packages/java/util/function/$LongToIntFunction"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LongToDoubleFunction, $LongToDoubleFunction$Type} from "packages/java/util/function/$LongToDoubleFunction"
import {$LongPredicate, $LongPredicate$Type} from "packages/java/util/function/$LongPredicate"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$BaseStream, $BaseStream$Type} from "packages/java/util/stream/$BaseStream"
import {$LongStream$LongMapMultiConsumer, $LongStream$LongMapMultiConsumer$Type} from "packages/java/util/stream/$LongStream$LongMapMultiConsumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"

export interface $LongStream extends $BaseStream<(long), ($LongStream)> {

 "min"(): $OptionalLong
 "max"(): $OptionalLong
 "toArray"(): (long)[]
 "map"(arg0: $LongUnaryOperator$Type): $LongStream
 "collect"<R>(arg0: $Supplier$Type<(R)>, arg1: $ObjLongConsumer$Type<(R)>, arg2: $BiConsumer$Type<(R), (R)>): R
 "count"(): long
 "limit"(arg0: long): $LongStream
 "spliterator"(): $Spliterator$OfLong
 "filter"(arg0: $LongPredicate$Type): $LongStream
 "anyMatch"(arg0: $LongPredicate$Type): boolean
 "flatMap"(arg0: $LongFunction$Type<(any)>): $LongStream
 "forEach"(arg0: $LongConsumer$Type): void
 "findAny"(): $OptionalLong
 "skip"(arg0: long): $LongStream
 "peek"(arg0: $LongConsumer$Type): $LongStream
 "sum"(): long
 "reduce"(arg0: $LongBinaryOperator$Type): $OptionalLong
 "reduce"(arg0: long, arg1: $LongBinaryOperator$Type): long
 "distinct"(): $LongStream
 "findFirst"(): $OptionalLong
 "allMatch"(arg0: $LongPredicate$Type): boolean
 "parallel"(): $LongStream
 "forEachOrdered"(arg0: $LongConsumer$Type): void
 "mapToInt"(arg0: $LongToIntFunction$Type): $IntStream
 "mapToDouble"(arg0: $LongToDoubleFunction$Type): $DoubleStream
 "mapMulti"(arg0: $LongStream$LongMapMultiConsumer$Type): $LongStream
 "takeWhile"(arg0: $LongPredicate$Type): $LongStream
 "dropWhile"(arg0: $LongPredicate$Type): $LongStream
 "noneMatch"(arg0: $LongPredicate$Type): boolean
 "sorted"(): $LongStream
 "mapToObj"<U>(arg0: $LongFunction$Type<(any)>): $Stream<(U)>
 "boxed"(): $Stream<(long)>
 "average"(): $OptionalDouble
 "summaryStatistics"(): $LongSummaryStatistics
 "asDoubleStream"(): $DoubleStream
 "close"(): void
 "isParallel"(): boolean
 "unordered"(): $LongStream
 "onClose"(arg0: $Runnable$Type): $LongStream
}

export namespace $LongStream {
function of(arg0: long): $LongStream
function of(...arg0: (long)[]): $LongStream
function builder(): $LongStream$Builder
function concat(arg0: $LongStream$Type, arg1: $LongStream$Type): $LongStream
function empty(): $LongStream
function range(arg0: long, arg1: long): $LongStream
function iterate(arg0: long, arg1: $LongPredicate$Type, arg2: $LongUnaryOperator$Type): $LongStream
function iterate(arg0: long, arg1: $LongUnaryOperator$Type): $LongStream
function generate(arg0: $LongSupplier$Type): $LongStream
function rangeClosed(arg0: long, arg1: long): $LongStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$Type = ($LongStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongStream_ = $LongStream$Type;
}}
declare module "packages/java/util/function/$IntUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntUnaryOperator {

 "applyAsInt"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$Type): $IntUnaryOperator

(): $IntUnaryOperator
}

export namespace $IntUnaryOperator {
function identity(): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntUnaryOperator$Type = ($IntUnaryOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntUnaryOperator_ = $IntUnaryOperator$Type;
}}
declare module "packages/java/util/stream/$Collector$Characteristics" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Collector$Characteristics extends $Enum<($Collector$Characteristics)> {
static readonly "CONCURRENT": $Collector$Characteristics
static readonly "UNORDERED": $Collector$Characteristics
static readonly "IDENTITY_FINISH": $Collector$Characteristics


public static "values"(): ($Collector$Characteristics)[]
public static "valueOf"(arg0: string): $Collector$Characteristics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$Characteristics$Type = (("unordered") | ("identity_finish") | ("concurrent")) | ($Collector$Characteristics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collector$Characteristics_ = $Collector$Characteristics$Type;
}}
declare module "packages/java/util/$OptionalDouble" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $OptionalDouble {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $DoubleStream
public static "of"(arg0: double): $OptionalDouble
public static "empty"(): $OptionalDouble
public "isPresent"(): boolean
public "orElse"(arg0: double): double
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): double
public "orElseThrow"(): double
public "ifPresentOrElse"(arg0: $DoubleConsumer$Type, arg1: $Runnable$Type): void
public "orElseGet"(arg0: $DoubleSupplier$Type): double
public "ifPresent"(arg0: $DoubleConsumer$Type): void
public "getAsDouble"(): double
get "present"(): boolean
get "asDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalDouble$Type = ($OptionalDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalDouble_ = $OptionalDouble$Type;
}}
declare module "packages/java/util/$Optional" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Optional<T> {


public "get"(): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "map"<U>(arg0: $Function$Type<(any), (any)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public static "of"<T>(arg0: T): $Optional<(T)>
public "filter"(arg0: $Predicate$Type<(any)>): $Optional<(T)>
public static "empty"<T>(): $Optional<(T)>
public "flatMap"<U>(arg0: $Function$Type<(any), (any)>): $Optional<(U)>
public "isPresent"(): boolean
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): T
public "orElseThrow"(): T
public "ifPresentOrElse"(arg0: $Consumer$Type<(any)>, arg1: $Runnable$Type): void
public "or"(arg0: $Supplier$Type<(any)>): $Optional<(T)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): T
public static "ofNullable"<T>(arg0: T): $Optional<(T)>
public "ifPresent"(arg0: $Consumer$Type<(any)>): void
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optional$Type<T> = ($Optional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Optional_<T> = $Optional$Type<(T)>;
}}
declare module "packages/java/util/$List" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export interface $List<E> extends $Collection<(E)> {

 "add"(arg0: integer, arg1: E): void
 "add"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
 "size"(): integer
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$Type<(any)>): void
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "listIterator"(): $ListIterator<(E)>
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $List {
function copyOf<E>(arg0: $Collection$Type<(any)>): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
function of<E>(arg0: E, arg1: E): $List<(E)>
function of<E>(arg0: E): $List<(E)>
function of<E>(): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
function of<E>(...arg0: (E)[]): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $List$Type<E> = ((E)[]) | ($List<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $List_<E> = $List$Type<(E)>;
}}
declare module "packages/java/util/function/$ObjDoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjDoubleConsumer<T> {

 "accept"(arg0: T, arg1: double): void

(arg0: T, arg1: double): void
}

export namespace $ObjDoubleConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjDoubleConsumer$Type<T> = ($ObjDoubleConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjDoubleConsumer_<T> = $ObjDoubleConsumer$Type<(T)>;
}}
declare module "packages/java/util/function/$BinaryOperator" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $BinaryOperator<T> extends $BiFunction<(T), (T), (T)> {

 "apply"(arg0: T, arg1: T): T
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<(T), (T), (V)>

(arg0: $Comparator$Type<(any)>): $BinaryOperator<(T)>
}

export namespace $BinaryOperator {
function maxBy<T>(arg0: $Comparator$Type<(any)>): $BinaryOperator<(T)>
function minBy<T>(arg0: $Comparator$Type<(any)>): $BinaryOperator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BinaryOperator$Type<T> = ($BinaryOperator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BinaryOperator_<T> = $BinaryOperator$Type<(T)>;
}}
declare module "packages/java/util/$EnumMap" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$AbstractMap, $AbstractMap$Type} from "packages/java/util/$AbstractMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $EnumMap<K extends $Enum<(K)>, V> extends $AbstractMap<(K), (V)> implements $Serializable, $Cloneable {

constructor(arg0: $Class$Type<(K)>)
constructor(arg0: $Map$Type<(K), (any)>)
constructor(arg0: $EnumMap$Type<(K), (any)>)

public "remove"(arg0: any): V
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMap$Type<K, V> = ($EnumMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumMap_<K, V> = $EnumMap$Type<(K), (V)>;
}}
declare module "packages/java/util/stream/$IntStream" {
import {$ObjIntConsumer, $ObjIntConsumer$Type} from "packages/java/util/function/$ObjIntConsumer"
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$OptionalDouble, $OptionalDouble$Type} from "packages/java/util/$OptionalDouble"
import {$Spliterator$OfInt, $Spliterator$OfInt$Type} from "packages/java/util/$Spliterator$OfInt"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$IntBinaryOperator, $IntBinaryOperator$Type} from "packages/java/util/function/$IntBinaryOperator"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"
import {$IntSummaryStatistics, $IntSummaryStatistics$Type} from "packages/java/util/$IntSummaryStatistics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IntUnaryOperator, $IntUnaryOperator$Type} from "packages/java/util/function/$IntUnaryOperator"
import {$IntStream$IntMapMultiConsumer, $IntStream$IntMapMultiConsumer$Type} from "packages/java/util/stream/$IntStream$IntMapMultiConsumer"
import {$IntStream$Builder, $IntStream$Builder$Type} from "packages/java/util/stream/$IntStream$Builder"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IntToDoubleFunction, $IntToDoubleFunction$Type} from "packages/java/util/function/$IntToDoubleFunction"
import {$IntPredicate, $IntPredicate$Type} from "packages/java/util/function/$IntPredicate"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$BaseStream, $BaseStream$Type} from "packages/java/util/stream/$BaseStream"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IntToLongFunction, $IntToLongFunction$Type} from "packages/java/util/function/$IntToLongFunction"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"

export interface $IntStream extends $BaseStream<(integer), ($IntStream)> {

 "min"(): $OptionalInt
 "max"(): $OptionalInt
 "toArray"(): (integer)[]
 "map"(arg0: $IntUnaryOperator$Type): $IntStream
 "collect"<R>(arg0: $Supplier$Type<(R)>, arg1: $ObjIntConsumer$Type<(R)>, arg2: $BiConsumer$Type<(R), (R)>): R
 "count"(): long
 "limit"(arg0: long): $IntStream
 "spliterator"(): $Spliterator$OfInt
 "filter"(arg0: $IntPredicate$Type): $IntStream
 "anyMatch"(arg0: $IntPredicate$Type): boolean
 "flatMap"(arg0: $IntFunction$Type<(any)>): $IntStream
 "forEach"(arg0: $IntConsumer$Type): void
 "findAny"(): $OptionalInt
 "skip"(arg0: long): $IntStream
 "peek"(arg0: $IntConsumer$Type): $IntStream
 "sum"(): integer
 "reduce"(arg0: integer, arg1: $IntBinaryOperator$Type): integer
 "reduce"(arg0: $IntBinaryOperator$Type): $OptionalInt
 "distinct"(): $IntStream
 "findFirst"(): $OptionalInt
 "allMatch"(arg0: $IntPredicate$Type): boolean
 "parallel"(): $IntStream
 "forEachOrdered"(arg0: $IntConsumer$Type): void
 "mapToLong"(arg0: $IntToLongFunction$Type): $LongStream
 "mapToDouble"(arg0: $IntToDoubleFunction$Type): $DoubleStream
 "mapMulti"(arg0: $IntStream$IntMapMultiConsumer$Type): $IntStream
 "takeWhile"(arg0: $IntPredicate$Type): $IntStream
 "dropWhile"(arg0: $IntPredicate$Type): $IntStream
 "noneMatch"(arg0: $IntPredicate$Type): boolean
 "sorted"(): $IntStream
 "mapToObj"<U>(arg0: $IntFunction$Type<(any)>): $Stream<(U)>
 "boxed"(): $Stream<(integer)>
 "average"(): $OptionalDouble
 "summaryStatistics"(): $IntSummaryStatistics
 "asLongStream"(): $LongStream
 "asDoubleStream"(): $DoubleStream
 "close"(): void
 "isParallel"(): boolean
 "unordered"(): $IntStream
 "onClose"(arg0: $Runnable$Type): $IntStream
}

export namespace $IntStream {
function of(arg0: integer): $IntStream
function of(...arg0: (integer)[]): $IntStream
function builder(): $IntStream$Builder
function concat(arg0: $IntStream$Type, arg1: $IntStream$Type): $IntStream
function empty(): $IntStream
function range(arg0: integer, arg1: integer): $IntStream
function iterate(arg0: integer, arg1: $IntPredicate$Type, arg2: $IntUnaryOperator$Type): $IntStream
function iterate(arg0: integer, arg1: $IntUnaryOperator$Type): $IntStream
function generate(arg0: $IntSupplier$Type): $IntStream
function rangeClosed(arg0: integer, arg1: integer): $IntStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$Type = ($IntStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream_ = $IntStream$Type;
}}
declare module "packages/java/util/function/$IntPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntPredicate {

 "test"(arg0: integer): boolean
 "or"(arg0: $IntPredicate$Type): $IntPredicate
 "negate"(): $IntPredicate
 "and"(arg0: $IntPredicate$Type): $IntPredicate

(arg0: integer): boolean
}

export namespace $IntPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntPredicate$Type = ($IntPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntPredicate_ = $IntPredicate$Type;
}}
declare module "packages/java/util/concurrent/$CompletableFuture" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CompletionStage, $CompletionStage$Type} from "packages/java/util/concurrent/$CompletionStage"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $CompletableFuture<T> implements $Future<(T)>, $CompletionStage<(T)> {

constructor()

public "get"(): T
public "get"(arg0: long, arg1: $TimeUnit$Type): T
public "toString"(): string
public "join"(): T
public "copy"(): $CompletableFuture<(T)>
public "handle"<U>(arg0: $BiFunction$Type<(any), ($Throwable$Type), (any)>): $CompletableFuture<(U)>
public "complete"(arg0: T): boolean
public static "allOf"(...arg0: ($CompletableFuture$Type<(any)>)[]): $CompletableFuture<(void)>
public "defaultExecutor"(): $Executor
public static "supplyAsync"<U>(arg0: $Supplier$Type<(U)>, arg1: $Executor$Type): $CompletableFuture<(U)>
public static "supplyAsync"<U>(arg0: $Supplier$Type<(U)>): $CompletableFuture<(U)>
public "whenComplete"(arg0: $BiConsumer$Type<(any), (any)>): $CompletableFuture<(T)>
public "cancel"(arg0: boolean): boolean
public "isCancelled"(): boolean
public "isDone"(): boolean
public "newIncompleteFuture"<U>(): $CompletableFuture<(U)>
public "toCompletableFuture"(): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$Type<(any)>, arg1: $Executor$Type): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$Type<(any)>): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$Type<($Throwable$Type), (any)>): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$Type<($Throwable$Type), (any)>, arg1: $Executor$Type): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$Type<(any), (any)>): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$Type<(any), (any)>, arg1: $Executor$Type): $CompletableFuture<(T)>
public "handleAsync"<U>(arg0: $BiFunction$Type<(any), ($Throwable$Type), (any)>, arg1: $Executor$Type): $CompletableFuture<(U)>
public "handleAsync"<U>(arg0: $BiFunction$Type<(any), ($Throwable$Type), (any)>): $CompletableFuture<(U)>
public "thenCompose"<U>(arg0: $Function$Type<(any), (any)>): $CompletableFuture<(U)>
public "runAfterEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type, arg2: $Executor$Type): $CompletableFuture<(void)>
public "runAfterEither"(arg0: $CompletionStage$Type<(any)>, arg1: $Runnable$Type): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Consumer$Type<(any)>): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$Type<(any)>, arg1: $Consumer$Type<(any)>, arg2: $Executor$Type): $CompletableFuture<(void)>
public "acceptEither"(arg0: $CompletionStage$Type<(any)>, arg1: $Consumer$Type<(any)>): $CompletableFuture<(void)>
public "applyToEitherAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $Function$Type<(any), (U)>, arg2: $Executor$Type): $CompletableFuture<(U)>
public "thenAcceptBothAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $BiConsumer$Type<(any), (any)>): $CompletableFuture<(void)>
public "thenAcceptBothAsync"<U>(arg0: $CompletionStage$Type<(any)>, arg1: $BiConsumer$Type<(any), (any)>, arg2: $Executor$Type): $CompletableFuture<(void)>
public "thenCombineAsync"<U, V>(arg0: $CompletionStage$Type<(any)>, arg1: $BiFunction$Type<(any), (any), (any)>, arg2: $Executor$Type): $CompletableFuture<(V)>
public "thenCombine"<U, V>(arg0: $CompletionStage$Type<(any)>, arg1: $BiFunction$Type<(any), (any), (any)>): $CompletableFuture<(V)>
public "thenRunAsync"(arg0: $Runnable$Type, arg1: $Executor$Type): $CompletableFuture<(void)>
public "thenRunAsync"(arg0: $Runnable$Type): $CompletableFuture<(void)>
public "thenAcceptAsync"(arg0: $Consumer$Type<(any)>): $CompletableFuture<(void)>
public "thenApplyAsync"<U>(arg0: $Function$Type<(any), (any)>): $CompletableFuture<(U)>
public static "runAsync"(arg0: $Runnable$Type, arg1: $Executor$Type): $CompletableFuture<(void)>
public static "runAsync"(arg0: $Runnable$Type): $CompletableFuture<(void)>
public static "completedFuture"<U>(arg0: U): $CompletableFuture<(U)>
public "getNow"(arg0: T): T
public "completeExceptionally"(arg0: $Throwable$Type): boolean
public static "anyOf"(...arg0: ($CompletableFuture$Type<(any)>)[]): $CompletableFuture<(any)>
public "isCompletedExceptionally"(): boolean
public "obtrudeValue"(arg0: T): void
public "obtrudeException"(arg0: $Throwable$Type): void
public "getNumberOfDependents"(): integer
public "minimalCompletionStage"(): $CompletionStage<(T)>
public "orTimeout"(arg0: long, arg1: $TimeUnit$Type): $CompletableFuture<(T)>
public "completeOnTimeout"(arg0: T, arg1: long, arg2: $TimeUnit$Type): $CompletableFuture<(T)>
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$Type, arg2: $Executor$Type): $Executor
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$Type): $Executor
public static "completedStage"<U>(arg0: U): $CompletionStage<(U)>
public static "failedFuture"<U>(arg0: $Throwable$Type): $CompletableFuture<(U)>
public static "failedStage"<U>(arg0: $Throwable$Type): $CompletionStage<(U)>
get "cancelled"(): boolean
get "done"(): boolean
get "completedExceptionally"(): boolean
get "numberOfDependents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletableFuture$Type<T> = ($CompletableFuture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompletableFuture_<T> = $CompletableFuture$Type<(T)>;
}}
declare module "packages/java/util/function/$IntToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToDoubleFunction {

 "applyAsDouble"(arg0: integer): double

(arg0: integer): double
}

export namespace $IntToDoubleFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntToDoubleFunction$Type = ($IntToDoubleFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntToDoubleFunction_ = $IntToDoubleFunction$Type;
}}
declare module "packages/java/util/$PrimitiveIterator$OfInt" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$PrimitiveIterator, $PrimitiveIterator$Type} from "packages/java/util/$PrimitiveIterator"

export interface $PrimitiveIterator$OfInt extends $PrimitiveIterator<(integer), ($IntConsumer)> {

 "forEachRemaining"(arg0: $IntConsumer$Type): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "nextInt"(): integer
 "remove"(): void
 "hasNext"(): boolean
}

export namespace $PrimitiveIterator$OfInt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfInt$Type = ($PrimitiveIterator$OfInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator$OfInt_ = $PrimitiveIterator$OfInt$Type;
}}
declare module "packages/java/util/function/$ToIntBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntBiFunction<T, U> {

 "applyAsInt"(arg0: T, arg1: U): integer

(arg0: T, arg1: U): integer
}

export namespace $ToIntBiFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToIntBiFunction$Type<T, U> = ($ToIntBiFunction<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToIntBiFunction_<T, U> = $ToIntBiFunction$Type<(T), (U)>;
}}
declare module "packages/java/util/$SortedMap" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SortedMap<K, V> extends $Map<(K), (V)> {

 "values"(): $Collection<(V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "keySet"(): $Set<(K)>
 "comparator"(): $Comparator<(any)>
 "firstKey"(): K
 "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
 "headMap"(arg0: K): $SortedMap<(K), (V)>
 "tailMap"(arg0: K): $SortedMap<(K), (V)>
 "lastKey"(): K
 "remove"(arg0: any): V
 "remove"(arg0: any, arg1: any): boolean
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V): V
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
 "size"(): integer
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
}

export namespace $SortedMap {
function copyOf<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedMap$Type<K, V> = ($SortedMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortedMap_<K, V> = $SortedMap$Type<(K), (V)>;
}}
declare module "packages/java/util/concurrent/locks/$Lock" {
import {$Condition, $Condition$Type} from "packages/java/util/concurrent/locks/$Condition"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

export interface $Lock {

 "lockInterruptibly"(): void
 "tryLock"(): boolean
 "tryLock"(arg0: long, arg1: $TimeUnit$Type): boolean
 "newCondition"(): $Condition
 "unlock"(): void
 "lock"(): void
}

export namespace $Lock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lock$Type = ($Lock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lock_ = $Lock$Type;
}}
declare module "packages/java/util/$Locale$LanguageRange" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Locale$LanguageRange {
static readonly "MAX_WEIGHT": double
static readonly "MIN_WEIGHT": double

constructor(arg0: string)
constructor(arg0: string, arg1: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "parse"(arg0: string): $List<($Locale$LanguageRange)>
public static "parse"(arg0: string, arg1: $Map$Type<(string), ($List$Type<(string)>)>): $List<($Locale$LanguageRange)>
public "getRange"(): string
public "getWeight"(): double
public static "mapEquivalents"(arg0: $List$Type<($Locale$LanguageRange$Type)>, arg1: $Map$Type<(string), ($List$Type<(string)>)>): $List<($Locale$LanguageRange)>
get "range"(): string
get "weight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$LanguageRange$Type = ($Locale$LanguageRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$LanguageRange_ = $Locale$LanguageRange$Type;
}}
declare module "packages/java/util/concurrent/atomic/$AtomicReferenceArray" {
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"

export class $AtomicReferenceArray<E> implements $Serializable {

constructor(arg0: integer)
constructor(arg0: (E)[])

public "get"(arg0: integer): E
public "length"(): integer
public "toString"(): string
public "set"(arg0: integer, arg1: E): void
public "getOpaque"(arg0: integer): E
public "setOpaque"(arg0: integer, arg1: E): void
public "getAcquire"(arg0: integer): E
public "setRelease"(arg0: integer, arg1: E): void
public "compareAndSet"(arg0: integer, arg1: E, arg2: E): boolean
public "compareAndExchange"(arg0: integer, arg1: E, arg2: E): E
public "compareAndExchangeAcquire"(arg0: integer, arg1: E, arg2: E): E
public "compareAndExchangeRelease"(arg0: integer, arg1: E, arg2: E): E
public "weakCompareAndSetPlain"(arg0: integer, arg1: E, arg2: E): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: integer, arg1: E, arg2: E): boolean
public "weakCompareAndSetAcquire"(arg0: integer, arg1: E, arg2: E): boolean
public "weakCompareAndSetRelease"(arg0: integer, arg1: E, arg2: E): boolean
public "getAndSet"(arg0: integer, arg1: E): E
public "lazySet"(arg0: integer, arg1: E): void
public "weakCompareAndSetVolatile"(arg0: integer, arg1: E, arg2: E): boolean
public "getAndUpdate"(arg0: integer, arg1: $UnaryOperator$Type<(E)>): E
public "updateAndGet"(arg0: integer, arg1: $UnaryOperator$Type<(E)>): E
public "getAndAccumulate"(arg0: integer, arg1: E, arg2: $BinaryOperator$Type<(E)>): E
public "accumulateAndGet"(arg0: integer, arg1: E, arg2: $BinaryOperator$Type<(E)>): E
public "getPlain"(arg0: integer): E
public "setPlain"(arg0: integer, arg1: E): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicReferenceArray$Type<E> = ($AtomicReferenceArray<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicReferenceArray_<E> = $AtomicReferenceArray$Type<(E)>;
}}
declare module "packages/java/util/$AbstractSequentialList" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractList, $AbstractList$Type} from "packages/java/util/$AbstractList"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $AbstractSequentialList<E> extends $AbstractList<(E)> {


public "add"(arg0: integer, arg1: E): void
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSequentialList$Type<E> = ($AbstractSequentialList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSequentialList_<E> = $AbstractSequentialList$Type<(E)>;
}}
declare module "packages/java/util/$Spliterator$OfDouble" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$Type} from "packages/java/util/$Spliterator$OfPrimitive"
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"

export interface $Spliterator$OfDouble extends $Spliterator$OfPrimitive<(double), ($DoubleConsumer), ($Spliterator$OfDouble)> {

 "forEachRemaining"(arg0: $DoubleConsumer$Type): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "tryAdvance"(arg0: $Consumer$Type<(any)>): boolean
 "tryAdvance"(arg0: $DoubleConsumer$Type): boolean
 "characteristics"(): integer
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(any)>
}

export namespace $Spliterator$OfDouble {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfDouble$Type = ($Spliterator$OfDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfDouble_ = $Spliterator$OfDouble$Type;
}}
declare module "packages/java/util/function/$LongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongConsumer {

 "accept"(arg0: long): void
 "andThen"(arg0: $LongConsumer$Type): $LongConsumer

(arg0: long): void
}

export namespace $LongConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConsumer$Type = ($LongConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConsumer_ = $LongConsumer$Type;
}}
declare module "packages/java/util/stream/$IntStream$IntMapMultiConsumer" {
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"

export interface $IntStream$IntMapMultiConsumer {

 "accept"(arg0: integer, arg1: $IntConsumer$Type): void

(arg0: integer, arg1: $IntConsumer$Type): void
}

export namespace $IntStream$IntMapMultiConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$IntMapMultiConsumer$Type = ($IntStream$IntMapMultiConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream$IntMapMultiConsumer_ = $IntStream$IntMapMultiConsumer$Type;
}}
declare module "packages/java/util/$AbstractSet" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractCollection, $AbstractCollection$Type} from "packages/java/util/$AbstractCollection"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $AbstractSet<E> extends $AbstractCollection<(E)> implements $Set<(E)> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSet$Type<E> = ($AbstractSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSet_<E> = $AbstractSet$Type<(E)>;
}}
declare module "packages/java/util/function/$LongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongFunction<R> {

 "apply"(arg0: long): R

(arg0: long): R
}

export namespace $LongFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongFunction$Type<R> = ($LongFunction<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongFunction_<R> = $LongFunction$Type<(R)>;
}}
declare module "packages/java/util/$Spliterator" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $Spliterator<T> {

 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "characteristics"(): integer
 "tryAdvance"(arg0: $Consumer$Type<(any)>): boolean
 "estimateSize"(): long
 "trySplit"(): $Spliterator<(T)>
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(any)>
}

export namespace $Spliterator {
const ORDERED: integer
const DISTINCT: integer
const SORTED: integer
const SIZED: integer
const NONNULL: integer
const IMMUTABLE: integer
const CONCURRENT: integer
const SUBSIZED: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$Type<T> = ($Spliterator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator_<T> = $Spliterator$Type<(T)>;
}}
declare module "packages/java/util/concurrent/$Executor" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $Executor {

 "execute"(arg0: $Runnable$Type): void

(arg0: $Runnable$Type): void
}

export namespace $Executor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$Type = ($Executor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Executor_ = $Executor$Type;
}}
declare module "packages/java/util/random/$RandomGenerator" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$DoubleStream, $DoubleStream$Type} from "packages/java/util/stream/$DoubleStream"

export interface $RandomGenerator {

 "nextDouble"(arg0: double): double
 "nextDouble"(arg0: double, arg1: double): double
 "nextDouble"(): double
 "nextInt"(): integer
 "nextInt"(arg0: integer): integer
 "nextInt"(arg0: integer, arg1: integer): integer
 "nextBytes"(arg0: (byte)[]): void
 "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
 "ints"(): $IntStream
 "ints"(arg0: integer, arg1: integer): $IntStream
 "ints"(arg0: long): $IntStream
 "nextBoolean"(): boolean
 "nextLong"(arg0: long, arg1: long): long
 "nextLong"(arg0: long): long
 "nextLong"(): long
 "nextFloat"(arg0: float): float
 "nextFloat"(arg0: float, arg1: float): float
 "nextFloat"(): float
 "longs"(): $LongStream
 "longs"(arg0: long, arg1: long): $LongStream
 "longs"(arg0: long): $LongStream
 "longs"(arg0: long, arg1: long, arg2: long): $LongStream
 "doubles"(arg0: double, arg1: double): $DoubleStream
 "doubles"(): $DoubleStream
 "doubles"(arg0: long): $DoubleStream
 "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
 "nextGaussian"(): double
 "nextGaussian"(arg0: double, arg1: double): double
 "isDeprecated"(): boolean
 "nextExponential"(): double

(arg0: double): double
}

export namespace $RandomGenerator {
function getDefault(): $RandomGenerator
function of(arg0: string): $RandomGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomGenerator$Type = ($RandomGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomGenerator_ = $RandomGenerator$Type;
}}
declare module "packages/java/util/$Stack" {
import {$Vector, $Vector$Type} from "packages/java/util/$Vector"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Stack<E> extends $Vector<(E)> {

constructor()

public "empty"(): boolean
public "peek"(): E
public "search"(arg0: any): integer
public "push"(arg0: E): E
public "pop"(): E
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stack$Type<E> = ($Stack<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stack_<E> = $Stack$Type<(E)>;
}}
declare module "packages/java/util/concurrent/$ConcurrentHashMap" {
import {$ConcurrentMap, $ConcurrentMap$Type} from "packages/java/util/concurrent/$ConcurrentMap"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$LongBinaryOperator, $LongBinaryOperator$Type} from "packages/java/util/function/$LongBinaryOperator"
import {$ConcurrentHashMap$KeySetView, $ConcurrentHashMap$KeySetView$Type} from "packages/java/util/concurrent/$ConcurrentHashMap$KeySetView"
import {$AbstractMap, $AbstractMap$Type} from "packages/java/util/$AbstractMap"
import {$IntBinaryOperator, $IntBinaryOperator$Type} from "packages/java/util/function/$IntBinaryOperator"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$Type} from "packages/java/util/function/$ToIntBiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DoubleBinaryOperator, $DoubleBinaryOperator$Type} from "packages/java/util/function/$DoubleBinaryOperator"
import {$ToLongBiFunction, $ToLongBiFunction$Type} from "packages/java/util/function/$ToLongBiFunction"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$Type} from "packages/java/util/function/$ToDoubleBiFunction"

export class $ConcurrentHashMap<K, V> extends $AbstractMap<(K), (V)> implements $ConcurrentMap<(K), (V)>, $Serializable {

constructor(arg0: integer)
constructor(arg0: $Map$Type<(any), (any)>)
constructor(arg0: integer, arg1: float)
constructor(arg0: integer, arg1: float, arg2: integer)
constructor()

public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public "size"(): integer
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "forEach"(arg0: long, arg1: $BiConsumer$Type<(any), (any)>): void
public "forEach"<U>(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>, arg2: $Consumer$Type<(any)>): void
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "keys"(): $Enumeration<(K)>
public "keySet"(arg0: V): $ConcurrentHashMap$KeySetView<(K), (V)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "mappingCount"(): long
public static "newKeySet"<K>(arg0: integer): $ConcurrentHashMap$KeySetView<(K), (boolean)>
public static "newKeySet"<K>(): $ConcurrentHashMap$KeySetView<(K), (boolean)>
public "search"<U>(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>): U
public "reduce"<U>(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>, arg2: $BiFunction$Type<(any), (any), (any)>): U
public "reduceToDouble"(arg0: long, arg1: $ToDoubleBiFunction$Type<(any), (any)>, arg2: double, arg3: $DoubleBinaryOperator$Type): double
public "reduceToLong"(arg0: long, arg1: $ToLongBiFunction$Type<(any), (any)>, arg2: long, arg3: $LongBinaryOperator$Type): long
public "reduceToInt"(arg0: long, arg1: $ToIntBiFunction$Type<(any), (any)>, arg2: integer, arg3: $IntBinaryOperator$Type): integer
public "forEachKey"(arg0: long, arg1: $Consumer$Type<(any)>): void
public "forEachKey"<U>(arg0: long, arg1: $Function$Type<(any), (any)>, arg2: $Consumer$Type<(any)>): void
public "searchKeys"<U>(arg0: long, arg1: $Function$Type<(any), (any)>): U
public "reduceKeys"(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>): K
public "reduceKeys"<U>(arg0: long, arg1: $Function$Type<(any), (any)>, arg2: $BiFunction$Type<(any), (any), (any)>): U
public "reduceKeysToDouble"(arg0: long, arg1: $ToDoubleFunction$Type<(any)>, arg2: double, arg3: $DoubleBinaryOperator$Type): double
public "reduceKeysToLong"(arg0: long, arg1: $ToLongFunction$Type<(any)>, arg2: long, arg3: $LongBinaryOperator$Type): long
public "reduceKeysToInt"(arg0: long, arg1: $ToIntFunction$Type<(any)>, arg2: integer, arg3: $IntBinaryOperator$Type): integer
public "forEachValue"<U>(arg0: long, arg1: $Function$Type<(any), (any)>, arg2: $Consumer$Type<(any)>): void
public "forEachValue"(arg0: long, arg1: $Consumer$Type<(any)>): void
public "searchValues"<U>(arg0: long, arg1: $Function$Type<(any), (any)>): U
public "reduceValues"(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "reduceValues"<U>(arg0: long, arg1: $Function$Type<(any), (any)>, arg2: $BiFunction$Type<(any), (any), (any)>): U
public "reduceValuesToDouble"(arg0: long, arg1: $ToDoubleFunction$Type<(any)>, arg2: double, arg3: $DoubleBinaryOperator$Type): double
public "reduceValuesToLong"(arg0: long, arg1: $ToLongFunction$Type<(any)>, arg2: long, arg3: $LongBinaryOperator$Type): long
public "reduceValuesToInt"(arg0: long, arg1: $ToIntFunction$Type<(any)>, arg2: integer, arg3: $IntBinaryOperator$Type): integer
public "forEachEntry"(arg0: long, arg1: $Consumer$Type<(any)>): void
public "forEachEntry"<U>(arg0: long, arg1: $Function$Type<($Map$Entry$Type<(K), (V)>), (any)>, arg2: $Consumer$Type<(any)>): void
public "searchEntries"<U>(arg0: long, arg1: $Function$Type<($Map$Entry$Type<(K), (V)>), (any)>): U
public "reduceEntries"(arg0: long, arg1: $BiFunction$Type<($Map$Entry$Type<(K), (V)>), ($Map$Entry$Type<(K), (V)>), (any)>): $Map$Entry<(K), (V)>
public "reduceEntries"<U>(arg0: long, arg1: $Function$Type<($Map$Entry$Type<(K), (V)>), (any)>, arg2: $BiFunction$Type<(any), (any), (any)>): U
public "reduceEntriesToDouble"(arg0: long, arg1: $ToDoubleFunction$Type<($Map$Entry$Type<(K), (V)>)>, arg2: double, arg3: $DoubleBinaryOperator$Type): double
public "reduceEntriesToLong"(arg0: long, arg1: $ToLongFunction$Type<($Map$Entry$Type<(K), (V)>)>, arg2: long, arg3: $LongBinaryOperator$Type): long
public "reduceEntriesToInt"(arg0: long, arg1: $ToIntFunction$Type<($Map$Entry$Type<(K), (V)>)>, arg2: integer, arg3: $IntBinaryOperator$Type): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$Type<K, V> = ($ConcurrentHashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentHashMap_<K, V> = $ConcurrentHashMap$Type<(K), (V)>;
}}
declare module "packages/java/util/$ArrayDeque" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractCollection, $AbstractCollection$Type} from "packages/java/util/$AbstractCollection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ArrayDeque<E> extends $AbstractCollection<(E)> implements $Deque<(E)>, $Cloneable, $Serializable {

constructor()
constructor(arg0: $Collection$Type<(any)>)
constructor(arg0: integer)

public "add"(arg0: E): boolean
public "remove"(): E
public "remove"(arg0: any): boolean
public "clone"(): $ArrayDeque<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "poll"(): E
public "peek"(): E
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "element"(): E
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "push"(arg0: E): void
public "pop"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "pollFirst"(): E
public "pollLast"(): E
public "offerLast"(arg0: E): boolean
public "removeFirst"(): E
public "getFirst"(): E
public "peekFirst"(): E
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: E): boolean
public "removeLast"(): E
public "getLast"(): E
public "peekLast"(): E
public "removeLastOccurrence"(arg0: any): boolean
public "offer"(arg0: E): boolean
public "descendingIterator"(): $Iterator<(E)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
get "empty"(): boolean
get "first"(): E
get "last"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayDeque$Type<E> = ($ArrayDeque<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayDeque_<E> = $ArrayDeque$Type<(E)>;
}}
declare module "packages/java/util/$EnumSet" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$AbstractSet, $AbstractSet$Type} from "packages/java/util/$AbstractSet"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $EnumSet<E extends $Enum<(E)>> extends $AbstractSet<(E)> implements $Cloneable, $Serializable {


public static "copyOf"<E extends $Enum<(E)>>(arg0: $EnumSet$Type<(E)>): $EnumSet<(E)>
public static "copyOf"<E extends $Enum<(E)>>(arg0: $Collection$Type<(E)>): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E, arg2: E, arg3: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E, arg2: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, ...arg1: (E)[]): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E): $EnumSet<(E)>
public static "noneOf"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>): $EnumSet<(E)>
public static "range"<E extends $Enum<(E)>>(arg0: E, arg1: E): $EnumSet<(E)>
public static "allOf"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>): $EnumSet<(E)>
public static "complementOf"<E extends $Enum<(E)>>(arg0: $EnumSet$Type<(E)>): $EnumSet<(E)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumSet$Type<E> = ($EnumSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumSet_<E> = $EnumSet$Type<(E)>;
}}
declare module "packages/java/util/concurrent/atomic/$AtomicInteger" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$IntBinaryOperator, $IntBinaryOperator$Type} from "packages/java/util/function/$IntBinaryOperator"
import {$IntUnaryOperator, $IntUnaryOperator$Type} from "packages/java/util/function/$IntUnaryOperator"

export class $AtomicInteger extends number implements $Serializable {

constructor(arg0: integer)
constructor()

public "get"(): integer
public "toString"(): string
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "set"(arg0: integer): void
public "getOpaque"(): integer
public "setOpaque"(arg0: integer): void
public "getAcquire"(): integer
public "setRelease"(arg0: integer): void
public "compareAndSet"(arg0: integer, arg1: integer): boolean
public "compareAndExchange"(arg0: integer, arg1: integer): integer
public "compareAndExchangeAcquire"(arg0: integer, arg1: integer): integer
public "compareAndExchangeRelease"(arg0: integer, arg1: integer): integer
public "weakCompareAndSetPlain"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: integer, arg1: integer): boolean
public "weakCompareAndSetAcquire"(arg0: integer, arg1: integer): boolean
public "weakCompareAndSetRelease"(arg0: integer, arg1: integer): boolean
public "getAndSet"(arg0: integer): integer
public "getAndAdd"(arg0: integer): integer
public "lazySet"(arg0: integer): void
public "weakCompareAndSetVolatile"(arg0: integer, arg1: integer): boolean
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "incrementAndGet"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: integer): integer
public "getAndUpdate"(arg0: $IntUnaryOperator$Type): integer
public "updateAndGet"(arg0: $IntUnaryOperator$Type): integer
public "getAndAccumulate"(arg0: integer, arg1: $IntBinaryOperator$Type): integer
public "accumulateAndGet"(arg0: integer, arg1: $IntBinaryOperator$Type): integer
public "getPlain"(): integer
public "setPlain"(arg0: integer): void
get "opaque"(): integer
set "opaque"(value: integer)
get "acquire"(): integer
set "release"(value: integer)
get "andIncrement"(): integer
get "andDecrement"(): integer
get "plain"(): integer
set "plain"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicInteger$Type = ($AtomicInteger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicInteger_ = $AtomicInteger$Type;
}}
declare module "packages/java/util/concurrent/$ExecutorService" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $ExecutorService extends $Executor {

 "shutdown"(): void
 "isShutdown"(): boolean
 "shutdownNow"(): $List<($Runnable)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "submit"(arg0: $Runnable$Type): $Future<(any)>
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "execute"(arg0: $Runnable$Type): void
}

export namespace $ExecutorService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutorService$Type = ($ExecutorService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExecutorService_ = $ExecutorService$Type;
}}
declare module "packages/java/util/$Spliterator$OfPrimitive" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export interface $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>> extends $Spliterator<(T)> {

 "forEachRemaining"(arg0: T_CONS): void
 "tryAdvance"(arg0: T_CONS): boolean
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
 "characteristics"(): integer
 "tryAdvance"(arg0: $Consumer$Type<(any)>): boolean
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(any)>
}

export namespace $Spliterator$OfPrimitive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfPrimitive$Type<T, T_CONS, T_SPLITR> = ($Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfPrimitive_<T, T_CONS, T_SPLITR> = $Spliterator$OfPrimitive$Type<(T), (T_CONS), (T_SPLITR)>;
}}
declare module "packages/java/util/function/$DoubleToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToLongFunction {

 "applyAsLong"(arg0: double): long

(arg0: double): long
}

export namespace $DoubleToLongFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleToLongFunction$Type = ($DoubleToLongFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleToLongFunction_ = $DoubleToLongFunction$Type;
}}
declare module "packages/java/util/regex/$Matcher" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$StringBuffer, $StringBuffer$Type} from "packages/java/lang/$StringBuffer"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$MatchResult, $MatchResult$Type} from "packages/java/util/regex/$MatchResult"

export class $Matcher implements $MatchResult {


public "group"(arg0: string): string
public "group"(arg0: integer): string
public "group"(): string
public "toString"(): string
public "matches"(): boolean
public "replaceFirst"(arg0: string): string
public "replaceFirst"(arg0: $Function$Type<($MatchResult$Type), (string)>): string
public "replaceAll"(arg0: $Function$Type<($MatchResult$Type), (string)>): string
public "replaceAll"(arg0: string): string
public "start"(arg0: integer): integer
public "start"(): integer
public "start"(arg0: string): integer
public "end"(arg0: integer): integer
public "end"(): integer
public "end"(arg0: string): integer
public "find"(arg0: integer): boolean
public "find"(): boolean
public "reset"(): $Matcher
public "reset"(arg0: charseq): $Matcher
public "pattern"(): $Pattern
public "appendReplacement"(arg0: $StringBuffer$Type, arg1: string): $Matcher
public "appendReplacement"(arg0: $StringBuilder$Type, arg1: string): $Matcher
public "appendTail"(arg0: $StringBuilder$Type): $StringBuilder
public "appendTail"(arg0: $StringBuffer$Type): $StringBuffer
public "hitEnd"(): boolean
public "groupCount"(): integer
public "requireEnd"(): boolean
public "toMatchResult"(): $MatchResult
public "regionStart"(): integer
public "regionEnd"(): integer
public "usePattern"(arg0: $Pattern$Type): $Matcher
public "lookingAt"(): boolean
public static "quoteReplacement"(arg0: string): string
public "results"(): $Stream<($MatchResult)>
public "hasTransparentBounds"(): boolean
public "useTransparentBounds"(arg0: boolean): $Matcher
public "hasAnchoringBounds"(): boolean
public "useAnchoringBounds"(arg0: boolean): $Matcher
public "region"(arg0: integer, arg1: integer): $Matcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matcher$Type = ($Matcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matcher_ = $Matcher$Type;
}}
declare module "packages/java/util/$Map" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $Map<K, V> {

 "remove"(arg0: any): V
 "remove"(arg0: any, arg1: any): boolean
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V): V
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
 "size"(): integer
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
}

export namespace $Map {
function copyOf<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Map$Type<K, V> = ({[key: string]: V}) | ($Map<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Map_<K, V> = $Map$Type<(K), (V)>;
}}
declare module "packages/java/util/function/$IntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntFunction<R> {

 "apply"(arg0: integer): R

(arg0: integer): R
}

export namespace $IntFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntFunction$Type<R> = ($IntFunction<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntFunction_<R> = $IntFunction$Type<(R)>;
}}
declare module "packages/java/util/regex/$Pattern" {
import {$Matcher, $Matcher$Type} from "packages/java/util/regex/$Matcher"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $Pattern implements $Serializable {
static readonly "UNIX_LINES": integer
static readonly "CASE_INSENSITIVE": integer
static readonly "COMMENTS": integer
static readonly "MULTILINE": integer
static readonly "LITERAL": integer
static readonly "DOTALL": integer
static readonly "UNICODE_CASE": integer
static readonly "CANON_EQ": integer
static readonly "UNICODE_CHARACTER_CLASS": integer


public "toString"(): string
public "flags"(): integer
public static "matches"(arg0: string, arg1: charseq): boolean
public static "compile"(arg0: string): $Pattern
public static "compile"(arg0: string, arg1: integer): $Pattern
public "matcher"(arg0: charseq): $Matcher
public "split"(arg0: charseq, arg1: integer): (string)[]
public "split"(arg0: charseq): (string)[]
public static "quote"(arg0: string): string
public "pattern"(): string
public "asPredicate"(): $Predicate<(string)>
public "asMatchPredicate"(): $Predicate<(string)>
public "splitAsStream"(arg0: charseq): $Stream<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pattern$Type = ($Pattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pattern_ = $Pattern$Type;
}}
declare module "packages/java/util/stream/$BaseStream" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $BaseStream<T, S extends $BaseStream<(T), (S)>> extends $AutoCloseable {

 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
 "parallel"(): S
 "isParallel"(): boolean
 "unordered"(): S
 "onClose"(arg0: $Runnable$Type): S
 "sequential"(): S
}

export namespace $BaseStream {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseStream$Type<T, S> = ($BaseStream<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseStream_<T, S> = $BaseStream$Type<(T), (S)>;
}}
declare module "packages/java/util/$DoubleSummaryStatistics" {
import {$DoubleConsumer, $DoubleConsumer$Type} from "packages/java/util/function/$DoubleConsumer"

export class $DoubleSummaryStatistics implements $DoubleConsumer {

constructor()
constructor(arg0: long, arg1: double, arg2: double, arg3: double)

public "toString"(): string
public "accept"(arg0: double): void
public "combine"(arg0: $DoubleSummaryStatistics$Type): void
public "getCount"(): long
public "getMin"(): double
public "getMax"(): double
public "getSum"(): double
public "getAverage"(): double
public "andThen"(arg0: $DoubleConsumer$Type): $DoubleConsumer
get "count"(): long
get "min"(): double
get "max"(): double
get "sum"(): double
get "average"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSummaryStatistics$Type = ($DoubleSummaryStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleSummaryStatistics_ = $DoubleSummaryStatistics$Type;
}}
