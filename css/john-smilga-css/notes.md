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

## VH and VW
- Relative
- Depends on the screen
- pro-tip | issue as vw is calculating the scrollbar too in windows, need to figure out something about it.
            overflow:hidden;

# USER AGENT STYLES
- Browser styles

# CALC
- Used to calculate stuff
- Can mix and match values

# OVERFLOW

## height:auto
- By default Height is auto

## min-height
- the minimum height the element should have will be specified in the min-height, everything higher will be auto. (atleast)

## max-height 
- the maximum height can be specified, where the minimum height is 0 and the max we can go is the value specified. (atmost)

## OVERFLOW
- overflow property determines what happens on our page when the content overflows.

# FONTS

## FONT FAMILY
- Inorder to prevent font inavailabily, it's better to use a font-stack, that is, a buncha fonts together. The first font will be used if it's present else it'll fallback to the other fonts.
- Basic fonts in browsers -> serif, sans-serif, cursive, fantasy, monospace
- Be wary of load time.
- Google Fonts

## FONT STYLE
- Italic - Uses kinda a different style altogether
- Oblique - Just slants stuff
- Normal - use when you have a bunch of elements which are of one style and you want to exhibit the normal style to THAT particular element.

# BOX MODEL

<div style="text-align:center;">
    <img src='https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif' style="width:300px;"/>
</div>

## SINGLE VALUE 
- Applied on all 4 sides

## TWO VALUES
- TOP\BOTTOM LEFT\RIGHT

## FOUR VALUES
- TOP RIGHT BOTTOM LEFT 

## BORDER
- border: border-width border-style border-color;
- border-<top/bottom/left/right>: border-width border-style border-color

## BORDER RADIUS
- border-radius: <any-unit>;

## NEGATIVE MARGIN 
- Will start to overlap with other elements if the margin reduces. To move closer to other elements.
- **DIFFERENT FROM Z-INDEX**

## OUTLINE AND OUTLINE-OFFSET
- To create borders that can either span outward or inward with the help of outline-offset property

# DISPLAY PROPERTY

## BLOCK
- Starts a new line
- Spans acorss the screen
- Browser respects width/heigh, top/bottom margin.

## INLINE
- No new line
- Spans only the content
- Browser does not respect width/heigh, top/bottom margin.

## INLINE-BLOCK
- No New Line
- Browser respects width/heigh, top/bottom margin.

## CENTERING INLINE ELEMENT
- Work with the parent
    <pre>
        parent{
            text-align:center;
        }
    </pre>
- this centers the child inline tag

## CENTERING BLOCK ELEMENT
- Work with the element
    <pre>
        
    </pre>



# BOX-SIZING

## BORDER-BOX
- When you want the padding to partition the width and height of a box.
- Instead of element getting bigger the padding is applied inside the element.

## CONTENT-BOX
- When you want the padding to be added to the width and height of a box.
- Element gets bigger.

# VISIBILITY

## display:none
- Remove from the flow. Hide the element and collapse the space.

## visibility:hidden and opacity:0
- Hides the element but we preserve the space it occupied

# background

## background-repeat: repeat;
- Repeat the images, default
- Free space gets created
## background-repeat: no-repeat;
- Don't repeat
## background-repeat: repeat-x;
- Repeat on x dir
## background-repeat: repeat-y;
- Repeat on y dir
## background-repeat: space;
- gives space while repeating, give space instead of cutting off the images | Make it round
## background-repeat: round;
- repeat an image if there's space left, otherwise stretch the original image until you have space left to insert another image.

## background-size:cover;
- Scales the image as large as possible to fill the container, stretching the image if necessary. If the proportions of the image differ from the element, it is cropped either vertically or horizontally so that no empty space remains. 

## background-size:contain;
- It just places the image inside the div and then it repeats the image if no-repeat is not set.

## background-position:
- This is used to postion the image.

## background-position:center; 
- Centers the image.

## background-position:persentage-x percentage-y;
- consider the whole canvas range from 0 to 100 on x and y. Now, 50% 50% centers top adn bottom.  

## background-attatchment:fixed;
- the image will be fixed while everything else moves when scrolled

## background-attatchment:scroll;
- the image moves when scrolled

# LINEAR GRADIENTS

1. Two main parameters, the first one is direction and from the second you can add as many colors as you want.
2. First parameter is the direction, it's *to bottom* if nothing is provided. Can provide degrees or combine keywords, *to top left, to bottom right*.
3. Can also provided degrees like *180deg, 270deg, 0deg*.
4. Use RGBA to include opacity.
5. To determine when the process of transition to start, provided percentages.
  
# BACKGROUND-SHORTHAND

- LUPSRA
- Linear Gradient
- Url of the image
- position (position:center)
- size (size:cover)
- repeat (repeat:no-repeat)
- attachment (attachment:fixed)

# FLOAT

- Makes anything that comes after the image floats around the image that had float:left or float:right

- Literally the primitive way of creating columns.

## [COLLAPSED MARGINS](https://stackoverflow.com/questions/8509431/margin-not-adding-on-elements/8509489)

# POSITION

## ABSOLUTE
- Closest parent with position:relative; or with regards to the canvas (body)
- Browser will fill up the left space.
- Even if you did not add any top, right, bottom or left, its still gonna be filled up by the browser.
- Analogically, you'll position as if it's coordinates

## RELATIVE
- Analogically, you'll position as if it's margins

## FIXED
- Forever, Fixed. To position this use position:absolute

## STICKY
- It's relative in the beginning, but as we reach the coordinates that we has specified it toggles to fixed.

# SELECTORS

- .selector ">" selector2 => only the direct children of selectors will be picked
- .selector selector2 => every descendent there exist within the selector will be picked

## SPECIAL SELECTORS

- p::first-line { ... } => add styles to the first element
- p::first-letter { ... } => add styles to the first letter

# PSEUDO-CLASSES

## :hover
- specifiy the property when you hover over.

# :root
- Used to specify or change something at the root leve
- similar to html{...}

# transoform

## translate

- It is used to move (translate) the elements based on the value provided. Think of the value provided as cooridinates. And the top right corner is (0,0) and the positive x directionis from the left to the right and the positive y direction is from top to bottom. Adding +XXpx will move the element XXpx size towards right. Where -XXpx move the element XXpx size towards left.
- The overlap is based on the position of div. The most recent div will be on top.