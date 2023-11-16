package main

import "fmt"

func main() {
	fmt.Println("Loops in golang")
	// days:=[]string{"saturday","sunday","monday"}

	// for i:=0;i<len(days);i++{
	// 	fmt.Printf("%v\n",days[i])
	// }
	// *using range methods
	// for i:=range days{
	// 	fmt.Println("the days is",days[i])
	// }
	// for _,day := range days{
	// 	fmt.Println("The day is ",day)
	// 	}

	value := 1
	for value < 10 {
		fmt.Println("the value is", value)
		value++
	}
}
