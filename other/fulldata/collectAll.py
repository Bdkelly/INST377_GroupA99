import requests
from os import path
import csv
##
from maindata import makersub

def whole():
        site = {"buses":'https://api.umd.io/v1/bus/routes', 
                "stops":"https://api.umd.io/v1/bus/stops",
                'STOPID':'https://api.umd.io/v1/bus/stops/',
                'ROUTES':'https://api.umd.io/v1/bus/routes/',
                'TIMES':'https://api.umd.io/v1/bus/routes/'}
        for i in site.keys():
            print(site[i])
if __name__ == "__main__":
    whole()
