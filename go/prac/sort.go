package main

import (
	"fmt"
	"sort"
)

func main() {
	s := []int{5, 4, 1, 2, 9, 6}
	sort.Ints(s)
	fmt.Println(s)

}
