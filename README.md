# ShuttleUIBootstrap3

```js
meteor add ivansglazunov:shuttle-ui-bootstrap-3
```

The basic elements of the interface to work with links in the trees.
Designed to work with the package [ivansglazunov:shuttle](https://github.com/ivansglazunov/meteor-shuttle) and any tree of rights.
Required package [easy:search](https://github.com/matteodem/meteor-easy-search) for search indexes.

## Template.ShuttleSearchDropdown
> source: Document
> tree: Mongo.Collection
> links: Boolean == true
> search: Boolean = true
> removing: Boolean = true
> removingInherited: Boolean = false
> inherited: Boolean = true
> defaultTemplate?: String = "ShuttleSearchDefault"
> inputTemplate?: String = "ShuttleSearchInput"
> class?: String = "btn btn-default btn-sm"

In example required package [ivansglazunov:dropdowns-bootstrap-3](https://github.com/ivansglazunov/meteor-dropdowns-bootstrap-3).

### Panel with links as dropdown trigger

```html
{{#dropdownTrigger name="uniqueName" }}
	{{> ShuttleLinksPanel source=user tree=Shuttle.Fetching}}
{{/dropdownTrigger}}
{{#dropdownBootstrap name="uniqueName" direction="s"}}
	{{> ShuttleDropdown source=user index=Meteor.users.Index tree=Shuttle.Fetching links=false}}
{{/dropdownBootstrap}}
```

### Button as trigger for dropdown with links

```html
{{#dropdownTrigger name="uniqueName2" }}
	<button class="btn btn-link">Fetching</button>
{{/dropdownTrigger}}
{{#dropdownBootstrap name="uniqueName2" direction="s"}}
	{{> ShuttleDropdown source=user index=Meteor.users.Index tree=Shuttle.Fetching}}
{{/dropdownBootstrap}}
```

### With header

```html
{{#dropdownTrigger name="uniqueName2" }}
	<button class="btn btn-link">Fetching</button>
{{/dropdownTrigger}}
{{#dropdownBootstrap name="uniqueName2" direction="s"}}
	{{# ShuttleDropdown source=user index=Meteor.users.Index tree=Shuttle.Fetching}}
		<h3 class="popover-title">Fetching</h3>
	{{/ ShuttleDropdown}}
{{/dropdownBootstrap}}
```

## Template.ShuttleLinks
> source: Document
> tree: Mongo.Collection
> removing: Boolean = true
> removingInherited: Boolean = false
> inherited: Boolean = true
> class?: String = "btn btn-default btn-sm"

As `ShuttleLinksPanel` without border and padding.

```html
<div class="panel panel-default">
	<div class="panel-body well-sm">
		{{> ShuttleLinks source=user tree=Shuttle.Owning class="btn btn-default btn-sm"}}
	</div>
</div>
```

## Template.ShuttleSearchInput
> index: EasySearchIndex
> attributes?: Object

```html
<div class="input-group">
	{{> ShuttleSearchInput index=Meteor.users.Index}}
</div>
```

## Template.ShuttleSearchItems
> source: Document
> index: EasySearchIndex
> tree: Mongo.Collection
> multiple: Boolean = false
> ignoreInherited: Boolean = true

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

## Template.ShuttleSearchItem
> document: Document
> source: Document
> tree: Mongo.Collection

Meets logic [Templater](https://github.com/ivansglazunov/meteor-templater) package.
Look for template with type `ShuttleSearchItem` of document document.
After `click`, insert link in to `tree` with `target = document` and `source = source`.

## Template.ShuttleSearchDefault
The default list item template.
It contains the active user and the cursor `Shuttle.groups`.

## Versions

### 0.0.5
* Support `ivansglazunov:delete`
* Remove not supported
* Support `ivansglazunov:restrict`

### 0.0.3
* `Template.ShuttleDropdown` with `UI.contentBlock`

### 0.0.1
* `Template.ShuttleSearchDefault`
* `Template.ShuttleDropdown`
* `Template.ShuttleLinksPanel`