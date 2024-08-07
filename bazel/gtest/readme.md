# Bazel with GTest

# running

```shell
bazel test --cxxopt=-std=c++14 --test_output=all //:hello_test
```

The XML output will be generated at `bazel-testlogs/hello_test/test.xml`

Adapted from the [GoogleTest Bazel Quickstart](https://google.github.io/googletest/quickstart-bazel.html)

Changing the output file should be supported with the `--gtest_output` flag but Bazel is deleting it.
See [this bug](https://github.com/bazelbuild/bazel/issues/16507).


# Retrying tests
https://bazel.build/docs/user-manual#test

--flaky_test_attempts=attempts

This option specifies the maximum number of times a test should be attempted if it fails for any reason. A test that initially fails but eventually succeeds is reported as FLAKY on the test summary. It is, however, considered to be passed when it comes to identifying Bazel exit code or total number of passed tests. Tests that fail all allowed attempts are considered to be failed.

