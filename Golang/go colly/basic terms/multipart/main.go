package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"time"

	"github.com/gocolly/colly"
)

// form data generation
func generateFormData() map[string][]byte {
	f, _ := os.Open("gocolly.jpg")
	defer f.Close()
	imgData, _ := ioutil.ReadAll(f)
	return map[string][]byte{
		"firstname": []byte("one"),
		"lastname":  []byte("two"),
		"email":     []byte("onetwo@example.com"),
		"file":      imgData,
	}
}

// starting server
func server() {
	var handler http.HandlerFunc = func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("received request!")
		err := r.ParseMultipartForm(10000000)
		if err != nil {
			fmt.Println("server:error")
			w.WriteHeader(500)
			w.Write([]byte("<html><body> internal server error !</body></html>"))
			return
		}
		w.WriteHeader(200)
		println("server:OK")
		w.Write([]byte("<html><body>Success</body></html>"))
	}
	go http.ListenAndServe(":3000", handler)
}

func main() {
	// Start a single route http server to post an image to.
	server()

	c := colly.NewCollector(colly.AllowURLRevisit(), colly.MaxDepth(5))

	// On every a element which has href attribute call callback
	c.OnHTML("html", func(e *colly.HTMLElement) {
		fmt.Println(e.Text)
		time.Sleep(1 * time.Second)
		e.Request.PostMultipart("http://localhost:3000/", generateFormData())
	})

	// Before making a request print "Visiting ..."
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Posting gocolly.jpg to", r.URL.String())
	})

	// Start scraping
	c.PostMultipart("http://localhost:3000/", generateFormData())
	c.Wait()
}
