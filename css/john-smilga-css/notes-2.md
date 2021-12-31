# MEDIA QUERIES

- Style elements on different screen sizes
- Responsive Designs
- max-width and min-width will be used
- Mobile First 
### IMPORTANT: THE LAST RULE PRINCIPLE WORKS WITH MEDIA QUERIES
### for  min-width  increase as you move down
    > Why? Well, as per the last rule principle, it'll check the last guy and take it for granted, if it finds something smaller it takes that for granted, therefore, arrange media queries such that the smallest media query is at the top of the file.

    > TL;DR -> IT'S THE STARTER, ATLEAST, THERFORE ARRANGE MEDIA QUERIES SUCH THAT SMALLEST MEDIA QUERY IS AT THE TOP.

    > MOBILE FIRST (?)

### for > max-width < increase as you move down
    > Why? Well, as per the last rule principle, it'll check the last guy and take it for granted, if it finds min-height(10000) there, well that's granted therefore, arrange media queries such that the largest media query is at the top of the file.

    > TL;DR -> IT'S THE LARGEST, ATMOST, THEREFORE ARRANGE MEDIA QUERIES SUCH THAT LARGEST MEDIA QUERY IS AT THE TOP.   

# Z-INDEX

- Cannot be applied to position:static
- All elements have default 0, you can set it and manipulate it accordingly.