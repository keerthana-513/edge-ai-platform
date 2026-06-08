import requests
import time

# URL of your running Flask app
url = 'http://127.0.0.1:5000/log_inference'

# Simulate 5 consecutive detections
for i in range(5):
    payload = {
        "device_id": 1,
        "model_id": 1,
        "result": f"Object Detected #{i+1}"
    }
    response = requests.post(url, json=payload)
    print(f"Sent detection {i+1}: {response.status_code}")
    time.sleep(2) # Wait 2 seconds between detections