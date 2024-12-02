package speedracer;

import org.testng.annotations.Test;
import org.testng.Assert;

public class RaceTrackTest {

    private int distance = 500;

    @Test
    public void testRaceTwoCars() {
        RaceTrack raceTrack = new RaceTrack(2);
        Assert.assertEquals(2, raceTrack.race(distance));
    }

    @Test
    public void testRaceThreeCars() {
        RaceTrack raceTrack = new RaceTrack(3);
        Assert.assertEquals(3, raceTrack.race(distance));
    }

    @Test
    public void testRaceFourCars() {
        RaceTrack raceTrack = new RaceTrack(4);
        Assert.assertEquals(4, raceTrack.race(distance));
    }

    @Test
    public void testRaceFiveCars() {
        RaceTrack raceTrack = new RaceTrack(5);
        Assert.assertEquals(5, raceTrack.race(distance));
    }

    @Test
    public void testRaceSixCars() {
        RaceTrack raceTrack = new RaceTrack(6);
        Assert.assertEquals(6, raceTrack.race(distance));
    }

    @Test
    public void testRaceSevenCars() {
        RaceTrack raceTrack = new RaceTrack(7);
        Assert.assertEquals(7, raceTrack.race(distance));
    }

    @Test
    public void testRaceEightCars() {
        RaceTrack raceTrack = new RaceTrack(8);
        Assert.assertEquals(8, raceTrack.race(distance));
    }

    @Test
    public void testRaceNineCars() {
        RaceTrack raceTrack = new RaceTrack(9);
        Assert.assertEquals(9, raceTrack.race(distance));
    }

}