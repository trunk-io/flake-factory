import org.testng.Assert;
import org.testng.annotations.Test;

public class AppTest {
 
    @Test
    public void testAppHasAGreeting() {
        App classUnderTest = new App();
        System.out.println("This is a random message.");
        Assert.assertEquals("app should have a greeting", classUnderTest.getGreeting(), "f");
    }
}