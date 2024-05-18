package org.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AppTest {
    @Test 
    public void appHasAGreeting() {
        App classUnderTest = new App();
        assertEquals("app should have a greeting", classUnderTest.getGreeting(), "f");
    }
}