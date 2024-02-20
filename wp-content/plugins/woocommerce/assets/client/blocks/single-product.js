(()=>{var e,t,r,o={6344:(e,t,r)=>{"use strict";r.d(t,{R:()=>o});let o=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({})},1469:(e,t,r)=>{"use strict";r.d(t,{V:()=>o});const o=(e,t)=>e.reduce(((e,r)=>(e[String(t?r[t]:r)]=r,e)),{})},9777:(e,t,r)=>{"use strict";r.r(t);var o=r(4981),c=r(9196),n=r(2911),a=r(8387);const s=window.wc.wcBlocksRegistry;var i=r(9307),l=r(8752);r.p=l.VF,(0,s.registerBlockComponent)({blockName:"woocommerce/product-price",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(5579)]).then(r.bind(r,7461))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-image",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(3706)]).then(r.bind(r,6790))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-title",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(6925)]).then(r.bind(r,2027))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-rating",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(7385)]).then(r.bind(r,8894))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-rating-stars",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(118)]).then(r.bind(r,1872))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-rating-counter",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(2918)]).then(r.bind(r,2992))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-average-rating",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(3037)]).then(r.bind(r,921))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-button",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(8771)]).then(r.bind(r,9758))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-summary",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(8185)]).then(r.bind(r,1985))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(5432)]).then(r.bind(r,5863))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-sku",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(9870)]).then(r.bind(r,8675))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(5445)]).then(r.bind(r,4304))))}),(0,s.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:(0,i.lazy)((()=>Promise.all([r.e(2869),r.e(5800)]).then(r.bind(r,3975))))});const d=JSON.parse('{"name":"woocommerce/single-product","version":"1.0.0","icon":"info","title":"Single Product","description":"Display a single product.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide","full"]},"attributes":{"isPreview":{"type":"boolean","default":false},"productId":{"type":"number"}},"example":{"attributes":{"isPreview":true}},"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}');var m=r(5609),u=r(5736),p=r(1191);const h=(0,u.__)("Product Title","woocommerce");function g(e,{blockDescription:t,blockIcon:r,blockTitle:c,variationName:n,scope:a}){(0,o.registerBlockVariation)(e,{description:t,name:n,title:c,isActive:e=>e.__woocommerceNamespace===n,icon:{src:r},attributes:{__woocommerceNamespace:n},scope:a})}(0,c.createElement)(n.Z,{icon:p.Z,className:"wc-block-editor-components-block-icon"});const w="woocommerce/product-query/product-title";g("core/post-title",{blockDescription:(0,u.__)("Display the title of a product.","woocommerce"),blockIcon:(0,c.createElement)(m.Icon,{icon:p.Z}),blockTitle:h,variationName:w,scope:["block"]});var b=r(7255);const v=(0,u.__)("Product Summary","woocommerce"),E=((0,c.createElement)(n.Z,{icon:b.Z,className:"wc-block-editor-components-block-icon"}),"woocommerce/product-query/product-summary");g("core/post-excerpt",{blockDescription:(0,u.__)("Display a short description about a product.","woocommerce"),blockIcon:(0,c.createElement)(m.Icon,{icon:b.Z}),blockTitle:v,variationName:E,scope:["block"]});var _=r(6344);const k=(0,c.createElement)(n.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"}),f=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1,isDescendentOfSingleProductBlock:!0,imageSizing:_.R.SINGLE}]]],["core/column",{},[["core/post-title",{headingLevel:2,isLink:!0,__woocommerceNamespace:w}],["woocommerce/product-rating",{isDescendentOfSingleProductBlock:!0}],["woocommerce/product-price",{isDescendentOfSingleProductBlock:!0}],["core/post-excerpt",{__woocommerceNamespace:E}],["woocommerce/add-to-cart-form"],["woocommerce/product-meta"]]]]]],y=["core/columns","core/column",...Object.keys((S=d.name,(0,s.getRegisteredBlockComponents)(S)))];var S,P=r(7708),N=r(4333),C=r(6483),x=r(6989),I=r.n(x),B=r(4617);const O=({selected:e=[],search:t="",queryArgs:r={}})=>{const o=(({selected:e=[],search:t="",queryArgs:r={}})=>{const o=l.Cm.productCount>100,c={per_page:o?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},n=[(0,C.addQueryArgs)("/wc/store/v1/products",{...c,...r})];return o&&e.length&&n.push((0,C.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),n})({selected:e,search:t,queryArgs:r});return Promise.all(o.map((e=>I()({path:e})))).then((e=>{const t=((e,t)=>{const r=new Map;return e.filter((e=>{const o=t(e);return!r.has(o)&&(r.set(o,e),!0)}))})(e.flat(),(e=>e.id));return t.map((e=>({...e,parent:0})))})).catch((e=>{throw e}))},L=async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}},A=(0,N.createHigherOrderComponent)((e=>class extends i.Component{constructor(...e){super(...e),(0,P.Z)(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),(0,P.Z)(this,"loadProduct",(()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),(e=>I()({path:`/wc/store/v1/products/${e}`}))(e).then((e=>{this.setState({product:e,loading:!1,error:null})})).catch((async e=>{const t=await L(e);this.setState({product:null,loading:!1,error:t})}))):this.setState({product:null,loading:!1,error:null}))}))}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:r,product:o}=this.state;return(0,c.createElement)(e,{...this.props,error:t,getProduct:this.loadProduct,isLoading:r,product:o})}}),"withProduct"),T=({imageUrl:e=`${l.td}/block-error.svg`,header:t=(0,u.__)("Oops!","woocommerce"),text:r=(0,u.__)("There was an error loading the content.","woocommerce"),errorMessage:o,errorMessagePrefix:n=(0,u.__)("Error:","woocommerce"),button:a,showErrorBlock:s=!0})=>s?(0,c.createElement)("div",{className:"wc-block-error wc-block-components-error"},e&&(0,c.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:e,alt:""}),(0,c.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},t&&(0,c.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},t),r&&(0,c.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},r),o&&(0,c.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},n?n+" ":"",o),a&&(0,c.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},a))):null;r(8406);class R extends i.Component{constructor(...e){super(...e),(0,P.Z)(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:(0,c.createElement)(c.Fragment,null,(0,c.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:o=!0,text:n,errorMessagePrefix:a,renderError:s,button:i}=this.props,{errorMessage:l,hasError:d}=this.state;return d?"function"==typeof s?s({errorMessage:l}):(0,c.createElement)(T,{showErrorBlock:o,errorMessage:r?l:null,header:e,imageUrl:t,text:n,errorMessagePrefix:a,button:i}):this.props.children}}const j=R;var $=r(5656);const F=window.wp.blockEditor;var M=r(2864);const D=e=>{const t=((0,M.useProductDataContext)().product||{}).id||e.productId||0;return t&&1!==t?(0,c.createElement)(F.InspectorControls,null,(0,c.createElement)("div",{className:"wc-block-single-product__edit-card"},(0,c.createElement)("div",{className:"wc-block-single-product__edit-card-title"},(0,c.createElement)("a",{href:`${B.ADMIN_URL}post.php?post=${t}&action=edit`,target:"_blank",rel:"noopener noreferrer"},(0,u.__)("Edit this product's details","woocommerce"),(0,c.createElement)(n.Z,{icon:$.Z,size:16}))),(0,c.createElement)("div",{className:"wc-block-single-product__edit-card-description"},(0,u.__)("Edit details such as title, price, description and more.","woocommerce")))):null};var Z=r(1117),V=r(3849),z=r.n(V);const G=window.wp.escapeHtml,U=({error:e})=>(0,c.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,c.createElement)("span",null,(0,u.__)("The following error was returned","woocommerce"),(0,c.createElement)("br",null),(0,c.createElement)("code",null,(0,G.escapeHTML)(e))):"api"===t?(0,c.createElement)("span",null,(0,u.__)("The following error was returned from the API","woocommerce"),(0,c.createElement)("br",null),(0,c.createElement)("code",null,(0,G.escapeHTML)(e))):e:(0,u.__)("An error has prevented the block from being updated.","woocommerce"))(e));r(9032);const q=({className:e="",error:t,isLoading:r=!1,onRetry:o})=>(0,c.createElement)(m.Placeholder,{icon:(0,c.createElement)(n.Z,{icon:Z.Z}),label:(0,u.__)("Sorry, an error occurred","woocommerce"),className:z()("wc-block-api-error",e)},(0,c.createElement)(U,{error:t}),o&&(0,c.createElement)(c.Fragment,null,r?(0,c.createElement)(m.Spinner,null):(0,c.createElement)(m.Button,{variant:"secondary",onClick:o},(0,u.__)("Retry","woocommerce")))),H=window.wc.data;var J=r(9818),W=(r(1239),r(4696));function Q(e,t,r){const o=new Set(t.map((e=>e[r])));return e.filter((e=>!o.has(e[r])))}var K=r(2629),Y=r(1469);const X={clear:(0,u.__)("Clear all selected items","woocommerce"),noItems:(0,u.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,u.__)("No results for %s","woocommerce"),search:(0,u.__)("Search for items","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: Number of items selected from list. */ /* translators: Number of items selected from list. */
(0,u._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,u.__)("Search results updated.","woocommerce")},ee=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),o=(0,Y.V)(t,"id"),c=["0"],n=(e={})=>e.parent?[...n(o[e.parent]),e.name]:e.name?[e.name]:[],a=e=>e.map((e=>{const t=r[e.id];return c.push(""+e.id),{...e,breadcrumbs:n(o[e.parent]),children:t&&t.length?a(t):[]}})),s=a(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{c.includes(e)||s.push(...a(t||[]))})),s},te=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,c.createElement)("strong",{key:t},e):(0,c.createElement)(i.Fragment,{key:t},e)))},re=({label:e})=>(0,c.createElement)("span",{className:"woocommerce-search-list__item-count"},e),oe=e=>{const{item:t,search:r}=e,o=t.breadcrumbs&&t.breadcrumbs.length;return(0,c.createElement)("span",{className:"woocommerce-search-list__item-label"},o?(0,c.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(n=t.breadcrumbs).length?n.slice(0,1).toString():2===n.length?n.slice(0,1).toString()+" › "+n.slice(-1).toString():n.slice(0,1).toString()+" … "+n.slice(-1).toString()):null,(0,c.createElement)("span",{className:"woocommerce-search-list__item-name"},te((0,K.decodeEntities)(t.name),r)));var n},ce=({countLabel:e,className:t,depth:r=0,controlId:o="",item:n,isSelected:a,isSingle:s,onSelect:l,search:d="",selected:u,useExpandedPanelId:p,...h})=>{var g,w;const[b,v]=p,E=null!=e&&void 0!==n.count&&null!==n.count,_=!(null===(g=n.breadcrumbs)||void 0===g||!g.length),k=!(null===(w=n.children)||void 0===w||!w.length),f=b===n.id,y=z()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":_,"has-children":k,"has-count":E,"is-expanded":f,"is-radio-button":s}),S=h.name||`search-list-item-${o}`,P=`${S}-${n.id}`,N=(0,i.useCallback)((()=>{v(f?-1:Number(n.id))}),[f,n.id,v]);return k?(0,c.createElement)("div",{className:y,onClick:N,onKeyDown:e=>"Enter"===e.key||" "===e.key?N():null,role:"treeitem",tabIndex:0},s?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("input",{type:"radio",id:P,name:S,value:n.value,onChange:l(n),onClick:e=>e.stopPropagation(),checked:a,className:"woocommerce-search-list__item-input",...h}),(0,c.createElement)(oe,{item:n,search:d}),E?(0,c.createElement)(re,{label:e||n.count}):null):(0,c.createElement)(c.Fragment,null,(0,c.createElement)(m.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:a,...!a&&n.children.some((e=>u.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:te((0,K.decodeEntities)(n.name),d),onChange:()=>{a?l(Q(u,n.children,"id"))():l(function(e,t,r){const o=Q(t,e,"id");return[...e,...o]}(u,n.children))()},onClick:e=>e.stopPropagation()}),E?(0,c.createElement)(re,{label:e||n.count}):null)):(0,c.createElement)("label",{htmlFor:P,className:y},s?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("input",{...h,type:"radio",id:P,name:S,value:n.value,onChange:l(n),checked:a,className:"woocommerce-search-list__item-input"}),(0,c.createElement)(oe,{item:n,search:d})):(0,c.createElement)(m.CheckboxControl,{...h,id:P,name:S,className:"woocommerce-search-list__item-input",value:(0,K.decodeEntities)(n.value),label:te((0,K.decodeEntities)(n.name),d),onChange:l(n),checked:a}),E?(0,c.createElement)(re,{label:e||n.count}):null)},ne=ce;var ae=r(2720),se=r(837);r(1058);const ie=({id:e,label:t,popoverContents:r,remove:o,screenReaderLabel:a,className:s=""})=>{const[l,d]=(0,i.useState)(!1),p=(0,N.useInstanceId)(ie);if(a=a||t,!t)return null;t=(0,K.decodeEntities)(t);const h=z()("woocommerce-tag",s,{"has-remove":!!o}),g=`woocommerce-tag__label-${p}`,w=(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},a),(0,c.createElement)("span",{"aria-hidden":"true"},t));return(0,c.createElement)("span",{className:h},r?(0,c.createElement)(m.Button,{className:"woocommerce-tag__text",id:g,onClick:()=>d(!0)},w):(0,c.createElement)("span",{className:"woocommerce-tag__text",id:g},w),r&&l&&(0,c.createElement)(m.Popover,{onClose:()=>d(!1)},r),o&&(0,c.createElement)(m.Button,{className:"woocommerce-tag__remove",onClick:o(e),label:(0,u.sprintf)(
// Translators: %s label.
// Translators: %s label.
(0,u.__)("Remove %s","woocommerce"),t),"aria-describedby":g},(0,c.createElement)(n.Z,{icon:se.Z,size:20,className:"clear-icon",role:"img"})))},le=ie;r(9658);const de=e=>(0,c.createElement)(ne,{...e}),me=e=>{const{list:t,selected:r,renderItem:o,depth:n=0,onSelect:a,instanceId:s,isSingle:l,search:d,useExpandedPanelId:m}=e,[u]=m;return t?(0,c.createElement)(i.Fragment,null,t.map((t=>{var p,h;const g=null!==(p=t.children)&&void 0!==p&&p.length&&!l?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),w=(null===(h=t.children)||void 0===h?void 0:h.length)&&u===t.id;return(0,c.createElement)(i.Fragment,{key:t.id},(0,c.createElement)("li",null,o({item:t,isSelected:g,onSelect:a,isSingle:l,selected:r,search:d,depth:n,useExpandedPanelId:m,controlId:s})),w?(0,c.createElement)(me,{...e,list:t.children,depth:n+1}):null)}))):null},ue=({isLoading:e,isSingle:t,selected:r,messages:o,onChange:n,onRemove:a})=>{if(e||t||!r)return null;const s=r.length;return(0,c.createElement)("div",{className:"woocommerce-search-list__selected"},(0,c.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,c.createElement)("strong",null,o.selected(s)),s>0?(0,c.createElement)(m.Button,{variant:"link",isDestructive:!0,onClick:()=>n([]),"aria-label":o.clear},(0,u.__)("Clear all","woocommerce")):null),s>0?(0,c.createElement)("ul",null,r.map(((e,t)=>(0,c.createElement)("li",{key:t},(0,c.createElement)(le,{label:e.name,id:e.id,remove:a}))))):null)},pe=({filteredList:e,search:t,onSelect:r,instanceId:o,useExpandedPanelId:a,...s})=>{const{messages:i,renderItem:l,selected:d,isSingle:m}=s,p=l||de;return 0===e.length?(0,c.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,c.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,c.createElement)(n.Z,{icon:ae.Z,role:"img"})),(0,c.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,u.sprintf)(i.noResults,t):i.noItems)):(0,c.createElement)("ul",{className:"woocommerce-search-list__list"},(0,c.createElement)(me,{useExpandedPanelId:a,list:e,selected:d,renderItem:p,onSelect:r,instanceId:o,isSingle:m,search:t}))},he=e=>{const{className:t="",isCompact:r,isHierarchical:o,isLoading:n,isSingle:a,list:s,messages:l=X,onChange:d,onSearch:p,selected:h,type:g="text",debouncedSpeak:w}=e,[b,v]=(0,i.useState)(""),E=(0,i.useState)(-1),_=(0,N.useInstanceId)(he),k=(0,i.useMemo)((()=>({...X,...l})),[l]),f=(0,i.useMemo)((()=>((e,t,r)=>{if(!t)return r?ee(e):e;const o=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),c=e.map((e=>!!o.test(e.name)&&e)).filter(Boolean);return r?ee(c,e):c})(s,b,o)),[s,b,o]);(0,i.useEffect)((()=>{w&&w(k.updated)}),[w,k]),(0,i.useEffect)((()=>{"function"==typeof p&&p(b)}),[b,p]);const y=(0,i.useCallback)((e=>()=>{a&&d([]);const t=h.findIndex((({id:t})=>t===e));d([...h.slice(0,t),...h.slice(t+1)])}),[a,h,d]),S=(0,i.useCallback)((e=>()=>{Array.isArray(e)?d(e):-1===h.findIndex((({id:t})=>t===e.id))?d(a?[e]:[...h,e]):y(e.id)()}),[a,y,d,h]),P=(0,i.useCallback)((e=>{const[t]=h.filter((t=>!e.find((e=>t.id===e.id))));y(t.id)()}),[y,h]);return(0,c.createElement)("div",{className:z()("woocommerce-search-list",t,{"is-compact":r,"is-loading":n,"is-token":"token"===g})},"text"===g&&(0,c.createElement)(ue,{...e,onRemove:y,messages:k}),(0,c.createElement)("div",{className:"woocommerce-search-list__search"},"text"===g?(0,c.createElement)(m.TextControl,{label:k.search,type:"search",value:b,onChange:e=>v(e)}):(0,c.createElement)(m.FormTokenField,{disabled:n,label:k.search,onChange:P,onInputChange:e=>v(e),suggestions:[],__experimentalValidateInput:()=>!1,value:n?[(0,u.__)("Loading…","woocommerce")]:h.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),n?(0,c.createElement)("div",{className:"woocommerce-search-list__list"},(0,c.createElement)(m.Spinner,null)):(0,c.createElement)(pe,{...e,search:b,filteredList:f,messages:k,onSelect:S,instanceId:_,useExpandedPanelId:E}))},ge=((0,m.withSpokenMessages)(he),e=>t=>{let{selected:r}=t;r=void 0===r?null:r;const o=null===r;return Array.isArray(r)?(0,c.createElement)(e,{...t}):(0,c.createElement)(e,{...t,selected:o?[]:[r]})});var we=r(2600);var be=r(9127),ve=r.n(be);const Ee=(0,N.createHigherOrderComponent)((e=>{class t extends i.Component{constructor(...e){super(...e),(0,P.Z)(this,"state",{error:null,loading:!1,variations:{}}),(0,P.Z)(this,"loadVariations",(()=>{const{products:e}=this.props,{loading:t,variations:r}=this.state;if(t)return;const o=this.getExpandedProduct();if(!o||r[o])return;const c=e.find((e=>e.id===o));var n;c.variations&&0!==c.variations.length?(this.setState({loading:!0}),(n=o,I()({path:(0,C.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:n})})).then((e=>{const t=e.map((e=>({...e,parent:o})));this.setState({variations:{...this.state.variations,[o]:t},loading:!1,error:null})})).catch((async e=>{const t=await L(e);this.setState({variations:{...this.state.variations,[o]:null},loading:!1,error:t})}))):this.setState({variations:{...this.state.variations,[o]:null},loading:!1,error:null})}))}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:r,showVariations:o}=this.props;o&&(!ve()(e.selected,r)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some((t=>t.id===e))}findParentProduct(e){var t;const{products:r}=this.props;return null===(t=r.filter((t=>t.variations&&t.variations.find((({id:t})=>t===e))))[0])||void 0===t?void 0:t.id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:r}=this.props;if(!r)return null;let o=t&&t.length?t[0]:null;return o?this.prevSelectedItem=o:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(o=this.prevSelectedItem)),!e&&o?this.isProductId(o)?o:this.findParentProduct(o):null}render(){const{error:t,isLoading:r}=this.props,{error:o,loading:n,variations:a}=this.state;return(0,c.createElement)(e,{...this.props,error:o||t,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:a,variationsLoading:n})}}return(0,P.Z)(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),_e=e=>{const{id:t,name:r,parent:o}=e;return{id:t,name:r,parent:o,breadcrumbs:[],children:[],details:e,value:e.slug}},ke=({className:e,item:t,isSelected:r,isLoading:o,onSelect:n,disabled:a,...s})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)(ce,{...s,key:t.id,className:e,isSelected:r,item:t,onSelect:n,disabled:a}),r&&o&&(0,c.createElement)("div",{key:"loading",className:z()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},(0,c.createElement)(m.Spinner,null)));r(8550);const fe={list:(0,u.__)("Products","woocommerce"),noItems:(0,u.__)("Your store doesn't have any products.","woocommerce"),search:(0,u.__)("Search for a product to display","woocommerce"),updated:(0,u.__)("Product search results updated.","woocommerce")},ye=ge((Ce=Ee((0,N.withInstanceId)((e=>{const{expandedProduct:t=null,error:r,instanceId:o,isCompact:n=!1,isLoading:a,onChange:s,onSearch:i,products:l,renderItem:d,selected:m=[],showVariations:p=!1,variations:h,variationsLoading:g}=e;if(r)return(0,c.createElement)(U,{error:r});const w=[...l,...h&&t&&h[t]?h[t]:[]].map(_e);return(0,c.createElement)(he,{className:"woocommerce-products",list:w,isCompact:n,isLoading:a,isSingle:!0,selected:w.filter((({id:e})=>m.includes(Number(e)))),onChange:s,renderItem:d||(p?e=>{var t,r,n,s;const{item:i,search:l,depth:d=0,isSelected:m,onSelect:p}=e,h=null!==(t=i.details)&&void 0!==t&&t.variations&&Array.isArray(i.details.variations)?i.details.variations.length:0,w=z()("woocommerce-search-product__item","woocommerce-search-list__item",`depth-${d}`,"has-count",{"is-searching":l.length>0,"is-skip-level":0===d&&0!==i.parent,"is-variable":h>0});if(!i.breadcrumbs.length){var b,v,E,_,k;const t=(null===(b=i.details)||void 0===b?void 0:b.variations)&&i.details.variations.length>0;return(0,c.createElement)(ke,{...e,className:z()(w,{"is-selected":m}),isSelected:m,item:i,onSelect:()=>()=>{p(i)()},isLoading:a||g,countLabel:t?(0,u.sprintf)(/* translators: %1$d is the number of variations of a product product. */ /* translators: %1$d is the number of variations of a product product. */
(0,u.__)("%1$d variations","woocommerce"),null===(v=i.details)||void 0===v?void 0:v.variations.length):null,name:`products-${o}`,"aria-label":t?(0,u.sprintf)(/* translators: %1$s is the product name, %2$d is the number of variations of that product. */ /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
(0,u._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",null===(E=i.details)||void 0===E||null===(_=E.variations)||void 0===_?void 0:_.length,"woocommerce"),i.name,null===(k=i.details)||void 0===k?void 0:k.variations.length):void 0})}const f=(0,W.x)(null===(r=i.details)||void 0===r?void 0:r.variation)?e:{...e,item:{...e.item,name:null===(n=i.details)||void 0===n?void 0:n.variation},"aria-label":`${i.breadcrumbs[0]}: ${null===(s=i.details)||void 0===s?void 0:s.variation}`};return(0,c.createElement)(ce,{...f,className:w,name:`variations-${o}`})}:()=>null),onSearch:i,messages:fe,isHierarchical:!0})}))),({selected:e,...t})=>{const[r,o]=(0,i.useState)(!0),[n,a]=(0,i.useState)(null),[s,d]=(0,i.useState)([]),m=l.Cm.productCount>100,u=async e=>{const t=await L(e);a(t),o(!1)},p=(0,i.useRef)(e);(0,i.useEffect)((()=>{O({selected:p.current}).then((e=>{d(e),o(!1)})).catch(u)}),[p]);const h=(0,we.y1)((t=>{O({selected:e,search:t}).then((e=>{d(e),o(!1)})).catch(u)}),400),g=(0,i.useCallback)((e=>{o(!0),h(e)}),[o,h]);return(0,c.createElement)(Ce,{...t,selected:e,error:n,products:s,isLoading:r,onSearch:m?g:null})})),Se=({attributes:e,setAttributes:t})=>(0,c.createElement)(ye,{selected:e.productId||0,showVariations:!0,onChange:(e=[])=>{const r=e[0]?e[0].id:0;t({productId:r})}}),Pe=({isEditing:e,setIsEditing:t})=>(0,c.createElement)(F.BlockControls,null,(0,c.createElement)(m.ToolbarGroup,{controls:[{icon:"edit",title:(0,u.__)("Edit selected product","woocommerce"),onClick:()=>t(!e),isActive:e}]})),Ne=e=>e.map((([e,t={},r=[]])=>{const c=r?Ne(r):[];return(0,o.createBlock)(e,t,c)}));var Ce,xe=r(5965);const Ie=({isLoading:e,product:t,clientId:r})=>{const o=".wc-block-editor-single-product .wc-block-editor-layout",{replaceInnerBlocks:n}=(0,J.useDispatch)("core/block-editor"),a=(0,i.useCallback)((()=>{n(r,Ne(f),!1)}),[r,n]);return(0,c.createElement)(M.InnerBlockLayoutContextProvider,{parentName:d.name,parentClassName:o},(0,c.createElement)(M.ProductDataContextProvider,{product:t,isLoading:e},(0,c.createElement)(F.InspectorControls,null,(0,c.createElement)(m.PanelBody,{title:(0,u.__)("Layout","woocommerce"),initialOpen:!0},(0,c.createElement)(m.Button,{label:(0,u.__)("Reset layout to default","woocommerce"),onClick:a,variant:"tertiary",className:"wc-block-editor-single-product__reset-layout",icon:xe.Z},(0,u.__)("Reset layout","woocommerce")))),(0,c.createElement)("div",{className:o},(0,c.createElement)(F.BlockContextProvider,{value:{postId:null==t?void 0:t.id,postType:"product"}},(0,c.createElement)(F.InnerBlocks,{template:f,allowedBlocks:y,templateLock:!1})))))},Be=A((({attributes:e,setAttributes:t,error:r,getProduct:o,product:n,isLoading:a,clientId:s})=>{const{productId:l,isPreview:p}=e,[h,g]=(0,i.useState)(!l),w=(0,F.useBlockProps)(),b=(0,J.useSelect)((e=>p?e(H.PRODUCTS_STORE_NAME).getProducts({per_page:1}):null));return(0,i.useEffect)((()=>{var r;const o=b?null===(r=b[0])||void 0===r?void 0:r.id:null;o&&(t({...e,productId:o}),g(!1))}),[e,b,t]),r?(0,c.createElement)(q,{className:"wc-block-editor-single-product-error",error:r,isLoading:a,onRetry:o}):(0,c.createElement)("div",{...w},(0,c.createElement)(j,{header:(0,u.__)("Single Product Block Error","woocommerce")},(0,c.createElement)(Pe,{setIsEditing:g,isEditing:h}),h?(0,c.createElement)(m.Placeholder,{icon:k,label:d.title,className:"wc-block-editor-single-product"},d.description,(0,c.createElement)("div",{className:"wc-block-editor-single-product__selection"},(0,c.createElement)(Se,{attributes:e,setAttributes:t}),(0,c.createElement)(m.Button,{variant:"secondary",onClick:()=>{g(!1)}},(0,u.__)("Done","woocommerce")))):(0,c.createElement)("div",null,(0,c.createElement)(F.InspectorControls,null,(0,c.createElement)(m.PanelBody,{title:(0,u.__)("Product","woocommerce"),initialOpen:!1},(0,c.createElement)(Se,{attributes:e,setAttributes:t}))),(0,c.createElement)(D,{productId:l}),(0,c.createElement)(Ie,{clientId:s,product:n,isLoading:a}))))}));(0,o.registerBlockType)(d,{icon:k,edit:Be,save:()=>{const e=F.useBlockProps.save();return(0,c.createElement)("div",{...e},(0,c.createElement)(F.InnerBlocks.Content,null))}})},702:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>h,Ju:()=>y,Lo:()=>b,VF:()=>w,fh:()=>v,td:()=>g,vr:()=>k});var o,c,n,a,s,i,l,d,m,u,p=r(4617);const h=(0,p.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),g=h.pluginUrl+"assets/images/",w=h.pluginUrl+"assets/client/blocks/",b=h.buildPhase,v=(null===(o=p.STORE_PAGES.shop)||void 0===o||o.permalink,null===(c=p.STORE_PAGES.checkout)||void 0===c||c.id,null===(n=p.STORE_PAGES.checkout)||void 0===n||n.permalink,null===(a=p.STORE_PAGES.privacy)||void 0===a||a.permalink,null===(s=p.STORE_PAGES.privacy)||void 0===s||s.title,null===(i=p.STORE_PAGES.terms)||void 0===i||i.permalink,null===(l=p.STORE_PAGES.terms)||void 0===l||l.title,null===(d=p.STORE_PAGES.cart)||void 0===d||d.id,null===(m=p.STORE_PAGES.cart)||void 0===m?void 0:m.permalink),E=(null!==(u=p.STORE_PAGES.myaccount)&&void 0!==u&&u.permalink?p.STORE_PAGES.myaccount.permalink:(0,p.getSetting)("wpLoginUrl","/wp-login.php"),(0,p.getSetting)("localPickupEnabled",!1),(0,p.getSetting)("countries",{})),_=(0,p.getSetting)("countryData",{}),k=(Object.fromEntries(Object.keys(_).filter((e=>!0===_[e].allowBilling)).map((e=>[e,E[e]||""]))),Object.fromEntries(Object.keys(_).filter((e=>!0===_[e].allowBilling)).map((e=>[e,_[e].states||[]]))),Object.fromEntries(Object.keys(_).filter((e=>!0===_[e].allowShipping)).map((e=>[e,E[e]||""]))),Object.fromEntries(Object.keys(_).filter((e=>!0===_[e].allowShipping)).map((e=>[e,_[e].states||[]]))),Object.fromEntries(Object.keys(_).map((e=>[e,_[e].locale||[]])))),f={address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],additional:[]},y=(0,p.getSetting)("addressFieldsLocations",f).address;(0,p.getSetting)("addressFieldsLocations",f).contact,(0,p.getSetting)("addressFieldsLocations",f).additional,(0,p.getSetting)("additionalFields",{}),(0,p.getSetting)("additionalContactFields",{}),(0,p.getSetting)("additionalAddressFields",{})},7188:(e,t,r)=>{"use strict";r.d(t,{uq:()=>c}),r(4981);var o=r(702);const c=()=>o.Lo>1},8752:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>o.Cm,Ju:()=>o.Ju,VF:()=>o.VF,fh:()=>o.fh,td:()=>o.td,uq:()=>c.uq,vr:()=>o.vr});var o=r(702),c=r(7188)},4696:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});const o=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},8406:()=>{},1239:()=>{},9032:()=>{},8550:()=>{},9658:()=>{},1058:()=>{},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},711:e=>{"use strict";e.exports=window.wc.blocksComponents},4293:e=>{"use strict";e.exports=window.wc.priceFormat},4801:e=>{"use strict";e.exports=window.wc.wcBlocksData},2864:e=>{"use strict";e.exports=window.wc.wcBlocksSharedContext},721:e=>{"use strict";e.exports=window.wc.wcBlocksSharedHocs},4617:e=>{"use strict";e.exports=window.wc.wcSettings},6989:e=>{"use strict";e.exports=window.wp.apiFetch},987:e=>{"use strict";e.exports=window.wp.autop},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},4333:e=>{"use strict";e.exports=window.wp.compose},9818:e=>{"use strict";e.exports=window.wp.data},7180:e=>{"use strict";e.exports=window.wp.deprecated},5904:e=>{"use strict";e.exports=window.wp.dom},9307:e=>{"use strict";e.exports=window.wp.element},2694:e=>{"use strict";e.exports=window.wp.hooks},2629:e=>{"use strict";e.exports=window.wp.htmlEntities},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives},2289:e=>{"use strict";e.exports=window.wp.styleEngine},6483:e=>{"use strict";e.exports=window.wp.url},2560:e=>{"use strict";e.exports=window.wp.warning},5266:e=>{"use strict";e.exports=window.wp.wordcount}},c={};function n(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return o[e].call(r.exports,r,r.exports,n),r.exports}n.m=o,e=[],n.O=(t,r,o,c)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,c]=e[d],s=!0,i=0;i<r.length;i++)(!1&c||a>=c)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[r,o,c]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>({118:"product-rating-stars",2918:"product-rating-counter",3037:"product-average-rating",3706:"product-image",5432:"product-sale-badge",5445:"product-stock-indicator",5579:"product-price",5800:"product-add-to-cart",6925:"product-title",7385:"product-rating",8185:"product-summary",8771:"product-button",9870:"product-sku"}[e]+".js?ver="+{118:"c309570a4ed51c8aadd6",2918:"48da91f3a4f43cc1856f",3037:"16f9e46b4821269919cb",3706:"213abb99c33065c34edf",5432:"76114008b56f0f6bfe41",5445:"19dfd7fe35c4ad90775a",5579:"ad4b184ab360389bd50c",5800:"f55916002cb2b68fafcb",6925:"f734750c3a18f9b126f0",7385:"01cf86b4d6135c80dd8a",8185:"1ddd2165b15d53826031",8771:"f0d18131cc593f467322",9870:"7560125688a07d28e05c"}[e]),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="webpackWcBlocksJsonp:",n.l=(e,o,c,a)=>{if(t[e])t[e].push(o);else{var s,i;if(void 0!==c)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var m=l[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==r+c){s=m;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",r+c),s.src=e),t[e]=[o];var u=(r,o)=>{s.onerror=s.onload=null,clearTimeout(p);var c=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),c&&c.forEach((e=>e(o))),r)return r(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),i&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=8943,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={8943:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var c=new Promise(((r,c)=>o=e[t]=[r,c]));r.push(o[2]=c);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",s.name="ChunkLoadError",s.type=c,s.request=a,o[1](s)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,c,[a,s,i]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var d=i(n)}for(t&&t(r);l<a.length;l++)c=a[l],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(d)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[2869],(()=>n(9777)));a=n.O(a),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["single-product"]=a})();