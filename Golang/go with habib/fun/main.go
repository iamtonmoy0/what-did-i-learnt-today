package main

import "fmt"

func main() {
	// welcome to the application
	fmt.Println("hello welcome to the application")
	// get user name from user
	var name string
	fmt.Print("Enter your name: ")
	fmt.Scanln(&name)

	fmt.Printf("Hello, %s! Welcome to the application.\n", name)
}
