//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
//fun main() {
//    println("Enter your operation:")
//    val operator = readLine()!!
//    println("Enter your first number:")
//    val first:Int = readLine()!!.toInt()
//    println("Enter your second number:")
//    val second:Int = readLine()!!.toInt()
//    if(operator == "+"){
////    sum
//        val sum:Int=calculate(first,second,{x,y -> x+y})
//        println("the answer  is " + sum)
//    }else if(operator == "-"){
//
////    substract
//    val sub:Int=calculate(first,second,{x,y -> x-y})
//    println("the answer  is " +  sub)
//    }else if(operator == "*") {
//
////    multiplication
//        val multiply: Int = calculate(first,second, { x, y -> x * y })
//        println("the answer  is " +  multiply)
//    }else if(operator == "/") {
////    divition
//        val divide: Int = calculate(first,second, { x, y -> x / y })
//        println("the answer  is " +  divide)
//    }
//
//}
//fun calculate(a:Int,b:Int,operation:(Int,Int)->Int):Int {
//    return operation(a,b)
//}

//sum
class Sum() {
    fun sum(a: Int, b: Int){
        println("sum of $a and $b is ${a + b}")
    }
}
// minus
class Minus(){
    fun minus(a: Int, b: Int){
        println("minus of $a and $b is ${a - b}")
    }
}
//multliplication
class Multiplication(){
    fun multiply(a: Int, b: Int){
        println("multiply of $a and $b is ${a * b}")
    }
}
//devisor
class Division(){
    fun divide(a: Int, b: Int){
        println("divide of $a and $b is ${a / b}")
    }
}

fun main(){
    println("enter your operation type")
    val operation= readLine()
    println("enter first number")
    val firstValue=readLine()!!.toInt()
    println("enter second number")
    val secondValue=readLine()!!.toInt()
if(operation== "+"){
    val sum = Sum()
    sum.sum(firstValue,secondValue)

}else if(operation== "-"){
    val sum = Minus()
    sum.minus(firstValue,secondValue)
}else if(operation== "*"){
    val sum = Multiplication()
    sum.multiply(firstValue,secondValue)

}else if(operation== "/"){
    val sum = Division()
    sum.divide(firstValue,secondValue)
}else {
    println(" Joy bangla Faaaaaaaaaa")
}
}
