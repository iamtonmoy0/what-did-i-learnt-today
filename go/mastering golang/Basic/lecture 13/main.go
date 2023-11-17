package main

import "fmt"

func main() {
	fmt.Println("functions")
// greet()
result,message:=sum(2,2)
fmt.Println(result,message)
}

func sum(valueA int,valueB int)(int,string){
	return valueA + valueB,"hello";
}
func greet(){
	fmt.Println("hello")
}