import requests
from os import path
import csv
from subdata import getsubinfo
###
#Work in progress
###
def headfind(jsn):
    headers = []
    for i in jsn[0]:
        headers.append(i)
    return headers
###
def filemaker(heads,jsn,page):
    with open("data/"+ page + 'DataSet.csv', 'w',errors = 'IGNORE',newline='') as file:
        writer = csv.DictWriter(file, fieldnames = heads)
        writer.writeheader()
        for i in jsn:
            writer.writerow(i)
###
def makersub(page,name):
    out=requests.get(page[name])
    newj = out.json()
    headers = headfind(newj)
    filemaker(headers,newj,name)
###
def main():
    site = {"buses":'https://api.umd.io/v1/bus/routes', 
            "stops":"https://api.umd.io/v1/bus/stops"}
    helper = {'stopID':'https://api.umd.io/v1/bus/stops/{stop_ids}',
              'routes':'https://api.umd.io/v1/bus/routes/{route_ids}',
              'times':'https://api.umd.io/v1/bus/routes/{route_id}/schedules'}
    for i in site.keys():
        print(i.upper())
    inner = input("What API data would you like to Put (From above):")
    ##try:
    if path.exists("data/"+inner + "DataSet.csv") == True: 
        cho = input("This Data Set has already been made would you like to update it? (y/n): ")
        if cho.rstrip().upper() == "Y":
            makersub(site,inner)
    else:
        makersub(site,inner)
    print("Done")
###           
if __name__ == "__main__":
    main()
    ##getsubinfo()
