import requests

url = 'http://127.0.0.1:5000/log_inference'
payload = {
    "device_id": 1,
    "model_id": 1,
    "result": "Person Detected"
}

# Use 'json=' to send the data, and check the status first
response = requests.post(url, json=payload)

print(f"Status Code: {response.status_code}")

# Only try to decode JSON if the response is successful
if response.status_code == 201:
    print(f"Response: {response.json()}")
else:
    print(f"Server returned: {response.text}")