from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hallo vonnnn deinem Backend"}

@app.get("/hello")
def hello():
    return {"message": "Hallo aus dem Backend!"}

    # hierbei handelt es sich lediglich um einen kleinen Test zu besseren verstehen von Versionskontrolle