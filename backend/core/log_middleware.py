import logging

logger = logging.getLogger(__name__)

class LogRequestMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log the request method and URL
        logger.info(f"Received {request.method} request at {request.get_full_path()}")
        response = self.get_response(request)
        return response
