from flask import Flask, request
import FaultLine as fl
from flask_cors import CORS, cross_origin
from decimal import Decimal

app = Flask(__name__)
CORS(app)

@app.route("/")
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def hello():
  lat = request.args.get('latitude')
  lng = request.args.get('longitude')
  return fl.GetNearestFaultline(Decimal(lng), Decimal(lat))
    
