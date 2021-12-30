# MY NOTES

## CSS RULE
> selector { ... } 

## SELECTOR
- 

## { }
- declaration block

## LINE
- properties
- values
- declaration itself
- terminated with <strong>;</strong>
- <strong>properties</strong> and <strong>values</strong> are seperated by <strong>:</strong>

# IDS 
- IDS Need to be unique
- If repetition, we have to use classes
- (Note, there's no utility "ID" in Tailwind, just utility "classes")
- Grouping IDs
    > #title, #content

# CLASS
- Duplication
- can have both class and id over the same element
- can have multiple classes, but be it like this, <pre>class="class1 class2"</pre> inside HTML

# DIV AND SPAN

## DIV
- As you know, it's for grouping multiple elements together. 

## SPAN
- Span is used to group inline contents.

# OVERRIDING PROPERTIES

- All the properties will be passed to the child and applied unless the child overwrites it gives new properties. Some properties are not going to be inherited. For instance, if you apply border to body, the whole body will have border not each children of the body tag.

# LAST RULE

- Last value will be one that'll be used on our element.

# SPECIFICITY

    ID > CLASS > NAME-SELECTOR > *

# COLORS

- background: -> can set both color and image
- background-color: -> set color

## RGBA
- RGBA where A gives you transparency.
- RGBA can be used to overlay text over images and allows improved readability of the text.

## HEX 
- color: \#(0-f)(0-f)(0-f)(0-f)(0-f)(0-f);
- also,
    > color: #d3d; is literally color: #dd33dd; 

    > Which explains why #fff gives us white and #000 gives us black and #f00 gives us red.

# UNITS

## PIXELS
- Absolute, almost like a dot

## PERCENTAGES
- Relative, depends on the parent element. If the parent element does not have a height, then no matter the child percentag me, the child won't be displayed (because it's a fraction of 0, which is 0).

## EM
- em changes with the base value of the parent (or browser if parent does not specify base value)
- By default, as part of body tag, it's base value is 16px
- 1 em = 16px | MEDIUM of the browser, 
              | if VERY LARGE then 1 em will be larger
- If parent changes, 1 em will be based on the parent size

## REM
- ROOT EM | Where root is html | Can change that using html{ font-size:...;}
- Base Value of Root 16px