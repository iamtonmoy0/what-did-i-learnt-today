package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println("Welcome to slice")
	var fruitList = []string{"apple","mango"}

	fruitList= append(fruitList,"pineapple")
	// fmt.Println(fruitList)
	fruitList = append(fruitList[1:2])
	// fmt.Println(fruitList)

	// append behavior 
	var num = make([]int,1)
	num[0] = 123
	num= append(num,1,2,2233)
	// fmt.Println(num)
	sort.Ints(num)
	// fmt.Println(num)

	// remove slice
	var movie = []string{"h","aa","aaa","aaaaaaadgf"}
	movie = append(movie[:1],movie[2:]...)
	
	fmt.Println(movie)
}