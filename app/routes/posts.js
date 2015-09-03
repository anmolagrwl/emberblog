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