# Golang test runners

This dir contains scripts for two test runners that support the Go programming 
language, [Golang](https://go.dev/), an open source programming language supported by Google.

Golang has a built in `go test` command, but it does not produce XML reports, so these testing frameworks
wrap or extend the output to produce JUnit compatible XML reports.

## Golang installation notes

Before using these test runners you will need to install go as described
[here](https://go.dev/doc/install).  On MacOS you can install it with `brew install go`. However
Go gets installed, make sure that `$HOME/go/bin` is in your `PATH` or tools installed
with Golang won't work.  

Golang really wants to run everything from the directory where the source code modules are defined.
For example, if you have a repo with multiple languages, and the go code is in the `go_proj` directory,
you will need to first `cd go_proj` before you can run `go test`.  Because this can cause problems when
running inside of a GitHub Action, have the action run a script which changes the directory 
and invokes the tool. Each tool has a `runtests.sh` script for this purpose.
