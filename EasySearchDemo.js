Cats = new Mongo.Collection('cats');

//Searches furColor and name fields
Cats.initEasySearch(['furColor', 'name']);

if (Meteor.isClient) {
  Template.body.helpers({
    cats: function(){
      return Cats.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
