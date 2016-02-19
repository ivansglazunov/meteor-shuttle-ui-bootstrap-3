Template.ShuttleSearchInput.helpers({
    _attributes: function() {
        var _attributes = { "class": "form-control", 'autofocus': 'autofocus' };
        if (this.attributes) {
            _attributes = lodash.merge(_attributes, this.attributes);
        }
        return _attributes;
    }
});
Template.ShuttleSearchItem.helpers({
    hasLink: function() {
        if (this.source && this.document)
            return this.tree.link(this.source, this.document);
    }
});
Template.ShuttleSearchItem.events({
	'click >a.list-group-item:not(.disabled)': function(event, template) {
	    template.data.tree.addLink(template.data.source, template.data.document);
	},
	'click >a.list-group-item.disabled': function(event, template) {
		template.data.tree.remove(
		    template.data.tree.link(template.data.source, template.data.document)._id
		);
	}
});