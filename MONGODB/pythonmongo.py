from os import getenv
from pprint import pprint
import pymongo


host = getenv("MONGO_host")
port = getenv("MONGO_port")
username = getenv("MONGO_username")
password = getenv("MONGO_password")
dynamicuri = "mongodb://" + username + ":" + password + "@" + host + ":" + str(port) + "/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@" + username + "@"

client = pymongo.MongoClient(dynamicuri)
db = client.get_database("twitch-uploader")

# comfort functino
def printfields(collection):
    for doc in collection:
        pprint(doc)


# import csv to mongodb
import csv
def importcsv(file,collection):
    with open(file, 'r') as f:
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:
            doc= {}
            for n in range(0,len(header)):
                doc[header[n]] = row[n]
            collection.insert_one(doc)
importcsv("alldatafromsubjects.csv",db.subjects)

# quick print of all objects
def printall(collection):
    for doc in collection:
        pprint(doc)


# search for a value
pprint(db.subjects.find_one({"username" : "asmongold"}))

# update value
db.subjects.update_one({"username" : "asmongold"}, {"$set" : {"uploadday" : "0"}})



#  search for wildcard
results = db.subjects.find({'username': {'$regex': '.*asmongold.*'}})
for doc in results:
    pprint (doc)


# delete a document # delete_one
db.subjects.find_one({'username': {'$regex': '.*destiny.*'}})



# index a field before using sort commands
db.subjects.create_index([('uploadday', pymongo.ASCENDING)])


# select fields to return
db.subjects.find({},{'_id':0,'username':1,'uploadday':1})



db.subjects.find({"uploadday" : str(day)},{'_id':0,'username':1})

# export all json


cursor = db.subjects.find({})
records = list(cursor)


with open('data.json', 'w') as outfile:
    json.dump(records, outfile, indent=4, sort_keys=True, default=str)
