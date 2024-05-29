#!/bin/sh

# Enable exit on error
set -e

# Get version from pack metadata
version=$(grep -e "^version" pack.toml | cut -f3 -d' ' | tr -d '"')

# Run the commands with the extracted version
./packwiz curseforge export -s server
mv -v "Beyond the Horizon-${version}.zip" "bth-${version}-server.zip"
./packwiz curseforge export
mv -v "Beyond the Horizon-${version}.zip" "bth-${version}.zip"
