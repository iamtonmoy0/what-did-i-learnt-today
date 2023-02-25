package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type color struct {
	ID    int
	Name  string
	color []string
}

func main() {

	group := color{
		ID:    12,
		Name:  "red",
		color: []string{"red", "ruby"},
	}
	b, err := json.Marshal(group)
	if err != nil {
		fmt.Println("error", err)
	}
	os.Stdout.Write(b)
}
