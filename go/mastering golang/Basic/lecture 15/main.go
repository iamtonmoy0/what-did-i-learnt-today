package main

import "fmt"

func main() {
	// works like last in first out
	defer fmt.Println("hi")
	fmt.Println("Defer go")
	
}