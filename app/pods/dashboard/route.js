import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

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

var lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
    label: "My First dataset",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    label: "My Second dataset",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [28, 48, 40, 19, 86, 27, 90]
  }
  ]
};

var statusData = [
  {
  value: 20,
  label: 'Discussing',
  color: colors.gray,
  highlight: colors.grayHighlight
},
{
  value: 43,
  label: 'Accepted',
  color: colors.pink,
  highlight: colors.pinkHighlight
},
{
  value: 12,
  label: 'In Progress',
  color: colors.green,
  highlight: colors.greenHighlight
},
{
  value: 33,
  label: 'Completed',
  color: colors.blue,
  highlight: colors.blueHighlight
},
{
  value: 33,
  label: 'Rejected',
  color: colors.orange,
  highlight: colors.orangeHighlight
}
];

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return {
      ideasByProject: {
        chartData: data,
        options: {
          percentageInnerCutout: 80,
          responsive: true
        }
      },
      ideasByStatus: {
        chartData: statusData,
        options: {responsive: true}
      },
      activity: {
        chartData: lineData,
        options: {responsive: true}
      },
      projects: this.store.find('project')
    };
  }
});
