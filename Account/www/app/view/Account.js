Ext.define('app.view.Account', {
    extend: 'Ext.Container',
    
    config: {
        fullscreen: true,
        layout: 'card',
        
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: '帐号管理'
        }, {
            xtype: 'tabpanel',
            width: '100%',
            height: '100%',
            tabBarPosition: 'bottom',
            tabBar: {
                layout: {
                    pack: 'center'
                }
            },
            layout: {
                animation: {
                    type: 'fade'
                },
            },
            items: [{
                title: '账号',
                iconCls: 'star',
                iconMask: true,
                layout: 'fit',
                items: [{
                    dock: 'top',
                    xtype: 'toolbar',
                    layout: {
                        pack: 'end'
                    },
                    items: [{
                        xtype: 'button',
                        iconCls: 'add',
                        iconMask: true,
                        ui: 'plain',
                    }, {
                        xtype: 'searchfield'
                    }]
                }, {
                    scrollable: true,
                    xtype: 'list',
                    store: Ext.create('app.store.Account'),
                    itemTpl: '{title}',
                }, ]
            }, {
                title: '设置',
                iconCls: 'settings',
                iconMask: true,
                html: 'Contact Screen'
            }]
        }]
    }
});
