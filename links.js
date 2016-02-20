Template.ShuttleLinks.helpers({
    links: function(method) {
        return this.tree.linksFrom(
            this.source,
            this.inherited?{}:{ _inherit: { $exists: false } }
        );
    }
});
Template.ShuttleLinksLink.helpers({
    class: function() {
        var parent = Template.parentData(2);
        if (parent.class) return parent.class;
        else return 'btn btn-default btn-sm';
    }
});