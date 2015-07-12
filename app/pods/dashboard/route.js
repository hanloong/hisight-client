import Ember from 'ember';

var colors = {
  gray: '#263238',
  pink: '#ea4c89',
  green: '#8aba56',
  orange: '#ff8833',
  blue: '#00b6e3',
  lightGray: '#f5f5f5'
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
    return {chartData: data, options: {percentageInnerCutout: 80}};
  }
});
