package main

import (
	"fmt"
	"runtime"
	"sync"
)

func main() {
	fmt.Println("gorouteen", runtime.NumGoroutine())
	fmt.Println("cpus:", runtime.NumCPU())
	counter := 0
	const gs = 100
	var wg sync.WaitGroup
	wg.Add(gs)
	for i := 0; i < gs; i++ {
		go func() {
			v := counter
			v++
			counter = v
		}()
	}
	wg.Wait()
	fmt.Println("goruntimes", runtime.NumGoroutine())
	fmt.Println("hello playground", counter)
}
