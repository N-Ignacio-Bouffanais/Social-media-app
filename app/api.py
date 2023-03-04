from fastapi import FastAPI

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
