(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Ll9L:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var o=r("IheW"),s=r("vkgz"),n=r("lJxs"),c=r("JIr8"),i=r("cp0P"),a=r("LRne"),p=r("z6cu"),u=r("R5w1"),d=r("8Y7J"),h=function(){var t=function(){function t(t){this._http=t,this._storeServiceUrl="http://ec2-3-134-77-29.us-east-2.compute.amazonaws.com:3000/storesapi/",this._categoryServiceUrl="http://ec2-3-134-77-29.us-east-2.compute.amazonaws.com:3000/categoryapi",this._productServiceUrl="http://ec2-3-134-77-29.us-east-2.compute.amazonaws.com:3000/productsapi/"}return t.prototype.fetchStoreProducts=function(t,e,r,o){var i={};return i.page_number=e,i.page_size=r,i.storeId=t,i.filterBy=o,this._http.post(this._storeServiceUrl+"storeinfo/storeproducts",i).pipe(Object(s.a)((function(t){})),Object(n.a)((function(t){return t})),Object(c.a)(this.handleError))},t.prototype.fetchStoreInfoById=function(t){return this._http.get(this._storeServiceUrl+"storeinfo/"+t).pipe(Object(s.a)((function(t){})),Object(n.a)((function(t){return t})),Object(c.a)(this.handleError))},t.prototype.fetchStoreProductById=function(t){return this._http.get(this._storeServiceUrl+"storeinfo/storeproducts/"+t).pipe(Object(s.a)((function(t){})),Object(n.a)((function(t){return t})),Object(c.a)(this.handleError))},t.prototype.fetchAllStoreOrders=function(t,e,r,o){var i={};return i.page_number=e,i.page_size=r,i.storeId=t,i.filterBy=o,console.log(i),this._http.post(this._storeServiceUrl+"storeinfo/storeorders",i).pipe(Object(s.a)((function(t){console.log(t)})),Object(n.a)((function(t){return t})),Object(c.a)(this.handleError))},t.prototype.addStoreProducts=function(t,e,r){var i={};i.store_cost_price=t.productCostPrice,i.store_marked_price=t.productMarkedPrice,i.store_selling_price=t.productSellingPrice,i.store_discount=+t.storeDiscount,i.store_margin=+t.storeMargin,i.store_initial_quantity=0,i.store_updated_quantity=0,i.store_additional_quantity=0,i.product_id=e,i.store_id=r,i.status=t.status,i.stock=1,console.log(i);var a=this._storeServiceUrl+"addstoreproducts";console.log(a);var p=new o.g({"Content-Type":"application/json"});return this._http.post(a,i,{headers:p}).pipe(Object(s.a)((function(t){console.log(JSON.stringify(t))})),Object(n.a)((function(t){return t})),Object(c.a)(this.handleError))},t.prototype.storeDataCatData=function(t){var e=this._http.get(this._storeServiceUrl+"storeinfo/"+t),r=this._http.post(this._categoryServiceUrl+"/storecategories",{filterBy:""});return Object(i.a)([e,r])},t.prototype.editStoreProduct=function(t,e){var r=this._storeServiceUrl+"storeinfo/storeproducts/edit",i={};i.productId=e,i.store_cost_price=t.productCostPrice,i.store_selling_price=t.productSellingPrice,i.store_margin=t.storeMargin,i.store_discount=t.storeDiscount,i.status=t.status,i.product_marked_price=t.productMarkedPrice,i.stock=1;var a=new o.g({"Content-Type":"application/json"});return this._http.post(r,i,{headers:a}).pipe(Object(s.a)((function(t){console.log(JSON.stringify(t))})),Object(n.a)((function(t){return t})),Object(c.a)(this.handleError))},t.prototype.searchProducts=function(t){return""!=t?this._http.get(this._productServiceUrl+"productsearch/"+t).pipe(Object(s.a)((function(t){})),Object(n.a)((function(t){return t.products})),Object(c.a)(this.handleError)):(console.log(t),Object(a.a)([]))},t.prototype.handleError=function(t){var e=new u.a;return e.errorNumber=100,e.errorMessage="Server returned code: "+t.status+", error message is: "+t.message,e.friendlyMessage="An error retriving data",Object(p.a)(e)},t}();return t.ngInjectableDef=d.Qb({factory:function(){return new t(d.Rb(o.c))},token:t,providedIn:"root"}),t}()}}]);