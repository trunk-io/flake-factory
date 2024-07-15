import Testing

@Suite("best tests evar") struct MyCoolTests {
    @Test("rad test name") func helloworld() {
        let greeting = "hello, world!"
        #expect(greeting == "hello, worldzx!")
    }
}