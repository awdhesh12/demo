(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[12],{101:function(e,a,t){e.exports=t.p+"static/media/face12.711b1a92.jpg"},130:function(e,a,t){e.exports=t.p+"static/media/Rectangle.e8706637.jpg"},131:function(e,a,t){e.exports=t.p+"static/media/Img_5.f54d958b.jpg"},132:function(e,a,t){e.exports=t.p+"static/media/img_6.fd76a180.jpg"},558:function(e,a,t){"use strict";t.r(a),t.d(a,"Typography",(function(){return W}));var s=t(13),l=t(14),c=t(16),m=t(15),r=t(0),i=t.n(r),n=t(242),o=t.n(n),d=t(552),p=t(553),E=t(554),v=t(555),u=t(559),N=t(560),g=t(561),w=t(562),f=t(563),h=t(564),x=t(565),b=t(566),y=t(567),j=t(568),k=t(569),_=t(570),A=t(571),C=t(572),S=t(573),q=t(574),W=(t(428),function(e){Object(c.a)(r,e);var a=Object(m.a)(r);function r(e){var t;return Object(s.a)(this,r),(t=a.call(this,e)).state={posts:{},imgUrl:"https://jovialconnection.com/img/autopost/"},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;if(this.props.match.params.id){var a="https://jovialconnection.com/autopostApi/postJson.php?param=edit&query="+this.props.match.params.id;fetch(a).then((function(e){return e.json()})).then((function(a){e.setState({posts:a,isLoading:!1,data:a.meta_desc})}),(function(a){e.setState({error:a})}))}}},{key:"render",value:function(){return console.log(this.state.posts),i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," Typography "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Typography")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 col-xl-8 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Portfolio Slide"),i.a.createElement(o.a,Object.assign({className:"portfolio-slider"},this.sliderSettings),i.a.createElement("div",{className:"item"},i.a.createElement("img",{style:{height:"526px"},src:this.state.posts.meta_img?this.state.imgUrl+this.state.posts.meta_img:this.state.imgUrl+"yes.jpg",alt:"face"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},this.state.posts.title),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},this.state.posts.meta_content)))))))),i.a.createElement("p",{className:"text-muted"},this.state.posts.meta_desc," "),i.a.createElement("div",{className:"progress progress-md portfolio-progress"},i.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"50%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement("div",{className:"col-md-8 col-xl-4 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Portfolio Slide"),i.a.createElement(o.a,Object.assign({className:"portfolio-slider"},this.sliderSettings),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"}),i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-primary"},i.a.createElement(d.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query="+this.props.match.params.id,quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on facebook \xa0 \xa0",i.a.createElement(p.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-warning"},i.a.createElement(E.a,{url:"https://jovialconnection.com/autopostApi/post.php?query="+this.props.match.params.id,quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on Twitter  \xa0 \xa0 \xa0 \xa0",i.a.createElement(v.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-danger"},i.a.createElement(u.a,{url:"https://jovialconnection.com/autopostApi/post.php?query=1",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on LinkedIn   \xa0 \xa0 \xa0",i.a.createElement(N.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-primary"},i.a.createElement(g.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on Messanger \xa0",i.a.createElement(w.a,{size:32,round:"true"})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-secondary"},i.a.createElement(f.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on WhatsApp \xa0",i.a.createElement(h.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-info"},"Share on Telegram \xa0 \xa0",i.a.createElement(x.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},i.a.createElement(b.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-success"},i.a.createElement(y.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on Viber \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",i.a.createElement(j.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-warning"},i.a.createElement(k.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on Reddit \xa0 \xa0 \xa0  \xa0",i.a.createElement(_.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-danger"},i.a.createElement(A.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on Tumblr \xa0 \xa0 \xa0 \xa0",i.a.createElement(C.a,{size:32,round:!0})," "))),"\xa0 \xa0",i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("div",{className:"badge badge-outline-success"},i.a.createElement(S.a,{url:"https://jovialconnection.com/autopostApi/fbpost.php?query=",quote:"aaaaaathis is the testing for production",hashtag:"#hashtag",description:"aiueo",className:"Demo__some-network__share-button"},"Share on Pinterest \xa0 \xa0",i.a.createElement(q.a,{size:32,round:!0})," "))),"\xa0 \xa0"))))))))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 col-xl-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"All Post You can share by Social Media "))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 col-xl-4 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Shared By Facebook"),i.a.createElement(o.a,Object.assign({className:"portfolio-slider"},this.sliderSettings),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(130),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(131),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(132),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now.")))))))),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now. "),i.a.createElement("div",{className:"progress progress-md portfolio-progress"},i.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"50%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement("div",{className:"col-md-6 col-xl-4 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Shared By twitter"),i.a.createElement(o.a,Object.assign({className:"portfolio-slider"},this.sliderSettings),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(130),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(131),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(132),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now.")))))))),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now. "),i.a.createElement("div",{className:"progress progress-md portfolio-progress"},i.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"50%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement("div",{className:"col-md-6 col-xl-4 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Shared By Instagram"),i.a.createElement(o.a,Object.assign({className:"portfolio-slider"},this.sliderSettings),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(130),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(131),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(132),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now.")))))))),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now. "),i.a.createElement("div",{className:"progress progress-md portfolio-progress"},i.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"50%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}))))),i.a.createElement("div",{className:"col-md-6 col-xl-4 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Shared By LinkedIn"),i.a.createElement(o.a,Object.assign({className:"portfolio-slider"},this.sliderSettings),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(130),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(131),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now."))))))),i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:t(132),alt:"carousel-item"}),i.a.createElement("div",{className:"d-flex py-4"},i.a.createElement("div",{className:"preview-list w-100"},i.a.createElement("div",{className:"preview-item p-0"},i.a.createElement("div",{className:"preview-thumbnail"},i.a.createElement("img",{src:t(101),className:"rounded-circle",alt:"face"})),i.a.createElement("div",{className:"preview-item-content d-flex flex-grow"},i.a.createElement("div",{className:"flex-grow"},i.a.createElement("div",{className:"d-flex d-md-block d-xl-flex justify-content-between"},i.a.createElement("h6",{className:"preview-subject"},"CeeCee Bass"),i.a.createElement("p",{className:"text-muted text-small"},"4 Hours Ago")),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now.")))))))),i.a.createElement("p",{className:"text-muted"},"Well, it seems to be working now. "),i.a.createElement("div",{className:"progress progress-md portfolio-progress"},i.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"50%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})))))))}}]),r}(r.Component));a.default=W}}]);
//# sourceMappingURL=12.451eff5f.chunk.js.map