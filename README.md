# Myapp

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

----------------------------------------------


1. ember new myapp
2. cd myapp
3. npm install
4. change ember and ember-data to ^2.0.0 in bower.json
5. bower install
6. install bootstrap from bower
7. ember generate route about - change in the template - about.hbs
8. ember generate route posts - change in the template - posts.hbs
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <a class="navbar-brand" href="#">Bloggr</a>
  <ul class="nav navbar-nav">
    <li>
      {{#link-to 'about'}}About{{/link-to}}
    </li>
    <li>
      {{#link-to 'posts'}}Post{{/link-to}}
    </li>
  </ul>
</nav>

<h1 id="title">Welcome to Bloggr</h1>

<body>
  {{outlet}}
</body>

9. ember generate model post title:string author:string intro:string extended:string publishedAt:date

10. routes/posts.js
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return posts;
  }
});

var posts = [
        {
            id: 1,
            title: "Writing a blog in Ember",
            author:"author 1",
            intro: "I am writting a blog",
            extended: "ooohh la laaaaaaaaa",
            publishedAt: new Date('12-07-2015')
        },
        {
            id: 2,
            title: "Writing a blog in Ember2",
            author:"author 2",
            intro: "I am writting a blog",
            extended: "ooohh la laaaaaaaaa",
            publishedAt: new Date('12-07-2015')
        },
        {
            id: 3,
            title: "Writing a blog in Ember3",
            author:"author 1",
            intro: "I am writting a blog",
            extended: "ooohh la laaaaaaaaa",
            publishedAt: new Date('12-07-2015')
        },
        {
            id: 4,
            title: "Writing a blog in Ember4",
            author:"author 1",
            intro: "I am writting a blog",
            extended: "ooohh la laaaaaaaaa",
            publishedAt: new Date('12-07-2015')
        }
    ];

inside posts.hbs, add:
<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="recent-post">
  <p><strong>Recent Posts</strong></p>
  {{#each model as |post|}}
    <p>{{post.title}} by {{post.author}}</p>
  {{/each}}
</div>
10.fdhfdgf