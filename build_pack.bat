@echo off
setlocal enabledelayedexpansion

:: Read the pack.toml file and extract the version
for /f "tokens=2 delims== " %%a in ('findstr /i /b "version" pack.toml') do (
    set version=%%a
    set version=!version:"=!
    set version=!version: =!
)

:: Run the commands with the extracted version
packwiz curseforge export -s server
move "Beyond the Horizon-!version!.zip" "bth-!version!-server.zip"
packwiz curseforge export
move "Beyond the Horizon-!version!.zip" "bth-!version!.zip"

endlocal

