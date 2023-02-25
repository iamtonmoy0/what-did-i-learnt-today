package main

import "fmt"

func main() {
	xi := []int{2, 3, 3, 4, 5, 6, 7, 8, 9}
	x := sum(xi...)
	fmt.Println("the total is ", x)
}
func sum(x ...int) int {
	fmt.Println(x)
	fmt.Printf("%T\n", x)
	sum := 0
	for i, v := range x {
		sum += v
		fmt.Println("for item in index position", i, "we are adding now", v)
	}
}
