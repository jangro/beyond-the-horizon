// priority: 9001

/**
 * @file Global Functions for use in other scripts.
 */

const $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext')
const $ProjectileUtil = Java.loadClass('net.minecraft.world.entity.projectile.ProjectileUtil')
const $UUIDUtil = Java.loadClass("net.minecraft.core.UUIDUtil")

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param {Internal.LivingEntity} entity
 * @param {Internal.ServerLevel} level
 * @param {number} distance
 * @returns {Object}
 * Returns the position of the block and/or entity that the entity is looking at.
 * Ignores non-solid blocks and spectators.
 */
global.advancedRayTrace = (entity, level, distance) => {
    let eyePos = entity.eyePosition;
    let viewVec = entity.getViewVector(1);
    let endPos = eyePos.add(viewVec.x() * distance, viewVec.y() * distance, viewVec.z() * distance);
    let aabb = AABB.of(eyePos.x(), eyePos.y(), eyePos.z(), endPos.x(), endPos.y(), endPos.z());

    let hitResult = $ProjectileUtil.getEntityHitResult(level, entity, eyePos, endPos, aabb, (e) => {
        return !e.isSpectator()
    }, 0);
    let target = hitResult != null ? hitResult.getEntity() : null;
    if (target != null) {
        let target_vec = new Vec3d(target.getX(), target.getY(), target.getZ());
        return target_vec.subtract(viewVec);
    }

    let clip = new $ClipContext(
        entity.getEyePosition(1),
        entity.getEyePosition(1).add(entity.getLookAngle().scale(distance)),
        'collider', 'none',
        entity
    );
    let hit = level.clip(clip);
    return new Vec3d(hit.getBlockPos().x, hit.getBlockPos().y, hit.getBlockPos().z);
}

// The functions for certain methods with callbacks like onCast can go in a global variable if you want it to be reloadable by using /kubejs reload startup_scripts
// It is recommended to use ProbeJS for this, to see all the available methods and properties in the context object.

// Terminus Singularity spell (Black Hole)
global.terminus_singularity = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
  let /** @type {Internal.ServerPlayer} */ player = ctx.entity
  let pos = global.advancedRayTrace(player, player.getLevel(), 32)
  if (pos == null) {
    return;
  }

  let uuid_array = $UUIDUtil.uuidToIntArray(player.uuid);
  const i0 = uuid_array[0];
  const i1 = uuid_array[1];
  const i2 = uuid_array[2];
  const i3 = uuid_array[3];
  const radius = 12;

  //console.log(`Summoning black hole at ${pos.x()}, ${pos.y()}, ${pos.z()}`);
  ctx.level.server.runCommandSilent(`/execute at ${player.uuid} run summon irons_spellbooks:black_hole ${pos.x()} ${pos.y()} ${pos.z()} {"Owner": [I; ${i0},${i1},${i2},${i3}],"Radius": ${radius}}`);
};

// Terminus Space Fold spell (Teleport)
global.terminus_space_fold = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
  let /** @type {Internal.ServerPlayer} */ player = ctx.entity
  let pos = global.advancedRayTrace(player, player.getLevel(), 64)
  if (pos == null) {
    // This should never happen since empty air is a valid target.
    return;
  }
  // Save our initial target location to a separate variable.
  const target_block_pos = new Vec3d(pos.x(), pos.y(), pos.z());

  // Calculate vector from player to target position.
  const eye_pos = player.eyePosition;
  let d_vec = pos.subtract(eye_pos);

  // Get the view vector of the player.
  const viewVec = player.getViewVector(1);

  // Distance from player to target block.
  let distance = d_vec.length();

  // If target block is not air, scan along the view vector until we find two vertical air blocks. Air means our teleport target is mid air and did not hit an entity or a block.
  if (ctx.level.getBlockState(pos).getBlock().id != 'minecraft:air') {
    let found_good_pos = false;
    while (!found_good_pos) {
      distance += 1;
      if (distance > 64) {
        // If we have scanned 64 blocks and not found a good position, restore pos to the target block and break.
        pos = target_block_pos;
        break;
      }
      pos = pos.add(viewVec);
      let pos_above = pos.add(0, 1, 0);
      // console.log(`Distance ${distance}, Scanning ${Math.floor(pos.x())}, ${Math.floor(pos.y())}, ${Math.floor(pos.z())}, ${ctx.level.getBlockState(pos).getBlock().id}`);
      found_good_pos = ctx.level.getBlockState(pos).getBlock().id == 'minecraft:air' && ctx.level.getBlockState(pos_above).getBlock().id == 'minecraft:air';
    }
    // Move half a block in the view vector direction to get to the first air block.
    pos = pos.add(0.5 * viewVec);
  }

  // Adjust pos to be at feet level.
  let pos_below = pos.subtract(0, 1, 0);
  if (ctx.level.getBlockState(pos_below).getBlock().id == 'minecraft:air') {
    pos = pos_below;
  } else {
    let pos_above = pos.add(0, 1, 0);
    if (ctx.level.getBlockState(pos).getBlock().id != 'minecraft:air' && ctx.level.getBlockState(pos_above).getBlock().id == 'minecraft:air') {
      pos = pos_above;
    }
  }
  // console.log(`Teleport to ${pos.x()}, ${pos.y()}, ${pos.z()}`);
  // /execute at @p run particle minecraft:reverse_portal ~ ~-1 ~ 0.2 0.4 0.2 0.01 100
  ctx.level.server.runCommandSilent(`/execute at ${player.uuid} run particle minecraft:portal ${eye_pos.x()} ${eye_pos.y()-1} ${eye_pos.z()} 0.2 0.8 0.2 0.005 100`);
  ctx.level.server.runCommandSilent(`/execute at ${player.uuid} run tp ${player.uuid} ${pos.x()} ${pos.y()} ${pos.z()}`);
};
