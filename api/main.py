from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="IOYAO Next Bot API",
    description="FastAPI backend for IOYAO Next Bot application",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    """Root endpoint returning basic API information"""
    return {
        "message": "Hello from IOYAO Next Bot API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok", "message": "API is healthy"}

@app.get("/api/status")
async def api_status():
    """API status endpoint with more detailed information"""
    return {
        "api_name": "IOYAO Next Bot API",
        "version": "1.0.0",
        "status": "operational",
        "endpoints": [
            "/",
            "/health",
            "/api/status"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

