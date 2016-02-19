Template.ShuttleLinks.helpers({
    links: function(method) {
        return this.tree.linksFrom(
            this.source,
            this.inherited?{}:{ _inherit: { $exists: false } }
        );
    }
});