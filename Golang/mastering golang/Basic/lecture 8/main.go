package main

import "fmt"

func main() {
	fmt.Println("maps of golang")
// map
	var lang = make(map[string]string)
	lang["js"]="javascript"
	lang["rb"]="python"
	lang["go"]="golang"

	fmt.Println(lang)
	// printing specific value
	fmt.Println(lang["js"])
	// deleting 
	delete(lang,"rb")
	fmt.Println(lang)

	fmt.Println("this is loop")
	
	for key,value:= range lang {
		fmt.Printf("%s: %s\n",key,value)
	}




}