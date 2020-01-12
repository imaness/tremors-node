import geopandas as gpd
from decimal import Decimal
from flask import jsonify
from shapely.geometry import Point, LineString, shape, MultiLineString
from shapely.ops import nearest_points

gdf_fault = gpd.read_file('GeoJsonFiles/FaultLineGeoJSON-test.json')

def GetNearestFaultline(lng, lat):
  point = nearest_points(Point(lng, lat), MultiLineString(list(gdf_fault['geometry'])))[1]  
  return jsonify({"distance": 1, "lineLat": 14.3877676, "lineLong": 121.0214906 }), 200
  # return jsonify({"distance": 1, "lineLat": point.y, "lineLong": point.x}), 200



