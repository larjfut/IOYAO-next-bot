from ..main import app
from fastapi.testclient import TestClient

client = TestClient(app)

def test_read_root():
    """Test the root endpoint"""
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "Hello from IOYAO Next Bot API"
    assert data["version"] == "1.0.0"
    assert data["status"] == "running"

def test_health_check():
    """Test the health check endpoint"""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["message"] == "API is healthy"

def test_api_status():
    """Test the API status endpoint"""
    response = client.get("/api/status")
    assert response.status_code == 200
    data = response.json()
    assert data["api_name"] == "IOYAO Next Bot API"
    assert data["version"] == "1.0.0"
    assert data["status"] == "operational"
    assert isinstance(data["endpoints"], list)
    assert len(data["endpoints"]) > 0

