import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class NavItems(BaseModel):
    id: int
    name: str
    icon: str  # Store icon names as strings

class NavItemsList(BaseModel):
    items: List[NavItems]

app = FastAPI(debug=True)

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated in-memory database
memory_db = {
    "items": [
        {"id": 0, "name": "Home", "icon": "faHouse"},
        {"id": 1, "name": "About", "icon": "faUserTie"},
        {"id": 2, "name": "Services", "icon": "faHandshake"},
        {"id": 3, "name": "Contact", "icon": "faAddressBook"},
        {"id": 4, "name": "Search", "icon": "faMagnifyingGlass"}
    ]
}

@app.get("/navitems", response_model=NavItemsList)
async def get_nav_items():
    return {"items": memory_db["items"]}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)