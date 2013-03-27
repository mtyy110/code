Ext.define('app.controller.Account', {
    extend: 'Ext.app.Controller',
    requires: ['app.store.Account'],
    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    
    views: ['Account', 'AccountDetail'],
    stores: ['Account'],
    
    init: function(){
        console.log('OK');
        accountView = this.getView('Account').create();
        this.control({
            'button[iconCls=add]': {
                tap: this.onCreateButtonTap
            },
            'button[ui=back]': {
                tap: this.onBackButtonTap
            },
            'button[ui=delete]': {
                tap: this.onDeleteButtonTap
            },
            'button[ui=confirm]': {
                tap: this.onSaveButtonTap
            },
            'list': {
                itemtap: this.onListItemTap
            }
        });
    },
    
    onCreateButtonTap: function(){
        accountStore = accountView.config.items[1].items[0].items[1].store;
        accountCount = accountStore.count();
        accountDetail = Ext.create('app.model.Account', {
            recordId: accountCount
        });
        accountDetailView = this.getView('AccountDetail').create();
        accountDetailView.show();
        console.log('onCreateButtonTap accountCount:' + accountCount);
    },
    
    onBackButtonTap: function(){
        accountDetailView.hide();
        accountDetailView.destroy();
    },
    
    onDeleteButtonTap: function(){
        if (null !== accountStore.findRecord('recordId', accountDetail.data.recordId)) {
            console.log('onSaveButtonTap');
            accountStore.remove([accountDetail]);
            console.log('onSaveButtonTap');
        }
        accountDetailView.hide();
        accountDetailView.destroy();
    },
    
    onSaveButtonTap: function(){
        console.log('onSaveButtonTap' + accountStore.count());
        accountDetailView.updateRecord(accountDetail, true);
        if (null === accountStore.findRecord('recordId', accountDetail.data.recordId)) {
            console.log('onSaveButtonTap');
            accountStore.add(accountDetail);
            console.log('onSaveButtonTap');
        }
        console.log('onSaveButtonTap' + accountDetail.data.recordId);
        accountStore.sync();
        console.log('onSaveButtonTap');
        accountDetailView.hide();
        accountDetailView.destroy();
    },
    
    onListItemTap: function(dateView, index, target, e, eOpts){
        accountStore = dateView.getStore();
        accountDetail = accountStore.getAt(index);
        accountDetailView = this.getView('AccountDetail').create();
        accountDetailView.setRecord(accountDetail);
        accountDetailView.show();
    }
});
