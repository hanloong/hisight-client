import Ember from 'ember';

var colors = {
  gray: '#263238',
  grayHighlight: '#f5f5f5',
  pink: '#ea4c89',
  pinkHighlight: '#ea4c89',
  green: '#8aba56',
  greenHighlight: '#8aba56',
  orange: '#ff8833',
  orangeHighlight: '#ff8833',
  blue: '#00b6e3',
  blueHighlight: '#00b6e3',
  lightGray: '#f5f5f5',
  lightGrayHighlight: '#263238'
};

var data = [
  {
  value: 300,
  color: colors.green,
  highlight: colors.green,
  label: "Sandbox"
},
{
  value: 50,
  color: colors.blue,
  highlight: colors.blue,
  label: "SixtyThree"
}
];

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      project: this.modelFor('project'),
      chart: {
        chartData: data,
        options: {
          percentageInnerCutout: 80,
          responsive: true
        }
      }
    });
  }
});
