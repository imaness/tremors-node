import geopandas as gpd
from decimal import Decimal
from flask import jsonify
from shapely.geometry import Point, LineString, shape, MultiLineString
from shapely.ops import nearest_points

gdf_fault = gpd.read_file('GeoJsonFiles/FaultLineGeoJSON.json')

def GetNearestFaultline(lng, lat):
  point = nearest_points(Point(121.02149059999999, 14.3877676), MultiLineString(list(gdf_fault['geometry'])))[0]
  return jsonify({"distance": 1, "lineLat": point.y, "lineLong": point.x}), 200



