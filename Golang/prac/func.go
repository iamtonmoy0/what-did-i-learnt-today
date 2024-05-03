package main

import "fmt"

func main() {
	foo()
	boo("james")
}
func foo() {
	fmt.Println("hello world")
}
func boo(s string) {
	fmt.Print("hello,", s)
}
