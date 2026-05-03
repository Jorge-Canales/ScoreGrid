@echo off

REM Ir a la carpeta donde está este .bat
cd /d "%~dp0"

REM Iniciar el servidor
start cmd /k node server.js

REM Esperar a que arranque
timeout /t 2 >nul

REM Abrir en navegador (mejor localhost)
start http://localhost:3000/overlay.html
start http://localhost:3000/controller.html