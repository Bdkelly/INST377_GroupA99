import requests
from os import path
import csv
import time
##
def getsubinfo():
    helper = {'STOPID':'https://api.umd.io/v1/bus/stops/',
              'ROUTES':'https://api.umd.io/v1/bus/routes/',
              'TIMES':'https://api.umd.io/v1/bus/routes/'}
    for i in helper.keys():
        print(i)
    inner = input("What API data would you like to Put (From above):")
    lst = helper.keys()
    if inner.upper() in lst:
        if path.exists("data/"+ inner + "DataSet.csv") == True: 
            cho = input("This Data Set has already been made would you like to update it? (y/n): ")
            if cho.rstrip().upper() == "Y":
                maker(helper,inner)
        else:
            maker(helper,inner)
    else:
        retyp = input("That input was not correct would you like to try again? (y/n): ")
        if retyp.rstrip().upper() == "Y":
            getsubinfo()
    print("Done")

def maker(helper,name):
    extra = ""
    if name.upper() == "STOPID":
        support = "data/stopsDataSet.csv"
    elif name.upper() == "ROUTES":
        support = "data/busesDataSet.csv"
    else:
        support = "data/busesDataSet.csv"
        extra = "/schedules"
    ids = heads(support)
    dataget(ids,helper,extra,name)

def dataget(ids,page,extra,name):
    for i in ids:
        out=requests.get(page[name.upper()] + i + extra)
        newj = out.json()
        break
    headers = headfind(newj)
    biglst = []
    for i in ids:
        out=requests.get(page[name.upper()] + i + extra).json()
        biglst.append(out)
    filemaker(headers,biglst,name)

def filemaker(heads,jsn,name):
    with open("data/"+ name +'DataSet.csv', 'w',errors = 'IGNORE',newline='') as file:
        writer = csv.DictWriter(file,fieldnames=heads)
        writer.writeheader()
        for i in jsn:
           writer.writerow(i[0])
        file.close
##
def headfind(jsn):
    headers = []
    for i in jsn[0]:
        headers.append(i)
    return headers
##
def heads(support):
    ids = []
    with open(support,"r") as file:
        data = csv.DictReader(file)
        for i in data:
            heads = [j for j in i.keys()]
            break
        for i in data:
            ids.append(i[heads[0]])
    return ids
##
if __name__ == "__main__":
    getsubinfo()
