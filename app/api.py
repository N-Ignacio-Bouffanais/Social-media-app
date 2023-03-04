from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Social media app with fast API",
    description="This is going to be a social media app project with Fast API and reactjs",
    version="1.0.0",
    contact={
        "name": "Nicolas Bouffanais",
        "url": "https://portfolio-nicolas-bouffanais.vercel.app/",
        "email": "nicolas.bouffanais.1999@gmail.com",
    },
)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to facebook clone"}
