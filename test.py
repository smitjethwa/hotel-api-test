import requests
import json


a =  requests.get("http://fake-hotel-api.herokuapp.com/api/hotels")
# print(type(response.content))
ab = json.dumps(a).encode('utf-8')

print(type(a))

# data = json.dumps(ab, indent=2)
# print(data[0:2])