package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("welcome to switch case")
	rand.Seed(time.Now().UnixNano())
	num := rand.Intn(6) + 1

	switch num {
	case 1:
		fmt.Printf("%d is one\n", num)
	case 2:
		fmt.Printf("%d is two\n", num)
	case 3:
		fmt.Printf("%d is three\n", num)
	case 4:
		fmt.Printf("%d is four\n", num)
	case 5:
		fmt.Printf("%d is five\n", num)
	case 6:
		fmt.Printf("%d is six\n", num)
	default:
		fmt.Printf("%d is not a number between 1 and 6 \n", num)
	}

}
