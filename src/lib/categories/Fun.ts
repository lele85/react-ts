 export interface Fun<a,b> {
     f:(_:a) => b,
     after:<c>(f:Fun<c,a>) => Fun<c,b>,
     then:<c>(f:Fun<b,c>) => Fun<a,c>
 };

export let fun = <a,b>(f:(_:a) => b) : Fun<a,b> => ({
    f:f,
    after: function<c>(this:Fun<a,b>, g:Fun<c,a>) : Fun<c,b> { 
      return fun<c,b>((x) => this.f(g.f(x))) },
    then: function<c>(this:Fun<a,b>, g:Fun<b,c>) : Fun<a,c> { 
      return fun<a,c>((x) => g.f(this.f(x))) }
});
