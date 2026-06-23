class Employee(){
    var name: String = "Mr. Kashem"
    var salary: Int = 15000
    fun calculateBonus():Double{
val bonus= salary*0.15
        return bonus
    }

    fun totalSalary(salary:Int,calculateBonus:Double):Double{
    return calculateBonus*salary
    }
}

fun main() {
val employee = Employee()
    println("${employee.name}, ${employee.salary},${employee.calculateBonus()}")
}