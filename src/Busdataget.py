import requests
from os import path
import csv
import codecs
###
#Work in progress
###
def headfind(jsn):
    headers = []
    for i in jsn[0]:
        headers.append(i)
    '''
    for i in jsn[page]:
        for j in i.keys():
            headers.append(j)
        break
    '''
    return headers
###
def filemaker(heads,jsn,page):
    with open(page + 'DataSet.csv', 'w',errors = 'IGNORE',newline='') as file:
        writer = csv.DictWriter(file, fieldnames = heads)
        writer.writeheader()
        for i in jsn:
            writer.writerow(i)
###
def maker(page,name):
    out=requests.get(page[name])
    newj = out.json()
    headers = headfind(newj)
    filemaker(headers,newj,name)
###
def main():
    site = {"buses":'https://api.umd.io/v1/bus/routes', 
            "stops":"https://api.umd.io/v1/bus/stops"}
    helper = {'stopID':'stopIDs":"https://api.umd.io/v1/bus/stops/{stop_ids}',
              'routes':'https://api.umd.io/v1/bus/routes/{route_ids}',
              'times':'https://api.umd.io/v1/bus/routes/{route_id}/schedules'}
    for i in site.keys():
        print(i.upper())
    inner = input("What API data would you like to Put (From above):")
    ##try:
    if path.exists(inner + "DataSet.csv") == True: 
        cho = input("This Data Set has already been made would you like to update it? (y/n): ")
        if cho.rstrip().upper() == "Y":
            maker(site[inner])
    else:
        maker(site,inner)
    print("Done")
###           
if __name__ == "__main__":
    main()
