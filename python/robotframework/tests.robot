# We will run these tests in parallel with pabot - which will sometimes generate a 
# failure as the tests are working on the same file / some editing/reading some deleting

*** Settings ***
Library                             OperatingSystem

*** Variables ***
${GOOD_TEXT} =                      Hello nice humans! 
${BAD_TEXT}                         Robots will take over! 

***Test Cases***

File creation tests
    Create File                     new_file.txt                        ${GOOD_TEXT}
    File Should Not Be Empty        new_file.txt

File reading / editing tests
    ${file_content} =               Get File                            new_file.txt
    Should Be Equal                 ${file_content}                     ${GOOD_TEXT}
    Should Not Be Equal             ${file_content}                     ${BAD_TEXT}

File deletion tests
    Remove File                     new_file.txt                        

