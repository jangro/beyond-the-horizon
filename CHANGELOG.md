# Changelog

All notable changes to this project will be documented in this file.

## [1.6.1] - 2025-08-08

### Changed

- Downgraded Rustic Engineer to fix nightvision issue
- Updated Steam'n Rails

## [1.6] - 2025-08-05

### Added

- Add blaze rod drops to desert blaze mobs
- Add Nomadic Tents mod to quest book
- Add packing tape to quest book

### Changed

- Fix resource pack not loading by default
- Hide everycomp's bbb trims due to missing textures
- Improve candle and soap recipes
- Add flower block tags to Deep Aether flowers
- Set Iron's scroll recycling chance to 100%
- Disable Better Days sleep animation due to conflict with Nomadic Tents
- Disable Botania shaders to fix rendering with Oculus shaders
- Blacklist Table Top blocks in carry on
- Reduce default Distant Horizons CPU usage

### Removed

- Remove No Hostiles Around Campfires mod due to high cpu usage

## [1.5.1] - 2025-07-27

### Removed

- Blast Travel Reborn (causes crash on server)

## [1.5] - 2025-07-27

### Added

- Mods
  - Blast Travel Reborn
  - Copper Tuff Backport
  - Diagonal Walls 
  - Happy Ghast Backport 
  - Nomadic Tents 
  - PVP Flagging 
  - Table Top Craft 

### Changed

- Made recipe for Bamboo Bee cheaper
- Made recipe for Redstone Sheep cheaper

- Mods updated
  - Applied Energistics 2
  - Balm
  - Building But Better
  - Cosmopolitan
  - Crafting Tweaks
  - Default Options
  - Distant Horizons
  - Ender IO
  - Every Compat (Wood Good)
  - FTB Library (Forge)
  - Fusion (Connected Textures)
  - GeckoLib
  - ImmediatelyFast
  - Integrated Dungeons and Structures
  - Integrated Dynamics
  - Lightman's Currency
  - Luki's Grand Capitals
  - Midnighttigger's Default Connected Textures
  - Mighty Mail
  - MineColonies
  - ModernFix
  - Moonlight Lib
  - Shoulder Surfing Reloaded
  - Simple Backups
  - Simple Voice Chat
  - Sophisticated Backpacks
  - Sophisticated Core
  - Sound Physics Remastered
  - Supplementaries
  - Visual Workbench [Forge & Fabric]
  - Waystones

## [1.4] - 2025-07-14

### Added

- Bind Alex's Caves biome treat to biome when left clicked on block due to starvation mechanics not being available
- EnderIO alloy recipes
- Made more blocks breakable by Iron's Spellbooks' spectral hammer
- Plastic waste sag mill recipe

- Mods
  - Ars Technica
  - After Life (with resource pack to remove WoW-style)
  - Cosmopolitan
  - Create Sounds of Steam
  - Diagonal Fences
  - Immersive Furniture
  - Immersive Machinery
  - Jumpy Boats
  - Noisium
  - Sophisticated Backpacks Create Integration
  - Structure Layout Optimizer
  - Tiny Alex's Caves Tweaks

### Changed

- Completely mute sounds when unfocused (added dynamic fps config file)
- Improve EnderIO and AE2 cable recipes to be less resource intensive
- Increase chances of villager mage spawning in evoker forts for villager bible quest line
- Rebalance pillager outpost generation

- Mods updated
  - Create 5 -> 6
  - and many many more...

### Removed

- Mods
  - Little Contraptions (incompatible with Create 6)

## [1.3.1] - 2025-06-14

### Changed

- Update Oculus config to use latest shaderpack

## [1.3] - 2025-06-14

### Changed

- Fix a bug where wilden dens are too common (introduced in 1.2)
- Fix a shader related bug where the client would crash when entering the end dimension
- Update shaderpacks and euphoria patcher
- Tweaks to structure placements
- Require campfires to be signalling to prevent mob spawns (this will allow mobs to spawn within buildings that generate with campfires)
- Improve tooltips for end remastered eye in the quest book

## [1.2] - 2025-05-31

### Added

- Cinder essence and nether cheese to piglin bartering.
- Elven Gateway structure (generates in meneglin and jungle biomes).
- Fungyss trade for wandering trader.
- Information pane for Supplementaries urn.
- Lunch basket to food & health quest book page.
- Many Create mixing recipes (mostly Ender IO compat).
- New custom music disc.
- Recipe to turn swamp daisies into dye.
- Runic deepslate ore distribution data.
- Several new Create milling recipes.
- Some EnderIO Alloys to IE alloy kiln.
- Various missing information and recipes to JEI.

- Mods
  - abnormals_delight-1.20.1-5.0.0
  - lootr-forge-1.20-0.7.35.91. Disabled by default. Edit config/lootr-common.toml server side to enable.

### Changed

- Allow Blazing Bamboo to have growth accelerated via AE2.
- Ancient cookie opens a portal instead of teleporting the player.
- Disable jukebox upgrade for mobs that spawn with backpack.
- Exclude Ratlantis and The Aether from peaceful surface mod.
- Fix Alchemist Cauldron and Firefly Jar not showing in JEI.
- Fix disable rooted boots artifact gamerule.
- Fix Eye of the Storm segments dropping shader bags.
- Fix default keepWallet default gamerule.
- Fix default no firetick gamerule.
- Fix sol valheim overlay collision.
- Improve Furnace / Blast Furnace / Smelter recipe compatibility.
- Limit idas ancient nether portal to ash barrens biome.
- Major overhaul to structure sets to improve structure placement and avoid collisions.
- Make cake slices, pancakes and carrat rats work with SoL Valheim.
- Make it so you can sneak-right click with lunch basket to cycle food.
- Prevent breaking a Clibano Furnace from crashing the game.
- Prevent mobs from burning near campfires.
- Replace cinder essence with blaze powder in alchemist cauldron recipe.
- Replace incubation fried egg with farmersdelight in EnderIO recipes.

- Mods updated
  - DistantHorizons-fabric-forge-2.3.2-b-1.20.1

And many more minor fixes and improvements.

## [1.1] - 2025-03-12

### Added

- Ancient Cookie - a food item that does random teleport
- Bounty Boards with two custom decrees, photography and hunting
- Bounty Hunter quest page
- Dragon nesting grounds in the Haze Mountain biome
- Make lanters wearable in curios slots and fix dynamic lighting for lantern on a stick
- Ore distribution graphs for all ores and dimensions

- Mods
  - oculus-flywheel-compat-forge1.20.1+1.1.4
  - Bountiful-6.0.4+1.20.1-forge
  - defaultoptions-forge-1.20-18.0.1
  - dynamiclightsreforged-1.20.1_v1.6.0
  - Kambrik-6.1.1+1.20.1-forge

### Changed

- Pet shop owner no longer trades emeralds for tiny coins
- Balance power conversion rates between FE, SU and compressed air
- Fix a bug where pre-set default options weren't applied on first launch
- Make bamboo spikes kills count as player kills
- Reduce FOV effect scale to 60%
- Replace EnderIO wheat flour with Create wheat flour
- Replace EnderIO powdered ores with Create crushed ores where possible
- Add glinted amethyst feature to amethyst biomes
- Enable glowstone mining for building wands
- Use DH in FEATURES mode in singleplayer (due to MC mem leak bug)
- Fixed bug that caused village loot chests to be empty
- Remove extra entities from frozen tower structure
- Improve surface amethyst cluster generation in amethyst and moonlight biomes

- Mods updated
  - amendments-1.20-1.2.18
  - balm-forge-1.20.1-7.3.17-all
  - barebackhorseriding-1.20.1-2.3
  - collective-1.20.1-7.92
  - connectivity-1.20.1-7.0
  - curios-forge-5.12.0+1.20.1
  - CyclopsCore-1.20.1-1.19.7
  - deep_aether-1.20.1-1.1.4
  - DistantHorizons
  - dynamic-fps-3.8.0+minecraft-1.20.0-forge
  - EnderIO-1.20.1-6.2.10-beta-all
  - ends_delight-2.5.1+forge.1.20.1
  - everycomp-1.20-2.7.18
  - exposure-1.20.1-1.7.9-forge
  - fusion-1.2.4-forge-mc1.20.1
  - ImmersiveEngineering-1.20.1-10.2.0-183
  - integrated_api-1.5.2+1.20.1-forge
  - IntegratedScripting-1.20.1-1.0.13
  - Kiwi-1.20.1-Forge-11.8.30
  - lightmanscurrency-1.20.1-2.2.4.3d
  - lithostitched-forge-1.20.1-1.4.4
  - minecolonies-1.20.1-1.1.814-snapshot
  - nohostilesaroundcampfire-1.20.1-7.2
  - rhino-forge-2001.2.3-build.10
  - Ribbits-1.20.1-Forge-3.0.4
  - moonlight-1.20-2.13.68-forge
  - SimpleRPC-Universal-4.0.0
  - sophisticatedbackpacks-1.20.1-3.23.5.1200
  - sophisticatedcore-1.20.1-1.2.18.885
  - supplementaries-1.20-3.1.16
  - trade-cycling-forge-1.20.1-1.0.17
  - villagernames-1.20.1-8.2

And many more minor fixes and improvements.

## [1.0] - 2025-02-18

- Initial release
