package main

import (
	"crypto/sha1"
	"io"
	"io/ioutil"
)

func main() {

}

func hashAndBroadcast(r io.Reader) {
	b, err := ioutil.ReadAll(r)
	if err != nil {
		return err
	}
	hash := sha1.Sum(b)
	

}
