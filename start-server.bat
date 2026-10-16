@echo off
title Iridesce Website - Local Development Server

setlocal enabledelayedexpansion

cd /d C:\Users\fains\Desktop\Iridesce_Web

echo Starting Iridesce website dev server...
echo Open http://localhost:4321 to preview your site
echo Press Ctrl+C in another window to stop the server
echo.

npm run dev

endlocal
