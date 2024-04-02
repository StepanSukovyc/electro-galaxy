"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRemoveLinkedProductDispatcher=exports.getSelectSearchedProductDispatcher=exports.getSearchProductsDispatcher=exports.getLoadLinkedProductsDispatcher=exports.reducer=void 0;const data_1=require("@wordpress/data"),data_2=require("@woocommerce/data");function reducer(e,t){switch(t.type){case"SELECT_SEARCHED_PRODUCT":case"REMOVE_LINKED_PRODUCT":return t.payload.selectedProduct?{...e,...t.payload,searchedProducts:[]}:e;default:return{...e,...t.payload}}}function getLoadLinkedProductsDispatcher(e){return async function(t){return 0===t.length?(e({type:"SET_LINKED_PRODUCTS",payload:{linkedProducts:[]}}),Promise.resolve([])):(e({type:"LOADING_LINKED_PRODUCTS",payload:{isLoading:!0}}),(0,data_1.resolveSelect)(data_2.PRODUCTS_STORE_NAME).getProducts({include:t}).then((t=>(e({type:"SET_LINKED_PRODUCTS",payload:{linkedProducts:t}}),t))).finally((()=>{e({type:"LOADING_LINKED_PRODUCTS",payload:{isLoading:!1}})})))}}function getSearchProductsDispatcher(e){return async function(t,r=""){return(0,data_1.resolveSelect)(data_2.PRODUCTS_STORE_NAME).getProducts({search:r,orderby:"title",order:"asc",per_page:5,exclude:t}).then((t=>(e({type:"SET_SEARCHED_PRODUCTS",payload:{searchedProducts:t}}),t)))}}function getSelectSearchedProductDispatcher(e){return function(t,r){Array.isArray(t)||(t=[t]);const c=[...r,...t];return e({type:"SELECT_SEARCHED_PRODUCT",payload:{selectedProduct:t,linkedProducts:c}}),c.map((e=>e.id))}}function getRemoveLinkedProductDispatcher(e){return function(t,r){const c=r.reduce(((e,r)=>r.id===t.id?e:[...e,r]),[]);return e({type:"REMOVE_LINKED_PRODUCT",payload:{selectedProduct:t,linkedProducts:c}}),c.map((e=>e.id))}}exports.reducer=reducer,exports.getLoadLinkedProductsDispatcher=getLoadLinkedProductsDispatcher,exports.getSearchProductsDispatcher=getSearchProductsDispatcher,exports.getSelectSearchedProductDispatcher=getSelectSearchedProductDispatcher,exports.getRemoveLinkedProductDispatcher=getRemoveLinkedProductDispatcher;