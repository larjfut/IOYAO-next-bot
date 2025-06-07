import pytest
from api.main import health_check


@pytest.mark.asyncio
async def test_health_check_function():
  assert await health_check() == {
    'status': 'ok',
    'message': 'API is healthy'
  }
