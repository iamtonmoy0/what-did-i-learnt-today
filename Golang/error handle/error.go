package main

import "fmt"

func main() {
	n, err := fmt.Printf("hello world")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(n)
}
