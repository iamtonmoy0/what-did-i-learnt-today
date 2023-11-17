package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	fmt.Println("File system in golang")

	text := "hello world this is text"

	// os module
	file, err := os.Create("./Text.txt")
	if err != nil {
		panic(err)
	}
	length, err := io.WriteString(file, text)
	if err != nil {
		panic(err)
	}
	fmt.Println("file is created", length)
	defer file.Close()
	myReadFile("./Text.txt")
}

func myReadFile(fileName string) {
	data, err := ioutil.ReadFile(fileName)
	if err != nil {
		panic(err)
	}
	fmt.Println("the text is", string(data))
}
