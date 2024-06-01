from fastapi import FastAPI
from todo import todo_router
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

origins=["http://127.0.0.1:5500", "http://44.223.216.144:9001"]
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)



@app.get("/")
async def welcome() -> dict:
     return {
         "msg" : "hello world??????"
     }
     
app.include_router(todo_router)

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)