package speedracer;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;
import java.util.Random;

public class RaceTrack {
  private List<RaceCar> cars;

  public RaceTrack(int numberOfCars) {
    Random random = new Random();

    cars = new ArrayList<>();
    for (int i = 1; i <= numberOfCars; i++) {
      int speed = 100 + random.nextInt(i * 100);
      cars.add(new RaceCar(i, speed));
    }
  }

public int race(int distance) {
    ExecutorService executor = Executors.newFixedThreadPool(cars.size());
    CompletionService<Integer> completionService = new ExecutorCompletionService<>(executor);
    List<Future<Integer>> results = new ArrayList<>();

    for (RaceCar car : cars) {
      completionService.submit(() -> {
        car.race(distance);
        return car.getNumber();
      });
    }
    int winning_car = 0;

    try {
      for (int i = 0; i < cars.size(); i++) {
        Future<Integer> result = completionService.take();
         winning_car = result.get();
      }
    } catch (InterruptedException | ExecutionException e) {
      e.printStackTrace();
    } finally {
      executor.shutdown();
    }

    return winning_car;
  }


}