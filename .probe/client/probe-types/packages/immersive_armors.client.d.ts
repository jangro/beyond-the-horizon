declare module "packages/immersive_armors/client/render/entity/piece/$Piece" {
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Piece {

constructor()

public "colored"(): $Piece
public "isColored"(): boolean
public "glowing"(): $Piece
public "translucent"(): $Piece
public "glint"(): $Piece
public "isGlowing"(): boolean
public "texture"(texture: string): $Piece
public "render"<T extends $LivingEntity, A extends $HumanoidModel<(T)>>(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: T, arg4: $ItemStack$Type, arg5: float, arg6: $EquipmentSlot$Type, arg7: A): void
public "getTexture"(): string
public "hasGlint"(): boolean
public "isTranslucent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Piece$Type = ($Piece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Piece_ = $Piece$Type;
}}
