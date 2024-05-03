package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	fmt.Println("hello")
	io.WriteString(os.Stdout, "hello")

}
