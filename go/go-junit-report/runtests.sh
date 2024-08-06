cd go/src
go test -v 2>&1 | go-junit-report -out go-junit-report_test.xml
