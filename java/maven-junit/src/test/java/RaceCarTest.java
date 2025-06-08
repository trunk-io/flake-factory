package speedracer;

import org.junit.Assert;
import org.junit.Test;

public class RaceCarTest {

    @Test
    public void testGetDisplayName() {
        RaceCar raceCar = new RaceCar(1,100);
        Assert.assertEquals("Car 1", raceCar.getDisplayName());
    }

    @Test
    public void testGetTopSpeed() {
        RaceCar raceCar = new RaceCar(1,100);
        Assert.assertEquals(100, raceCar.getTopSpeed());
    }    
}