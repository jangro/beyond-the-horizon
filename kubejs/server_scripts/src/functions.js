// priority: 9001

/**
 * @file Global Functions for use in other scripts.
 */

const $BigInteger = Java.loadClass('java.math.BigInteger');

const $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext');
const $ProjectileUtil = Java.loadClass('net.minecraft.world.entity.projectile.ProjectileUtil');
const $UUIDUtil = Java.loadClass('net.minecraft.core.UUIDUtil');

const Heightmap = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap');
const BlockPos = Java.loadClass('net.minecraft.core.BlockPos');

const BuildPortalEvent = Java.loadClass('com.hollingsworth.arsnouveau.common.event.timed.BuildPortalEvent');
const EventQueue = Java.loadClass('com.hollingsworth.arsnouveau.api.event.EventQueue');
const WarpScrollData = Java.loadClass('com.hollingsworth.arsnouveau.common.items.WarpScroll$WarpScrollData');
const Vec2 = Java.loadClass('net.minecraft.world.phys.Vec2');
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const Items = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries').ITEM
const Direction = Java.loadClass('net.minecraft.core.Direction');


// Load the config file
const CONFIG_PATH = 'config/bth.json';
global.config = JsonIO.read(CONFIG_PATH) || { rtp_min_distance: 2000, rtp_max_distance: 10000 };


/**
 * Gets the most significant bits of a UUID as a Java $BigInteger.
 * 
 * @param {UUID} uuid Java UUID object.
 * @returns {$BigInteger} The 64 most significant bits of the UUID.
 * 
 * @remarks A UUID string is a series of hexadecimal digits separated by the - symbol, distributed as: 8-4-4-4-12.
 * The first three numbers (16 hex digits) are the 64 most significant bits.
 */
const getMostSignificantBitsBigInt = (uuid) => {
  let uuidArray = uuid.toString().split('-');
  let hex = uuidArray[0].concat(uuidArray[1].concat(uuidArray[2]));
  return new $BigInteger(hex, 16);
};

/**
 * Gets least significant bits of a UUID as a Java $BigInteger.
 * 
 * @param {UUID} uuid Java UUID object.
 * @returns {$BigInteger} The 64 least significant bits of the UUID.
 * 
 * @remarks A UUID string is a series of hexadecimal digits separated by the - symbol, distributed as: 8-4-4-4-12.
 * The last two numbers (16 hex digits) are the 64 least significant bits.
 */
const getLeastSignificantBitsBigInt = (uuid) => {
  let uuidArray = uuid.toString().split('-');
  let hex = uuidArray[3].concat(uuidArray[4]);
  return new $BigInteger(hex, 16);
};

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
};

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
  let /** @type {Internal.ServerPlayer} */ player = ctx.entity;
  let pos = global.advancedRayTrace(player, player.getLevel(), 64);
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
  ctx.level.server.runCommandSilent(`/execute at ${player.uuid} run particle minecraft:portal ${eye_pos.x()} ${eye_pos.y() - 1} ${eye_pos.z()} 0.2 0.8 0.2 0.005 100`);
  ctx.level.server.runCommandSilent(`/execute at ${player.uuid} run tp ${player.uuid} ${pos.x()} ${pos.y()} ${pos.z()}`);
};

//
// Get location for random teleportation
//
function get_random_teleport_location(ctx) {
  if (!ctx.server) return; // Ensure it only runs on the server

  // Ensure config values are numbers and within limits
  const min_rtp_dist = Math.max(0, global.config.rtp_min_distance || 1000);
  const max_rtp_dist = Math.min(29999999, global.config.rtp_max_distance || 10000);

  let player = ctx.player;
  let world = player.level;
  let worldBorder = world.getWorldBorder();
  let borderRadius = worldBorder ? worldBorder.getSize() / 2 : 29999999;

  let maxRadius = 0.9 * Math.min(max_rtp_dist, borderRadius);
  let minRadius = Math.min(min_rtp_dist, maxRadius - 1); // Ensure min < max

  for (let i = 0; i < 10; i++) { // Try 10 times to find a valid position
    let angle = Math.random() * KMath.PI * 2;
    let distance = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);

    let x = Math.round(Math.cos(angle) * distance);
    let z = Math.round(Math.sin(angle) * distance);

    // Get the correct chunk
    let chunk = world.getChunk(x >> 4, z >> 4);

    // Get the correct Y level using chunk heightmap
    let y = chunk.getHeight(Heightmap.Types.WORLD_SURFACE, x & 15, z & 15);

    // Ensure the block is safe
    let block = world.getBlockState(new BlockPos(x, y - 1, z)).getBlock();
    if (!block.defaultBlockState().liquid()) { // Ensure it's not water or lava
      // console.log(`Returning random teleport location: ${x}, ${y}, ${z}`);
      return { x: x, y: y, z: z };
    }
  }
  console.log('Failed to find a valid teleport location after 10 tries.');
  return null; // Failed to find a valid position after 10 tries
};


//
// Ancient Cookie teleportation (old version) (called on eat from startup_scripts/src/item.js)
//
// global.ancient_cookie_eaten = (ctx) => {
//   if (!ctx.server) return; // Ensure it only runs on the server
//   let player = ctx.player;
//   let block = get_random_teleport_location(ctx);
//   if (block) {
//     player.teleportTo(block.x + 0.5, block.y + 1, block.z + 0.5);
//     const distance = Math.floor(Math.sqrt(block.x * block.x + block.z * block.z));
//     player.tell(`The cookie teleported you to ${distance} blocks away from spawn.`);
//     return;
//   }
//   player.tell('Failed to find a safe teleport location after 10 tries. You get your cookie back.');
//   player.give('bth:ancient_cookie');
// };


//
// Ancient Cookie teleportation with portal (called on eat from startup_scripts/src/item.js)
//
global.ancient_cookie_eaten = (ctx) => {
  if (!ctx.server) return; // Ensure it only runs on the server.
  const { player, level } = ctx;

  player.tell(Text.translate('item_effect.bth.ancient_cookie_eaten').gold());

  const yaw = player.yRot; // XXX: getYRot() not available server side.
  const yaw_rad = yaw * (KMath.PI / 180.0)
  // Get direction for the portal. +90 because that's what Ars Nouveau wants.
  const direction = Direction.fromYRot(yaw + 90);
  // Get location for the portal, should be 2 blocks in front of the player.
  const p = { x: player.getX(), y: player.getY(), z: player.getZ() };
  const block_pos = {
    x: Math.floor(p.x - Math.sin(yaw_rad) * 2),
    y: Math.floor(p.y - 1),
    z: Math.floor(p.z + Math.cos(yaw_rad) * 2)
  };

  // Tell the server to build the Ars portal after a short delay so chat messages are sent first.
  level.server.scheduleInTicks(1, () => {
    // Generate a random coordinate within a safe range
    const dest = get_random_teleport_location(ctx);
    console.log('BTH Ancient Cookie: Random teleport location:', dest);
    if (dest === null) {
      player.tell('Failed to find a rift. You get your cookie back, please try again.');
      player.give('bth:ancient_cookie');
      ctx.cancel();
      return;
    }

    let dest_pos = new BlockPos(dest.x, dest.y, dest.z);
    let dim = player.level.dimension.toString();
    let rotation = new Vec2(0, yaw);

    let scroll = Items.get(ResourceLocation.tryParse('ars_nouveau:stable_warp_scroll'));
    let data = WarpScrollData.get(scroll.itemStack);
    data.setData(dest_pos, dim, rotation);
    if (!data.isValid()) {
      console.log('BTH Ancient Cookie: Invalid warp scroll data!');
      ctx.cancel();
      return;
    }

    EventQueue.getServerInstance().addEvent(
      new BuildPortalEvent(level, new BlockPos(block_pos.x, block_pos.y, block_pos.z), direction, data)
    );
    // Wait 5 seconds and check if the portal was built. If not, give the item back to the player.
    let portal_pos = new BlockPos(block_pos.x, block_pos.y + 2, block_pos.z);
    level.server.scheduleInTicks(100, () => {
      if (!level.getBlockState(portal_pos).is('ars_nouveau:portal')) {
        player.tell('Failed to create a portal. You get your cookie back. Ensure that the portal is not blocked.');
        player.give('bth:ancient_cookie');
        ctx.cancel();
      }
    });
  });
};
