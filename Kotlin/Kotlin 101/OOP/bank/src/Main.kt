class Bank{
    private var balance=400.00
    fun deposit(amount:Double){
        balance += amount
    }
    fun withdraw(amount:Double){
        if(balance >= amount && amount>=500.00 ){
            balance -= amount

        }else{
            println("You are gorib")
        }
    }
    fun showBalance(){
        println("balance is $balance")
    }
}



fun main() {
val account1 = Bank()
    account1.deposit(500.00)
    account1.withdraw(5000.00)
    account1.showBalance()
}