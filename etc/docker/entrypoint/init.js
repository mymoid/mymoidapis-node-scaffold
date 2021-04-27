// MONGO_START
print('===============JAVASCRIPT===============');
print('Count of rows in users collection: ' + db.campaigns.count());

db.campaigns.insert({
    "fieldName" : true,
});

print('===============AFTER JS INSERT==========');
print('Count of rows in campaigns collection: ' + db.campaigns.count());

allCampaigns = db.campaigns.find();
while (allCampaigns.hasNext()) {
    printjson(allCampaigns.next());
}
// MONGO_END
