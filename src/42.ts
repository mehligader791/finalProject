import math

def distance(point1, point2):
    x1, y1 = point1
    x2, y2 = point2
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

pointA = (0, 0)
pointB = (3, 4)
distanceAB = distance(pointA, pointB)
print(distanceAB)
