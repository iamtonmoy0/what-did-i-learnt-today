package main

import (
	"bufio"
	"fmt"
	"os"
)


func main() {
	fmt.Println("hello")
	reader:=bufio.NewReader(os.Stdin)
	fmt.Println("Enter the value")
	// comma error system like try catch
	input,err:=reader.ReadString('\n')
	if(err!= nil){
		fmt.Println("err")
	}
	fmt.Println("the value is :",input)
}