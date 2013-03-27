Ext.define('app.store.Account', {
    extend: 'Ext.data.Store',
    model: 'app.model.Account',
    requires: ['app.model.Account', 'app.proxy.DecryptionStorage'],
    
    autoLoad: true,
    remoteFilter: true,
    proxy: {
        type: 'decryptionstorage',
        reader: {
            type: 'json',
        },
        data: []
    }
});
