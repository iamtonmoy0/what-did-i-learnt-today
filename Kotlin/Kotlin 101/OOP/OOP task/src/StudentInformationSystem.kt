class Student{
    var name:String? = "Mr. kashem"
    var id:Int? = 1242
    var department:String? = "CSE"
    fun displayInfo(){
        println("Student: $name $id $department")
    }
}


fun main() {
val student: Student = Student()
    student.displayInfo()
}