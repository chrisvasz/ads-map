// TODO keep all locations in the database, but only publish
// the ones that haven't been deleted ("active" flag?)

Locations = new Meteor.Collection("locations");

Meteor.publish("locations", function () {
  return Locations.find({ deleted: false });
});
