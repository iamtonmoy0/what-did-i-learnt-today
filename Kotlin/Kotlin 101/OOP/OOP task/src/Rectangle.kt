class Rectangle {

    fun area(length: Double, width:Double ): Double  {
return length * width
    }
    fun pereimeter(length: Double, width:Double): Double {
        return 2*length * width
    }
}


fun main() {

    val rectangle = Rectangle()
    println(rectangle.pereimeter(readln().toDouble(), readln().toDouble()))
    println(rectangle.area(readln().toDouble(), readln().toDouble()))
}