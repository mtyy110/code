Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'app',
    controllers: ['Account'],
    models: ['Account'],
    launch: function(){
        this.launched = true;
        this.mainLaunch();
        console.log('launch');
    },
    mainLaunch: function(){
        if (!device || !this.launched) {
            return;
        }
        console.log('mainLaunch');
        accountDb = window.openDatabase("accountDb", "1.0", "accountDb", 1000000);
        accountDb.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        }, function(tx, err){
            console.log("Error processing SQL: " + err);
        }, function(){
            console.log("success!");
        });
        
    }
});
