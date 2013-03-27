Ext.define('app.view.AccountDetail', {
    extend: 'Ext.form.Panel',
    config: {
        centered: true,
        floating: true,
        fullscreen: true,
        modal: true,
        hideOnMaskTap: false,
        width: "60%",
        height: "60%",
        items: [{
            xtype: 'fieldset',
            title: 'Personal Info',
            instructions: 'Please enter the information above.',
            defaults: {
                labelAlign: 'left',
            },
            items: [{
                xtype: 'textfield',
                name: 'title',
                label: '标题'
            }, {
                xtype: 'textfield',
                name: 'loginName',
                label: '用户名'
            }, {
                xtype: 'passwordfield',
                name: 'password',
                label: '密码'
            }, {
                xtype: 'passwordfield',
                name: 'passwordRepeat',
                label: '重复密码'
            }, {
                xtype: 'textareafield',
                name: 'memo',
                label: '备注'
            }],
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                text: '取消',
                ui: 'back'
            }, {
                xtype: 'spacer',
            }, {
                text: '删除',
                ui: 'delete'
            }, {
                xtype: 'spacer',
            }, {
                text: '确定',
                ui: 'confirm',
            }],
        }],
    },
});


