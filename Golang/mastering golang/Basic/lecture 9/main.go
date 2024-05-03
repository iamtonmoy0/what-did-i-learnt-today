package main

import "fmt"

func main() {
	fmt.Printf("welcome to struct")
   tonmoy:=User{"Tonmoy","tonmoy@gmail.com", 23,true}
 fmt.Println(tonmoy)
}
// struct
type User struct {
	Name   string
	Email  string
	Age    int
	Status bool
}
