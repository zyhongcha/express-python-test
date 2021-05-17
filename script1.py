import sys
import json

# sys.argv[1] will look like this 
jsondata = '{"email":"test@example.com","user_id":1,"stocks":[{"stockCode":"AAPL","stockAmount":6},{"stockCode":"MSFT","stockAmount":12},{"stockCode":"TSLA","stockAmount":32}]}'

print("Hello World Python Script")
# sys.argv[0] is the file name of this python script, so ignore
print('I received a data from the server:')
# myJSONdata = json.load(sys.argv[1])

# json convert to dictionary
myJSONdata = json.loads(jsondata)
print(myJSONdata)

print("\nMy API is done, I am printing this, please tell this to the user")
