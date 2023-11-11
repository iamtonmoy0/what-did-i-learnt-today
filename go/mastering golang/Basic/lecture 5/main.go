package main

import "fmt"

func main() {
	fmt.Println("Welcome to pointer")
	// var ptr *int 
	// fmt.Println("the value is",ptr)
	anyNumber := 20

	var ptr = &anyNumber
	fmt.Println("the number is",ptr)
	fmt.Println("the number is",*ptr)

	*ptr = *ptr +2
	fmt.Println("after incrementing the number is",anyNumber)
}