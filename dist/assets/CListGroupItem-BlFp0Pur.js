import{r as m,_ as h,R as b,b as t,c as f,P as o,C as g,d as C}from"./index-ffYVKfzY.js";var v=m.forwardRef(function(a,n){var e,d=a.children,r=a.as,i=r===void 0?"ul":r,s=a.className,u=a.flush,l=a.layout,c=h(a,["children","as","className","flush","layout"]);return b.createElement(i,t({className:f("list-group",(e={"list-group-flush":u},e["list-group-".concat(l)]=l,e),s)},c,{ref:n}),d)});v.propTypes={as:o.elementType,children:o.node,className:o.string,flush:o.bool,layout:o.oneOf(["horizontal","horizontal-sm","horizontal-md","horizontal-lg","horizontal-xl","horizontal-xxl"])};v.displayName="CListGroup";var N=m.forwardRef(function(a,n){var e,d=a.children,r=a.active,i=a.as,s=i===void 0?"li":i,u=a.className,l=a.disabled,c=a.color,p=h(a,["children","active","as","className","disabled","color"]),y=s==="a"||s==="button"?g:s;return p=t(t(t(t({},(s==="a"||s==="button")&&{active:r,disabled:l,as:s,ref:n}),r&&{"aria-current":!0}),l&&{"aria-disabled":!0}),p),b.createElement(y,t({className:f("list-group-item",(e={},e["list-group-item-".concat(c)]=c,e["list-group-item-action"]=s==="a"||s==="button",e.active=r,e.disabled=l,e),u)},p),d)});N.propTypes={active:o.bool,as:o.elementType,children:o.node,className:o.string,color:C,disabled:o.bool};N.displayName="CListGroupItem";export{v as C,N as a};
