Ext.define('app.proxy.DecryptionStorage', {
    extend: 'Ext.data.proxy.Proxy',
    alias: 'proxy.decryptionstorage',
    create: function(operation, callback, scope){
        console.log(this.getClassName() + ' ' + 'create()');
    },
    read: function(operation, callback, scope){
        console.log('read()');
        var me = this;
        reader = me.getReader();
        result = reader.read(me.data);
        
        Ext.apply(operation, {
            resultSet: result
        });
        
        operation.setCompleted();
        operation.setSuccessful();
        Ext.callback(callback, scope || me, [operation]);
    },
    update: function(operation, callback, scope){
        console.log('update()');
    },
    destroy: function(operation, callback, scope){
        console.log('destroy()');
    }
});
