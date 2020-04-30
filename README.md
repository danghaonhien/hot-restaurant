Hot Restaurant WebApplication

This website is designed to make a platform for the Hot Restaurant to communicate with its customers and visitors. By using visual approach and providing features such as make reservation online, the app makes it more convienient for the customers and the restaurant.

Orders:
The application has 6 main pages, and each page has its own function.

Techonologies :
React , Heroku, MySql

React-Bootstrap and Mdbootstrap-React library.

NavBar: Using Navbar component from Mdbootstrap to have a short fun animation.

Homepage: Using sliding Carousel with vibrant pictures of the restaurants as navigations to the main pages.
-Using actual comments from customers to provide proofs of quality for food and services. It also helps communicating with the customers.

Reservation page: you insert your informations -Name and Email and Phone Number -
When you hit the submit button, all your iformation will save inside the database by the POST request.
Using react-bootstrap and regular bootstrap for the style.

WaitingList page: we have 10 spaces for tablelist. If more than 10 tables, it will be added to the waitlist. Using GET request to get all the
Information from the database.

You can view your information via Detail button using GET request by specific ID.
You can modify your information by using the Update button.
Using PATCH and GET request for the Update function.
You can also delete the table by the Delete button. Using DELETE request for Delete function. Using react-bootstrap and regular bootstrap for style.

Inside the Reservation and WaitingList page you can see how many available tables left. Using GET request for the count(ID).

Menu page: Showing the course menu and popular food photos. Using Mdbootstrap for styling.

On the comment page, you can leave your feedback or reply to other people’s feedback. By clicking the send or reply button, the app will take the user’s input and save it to the database using a post request. Every comment has its own input box for the reply, and the reply will be saved to the database with its corresponding comment’s id. One comment can have multiple replies. The app retrieves the data from the database by using a get request then appears it on the page.
