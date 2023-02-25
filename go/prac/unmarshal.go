package main

import "fmt"

type hello struct {
	roll   int
	name   string
	number int
}

func main() {
	s := hello{
		name:   "Tonmoy",
		roll:   21,
		number: 0010152151521,
	}
	fmt.Println(s)
}
