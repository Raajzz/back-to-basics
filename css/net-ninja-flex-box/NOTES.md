# FLEXBOX

- Apply flex to parent element and every direct element inside the parent element becomes flex elements.

(Note: If you want to have a good compatability with all browsers, better go for tools like modernizer)

<pre>
    <div class="box one">
      <div class="one-one">
        <div class="one-two">
        </div>
    </div>
  </div>

  the styles of one-two is overlapping one and one-one
</pre>

flex-grow, is used to make the element occupy the empty spaces.
Assume you have 3 elements with flex-grow:2; each, the whole thing will be divided into 6 parts and all 3 elements will get equal quantity (or value).

flex-shrink, is used to shrink the elements when the screen gets smaller. The rate is provided as value to the property.

### FLEX-WRAP

- Default behavior is no-wrap
- We also have wrap and wrap-reverse

##### WRAP
- Pushes elements down when there isn't any space
  left.

##### WRAP-REVERSE
- Wraps, but it's going to make the last element 
  move up, that which should've been pulled down.

### FLEX-BASIS
- Similar to min-width, except when you go below the basis
  width, it'll shrink the element rather than giving you an
  option to scroll

### SHORTHAND
   ```css
    flex: <flex-grow> <flex-shrink> <flex-basis> 
  ```

> `display:flex;` means they're `flex-level` elements not `inline-level` or `block-level` or `inline-block-level` elements 

## MENU EXAMPLE

- When working with ul, when you try to remove the bullet points
  the padding to the left stays, what you can do here is to 
  remove the bullet points using `list-style-type:0;` and `padding:0;`