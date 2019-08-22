YUI.add("anim-easing",function(e,t){var n={easeNone:function(e,t,n,r){return n*e/r+t},easeIn:function(e,t,n,r){return n*(e/=r)*e+t},easeOut:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeBoth:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInStrong:function(e,t,n,r){return n*(e/=r)*e*e*e+t},easeOutStrong:function(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t},easeBothStrong:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},elasticIn:function(e,t,n,r,i,s){var o;return e===0?t:(e/=r)===1?t+n:(s||(s=r*.3),!i||i<Math.abs(n)?(i=n,o=s/4):o=s/(2*Math.PI)*Math.asin(n/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*2*Math.PI/s))+t)},elasticOut:function(e,t,n,r,i,s){var o;return e===0?t:(e/=r)===1?t+n:(s||(s=r*.3),!i||i<Math.abs(n)?(i=n,o=s/4):o=s/(2*Math.PI)*Math.asin(n/i),i*Math.pow(2,-10*e)*Math.sin((e*r-o)*2*Math.PI/s)+n+t)},elasticBoth:function(e,t,n,r,i,s){var o;return e===0?t:(e/=r/2)===2?t+n:(s||(s=r*.3*1.5),!i||i<Math.abs(n)?(i=n,o=s/4):o=s/(2*Math.PI)*Math.asin(n/i),e<1?-0.5*i*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*2*Math.PI/s)+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*r-o)*2*Math.PI/s)*.5+n+t)},backIn:function(e,t,n,r,i){return i===undefined&&(i=1.70158),e===r&&(e-=.001),n*(e/=r)*e*((i+1)*e-i)+t},backOut:function(e,t,n,r,i){return typeof i=="undefined"&&(i=1.70158),n*((e=e/r-1)*e*((i+1)*e+i)+1)+t},backBoth:function(e,t,n,r,i){return typeof i=="undefined"&&(i=1.70158),(e/=r/2)<1?n/2*e*e*(((i*=1.525)+1)*e-i)+t:n/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},bounceIn:function(t,n,r,i){return r-e.Easing.bounceOut(i-t,0,r,i)+n},bounceOut:function(e,t,n,r){return(e/=r)<1/2.75?n*7.5625*e*e+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},bounceBoth:function(t,n,r,i){return t<i/2?e.Easing.bounceIn(t*2,0,r,i)*.5+n:e.Easing.bounceOut(t*2-i,0,r,i)*.5+r*.5+n}};e.Easing=n},"patched-v3.18.1",{requires:["anim-base"]});
