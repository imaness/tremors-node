from flask import Flask
import FaultLine as fl

app = Flask(__name__)

@app.route("/")
def hello():
  return fl.GetNearestFaultline(213, 1231)
    
