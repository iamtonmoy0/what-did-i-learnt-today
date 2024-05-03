// package main

// import "fmt"

// func main() {
// 	fmt.Println("hello world")
// 	f := func() {
// 		fmt.Println("hello", "x")

//		}
//		f()
//	}
package main

import "fmt"

func main() {
	a := foo()
	fmt.Println(a)

}

func foo() string {
	sa := "hello world "
	return sa
}
