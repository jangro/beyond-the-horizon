#!/usr/bin/env bash

# Enable exit on error
set -e

PRISM=prismlauncher
PRISM_PATH="$HOME/Library/Application Support/PrismLauncher/instances"

# Get version from pack metadata
pack_version=$(grep -e "^version" pack.toml | cut -f3 -d' ' | tr -d '"')
bcc_version=$(grep -e "modpackVersion" config/bcc-common.toml | cut -f3 -d' ' | tr -d '"')

if [ "${pack_version}" != "${bcc_version}" ]; then
	echo "\n==> Error: version in pack.toml (${pack_version}) and config/bcc-common.toml (${bcc_version}) does not match\n"
	exit 1
fi

# Import the pack into PrismLauncher
if [ -d "${PRISM_PATH}/bth-${pack_version}-server" ]; then
	echo "\n==> Warning: existing PrismLauncher instance found at ${PRISM_PATH}/bth-${pack_version}-server\n"
	read -rp "Do you want to remove it (no means use existing instance)? (y/n) " choice
	if [ "$choice" = "y" ]; then
		rm -rf "${PRISM_PATH}/bth-${pack_version}-server"
	fi
else
	$PRISM --import "bth-${pack_version}-server.zip"
fi

# Ask to remove output folder if it exists
if [ -d "bth-${pack_version}-server-output" ]; then
	echo "\n==> Warning: existing output folder found at bth-${pack_version}-server-output\n"
	read -rp "Do you want to remove it (required to continue)? (y/n) " choice
	if [ "$choice" = "y" ]; then
		rm -rf "bth-${pack_version}-server-output"
	else
		echo "Cannot continue, exiting"
		exit 1
	fi
fi

# Build server pack with mods from prismlauncher instance
mkdir -p "bth-${pack_version}-server-output"

# Copy required file from packwiz export
unzip -d "bth-${pack_version}-server-output" "bth-${pack_version}-server.zip" manifest.json

# Copy the rest of the files from the prismlauncher instance
cp -r "${PRISM_PATH}/bth-${pack_version}-server/minecraft/" "bth-${pack_version}-server-output/"

cd "bth-${pack_version}-server-output/"
zip -r "../bth-${pack_version}-server-full.zip" * -x "mods/.index/*"
cd ..
