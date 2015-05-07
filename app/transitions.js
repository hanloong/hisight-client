export default function() {
  this.transition(
    this.toRoute(function(){ return true; }),
    this.use('crossFade')
  );
}
