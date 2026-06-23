class Bank{
    var balance: Int = 1000
    val accountNumber: String = "2165464165346984315"
    val accountHolder:String="MR.kashem"
    fun withdraw(amount: Int) {
        if(balance >= amount){
            balance -= amount
            println("you have successfully withdrawed $amount")
        }else{
            println("you are gorib")
        }
    }
    fun checkBalance() {
        println(" A/C : $accountNumber ")
        println(" $accountHolder your current balance is  $balance")
    }
    fun deposit(amount: Int){
if(amount !=0){
    balance += amount
    println("you have successfully deposited $amount")
}else{
    println("you are gorib")
}
    }
}

fun main() {
val bank = Bank()
    bank.deposit(1000)
    bank.checkBalance()
    bank.withdraw(1000)
}