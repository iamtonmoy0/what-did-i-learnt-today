package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("hello")
	// random number
	rand.Seed(time.Now().UnixNano())
	fmt.Println(rand.Intn(5+1))
}
