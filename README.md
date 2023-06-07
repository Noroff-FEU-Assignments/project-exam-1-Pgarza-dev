# Personal Blog Project

To put into practice the skills learned over your first year of studies. The purpose
of this project was to create a blog site that contained a carousel of images/posts that would let the user scroll from post to post. A contact form for users to use. A blog page displaying the posts. And a post-specific page. The project also required to have a contact form for user submission

### Description

#### Home Page
The home page displays a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. The user can also click back to view results they had previously seen.

#### Blog Page

The blog posts displays the first 10 blogs, and the user can click to view more results which then show underneath the first 10 blogs.

#### Blog-Specific Page

The content of the blog specific page is dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page changes based on the blog that has been clicked on.

If images on the blog post page are clicked, a modal will appear, giving the user a bigger view of that image. Clicking outside the image should hide the modal.

#### Contact page

Contact us page form
-	Name (Should be more than 5 characters long)
-	Email address (Must be a valid email address)
-	Subject (Should be more than 15 characters long)
-	Message content (Should be more than 25 characters long)

JavaScript is usee for validation, showing error messages if the values in the textboxes do not meet the requirements.

#### WordPress

The content for the website is stored on a WordPress installation used as a Headless CMS. It’s important to note that WordPress is only being used to provide an API and add content for the blog, but the website is built using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data. 

The project has two aspects:
-	API from your WordPress installation
-	Website built with HTML, CSS and JavaScript

## Built With

- JavaScript
- HTML
- CSS
- Word Press for makeing API calls
- Adobe XD for project designs
- Bluehost.com for my project domain


## Getting Started

### Installing

1. Clone the repo:

```bash
git clone [REPO](https://github.com/Noroff-FEU-Assignments/project-exam-1-Pgarza-dev.git)
```

2. Install the dependencies:

```
npm install
```
Instal Live Server


### Running

To run the site, run the following commands:

```bash
npm run start
```
[liveServer] - instaling live server will allow you to run the site localy on your own machine

[Netlify] - this link will take you directly to the live site
          - [site](https://magenta-froyo-390b3f.netlify.app/)


## Contact

[My Twitter page](https://twitter.com/PabloGarzaMMA)

[My LinkedIn page](https://www.linkedin.com/in/pablo-garza-4a897762/)

[Email](p.garza1983@gmail.com) 


## Contributing

Please make sure to open a pull request so code can be reviewed.
----------------------------------------------------------------------










