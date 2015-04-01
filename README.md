fab - Floating Action Button
===================

Android [floating action button](http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button) which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.

[Demo](http://codepen.io/hafizbilal112/pen/zxWJGd)

## Usage

Include `fab.css` and `fab.js` after the rest of your Ionic or Angular Material includes. Then use the following AngularJS directives:

```html
<fab target-id="scrollFabTarget">
    <i class="icon ion ion-android-add"></i>
</fab>
<scrollable-div id="scrollFabTarget">
</scrollable-div>
```

###Note
Values of attr "target-id" on fab directive and scrollable div attr "id" should be same.
