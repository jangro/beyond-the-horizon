declare module "packages/java/io/$FileNotFoundException" {
import {$IOException, $IOException$Type} from "packages/java/io/$IOException"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileNotFoundException extends $IOException {

constructor()
constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNotFoundException$Type = ($FileNotFoundException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileNotFoundException_ = $FileNotFoundException$Type;
}}
declare module "packages/java/io/$OutputStream" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Flushable, $Flushable$Type} from "packages/java/io/$Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $OutputStream implements $Closeable, $Flushable {

constructor()

public "flush"(): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "close"(): void
public static "nullOutputStream"(): $OutputStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStream$Type = ($OutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputStream_ = $OutputStream$Type;
}}
declare module "packages/java/io/$DataInput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataInput {

 "readLine"(): string
 "readInt"(): integer
 "readUTF"(): string
 "readChar"(): character
 "readFloat"(): float
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readByte"(): byte
 "readShort"(): short
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readUnsignedByte"(): integer
 "readDouble"(): double
}

export namespace $DataInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataInput$Type = ($DataInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataInput_ = $DataInput$Type;
}}
declare module "packages/java/io/$Flushable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Flushable {

 "flush"(): void

(): void
}

export namespace $Flushable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flushable$Type = ($Flushable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Flushable_ = $Flushable$Type;
}}
declare module "packages/java/io/$PrintStream" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$FilterOutputStream, $FilterOutputStream$Type} from "packages/java/io/$FilterOutputStream"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Appendable, $Appendable$Type} from "packages/java/lang/$Appendable"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintStream extends $FilterOutputStream implements $Appendable, $Closeable {

constructor(arg0: string, arg1: string)
constructor(arg0: string)
constructor(arg0: $OutputStream$Type, arg1: boolean, arg2: $Charset$Type)
constructor(arg0: $OutputStream$Type, arg1: boolean, arg2: string)
constructor(arg0: string, arg1: $Charset$Type)
constructor(arg0: $File$Type, arg1: string)
constructor(arg0: $File$Type, arg1: $Charset$Type)
constructor(arg0: $File$Type)
constructor(arg0: $OutputStream$Type)
constructor(arg0: $OutputStream$Type, arg1: boolean)

public "println"(arg0: string): void
public "println"(arg0: any): void
public "println"(arg0: float): void
public "println"(arg0: double): void
public "println"(arg0: (character)[]): void
public "println"(arg0: boolean): void
public "println"(): void
public "println"(arg0: character): void
public "println"(arg0: integer): void
public "println"(arg0: long): void
public "flush"(): void
public "format"(arg0: string, ...arg1: (any)[]): $PrintStream
public "format"(arg0: $Locale$Type, arg1: string, ...arg2: (any)[]): $PrintStream
public "printf"(arg0: $Locale$Type, arg1: string, ...arg2: (any)[]): $PrintStream
public "printf"(arg0: string, ...arg1: (any)[]): $PrintStream
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "write"(arg0: (byte)[]): void
public "print"(arg0: boolean): void
public "print"(arg0: string): void
public "print"(arg0: (character)[]): void
public "print"(arg0: long): void
public "print"(arg0: double): void
public "print"(arg0: float): void
public "print"(arg0: character): void
public "print"(arg0: integer): void
public "print"(arg0: any): void
public "close"(): void
public "writeBytes"(arg0: (byte)[]): void
public "checkError"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintStream$Type = ($PrintStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintStream_ = $PrintStream$Type;
}}
declare module "packages/java/io/$ObjectOutput" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectOutput extends $DataOutput, $AutoCloseable {

 "flush"(): void
 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeObject"(arg0: any): void
 "close"(): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: string): void
 "writeBytes"(arg0: string): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeLong"(arg0: long): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: string): void
}

export namespace $ObjectOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectOutput$Type = ($ObjectOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectOutput_ = $ObjectOutput$Type;
}}
declare module "packages/java/io/$InputStream" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InputStream implements $Closeable {

constructor()

public "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "read"(arg0: (byte)[]): integer
public "read"(): integer
public "close"(): void
public "mark"(arg0: integer): void
public "readAllBytes"(): (byte)[]
public "readNBytes"(arg0: integer): (byte)[]
public "readNBytes"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "transferTo"(arg0: $OutputStream$Type): long
public "skip"(arg0: long): long
public "available"(): integer
public "markSupported"(): boolean
public "reset"(): void
public static "nullInputStream"(): $InputStream
public "skipNBytes"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputStream$Type = ($InputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputStream_ = $InputStream$Type;
}}
declare module "packages/java/io/$BufferedWriter" {
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedWriter extends $Writer {

constructor(arg0: $Writer$Type)
constructor(arg0: $Writer$Type, arg1: integer)

public "flush"(): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: string, arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "newLine"(): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedWriter$Type = ($BufferedWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedWriter_ = $BufferedWriter$Type;
}}
declare module "packages/java/io/$Closeable" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"

export interface $Closeable extends $AutoCloseable {

 "close"(): void

(): void
}

export namespace $Closeable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Closeable$Type = ($Closeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Closeable_ = $Closeable$Type;
}}
declare module "packages/java/io/$FilterOutputStream" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterOutputStream extends $OutputStream {

constructor(arg0: $OutputStream$Type)

public "flush"(): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: integer): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterOutputStream$Type = ($FilterOutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterOutputStream_ = $FilterOutputStream$Type;
}}
declare module "packages/java/io/$Externalizable" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ObjectOutput, $ObjectOutput$Type} from "packages/java/io/$ObjectOutput"
import {$ObjectInput, $ObjectInput$Type} from "packages/java/io/$ObjectInput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Externalizable extends $Serializable {

 "writeExternal"(arg0: $ObjectOutput$Type): void
 "readExternal"(arg0: $ObjectInput$Type): void
}

export namespace $Externalizable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Externalizable$Type = ($Externalizable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Externalizable_ = $Externalizable$Type;
}}
declare module "packages/java/io/$FileFilter" {
import {$File, $File$Type} from "packages/java/io/$File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileFilter {

 "accept"(arg0: $File$Type): boolean

(arg0: $File$Type): boolean
}

export namespace $FileFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileFilter$Type = ($FileFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileFilter_ = $FileFilter$Type;
}}
declare module "packages/java/io/$DataOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataOutput {

 "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "write"(arg0: (byte)[]): void
 "write"(arg0: integer): void
 "writeInt"(arg0: integer): void
 "writeUTF"(arg0: string): void
 "writeBytes"(arg0: string): void
 "writeChar"(arg0: integer): void
 "writeFloat"(arg0: float): void
 "writeLong"(arg0: long): void
 "writeBoolean"(arg0: boolean): void
 "writeByte"(arg0: integer): void
 "writeShort"(arg0: integer): void
 "writeDouble"(arg0: double): void
 "writeChars"(arg0: string): void
}

export namespace $DataOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataOutput$Type = ($DataOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataOutput_ = $DataOutput$Type;
}}
declare module "packages/java/io/$FilenameFilter" {
import {$File, $File$Type} from "packages/java/io/$File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FilenameFilter {

 "accept"(arg0: $File$Type, arg1: string): boolean

(arg0: $File$Type, arg1: string): boolean
}

export namespace $FilenameFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilenameFilter$Type = ($FilenameFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilenameFilter_ = $FilenameFilter$Type;
}}
declare module "packages/java/io/$IOException" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IOException extends $Exception {

constructor(arg0: $Throwable$Type)
constructor(arg0: string, arg1: $Throwable$Type)
constructor(arg0: string)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOException$Type = ($IOException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOException_ = $IOException$Type;
}}
declare module "packages/java/io/$PrintWriter" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintWriter extends $Writer {

constructor(arg0: string)
constructor(arg0: string, arg1: string)
constructor(arg0: string, arg1: $Charset$Type)
constructor(arg0: $File$Type)
constructor(arg0: $File$Type, arg1: string)
constructor(arg0: $File$Type, arg1: $Charset$Type)
constructor(arg0: $Writer$Type)
constructor(arg0: $Writer$Type, arg1: boolean)
constructor(arg0: $OutputStream$Type, arg1: boolean, arg2: $Charset$Type)
constructor(arg0: $OutputStream$Type, arg1: boolean)
constructor(arg0: $OutputStream$Type)

public "println"(arg0: (character)[]): void
public "println"(): void
public "println"(arg0: boolean): void
public "println"(arg0: string): void
public "println"(arg0: any): void
public "println"(arg0: double): void
public "println"(arg0: float): void
public "println"(arg0: long): void
public "println"(arg0: integer): void
public "println"(arg0: character): void
public "append"(arg0: charseq, arg1: integer, arg2: integer): $PrintWriter
public "append"(arg0: character): $PrintWriter
public "append"(arg0: charseq): $PrintWriter
public "flush"(): void
public "format"(arg0: string, ...arg1: (any)[]): $PrintWriter
public "format"(arg0: $Locale$Type, arg1: string, ...arg2: (any)[]): $PrintWriter
public "printf"(arg0: string, ...arg1: (any)[]): $PrintWriter
public "printf"(arg0: $Locale$Type, arg1: string, ...arg2: (any)[]): $PrintWriter
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: string): void
public "write"(arg0: string, arg1: integer, arg2: integer): void
public "write"(arg0: (character)[]): void
public "write"(arg0: integer): void
public "print"(arg0: float): void
public "print"(arg0: long): void
public "print"(arg0: integer): void
public "print"(arg0: character): void
public "print"(arg0: boolean): void
public "print"(arg0: any): void
public "print"(arg0: string): void
public "print"(arg0: (character)[]): void
public "print"(arg0: double): void
public "close"(): void
public "checkError"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintWriter$Type = ($PrintWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintWriter_ = $PrintWriter$Type;
}}
declare module "packages/java/io/$Serializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Serializable {

}

export namespace $Serializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializable$Type = ($Serializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializable_ = $Serializable$Type;
}}
declare module "packages/java/io/$File" {
import {$FileFilter, $FileFilter$Type} from "packages/java/io/$FileFilter"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$FilenameFilter, $FilenameFilter$Type} from "packages/java/io/$FilenameFilter"
import {$URI, $URI$Type} from "packages/java/net/$URI"
import {$URL, $URL$Type} from "packages/java/net/$URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $File implements $Serializable, $Comparable<($File)> {
static readonly "separatorChar": character
static readonly "separator": string
static readonly "pathSeparatorChar": character
static readonly "pathSeparator": string

constructor(arg0: string)
constructor(arg0: string, arg1: string)
constructor(arg0: $URI$Type)
constructor(arg0: $File$Type, arg1: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "length"(): long
public "toString"(): string
public "hashCode"(): integer
public "isHidden"(): boolean
public "compareTo"(arg0: $File$Type): integer
public "list"(): (string)[]
public "list"(arg0: $FilenameFilter$Type): (string)[]
public "isAbsolute"(): boolean
public "getParent"(): string
public "delete"(): boolean
public "setReadOnly"(): boolean
public "canRead"(): boolean
public "getPath"(): string
public "toURI"(): $URI
/**
 * 
 * @deprecated
 */
public "toURL"(): $URL
public "exists"(): boolean
public "createNewFile"(): boolean
public "renameTo"(arg0: $File$Type): boolean
public "getAbsolutePath"(): string
public "getCanonicalPath"(): string
public "isDirectory"(): boolean
public "getAbsoluteFile"(): $File
public "mkdir"(): boolean
public "getCanonicalFile"(): $File
public "getParentFile"(): $File
public "mkdirs"(): boolean
public "setWritable"(arg0: boolean): boolean
public "setWritable"(arg0: boolean, arg1: boolean): boolean
public "setReadable"(arg0: boolean): boolean
public "setReadable"(arg0: boolean, arg1: boolean): boolean
public "setExecutable"(arg0: boolean, arg1: boolean): boolean
public "setExecutable"(arg0: boolean): boolean
public static "listRoots"(): ($File)[]
public static "createTempFile"(arg0: string, arg1: string, arg2: $File$Type): $File
public static "createTempFile"(arg0: string, arg1: string): $File
public "canWrite"(): boolean
public "isFile"(): boolean
public "lastModified"(): long
public "deleteOnExit"(): void
public "listFiles"(arg0: $FilenameFilter$Type): ($File)[]
public "listFiles"(arg0: $FileFilter$Type): ($File)[]
public "listFiles"(): ($File)[]
public "setLastModified"(arg0: long): boolean
public "canExecute"(): boolean
public "getTotalSpace"(): long
public "getFreeSpace"(): long
public "getUsableSpace"(): long
public "toPath"(): $Path
get "name"(): string
get "hidden"(): boolean
get "absolute"(): boolean
get "parent"(): string
get "path"(): string
get "absolutePath"(): string
get "canonicalPath"(): string
get "directory"(): boolean
get "absoluteFile"(): $File
get "canonicalFile"(): $File
get "parentFile"(): $File
set "writable"(value: boolean)
set "readable"(value: boolean)
set "executable"(value: boolean)
get "file"(): boolean
get "totalSpace"(): long
get "freeSpace"(): long
get "usableSpace"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $File$Type = ($Path$Type) | ($File);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $File_ = $File$Type;
}}
declare module "packages/java/io/$DataOutputStream" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$FilterOutputStream, $FilterOutputStream$Type} from "packages/java/io/$FilterOutputStream"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataOutputStream extends $FilterOutputStream implements $DataOutput {

constructor(arg0: $OutputStream$Type)

public "flush"(): void
public "size"(): integer
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "writeInt"(arg0: integer): void
public "writeUTF"(arg0: string): void
public "writeBytes"(arg0: string): void
public "writeChar"(arg0: integer): void
public "writeFloat"(arg0: float): void
public "writeLong"(arg0: long): void
public "writeBoolean"(arg0: boolean): void
public "writeByte"(arg0: integer): void
public "writeShort"(arg0: integer): void
public "writeDouble"(arg0: double): void
public "writeChars"(arg0: string): void
public "write"(arg0: (byte)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataOutputStream$Type = ($DataOutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataOutputStream_ = $DataOutputStream$Type;
}}
declare module "packages/java/io/$FilterInputStream" {
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterInputStream extends $InputStream {


public "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "read"(arg0: (byte)[]): integer
public "read"(): integer
public "close"(): void
public "mark"(arg0: integer): void
public "skip"(arg0: long): long
public "available"(): integer
public "markSupported"(): boolean
public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterInputStream$Type = ($FilterInputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterInputStream_ = $FilterInputStream$Type;
}}
declare module "packages/java/io/$Writer" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Appendable, $Appendable$Type} from "packages/java/lang/$Appendable"
import {$Flushable, $Flushable$Type} from "packages/java/io/$Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Writer implements $Appendable, $Closeable, $Flushable {


public "append"(arg0: charseq, arg1: integer, arg2: integer): $Writer
public "append"(arg0: character): $Writer
public "flush"(): void
public "write"(arg0: string, arg1: integer, arg2: integer): void
public "write"(arg0: integer): void
public "write"(arg0: string): void
public "write"(arg0: (character)[], arg1: integer, arg2: integer): void
public "write"(arg0: (character)[]): void
public "close"(): void
public static "nullWriter"(): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Writer$Type = ($Writer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Writer_ = $Writer$Type;
}}
declare module "packages/java/io/$DataInputStream" {
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$FilterInputStream, $FilterInputStream$Type} from "packages/java/io/$FilterInputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataInputStream extends $FilterInputStream implements $DataInput {

constructor(arg0: $InputStream$Type)

public "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "read"(arg0: (byte)[]): integer
/**
 * 
 * @deprecated
 */
public "readLine"(): string
public "readInt"(): integer
public static "readUTF"(arg0: $DataInput$Type): string
public "readUTF"(): string
public "readChar"(): character
public "readFloat"(): float
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readByte"(): byte
public "readShort"(): short
public "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "readFully"(arg0: (byte)[]): void
public "skipBytes"(arg0: integer): integer
public "readBoolean"(): boolean
public "readUnsignedByte"(): integer
public "readDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataInputStream$Type = ($DataInputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataInputStream_ = $DataInputStream$Type;
}}
declare module "packages/java/io/$Reader" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$Readable, $Readable$Type} from "packages/java/lang/$Readable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reader implements $Readable, $Closeable {


public "read"(arg0: (character)[]): integer
public "read"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "read"(arg0: $CharBuffer$Type): integer
public "read"(): integer
public "close"(): void
public "mark"(arg0: integer): void
public "transferTo"(arg0: $Writer$Type): long
public "skip"(arg0: long): long
public "markSupported"(): boolean
public "reset"(): void
public "ready"(): boolean
public static "nullReader"(): $Reader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reader$Type = ($Reader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reader_ = $Reader$Type;
}}
declare module "packages/java/io/$ObjectInput" {
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectInput extends $DataInput, $AutoCloseable {

 "readObject"(): any
 "read"(arg0: (byte)[], arg1: integer, arg2: integer): integer
 "read"(arg0: (byte)[]): integer
 "read"(): integer
 "close"(): void
 "skip"(arg0: long): long
 "available"(): integer
 "readLine"(): string
 "readInt"(): integer
 "readUTF"(): string
 "readChar"(): character
 "readFloat"(): float
 "readUnsignedShort"(): integer
 "readLong"(): long
 "readByte"(): byte
 "readShort"(): short
 "readFully"(arg0: (byte)[]): void
 "readFully"(arg0: (byte)[], arg1: integer, arg2: integer): void
 "skipBytes"(arg0: integer): integer
 "readBoolean"(): boolean
 "readUnsignedByte"(): integer
 "readDouble"(): double
}

export namespace $ObjectInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectInput$Type = ($ObjectInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectInput_ = $ObjectInput$Type;
}}
declare module "packages/java/io/$BufferedReader" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedReader extends $Reader {

constructor(arg0: $Reader$Type, arg1: integer)
constructor(arg0: $Reader$Type)

public "lines"(): $Stream<(string)>
public "read"(): integer
public "read"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "readLine"(): string
public "close"(): void
public "mark"(arg0: integer): void
public "skip"(arg0: long): long
public "markSupported"(): boolean
public "reset"(): void
public "ready"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedReader$Type = ($BufferedReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedReader_ = $BufferedReader$Type;
}}
