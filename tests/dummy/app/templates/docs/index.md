# Overview
This addon gives you a table component with the following features:

* valid HTML
* filtering/sorting/pagination
* dynamic/rearrangeable/toggable columns
* custom rendering component for cells
* possibility to send actions from the cell component to the upper components
* easy i18n

# Installation
You need to run this command in order to install the addon:
```
$ ember install ember-dyna-table`
```


This will install the following components into your application: `d-table`, `d-pagination`,
`d-header`, `d-tbody` and others.

# Basic usage
You can choose one of two styles to describe your table

## Code style
When you using this style you manage your table via javascript code of the controller (or component) that renders the table.
{{snippets/basic-usage-code-style}}

## Template style
Using this style you describe your table in the template.
{{snippets/basic-usage-template-style}}

For more examples see the {{#link-to "docs.cookbook"}}cookbook{{/link-to}}
# Styling
This addon contains no CSS focusing only on producing correct HTML markup. That's why it can be used as a base 
for extention to other addons.
