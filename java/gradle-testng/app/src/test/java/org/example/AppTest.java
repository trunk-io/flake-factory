package org.example;
import org.testng.annotations.Test;
import org.testng.Assert;

public class AppTest {
    @Test(groups = { "functest" })
    public void appHasAGreeting() {
        App classUnderTest = new App();
        System.out.println("This is a random message.");
        Assert.assertEquals("app should have a greeting", classUnderTest.getGreeting(), "f");
    }
}
