@ECHO off
SET srv=C:\Users\Intrebute\Documents\School\activator-1.3.6-minimal\GAMERNET\public
xcopy ".\dist" %srv% /Y /S
echo Done
