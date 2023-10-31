package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Welcome to time")
	currentTime:= time.Now()
	fmt.Println(currentTime.Format("01-01-2006 12:12:12 Monday"))


}