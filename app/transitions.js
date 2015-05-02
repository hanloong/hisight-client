export default function() {
  this.transition(
    this.toRoute(function(routeName){ return true; }),
    this.use('fade'),
    this.debug()
  );
}
