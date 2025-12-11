from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root_route():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hallo von deinem Backend"}

def test_hello_route():
    response = client.get("/hello")
    assert response.status_code == 200
    assert response.json() == {"message": "Hallo aus dem Backend!"}
