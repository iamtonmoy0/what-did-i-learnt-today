package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Println("os\t ", runtime.GOOS)
	fmt.Println("arch\t ", runtime.GOARCH)
	fmt.Println("hello ", runtime.NumCPU())
	fmt.Println("hello ", runtime.NumGoroutine())
}
