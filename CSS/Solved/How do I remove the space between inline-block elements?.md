### SOLUTION 1 - ONLY CSS

Add font-size: 0 to the parent element and then declare a sensible font-size on the children.

```html
<ul class="parent">
  <li class="child">Child1</li>
  <li class="child">Child2</li>
  <li class="child">Child3</li>
</ul>
```

```css
.parent {
  font-size: 0;
}
.child {
  font-size: 16px;
}
```

##### BROWSER COMPATIBILITY

This works in recent versions of all modern browsers.

- IE8+ ok
- Safari6+ ok

### SOLUTION 2

Remove the whitespace in the HTML between the inline-block elements

##### TYPE 1

```html
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
</ul>
```

##### TYPE 2

```html
<ul>
  <li>Item1</li>
  <!--
  -->
  <li>Item2</li>
  <!--
  -->
  <li>Item3</li>
</ul>
```

##### TYPE 3

```html
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
</ul>
```

### REFERENCE

- [How do I remove the space between inline-block elements? - Stackoverflow](https://stackoverflow.com/questions/5078239/how-do-i-remove-the-space-between-inline-block-elements)
