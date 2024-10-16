plugins {
    id("java")
    id("application")
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("org.testng:testng:7.7.0")
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

application {
    mainClass.set("org.example.App")
}

tasks.test {
    useTestNG {
        useDefaultListeners = true
        suites("src/testng.xml") // Ensure the path to testing.xml is correct
        reports.junitXml.outputLocation.set(layout.buildDirectory.dir("test-output/junitreports"))
    }
}

