cd go/src
go test -v 2>&1 | go-junit-report -out ../../tests/go/go-junit-report_test.xml
