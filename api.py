import requests as rq
import json

from datetime import datetime
#weather description , max temp in degree cel, presurre ,humidity, wind == windspeed,time stamp converted with date and time
url="https://api.openweathermap.org/data/2.5/weather?lat=22.577152&lon=88.3720192&appid=c4839597e492a82a63b18f2d4a13ba7b"
x=rq.get(url).text
data=json.loads(x)
weather=data["weather"][0]["description"]
temp,presure,humidity=data["main"]["temp_max"],data["main"]["pressure"],data["main"]["humidity"]
deg_temp=temp-273

wind=data["wind"]["speed"]
date=data["dt"]
date_time=datetime.fromtimestamp(date)
print(f"weather description: {weather}\nmax_temp: {temp}\nPressure: {presure}\nHumidity: {humidity}\nTemperature: {deg_temp}\nWind: {wind}\nTimeStamp: {date}")
print("Date and time: ",date_time)



