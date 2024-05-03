package handler

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func Handler(w http.ResponseWriter,r *http.Request){
fmt.Println(w,"<p>hello world</p>")
}

func Main(){
r:=mux.NewRouter()
r.HanldeFunc("/",Handler).Methods("GET")
http.ListenAndServe(":8080",r)

}