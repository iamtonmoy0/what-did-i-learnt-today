// package main

// import "fmt"

// func main() {
// 	for i := 0; i < 100; i++ {
// 		fmt.Println(i)

//		}
//		fmt.Println("hello world")
//	}
package main

import "fmt"

func main() {
	x := make([]int, 10, 100)
	x = append(x, 131331313, 21525451210)
	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(cap(x))
	// fmt.Println(x[0])
	// for i, v := range x {
	// 	fmt.Println(i, v)
	// }

}
