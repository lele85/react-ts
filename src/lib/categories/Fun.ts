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

export let incr:Fun<number,number> = fun(x => x + 1);
export let isEven:Fun<number,boolean> = fun(x => x % 2 ===0);
export let not:Fun<boolean,boolean> = fun(x => !x);

export let f:Fun<number,boolean> = incr.then(isEven).then(not);