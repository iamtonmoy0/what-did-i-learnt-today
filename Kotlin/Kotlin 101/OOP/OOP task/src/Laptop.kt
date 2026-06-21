class Laptop(
    val brand: String,
    val model: String
) {
    var ram: String = "8GB"
    var ssd: String = "256GB"

    constructor(brand: String, model: String, ram: String, ssd: String) : this(brand, model) {
        this.ram = ram
        this.ssd = ssd
    }

    fun display() {
        println("Laptop Details:")
        println("Brand: $brand")
        println("Model: $model")
        println("RAM: $ram")
        println("SSD: $ssd")
        println("------------------------")
    }
}

fun main() {
    val laptop1 = Laptop("Dell", "XPS 13")
    val laptop2 = Laptop("Apple", "MacBook Pro", "16GB", "512GB")
    val laptop3 = Laptop("HP", "Spectre", "32GB", "1TB")

    laptop1.display()
    laptop2.display()
    laptop3.display()
}