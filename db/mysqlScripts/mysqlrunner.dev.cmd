@echo off 

ECHO **************LOCAL**************

echo Make sure you have a user=root  and password=123456
pause

ECHO CreateDB... 
for /f "delims=" %%f in ('dir 1_CreateDB\*.sql /A:-D /s /b')  do (
	echo "%%f"
	mysql.exe --default-character-set=utf8 --line-numbers --host=localhost --user=root --password=123456 < "%%f"
	echo .
)

ECHO
ECHO DEPLOYMENT
ECHO STEP1... 
for /f "delims=" %%f in ('dir 2_Deployment\step1\*.sql /A:-D /s /b')  do (
	echo "%%f"
	mysql.exe --default-character-set=utf8 --line-numbers --host=localhost --user=root --password=123456 CCC< "%%f"
	echo .
)

ECHO STEP2...
for /f "delims=" %%f in ('dir 2_Deployment\step2\*.sql /A:-D /s /b') do (
	echo %%f
	mysql.exe --default-character-set=utf8 --line-numbers --host=localhost --user=root --password=123456 CCC < %%f
	echo .
)

ECHO STEP3...
for /f "delims=" %%f in ('dir 2_Deployment\step3\*.sql /A:-D /s /b') do (
	echo %%f
	mysql.exe --default-character-set=utf8 --line-numbers --host=localhost --user=root --password=123456 CCC < %%f
	echo .
)


ECHO DONE!!!

pause