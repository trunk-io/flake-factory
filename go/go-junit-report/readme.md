


[**go-junit-report**](https://github.com/jstemmer/go-junit-report) will convert the standard Golang testing output (`go test`) into Junit XML. 


First install `go-junit-report`:

```shell
go install github.com/jstemmer/go-junit-report/v2@latest
```

Go to the root of your Golang project 

```shell
cd flaky-factory/go/src
```

then pipe `go test` into the `go-junit-report` program.
```shell
go test -v 2>&1 | go-junit-report -out report.xml
```



