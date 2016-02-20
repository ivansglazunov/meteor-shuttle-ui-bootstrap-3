Template.ShuttleDropdown.helpers({
    inputTemplate: function() {
        if (!this.inputTemplate) return 'ShuttleSearchInput';
    },
    defaultTemplate: function() {
        if (!this.defaultTemplate) return 'ShuttleSearchDefault';
    }
});