declare module "packages/me/paulf/fairylights/server/collision/$Collidable" {
import {$Intersection, $Intersection$Type} from "packages/me/paulf/fairylights/server/collision/$Intersection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $Collidable {

 "intersect"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Intersection

(): $Collidable
}

export namespace $Collidable {
function empty(): $Collidable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collidable$Type = ($Collidable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collidable_ = $Collidable$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$TinselConnectionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConnectionItem, $ConnectionItem$Type} from "packages/me/paulf/fairylights/server/item/$ConnectionItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TinselConnectionItem extends $ConnectionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TinselConnectionItem$Type = ($TinselConnectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TinselConnectionItem_ = $TinselConnectionItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$LightVariant" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LightBehavior, $LightBehavior$Type} from "packages/me/paulf/fairylights/server/feature/light/$LightBehavior"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $LightVariant<T extends $LightBehavior> {

 "getBounds"(): $AABB
 "parallelsCord"(): boolean
 "getSpacing"(): float
 "getFloorOffset"(): double
 "isOrientable"(): boolean
 "createBehavior"(arg0: $ItemStack$Type): T
}

export namespace $LightVariant {
function get(arg0: $ICapabilityProvider$Type): $LazyOptional<($LightVariant<(any)>)>
function provider(arg0: $LightVariant$Type<(any)>): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightVariant$Type<T> = ($LightVariant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightVariant_<T> = $LightVariant$Type<(T)>;
}}
declare module "packages/me/paulf/fairylights/server/connection/$ConnectionType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fastener, $Fastener$Type} from "packages/me/paulf/fairylights/server/fastener/$Fastener"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ConnectionType$Builder, $ConnectionType$Builder$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Connection, $Connection$Type} from "packages/me/paulf/fairylights/server/connection/$Connection"

export class $ConnectionType<T extends $Connection> {

constructor(arg0: $ConnectionType$Builder$Type<(T)>)

public "create"(arg0: $Level$Type, arg1: $Fastener$Type<(any)>, arg2: $UUID$Type): T
public "getItem"(): $Item
get "item"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionType$Type<T> = ($ConnectionType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionType_<T> = $ConnectionType$Type<(T)>;
}}
declare module "packages/me/paulf/fairylights/server/item/$PennantBuntingConnectionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ConnectionItem, $ConnectionItem$Type} from "packages/me/paulf/fairylights/server/item/$ConnectionItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PennantBuntingConnectionItem extends $ConnectionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PennantBuntingConnectionItem$Type = ($PennantBuntingConnectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PennantBuntingConnectionItem_ = $PennantBuntingConnectionItem$Type;
}}
declare module "packages/me/paulf/fairylights/util/$Curve$SegmentView" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $Curve$SegmentView {

 "getLength"(): float
 "getIndex"(): integer
 "getY"(arg0: float): float
 "getPitch"(): float
 "getYaw"(): float
 "getPos"(): $Vec3
 "getZ"(arg0: float): float
 "getX"(arg0: float): float
}

export namespace $Curve$SegmentView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Curve$SegmentView$Type = ($Curve$SegmentView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Curve$SegmentView_ = $Curve$SegmentView$Type;
}}
declare module "packages/me/paulf/fairylights/server/fastener/accessor/$FastenerAccessor" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fastener, $Fastener$Type} from "packages/me/paulf/fairylights/server/fastener/$Fastener"
import {$FastenerType, $FastenerType$Type} from "packages/me/paulf/fairylights/server/fastener/$FastenerType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $FastenerAccessor {

 "get"(arg0: $Level$Type): $LazyOptional<($Fastener<(any)>)>
 "get"(arg0: $Level$Type, arg1: boolean): $LazyOptional<($Fastener<(any)>)>
 "getType"(): $FastenerType
 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(): $CompoundTag
 "isGone"(arg0: $Level$Type): boolean
}

export namespace $FastenerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastenerAccessor$Type = ($FastenerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastenerAccessor_ = $FastenerAccessor$Type;
}}
declare module "packages/me/paulf/fairylights/server/feature/light/$Light" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$HangingFeature, $HangingFeature$Type} from "packages/me/paulf/fairylights/server/feature/$HangingFeature"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LightBehavior, $LightBehavior$Type} from "packages/me/paulf/fairylights/server/feature/light/$LightBehavior"
import {$LightVariant, $LightVariant$Type} from "packages/me/paulf/fairylights/server/item/$LightVariant"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $Light<T extends $LightBehavior> extends $HangingFeature {

constructor(arg0: integer, arg1: $Vec3$Type, arg2: float, arg3: float, arg4: $ItemStack$Type, arg5: $LightVariant$Type<(T)>, arg6: float)

public "stopSwaying"(): void
public "startSwaying"(arg0: boolean): void
public "getBounds"(): $AABB
public "getItem"(): $ItemStack
public "getVariant"(): $LightVariant<(T)>
public "power"(arg0: boolean, arg1: boolean): void
public "getBehavior"(): T
public "tick"(arg0: $Level$Type, arg1: $Vec3$Type): void
public "jingle"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer): void
public "jingle"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer, arg3: $SoundEvent$Type, ...arg4: ($ParticleOptions$Type)[]): void
public "jingle"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer, arg3: $ParticleOptions$Type): void
public "parallelsCord"(): boolean
public "isPowered"(): boolean
get "bounds"(): $AABB
get "item"(): $ItemStack
get "variant"(): $LightVariant<(T)>
get "behavior"(): T
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Light$Type<T> = ($Light<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Light_<T> = $Light$Type<(T)>;
}}
declare module "packages/me/paulf/fairylights/server/collision/$CollidableList" {
import {$Intersection, $Intersection$Type} from "packages/me/paulf/fairylights/server/collision/$Intersection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Collidable, $Collidable$Type} from "packages/me/paulf/fairylights/server/collision/$Collidable"

export class $CollidableList implements $Collidable {


public "intersect"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Intersection
public static "empty"(): $Collidable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollidableList$Type = ($CollidableList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollidableList_ = $CollidableList$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$LetterBuntingConnectionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ConnectionItem, $ConnectionItem$Type} from "packages/me/paulf/fairylights/server/item/$ConnectionItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LetterBuntingConnectionItem extends $ConnectionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LetterBuntingConnectionItem$Type = ($LetterBuntingConnectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LetterBuntingConnectionItem_ = $LetterBuntingConnectionItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/connection/$ConnectionType$Factory" {
import {$Fastener, $Fastener$Type} from "packages/me/paulf/fairylights/server/fastener/$Fastener"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ConnectionType, $ConnectionType$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType"
import {$Connection, $Connection$Type} from "packages/me/paulf/fairylights/server/connection/$Connection"

export interface $ConnectionType$Factory<T extends $Connection> {

 "create"(arg0: $ConnectionType$Type<(T)>, arg1: $Level$Type, arg2: $Fastener$Type<(any)>, arg3: $UUID$Type): T

(arg0: $ConnectionType$Type<(T)>, arg1: $Level$Type, arg2: $Fastener$Type<(any)>, arg3: $UUID$Type): T
}

export namespace $ConnectionType$Factory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionType$Factory$Type<T> = ($ConnectionType$Factory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionType$Factory_<T> = $ConnectionType$Factory$Type<(T)>;
}}
declare module "packages/me/paulf/fairylights/server/feature/$Feature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Feature {

 "getId"(): integer

(): integer
}

export namespace $Feature {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Feature$Type = ($Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Feature_ = $Feature$Type;
}}
declare module "packages/me/paulf/fairylights/server/connection/$Connection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Intersection, $Intersection$Type} from "packages/me/paulf/fairylights/server/collision/$Intersection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Collidable, $Collidable$Type} from "packages/me/paulf/fairylights/server/collision/$Collidable"
import {$ConnectionType, $ConnectionType$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType"
import {$Fastener, $Fastener$Type} from "packages/me/paulf/fairylights/server/fastener/$Fastener"
import {$Curve, $Curve$Type} from "packages/me/paulf/fairylights/util/$Curve"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerAction, $PlayerAction$Type} from "packages/me/paulf/fairylights/server/connection/$PlayerAction"
import {$FastenerAccessor, $FastenerAccessor$Type} from "packages/me/paulf/fairylights/server/fastener/accessor/$FastenerAccessor"
import {$CollidableList$Builder, $CollidableList$Builder$Type} from "packages/me/paulf/fairylights/server/collision/$CollidableList$Builder"
import {$FeatureType, $FeatureType$Type} from "packages/me/paulf/fairylights/server/feature/$FeatureType"
import {$NBTSerializable, $NBTSerializable$Type} from "packages/me/paulf/fairylights/util/$NBTSerializable"

export class $Connection implements $NBTSerializable {
static readonly "MAX_LENGTH": integer
static readonly "PULL_RANGE": double
static readonly "CORD_FEATURE": $FeatureType

constructor(arg0: $ConnectionType$Type<(any)>, arg1: $Level$Type, arg2: $Fastener$Type<(any)>, arg3: $UUID$Type)

public "remove"(): void
public "update"(arg0: $Vec3$Type): boolean
public "matches"(arg0: $ItemStack$Type): boolean
public "getType"(): $ConnectionType<(any)>
public "getDestination"(): $FastenerAccessor
public "interact"(arg0: $Player$Type, arg1: $Vec3$Type, arg2: $FeatureType$Type, arg3: integer, arg4: $ItemStack$Type, arg5: $InteractionHand$Type): boolean
public "processClientAction"(arg0: $Player$Type, arg1: $PlayerAction$Type, arg2: $Intersection$Type): void
public "disconnect"(arg0: $Player$Type, arg1: $Vec3$Type): void
public "isDynamic"(): boolean
public "getItemStack"(): $ItemStack
public "deserialize"(arg0: $Fastener$Type<(any)>, arg1: $CompoundTag$Type, arg2: boolean): void
public "deserialize"(arg0: $CompoundTag$Type): void
public "serialize"(): $CompoundTag
public "setDestination"(arg0: $Fastener$Type<(any)>): void
public "getUUID"(): $UUID
public "getFastener"(): $Fastener<(any)>
public "isModifiable"(arg0: $Player$Type): boolean
public "isRemoved"(): boolean
public "noDrop"(): void
public "getCatenary"(): $Curve
public "computeCatenary"(): void
public "serializeLogic"(): $CompoundTag
public "getWorld"(): $Level
public "getRadius"(): float
public "getCollision"(): $Collidable
public "shouldDrop"(): boolean
public "getPrevCatenary"(): $Curve
public "setWorld"(arg0: $Level$Type): void
public "setDrop"(): void
public "isDestination"(arg0: $FastenerAccessor$Type): boolean
public "addCollision"(arg0: $CollidableList$Builder$Type, arg1: $Vec3$Type): void
public "onConnect"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "reconnect"(arg0: $Fastener$Type<(any)>): boolean
public "deserializeLogic"(arg0: $CompoundTag$Type): void
get "type"(): $ConnectionType<(any)>
get "destination"(): $FastenerAccessor
get "dynamic"(): boolean
get "itemStack"(): $ItemStack
set "destination"(value: $Fastener$Type<(any)>)
get "uUID"(): $UUID
get "fastener"(): $Fastener<(any)>
get "removed"(): boolean
get "catenary"(): $Curve
get "world"(): $Level
get "radius"(): float
get "collision"(): $Collidable
get "prevCatenary"(): $Curve
set "world"(value: $Level$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$Type = ($Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection_ = $Connection$Type;
}}
declare module "packages/me/paulf/fairylights/server/connection/$PlayerAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerAction extends $Enum<($PlayerAction)> {
static readonly "ATTACK": $PlayerAction
static readonly "INTERACT": $PlayerAction


public static "values"(): ($PlayerAction)[]
public static "valueOf"(arg0: string): $PlayerAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAction$Type = (("attack") | ("interact")) | ($PlayerAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAction_ = $PlayerAction$Type;
}}
declare module "packages/me/paulf/fairylights/server/connection/$ConnectionType$Builder" {
import {$ConnectionType$Factory, $ConnectionType$Factory$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType$Factory"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConnectionType, $ConnectionType$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType"
import {$Connection, $Connection$Type} from "packages/me/paulf/fairylights/server/connection/$Connection"

export class $ConnectionType$Builder<T extends $Connection> {


public "build"(): $ConnectionType<(T)>
public static "create"<T extends $Connection>(arg0: $ConnectionType$Factory$Type<(T)>): $ConnectionType$Builder<(T)>
public "item"(arg0: $Supplier$Type<(any)>): $ConnectionType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionType$Builder$Type<T> = ($ConnectionType$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionType$Builder_<T> = $ConnectionType$Builder$Type<(T)>;
}}
declare module "packages/me/paulf/fairylights/server/block/$LightBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightVariant, $LightVariant$Type} from "packages/me/paulf/fairylights/server/item/$LightVariant"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$FaceAttachedHorizontalDirectionalBlock"

export class $LightBlock extends $FaceAttachedHorizontalDirectionalBlock implements $EntityBlock {
static readonly "LIT": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $LightVariant$Type<(any)>)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVariant"(): $LightVariant<(any)>
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "variant"(): $LightVariant<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightBlock$Type = ($LightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightBlock_ = $LightBlock$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$GarlandConnectionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConnectionItem, $ConnectionItem$Type} from "packages/me/paulf/fairylights/server/item/$ConnectionItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GarlandConnectionItem extends $ConnectionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GarlandConnectionItem$Type = ($GarlandConnectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GarlandConnectionItem_ = $GarlandConnectionItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$PennantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PennantItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PennantItem$Type = ($PennantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PennantItem_ = $PennantItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$LightItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LightBlock, $LightBlock$Type} from "packages/me/paulf/fairylights/server/block/$LightBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LightItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $LightBlock$Type, arg1: $Item$Properties$Type)

public "getBlock"(): $LightBlock
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "block"(): $LightBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightItem$Type = ($LightItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightItem_ = $LightItem$Type;
}}
declare module "packages/me/paulf/fairylights/util/$Curve$SegmentIterator" {
import {$Curve$SegmentView, $Curve$SegmentView$Type} from "packages/me/paulf/fairylights/util/$Curve$SegmentView"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $Curve$SegmentIterator extends $Curve$SegmentView {

 "hasNext"(): boolean
 "next"(): boolean
 "getLength"(): float
 "getIndex"(): integer
 "getY"(arg0: float): float
 "getPitch"(): float
 "getYaw"(): float
 "getPos"(): $Vec3
 "getZ"(arg0: float): float
 "getX"(arg0: float): float
}

export namespace $Curve$SegmentIterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Curve$SegmentIterator$Type = ($Curve$SegmentIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Curve$SegmentIterator_ = $Curve$SegmentIterator$Type;
}}
declare module "packages/me/paulf/fairylights/server/fastener/$FastenerType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FastenerAccessor, $FastenerAccessor$Type} from "packages/me/paulf/fairylights/server/fastener/accessor/$FastenerAccessor"

export class $FastenerType extends $Enum<($FastenerType)> {
static readonly "BLOCK": $FastenerType
static readonly "FENCE": $FastenerType
static readonly "PLAYER": $FastenerType


public static "values"(): ($FastenerType)[]
public static "valueOf"(arg0: string): $FastenerType
public static "deserialize"(arg0: $CompoundTag$Type): $FastenerAccessor
public static "serialize"(arg0: $FastenerAccessor$Type): $CompoundTag
public "createAccessor"(): $FastenerAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastenerType$Type = (("block") | ("fence") | ("player")) | ($FastenerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastenerType_ = $FastenerType$Type;
}}
declare module "packages/me/paulf/fairylights/util/$Curve" {
import {$Curve$SegmentIterator, $Curve$SegmentIterator$Type} from "packages/me/paulf/fairylights/util/$Curve$SegmentIterator"
import {$Curve$PointVisitor, $Curve$PointVisitor$Type} from "packages/me/paulf/fairylights/util/$Curve$PointVisitor"

export interface $Curve {

 "getDx"(arg0: integer): float
 "getDz"(arg0: integer): float
 "getDy"(arg0: integer): float
 "getLength"(): float
 "iterator"(arg0: boolean): $Curve$SegmentIterator
 "iterator"(): $Curve$SegmentIterator
 "getCount"(): integer
 "getY"(): float
 "getY"(arg0: integer): float
 "getY"(arg0: integer, arg1: float): float
 "lerp"(arg0: $Curve$Type, arg1: float): $Curve
 "visitPoints"(arg0: float, arg1: boolean, arg2: $Curve$PointVisitor$Type): void
 "getZ"(arg0: integer, arg1: float): float
 "getZ"(arg0: integer): float
 "getZ"(): float
 "getX"(arg0: integer): float
 "getX"(arg0: integer, arg1: float): float
 "getX"(): float
}

export namespace $Curve {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Curve$Type = ($Curve);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Curve_ = $Curve$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$HangingLightsConnectionItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringType, $StringType$Type} from "packages/me/paulf/fairylights/server/string/$StringType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ConnectionItem, $ConnectionItem$Type} from "packages/me/paulf/fairylights/server/item/$ConnectionItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HangingLightsConnectionItem extends $ConnectionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getString"(arg0: $CompoundTag$Type): $StringType
public static "setString"(arg0: $CompoundTag$Type, arg1: $StringType$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingLightsConnectionItem$Type = ($HangingLightsConnectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingLightsConnectionItem_ = $HangingLightsConnectionItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/collision/$Intersection" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$FeatureType, $FeatureType$Type} from "packages/me/paulf/fairylights/server/feature/$FeatureType"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Feature, $Feature$Type} from "packages/me/paulf/fairylights/server/feature/$Feature"

export class $Intersection {

constructor(arg0: $Vec3$Type, arg1: $AABB$Type, arg2: $FeatureType$Type, arg3: $Feature$Type)

public "getHitBox"(): $AABB
public "getResult"(): $Vec3
public "getFeatureType"(): $FeatureType
public "getFeature"(): $Feature
get "hitBox"(): $AABB
get "result"(): $Vec3
get "featureType"(): $FeatureType
get "feature"(): $Feature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Intersection$Type = ($Intersection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Intersection_ = $Intersection$Type;
}}
declare module "packages/me/paulf/fairylights/server/item/$ConnectionItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ConnectionType, $ConnectionType$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fastener, $Fastener$Type} from "packages/me/paulf/fairylights/server/fastener/$Fastener"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConnectionItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $RegistryObject$Type<(any)>)

public "connect"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $Fastener$Type<(any)>): void
public "connect"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $Fastener$Type<(any)>, arg4: boolean): void
public "getConnectionType"(): $ConnectionType<(any)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public static "isFence"(arg0: $BlockState$Type): boolean
get "connectionType"(): $ConnectionType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionItem$Type = ($ConnectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionItem_ = $ConnectionItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/feature/light/$LightBehavior" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Light, $Light$Type} from "packages/me/paulf/fairylights/server/feature/light/$Light"

export interface $LightBehavior {

 "power"(arg0: boolean, arg1: $Light$Type<(any)>): void
 "power"(arg0: boolean, arg1: boolean, arg2: $Light$Type<(any)>): void
 "tick"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Light$Type<(any)>): void
 "animateTick"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Light$Type<(any)>): void
}

export namespace $LightBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightBehavior$Type = ($LightBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightBehavior_ = $LightBehavior$Type;
}}
declare module "packages/me/paulf/fairylights/server/block/$FastenerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $FastenerBlock extends $DirectionalBlock implements $EntityBlock {
static readonly "TRIGGERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getOffset"(arg0: $Direction$Type, arg1: float): $Vec3
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getFastenerOffset"(arg0: $Direction$Type, arg1: float): $Vec3
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastenerBlock$Type = ($FastenerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastenerBlock_ = $FastenerBlock$Type;
}}
declare module "packages/me/paulf/fairylights/util/$NBTSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $NBTSerializable {

 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(): $CompoundTag
}

export namespace $NBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTSerializable$Type = ($NBTSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTSerializable_ = $NBTSerializable$Type;
}}
declare module "packages/me/paulf/fairylights/server/string/$StringType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StringType {

constructor(arg0: integer)

public "getColor"(): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringType$Type = ($StringType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringType_ = $StringType$Type;
}}
declare module "packages/me/paulf/fairylights/server/feature/$FeatureType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FeatureType {
static readonly "DEFAULT": $FeatureType


public static "register"(arg0: string): $FeatureType
public "getId"(): integer
public static "fromId"(arg0: integer): $FeatureType
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureType$Type = ($FeatureType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatureType_ = $FeatureType$Type;
}}
declare module "packages/me/paulf/fairylights/util/$Curve$PointVisitor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Curve$PointVisitor {

 "visit"(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void

(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
}

export namespace $Curve$PointVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Curve$PointVisitor$Type = ($Curve$PointVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Curve$PointVisitor_ = $Curve$PointVisitor$Type;
}}
declare module "packages/me/paulf/fairylights/server/fastener/$Fastener" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$ConnectionType, $ConnectionType$Type} from "packages/me/paulf/fairylights/server/connection/$ConnectionType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FastenerAccessor, $FastenerAccessor$Type} from "packages/me/paulf/fairylights/server/fastener/accessor/$FastenerAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Connection, $Connection$Type} from "packages/me/paulf/fairylights/server/connection/$Connection"

export interface $Fastener<F extends $FastenerAccessor> extends $ICapabilitySerializable<($CompoundTag)> {

 "remove"(): void
 "get"(arg0: $UUID$Type): $Optional<($Connection)>
 "update"(): boolean
 "getBounds"(): $AABB
 "connect"(arg0: $Level$Type, arg1: $Fastener$Type<(any)>, arg2: $ConnectionType$Type<(any)>, arg3: $CompoundTag$Type, arg4: boolean): $Connection
 "getPos"(): $BlockPos
 "setDirty"(): void
 "getConnectionTo"(arg0: $FastenerAccessor$Type): $Connection
 "hasNoConnections"(): boolean
 "getOwnConnections"(): $List<($Connection)>
 "hasConnectionWith"(arg0: $Fastener$Type<(any)>): boolean
 "createAccessor"(): F
 "getFacing"(): $Direction
 "getFirstConnection"(): $Optional<($Connection)>
 "isMoving"(): boolean
 "createOutgoingConnection"(arg0: $Level$Type, arg1: $UUID$Type, arg2: $Fastener$Type<(any)>, arg3: $ConnectionType$Type<(any)>, arg4: $CompoundTag$Type, arg5: boolean): $Connection
 "createIncomingConnection"(arg0: $Level$Type, arg1: $UUID$Type, arg2: $Fastener$Type<(any)>, arg3: $ConnectionType$Type<(any)>): void
 "getWorld"(): $Level
 "setWorld"(arg0: $Level$Type): void
 "removeConnection"(arg0: $Connection$Type): boolean
 "removeConnection"(arg0: $UUID$Type): boolean
 "reconnect"(arg0: $Level$Type, arg1: $Connection$Type, arg2: $Fastener$Type<(any)>): boolean
 "getConnectionPoint"(): $Vec3
 "resistSnap"(arg0: $Vec3$Type): void
 "getAllConnections"(): $List<($Connection)>
 "dropItems"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $Fastener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fastener$Type<F> = ($Fastener<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fastener_<F> = $Fastener$Type<(F)>;
}}
declare module "packages/me/paulf/fairylights/server/item/$ColorLightItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LightItem, $LightItem$Type} from "packages/me/paulf/fairylights/server/item/$LightItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LightBlock, $LightBlock$Type} from "packages/me/paulf/fairylights/server/block/$LightBlock"

export class $ColorLightItem extends $LightItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $LightBlock$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorLightItem$Type = ($ColorLightItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorLightItem_ = $ColorLightItem$Type;
}}
declare module "packages/me/paulf/fairylights/server/collision/$CollidableList$Builder" {
import {$CollidableList, $CollidableList$Type} from "packages/me/paulf/fairylights/server/collision/$CollidableList"
import {$Collidable, $Collidable$Type} from "packages/me/paulf/fairylights/server/collision/$Collidable"

export class $CollidableList$Builder {

constructor()

public "build"(): $CollidableList
public "add"(arg0: $Collidable$Type): $CollidableList$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollidableList$Builder$Type = ($CollidableList$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollidableList$Builder_ = $CollidableList$Builder$Type;
}}
declare module "packages/me/paulf/fairylights/server/feature/$HangingFeature" {
import {$Fastener, $Fastener$Type} from "packages/me/paulf/fairylights/server/fastener/$Fastener"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Feature, $Feature$Type} from "packages/me/paulf/fairylights/server/feature/$Feature"

export class $HangingFeature implements $Feature {

constructor(arg0: integer, arg1: $Vec3$Type, arg2: float, arg3: float, arg4: float, arg5: float)

public "getBounds"(): $AABB
public "set"(arg0: $Vec3$Type, arg1: float, arg2: float): void
public "getId"(): integer
public "getRoll"(arg0: float): float
public "getRoll"(): float
public "getDescent"(): float
public "getPitch"(arg0: float): float
public "getPitch"(): float
public "getYaw"(): float
public "getYaw"(arg0: float): float
public "tick"(arg0: $Level$Type): void
public "getPoint"(): $Vec3
public "getPoint"(arg0: float): $Vec3
public "parallelsCord"(): boolean
public "getAbsolutePoint"(arg0: $Vec3$Type): $Vec3
public "getAbsolutePoint"(arg0: $Fastener$Type<(any)>): $Vec3
public "getTransformedPoint"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Vec3
get "bounds"(): $AABB
get "id"(): integer
get "roll"(): float
get "descent"(): float
get "pitch"(): float
get "yaw"(): float
get "point"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingFeature$Type = ($HangingFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingFeature_ = $HangingFeature$Type;
}}
