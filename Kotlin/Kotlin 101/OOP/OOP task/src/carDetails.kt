class Car{
    var brand:String = ""
    var model:String = ""
    var year:String = ""
    fun startCar(){
        println("$brand $model is starting")
    }
    fun stopCar(){}
}

fun main() {
val car = Car()
    car.brand = "bmw"
    car.model = "M5"
    val car2 = Car()
    car2.brand = "Audi"
    car2.model = "7 Series"
    println(car.startCar())
    println(car2.startCar())
}