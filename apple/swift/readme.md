# Example using [Swift Testing](https://github.com/apple/swift-testing)

In order to use Swift Testing you need the latest developer versions of the Swift Toolchain as described
[here](https://swiftpackageindex.com/apple/swift-testing/main/documentation/testing/temporarygettingstarted)

* After configuring the above toolchain, use it with `export TOOLCHAINS=swift`
* Build the source with `swift build`
* Run the tests with `swift test`
* get the XML output with `swift test --xunit-output results.xml`
