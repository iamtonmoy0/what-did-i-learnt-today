package main

import "fmt"

type User struct {
	Name   string
	Email  string
	Age    int
	Active bool
}

func main() {
	fmt.Println("methods")
	tonmoy := User{"tonmoy","hello",12,true}
	fmt.Println(tonmoy)
	tonmoy.getStatus()
}
// in here u is referencing the User struct
func (u User) getStatus(){
	fmt.Println("the status is" ,u.Active)
}
// * go pointer is good for changing original value of a variable and it doesn't copy the variable it directly changes it