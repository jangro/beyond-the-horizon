#!/usr/bin/env sh

# Beyond The Horizon Server Startup Script

# Edit the below values to change JVM Arguments or Allocated RAM for the server.
JAVA_PATH="java"
JAVA_VERSIONS="17 21"
ALLOCATED_RAM="8G"
JVM_ARGUMENTS="-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch"

# Make sure this matches the Forge version of the server if you update.
FORGE_VERSION="1.20.1-47.4.6"

# Verify that java version is supported
JAVA_VERSION=$(${JAVA_PATH} -version 2>&1 | head -n1 | sed -n 's/.*"\([0-9][0-9]*\)\..*/\1/p')
if [ -z "${JAVA_VERSION}" ]; then
    # Try alternative format for newer Java versions (e.g., "java 17.0.1")
    JAVA_VERSION=$(${JAVA_PATH} -version 2>&1 | head -n1 | sed -n 's/.* \([0-9][0-9]*\)\..*/\1/p')
fi

# Check if JAVA_VERSION is in the list of supported versions
VERSION_FOUND=false
for supported_version in ${JAVA_VERSIONS}; do
    if [ "${JAVA_VERSION}" = "${supported_version}" ]; then
        VERSION_FOUND=true
        break
    fi
done

if [ "${VERSION_FOUND}" = "false" ]; then
    echo "Java ${JAVA_VERSIONS} is required to run this server. Found Java ${JAVA_VERSION:-unknown}."
    exit 1
fi

# Install Minecraft Forge if it isn't already installed.
FILE=./libraries/net/minecraftforge/forge/${FORGE_VERSION}
if [ ! -d "${FILE}" ]; then
    echo "Installing Minecraft Forge Server."
    ${JAVA_PATH} -jar ./forge-${FORGE_VERSION}-installer.jar --installServer
fi

# Delete installer files.
INSTALLER_FILE=./forge-${FORGE_VERSION}-installer.jar
if [ -f "${INSTALLER_FILE}" ]; then
    if [ -d "${FILE}" ]; then
        echo "Deleting the installer file."
        rm forge-${FORGE_VERSION}-installer.jar
    fi
    if [ -f "forge-${FORGE_VERSION}-installer.jar.log" ]; then
        echo "Deleting the unnecessary file."
        rm forge-${FORGE_VERSION}-installer.jar.log
    fi
    if [ -f "./run.bat" ]; then
        echo "Deleting the unnecessary file."
        rm run.bat
    fi
    if [ -f "./run.sh" ]; then
        echo "Deleting the unnecessary file."
        rm run.sh
    fi
    if [ -f "./user_jvm_args.txt" ]; then
        echo "Deleting the unnecessary file."
        rm user_jvm_args.txt
    fi
fi

echo "Starting Beyond The Horizon Server."
${JAVA_PATH} -Xms${ALLOCATED_RAM} -Xmx${ALLOCATED_RAM} ${JVM_ARGUMENTS} @libraries/net/minecraftforge/forge/${FORGE_VERSION}/unix_args.txt nogui

printf "Press enter to continue."
read _
