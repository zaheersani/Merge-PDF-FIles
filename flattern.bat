@echo off
setlocal enabledelayedexpansion

set "ROOT=%cd%"

echo Flattening folders in %ROOT%

for /r "%ROOT%" %%F in (*) do (
    if not "%%~dpF"=="%ROOT%\" (
        echo Moving: %%F
        move "%%F" "%ROOT%" >nul
    )
)

echo Removing empty folders...
for /f "delims=" %%D in ('dir "%ROOT%" /ad/b/s ^| sort /r') do (
    rd "%%D" 2>nul
)

echo Done!
pause
