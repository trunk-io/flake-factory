
# go 

GoLang has a built in testing tool invoked with `go test`.

https://github.com/jstemmer/go-junit-report

go-junit-report will convert the standard testing output into junit xml 

go do the src dir 
```shell
cd ../src
go test -v 2>&1 | go-junit-report -out report.xml
```



# setup

Install go

* **Macos** `brew install go`

make sure `$HOME/go/bin` is in your PATH

Install go-junit-report

```shell
go install github.com/jstemmer/go-junit-report/v2@latest
```



