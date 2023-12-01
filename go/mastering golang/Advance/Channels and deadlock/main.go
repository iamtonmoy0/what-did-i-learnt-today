package main

import (
	"fmt"
	"sync"
)

func main() {
	fmt.Println("Channels")
	che := make(chan int)
	wg := &sync.WaitGroup{}

	wg.Add(2)
	go func(ch chan int, w *sync.WaitGroup) {
		fmt.Println(<-che)
		wg.Done()
	}(che, wg)

	go func(ch chan int, w *sync.WaitGroup) {
		che <- 5
		close(che)
		wg.Done()
	}(che, wg)

	wg.Wait()
}
