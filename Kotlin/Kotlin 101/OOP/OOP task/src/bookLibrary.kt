class Book{
    var title:String?=null
    var author:String?=null
    var price:Int=0
}

fun main() {
    val book = Book()
    book.title="How make friends and influence people"
    book.author="Nil"
    book.price=2000
    val book1 = Book()
    book1.title="Atomic habits"
    book1.author="Nil"
    book1.price=200
    val book2 = Book()
    book2.title="48 Laws of power"
    book2.author="Nil"
    book2.price=300
        val book3 = Book()
    book2.title="48 Laws of power"
    book2.author="Nil"
    book2.price=300
        val book4 = Book()
    book2.title="48 Laws of power"
    book2.author="Nil"
    book2.price=300


//    condition
    if(book.price>=500 ) {
        println(book.title)
    }else if( book1.price>=500 ){
        println(book1.title)

    }else if( book2.price>=500 ){
        println(book2.title)
    }

}