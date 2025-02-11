# Update

To update all mods, run

```
./packwiz update --all
```


If there's a version change in Complementary Shaders, rename its config files to match new version. For example:
```
mv shaderpacks/ComplementaryReimagined_r5.2.2.zip.txt shaderpacks/ComplementaryReimagined_r5.2.3.zip.txt
mv shaderpacks/ComplementaryUnbound_r5.2.2.zip.txt shaderpacks/ComplementaryUnbound_r5.2.3.zip.txt
```

If there's a version change in resource packs, update options in kubejs/config/defaultoptions.txt to match new version. For example:
```diff
--- kubejs/config/defaultoptions.txt.orig	2024-07-22 13:14:36
+++ kubejs/config/defaultoptions.txt	2024-07-22 13:12:27
@@ -13,8 +13,8 @@
 onboardAccessibility:false
 discrete_mouse_scroll:true

-resourcePacks:["vanilla","mod_resources","builtin/towntalk","Moonlight Mods Dynamic Assets","file/xali\u0027s Bushy Leaves v3.5.0.zip","file/Midnighttiggers-FCT-Default_1.20_V2.zip","file/Midnighttiggers-NT_CG-FCT-Default_1.17_V1.zip"]
-incompatibleResourcePacks:["builtin/towntalk","file/Midnighttiggers-FCT-Default_1.20_V2.zip","file/Midnighttiggers-NT_CG-FCT-Default_1.17_V1.zip"]
+resourcePacks:["vanilla","mod_resources","builtin/towntalk","Moonlight Mods Dynamic Assets","file/xali\u0027s Bushy Leaves v3.5.0.zip","file/Midnighttiggers-FCT-Default_1.20_V3.zip","file/Midnighttiggers-NT_CG-FCT-Default_1.17_V2.zip"]
+incompatibleResourcePacks:["builtin/towntalk","file/Midnighttiggers-FCT-Default_1.20_V3.zip","file/Midnighttiggers-NT_CG-FCT-Default_1.17_V2.zip"]

 soundCategory_master:0.5
 soundCategory_music:0.25
```
