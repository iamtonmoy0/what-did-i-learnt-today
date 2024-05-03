package main

import "fmt"

func main() {
	defer func() {
		fmt.Println("i will be last")

	}()
	fmt.Print("hello world")
}
