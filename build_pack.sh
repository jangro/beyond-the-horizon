#!/bin/sh

# Enable exit on error
set -e

# Get version from pack metadata
pack_version=$(grep -e "^version" pack.toml | cut -f3 -d' ' | tr -d '"')
bcc_version=$(grep -e "modpackVersion" config/bcc-common.toml | cut -f3 -d' ' | tr -d '"')

if [[ "${pack_version}" != "${bcc_version}" ]]
then
    echo "\n==> Error: version in pack.toml (${pack_version}) and config/bcc-common.toml (${bcc_version}) does not match\n"
    exit 1
fi

git tag | grep -q ${pack_version} || echo "\n==> Warning: missing git tag for version ${pack_version}\n"

# Run the commands with the extracted version
./packwiz curseforge export -s server
mv -v "Beyond the Horizon-${pack_version}.zip" "bth-${pack_version}-server.zip"
./packwiz curseforge export
mv -v "Beyond the Horizon-${pack_version}.zip" "bth-${pack_version}.zip"

# Add icon to the client zip
zip "bth-${pack_version}.zip" "overrides/icon.png"

# Add server files to server zip
for f in $(ls overrides); do
  zip "bth-${pack_version}-server.zip" "overrides/$f"
done

for f in $(ls overrides/config); do
  zip "bth-${pack_version}-server.zip" "overrides/config/$f"
done
