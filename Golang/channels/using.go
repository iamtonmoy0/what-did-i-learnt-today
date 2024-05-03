package main

import "fmt"

func main() {
	// channel
	c := make(chan int)

	// send
	go foo(c)
	// receive
	bar(c)
	fmt.Println("this ends here")
}

// send
func foo(c chan<- int) {
	c <- 12

}

// receive
func bar(c <-chan int) {
	fmt.Println(<-c)

}
