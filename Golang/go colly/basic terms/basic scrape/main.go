package main

import (
	"log"

	"github.com/gocolly/colly"
)

func main() {
	c := colly.NewCollector()

	c.OnResponse(func(r *colly.Response) {
		log.Println(string(r.Body))
	})
	// url
	c.Visit("https://www.dsebd.org/data_archive.php")
}
