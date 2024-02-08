// abstract classes
abstract class TakePhoto {
  constructor( cameraMode: string,  filter: string) {}
}
const Ts = new TakePhoto("test", "test");

class Instagram extends TakePhoto {}
