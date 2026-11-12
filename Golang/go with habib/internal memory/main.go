package main

import "fmt"

var a = 10

func add(x int, y int) {
	z := x + y
	fmt.Println(z)

}

func main() {
	add(10, 20)
	add(a, 10)
}

func init() {
	fmt.Println("init function called")
}
