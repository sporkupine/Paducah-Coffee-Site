# Paducah Coffee Site

Developing a new site for Paducah Coffee Company, with e-commerce functionality and a blog. More utility to be added as I think of it.


(update 2/2022) This has become less of a production web store, and more of a coding playground / digital scratch paper for me to tinker with design and function ideas. The actual PCC site will be created using WordPress and existing tools for payment processing and secure checkout.

(update 7/2022) Work has begun on a Ruby on Rails back-end to control most of the business/database logic of the application. This will allow me to implement user roles, handle cart/checkout functionality, implement an inventory system, and allow logged-in customers to "favorite" certain products for more streamlined future purchases.


## TO DO:
- Create a back-end/API using Rails to handle user login, roles (admin vs customer), inventory etc.
- 
  - users should be able to 'favorite' certain products
    - favorite button in place, doesn't do anything as of yet
    - will likely add product ID to user's "favorites" in back-end
  - look into having 'admin' authorized accounts
    - admin accounts should be able to post/edit/delete blog posts as well as products
    - roles will be handled by the back-end in Rails

- Cart functionality
  - re-work the "checkout" function
  - currently, checkout button empties 'cart' array
  - would like to move contents to a 'purchased' array and display it in cart view.
  - Merge duplicate products in cart, show number instead of duplicates
    - may need to make Cart an array of arrays, with logic to check if an item already exists before pushing. See StackOverflow page on subject.
      - (https://stackoverflow.com/questions/54809558/merge-duplicate-objects-in-an-array) or (https://stackoverflow.com/questions/30025965/merge-duplicate-objects-in-array-of-objects)
- Homepage Content
- Stock photos in Shop & Product views
  - Have recovered the photos from the original Wordpress site and will be working those into the design
- add unselectable "sold out" products to Product view, but not Shop view (MAY SCRAP THIS)
- better organization in Shop &/or Products view ~~- try Bootstrap "card" class~~
  - tinker with card configuration. ~~Maybe the card needs to be on the Shop/Product component rather than product-item?~~
  - ~~this could help with the add to cart button issue~~
- make the Search bar work. I don't care what it does, just make it do something.
  - ~~this will apparently be covered in the Forms section~~
  - ~~array.filter, probably?~~
  - probably going to use [Algolia](https://www.algolia.com/doc/) API to search through blog posts and products (that need to be put in a database anyway)
- implement lazy loading and preloading for all components other than HomeComponent
  - first must optimize and reorganize the entire app
    - each feature module must have its own routing config to implement lazy loading

- Implement the loading spinner (cart component, blog component. really anywhere that will/does connect to Firebase)

- Allow authenticated users to "favorite" products in the Shop or Products components.


### DONE:
- Fix broken hamburger button on navbar collapse
- Finish routing
- Dummy content in Blog view
- - Fix active link tracking in header
-- maybe ask in class about this one
- Make a Cart component
- Make a Products component
- add About view (replace Product?)
- put logo image into files
  - use logo for icon
  - figure out why logo file won't work for icon
- Change Blog view so that blog homepage displays blog titles, dates, maybe a brief description. User can click on blog title and be taken to blog post.
  - Blog view works fine, but struggling to load individual blog posts. URL is updating properly, so I think I just need to watch Max do it again to see what I'm forgetting.
 - Add a 'Contact Us' view/page. Use new forms knowledge to implement a contact form allowing users to email me.~~
 - remove 'add to cart' button from Product view
   - find a way to contain it in Shop component rather than product-item component?
 - use pipes to change the date output of the blog posts
 - Connect to Firebase authentication
 - Create loading spinner
  - add loading spinner to auth component
- add a footer with social media icons, sitemap, etc (Google all the info that should go in the footer)


- favorite button bug
  - documenting so I can work through it and know what to Google later
  - favorite button is custom checkbox on each Product card
  - looks as intended, hover functionality works, animation and css change works when checked
  - the problem: trying to check any of the buttons on any product will only check/uncheck the first card
    - I think this is an Angular problem? But I can't find much documentation of it
  - it seems the problem is that each "checkbox" needs a unique ID or they all get treated as the same thing, so the first one is the only one that is active
  - potential lead: https://stackoverflow.com/questions/50289383/checkbox-inside-ngfor-only-first-checkbox-is-getting-selected-deselected-ever/50289609


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
