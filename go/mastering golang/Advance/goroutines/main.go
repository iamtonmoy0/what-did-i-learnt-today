package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

var wg sync.WaitGroup

func main() {
	// go greet("hello")
	// greet("world")
	website := []string{
		"https://google.com",
		"https://facebook.com",
		"https://github.com",
		"https://wikipedia.com",
	}

	for _, web := range website {
		go getStatus(web)
		wg.Add(1)

	}
	wg.Wait()

}

//	func greet(s string) {
//		for i := 0; i < 6; i++ {
//			time.Sleep(1 * time.Second)
//			fmt.Println(s)
//		}
//	}
//
// get status of website
func getStatus(endpoint string) {
	defer wg.Done()
	res, err := http.Get(endpoint)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("the response ", res.StatusCode, "for", endpoint)
	}
}
