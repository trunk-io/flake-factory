package speedracer;

public class RaceCar {

  private int number;
  private int top_speed;

  public RaceCar(int number, int top_speed) {
    this.number = number;
    this.top_speed = top_speed;
  }

  public String getDisplayName() {
    return "Car " + this.number;
  }

  public int getTopSpeed() {
    return this.top_speed;
  }
  
  public int getNumber() {
    return this.number;
  }

  public void race(int distance) {
    try {
      double timeToSleep = (double) distance / this.top_speed;
       long sleepTimeMillis = Math.round(timeToSleep * 100.0);
      Thread.sleep(sleepTimeMillis);
      System.out.println("Car " + this.number + " slept for " + sleepTimeMillis + " milliseconds.");

    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
    }
  }
}