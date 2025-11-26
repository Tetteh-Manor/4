# Assignment 4: Code Your Figma (LinkedIn Clone)
# Student Name: Bezaleel Tetteh Manor

------------------------------------------------------------------
1. THE DESIGN I IMPLEMENTED
------------------------------------------------------------------
I chose to clone the "Home Feed" of LinkedIn. I selected this because it is a real-world application that uses a complex grid layout.

- Layout: I used a 3-column CSS Grid layout for the main content (Profile Sidebar, Main Feed, News Widget) and Flexbox for the top Navigation Bar.
- Styling: I matched the colors (light gray background #f3f2ef), card styles (white background with rounded corners), and button styles to resemble the actual LinkedIn interface.

------------------------------------------------------------------
2. DESCRIPTION OF JAVASCRIPT INTERACTIONS
------------------------------------------------------------------
My project includes three specific interactions to satisfy the requirements:

1. Dark Mode Toggle: 
   - A button in the navbar listens for a 'click' event.
   - It toggles the class .dark-mode on the body element, which changes the background and text colors using CSS variables.

2. Follow Button State Change: 
   - I used document.querySelectorAll to find the "+ Follow" buttons.
   - When clicked, the button changes text to "Following" and updates its styling (border/color) to indicate the state has changed. Clicking it again reverts it.

3. New Post Validation: 
   - The "Post" button checks if the input field is empty.
   - If the user types text, it alerts "Success". If the input is empty, it alerts the user to "Please write something."

------------------------------------------------------------------
3. CHALLENGES FACED
------------------------------------------------------------------
One challenge I faced was making the layout responsive. Initially, the three columns squished together on smaller screens. I solved this by adding a CSS Media Query (@media max-width: 768px) that changes the Grid template to a single column so the sidebars stack or disappear on mobile devices.
