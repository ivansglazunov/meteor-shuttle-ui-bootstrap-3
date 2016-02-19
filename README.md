# ShuttleUIBootstrap3

```js
meteor add ivansglazunov:shuttle-ui-bootstrap-3
```

The basic elements of the interface to work with links in the trees.
Designed to work with the package [ivansglazunov:shuttle](https://github.com/ivansglazunov/meteor-shuttle) and any tree of rights.
Required package [easy:search](https://github.com/matteodem/meteor-easy-search) for search indexes.

## Template.ShuttleLinks
```html
<div class="panel panel-default">
	<div class="panel-body well-sm">
		{{> ShuttleLinks source=user tree=Shuttle.Owning class="btn btn-default btn-sm"}}
	</div>
</div>
```

## Template.ShuttleSearchInput
```html
<div class="input-group">
	{{> ShuttleSearchInput index=Meteor.users.Index}}
</div>
```

## Template.ShuttleSearchItems
```html
<div class="list-group">
	{{#EasySearch.IfInputEmpty index=Meteor.users.Index}}
		{{#each Shuttle.groups}}
			{{> ShuttleSearchItem document=this source=(../../user) tree=Shuttle.Fetching}}
		{{/each}}
	{{else}}
		{{> ShuttleSearchItems source=(../user) index=Meteor.users.Index tree=Shuttle.Fetching}}
	{{/EasySearch.IfInputEmpty}}
</div>
```