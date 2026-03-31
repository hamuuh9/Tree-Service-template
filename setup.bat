@echo off
echo Installing dependencies...
echo This may take a few minutes...
cd /d "%~dp0"
"C:\Program Files\nodejs\npm.cmd" install --no-audit --no-fund
echo.
echo If installation fails, try:
echo 1. Check your internet connection
echo 2. Run as administrator
echo 3. Use VPN if in restricted region
echo.
echo To start development server:
echo npm run dev
pause