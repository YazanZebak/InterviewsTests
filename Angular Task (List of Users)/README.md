# Angular Task

The main goal of the task is to show your skills in the best way possible.
Please use proper styling, animation and caching.
- UI libraries such as Angular Material are allowed.
Task:
1. Create the new Angular 7+ project using angular CLI
2. Create a page with a header and paginated users list. The user list should be horizontally centered.
3. Use the following HTTP endpoint: https://reqres.in/api/users?page={page} to get the cards data, which
   includes avatar image, first_name, last_name and id for the card.
   Single user can be requested via this endpoint: https://reqres.in/api/users/{id}.
4. On click of the card, it should direct to a new page with information about this card.
5. Add instant search field (without a button) in the header to search
   User by Id and show result if user exists with ability to navigate to user details page.
6. On each individual card page, a back button should be present.
7. Introduce caching to avoid additional requests.
8. Show loading bar when there are pending network requests. 
