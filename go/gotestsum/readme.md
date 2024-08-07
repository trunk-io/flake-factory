# gotestsum

[gotestsum](https://github.com/gotestyourself/gotestsum) is a test runner for Go .

Install the command line tool into your Golang project with

```shell
go install gotest.tools/gotestsum@latest
```

Go to the root of your Golang project

```shell
cd flaky-factory/go/src
```
then run `gotestsume` with the `--junitfile` option to produce XML

```shell
 gotestsum --junitfile gotestsum_test.xml
```
