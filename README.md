fab - Floating Action Button
============================

Android [floating action button](http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button) which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.

## Demo

[ionic-example](http://hafizbilal112.github.io/fab/ionic-example/)

[angular-material-example](http://hafizbilal112.github.io/fab/ionic-example/)

## Usage

Include `fab.css` and `fab.js` after the rest of your Ionic or Angular Material includes. Then use the following AngularJS directives:

```html
<!-- scrollable element -->
<div fab-scroll-container>
</div>
<!-- fab directive must be after scrollable element -->
<fab>
    ...
</fab>
```

## Options

disabled live displace (move) - default true - type boolean:

```html
<fab live-displace="false">
    ...
</fab>
```
