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
  
}