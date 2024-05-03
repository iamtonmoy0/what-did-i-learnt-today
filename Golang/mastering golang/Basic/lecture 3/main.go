package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	fmt.Println("Welcome to golang!")
	reader := bufio.NewReader(os.Stdin)
	// fmt.Println("Enter your rating:",reader)
	input,err:= reader.ReadString('\n')
	// fmt.Println(input)
	if err!=nil {
		fmt.Println(err)
	}else{
		fmt.Println("Thanks for rating",input)
	}
}