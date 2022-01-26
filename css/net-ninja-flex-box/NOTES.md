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