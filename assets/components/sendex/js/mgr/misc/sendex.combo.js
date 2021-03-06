Sendex.combo.User = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		name: 'user_id'
		,fieldLabel: _('sendex_subscriber')
		,hiddenName: config.name || 'user_id'
		,displayField: 'username'
		,valueField: 'id'
		,anchor: '99%'
		,fields: ['username','id','fullname']
		,pageSize: 20
		,url: MODx.config.connectors_url + 'security/user.php'
		,editable: true
		,allowBlank: true
		,emptyText: _('sendex_select_user')
		,baseParams: {
			action: 'getlist'
			,combo: 1
		}
		,tpl: new Ext.XTemplate(''
			+'<tpl for="."><div class="sendex-list-item">'
			+'<span><small>({id})</small> <b>{username}</b> ({fullname})</span>'
			+'</div></tpl>',{
			compiled: true
		})
		,itemSelector: 'div.sendex-list-item'
	});
	Sendex.combo.User.superclass.constructor.call(this,config);
};
Ext.extend(Sendex.combo.User,MODx.combo.ComboBox);
Ext.reg('sendex-combo-user',Sendex.combo.User);


Sendex.combo.Newsletter = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		name: 'user_id'
		,fieldLabel: _('sendex_newsletter')
		,hiddenName: config.name || 'user_id'
		,displayField: 'name'
		,valueField: 'id'
		,anchor: '99%'
		,fields: ['id','name']
		,pageSize: 20
		,url: Sendex.config.connector_url
		,editable: true
		,allowBlank: true
		,emptyText: _('sendex_select_newsletter')
		,baseParams: {
			action: 'mgr/newsletter/getlist'
			,combo: 1
		}
		,tpl: new Ext.XTemplate(''
			+'<tpl for="."><div class="sendex-list-item">'
			+'<span><small>({id})</small> {name}</span>'
			+'</div></tpl>',{
			compiled: true
		})
		,itemSelector: 'div.sendex-list-item'
	});
	Sendex.combo.Newsletter.superclass.constructor.call(this,config);
};
Ext.extend(Sendex.combo.Newsletter,MODx.combo.ComboBox);
Ext.reg('sendex-combo-newsletter',Sendex.combo.Newsletter);