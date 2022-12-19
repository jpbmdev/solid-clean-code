interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimingBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird, RunningBird {
  public eat() {}
  public fly() {}
  public run() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, FlyingBird, RunningBird, SwimingBird {
  public eat() {}
  public fly() {}
  public run() {}
  public swim() {}
}
