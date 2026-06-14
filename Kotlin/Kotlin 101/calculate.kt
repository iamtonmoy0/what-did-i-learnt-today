fun main() {

    while (true) {

        println("\n===== Calculator Menu =====")
        println("1. Addition")
        println("2. Subtraction")
        println("3. Multiplication")
        println("4. Division")
        println("5. Exit")
        print("Choose an option: ")

        val operation = readLine()?.toIntOrNull()

        when (operation) {
            1 -> {
                print("Enter first number: ")
                val num1 = readLine()!!.toDouble()

                print("Enter second number: ")
                val num2 = readLine()!!.toDouble()

                println("Result = ${num1 + num2}")
            }

            2 -> {
                print("Enter first number: ")
                val num1 = readLine()!!.toDouble()

                print("Enter second number: ")
                val num2 = readLine()!!.toDouble()

                println("Result = ${num1 - num2}")
            }

            3 -> {
                print("Enter first number: ")
                val num1 = readLine()!!.toDouble()

                print("Enter second number: ")
                val num2 = readLine()!!.toDouble()

                println("Result = ${num1 * num2}")
            }

            4 -> {
                print("Enter first number: ")
                val num1 = readLine()!!.toDouble()

                print("Enter second number: ")
                val num2 = readLine()!!.toDouble()

                if (num2 == 0.0) {
                    println("Cannot divide by zero!")
                } else {
                    println("Result = ${num1 / num2}")
                }
            }

            5 -> {
                println("Program terminated.")
                break
            }

            else -> {
                println("Invalid choice! Starting again...")
            }
        }
    }
}
}