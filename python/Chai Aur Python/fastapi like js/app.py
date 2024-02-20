from fastapi import FastAPI


app=FastAPI()


@app.get("/")
def home():
    return {"data":"this is home"}

import uvicorn
uvicorn.run(app)