from fastapi import FastAPI


app=FastAPI()


@app.get("/")
def home():
    return {"data":"this is home"}
@app.get("/hello")
def hello():
    return {"data":"kjgjkfgjhgjhgjg"}

import uvicorn
uvicorn.run(app)