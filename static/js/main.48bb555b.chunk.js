(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},55:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),c=a(28),l=a(1),i=a(10),m=a.n(i),u=a(24),v=a(25),p=a(26),d=a(31),E=a(30),f=a(27),g=a.n(f);var h=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"movie_genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genere_genres"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180)))},y=(a(55),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var _=function(e){return console.log(e),r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))};var b=function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"/"},"Home"),r.a.createElement("a",{href:"/about"},"About"))};var N=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(l.a,{path:"/",exact:!0,component:y}),r.a.createElement(l.a,{path:"/about",component:_}))};o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.48bb555b.chunk.js.map