from pydantic import BaseModel
from datetime import datetime

class Todo(BaseModel):
    id:int
    person:str
    item:str
    timestamp:str