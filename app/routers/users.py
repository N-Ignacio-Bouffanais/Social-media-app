from fastapi import APIRouter

users_router = APIRouter(
    tags=["users"],
)


@users_router.get('/')
async def contacts():
    return [{"username": "Rick"}, {"username": "Morty"}]

@users_router.post('/')
async def create_post(description:str, username:str):
    return {description, username}
