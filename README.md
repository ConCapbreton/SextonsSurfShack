Sexton's Surf Shack!
A Typescript React E-commerce store.

Overview: 

In this project I aimed to create a website that is easy to maintain and update and is accessible to all users. 

- Products are automatically created, updated and deleted if the the relevant source data is changed. 
- Product categories can be efficiently created, updated and deleted thanks to the generic ProductDisplay component and the use of Category Titles variables in the context file. 
- The user can only select up to the maximum number in stock of a particular product option and the user is informed if a product option is out of stock. 
- Tab Indexing is in a logical order and dynamic to improve to experience for users who cannot use a mouse.  
- Aria labels are also dynamic to improve the experience for users that require the screen reader.

Technical Features: 
 
- The site makes use of several of React's hooks including useState, useEffect and useContext.
- Manipulation of data using .map(), .filter(), for loops etc
- An image slider to switch between product pictures, descriptions and prices enhanced using CSS animations.
- The site's format changes for different screen sizes.

Enhancement ideas: 

- Prefers-reduced-motion for CSS animations
- React-swipeable-button for the image slider for mobile users
- If product Images are clicked they become full screen
- Shopping Cart / Checkout functionality
- Product search bar / filters for price, manufacturer etc