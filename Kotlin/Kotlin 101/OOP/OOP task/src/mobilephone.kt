class Mobile(){
    fun display(name: String, price: Int){
println("$name, $price")
    }
}


fun main() {
    var phone = Mobile()
    phone.display("Huawei",10000)

}