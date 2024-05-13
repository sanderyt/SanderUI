import{j as o}from"./jsx-runtime-d9bc4622.js";import{c as x}from"./bind-633bf854.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const b="_loader_kin8e_1",z="_rotation_kin8e_1",L={loader:b,rotation:z},N=()=>o("span",{className:L.loader});try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{}}}catch{}const B="_button_1r0ql_1",V="_isPrimary_1r0ql_4",I="_isSecondary_1r0ql_14",X="_isSecondaryGray_1r0ql_24",A="_isDanger_1r0ql_34",D="_isSm_1r0ql_44",P="_isMd_1r0ql_47",G="_isLg_1r0ql_51",M="_isXl_1r0ql_54",$="_is2Xl_1r0ql_57",O={button:B,isPrimary:V,isSecondary:I,isSecondaryGray:X,isDanger:A,isSm:D,isMd:P,isLg:G,isXl:M,is2Xl:$},j=x.bind(O),l=({children:n,className:C,onClick:k,size:e="md",variant:a="primary",isLoading:T,type:q,...w})=>o("button",{className:`${j("button",{isPrimary:a==="primary",isSecondary:a==="secondary",isSecondaryGray:a==="secondary-gray",isDanger:a==="danger",isSm:e==="sm",isMd:e==="md",isLg:e==="lg",isXl:e==="xl",is2Xl:e==="2xl"})} ${C}`,onClick:k,type:q,...w,children:T?o(N,{}):n});try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"`children` is a special property that typically defines the child components\npassed to a component when it is used within a JSX expression. This is a common pattern\nfor components that act as containers or wrappers around other elements.",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"`onClick` is a function that will be called when the user clicks on the element.\nThis property is typically used to handle click events in interactive components.",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:{value:"primary"},description:`\`variant\` determines the visual style or type of the component. It can have one of
the following values: "primary", "secondary", or "tertiary". The specific styling
for each variant is typically defined in the component's CSS or styles.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-gray"'},{value:'"danger"'}]}},className:{defaultValue:null,description:"`className` allows you to specify additional CSS classes to be applied to the component.\nThis is useful for customizing the appearance of the component or applying external styles.\nIt is an optional property, so you can omit it if no additional classes are needed.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:`\`size\` determines the size or dimensions of the component. It can have one of the
following values: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large),
or "2xl" (double extra large). The specific size-related styling for each value
is typically defined in the component's CSS or styles.
It is an optional property, so you can omit it if the default size is suitable.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"`children` is a special property that typically defines the child components\npassed to a component when it is used within a JSX expression. This is a common pattern\nfor components that act as containers or wrappers around other elements.",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"`onClick` is a function that will be called when the user clicks on the element.\nThis property is typically used to handle click events in interactive components.",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:{value:"primary"},description:`\`variant\` determines the visual style or type of the component. It can have one of
the following values: "primary", "secondary", or "tertiary". The specific styling
for each variant is typically defined in the component's CSS or styles.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-gray"'},{value:'"danger"'}]}},className:{defaultValue:null,description:"`className` allows you to specify additional CSS classes to be applied to the component.\nThis is useful for customizing the appearance of the component or applying external styles.\nIt is an optional property, so you can omit it if no additional classes are needed.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:`\`size\` determines the size or dimensions of the component. It can have one of the
following values: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large),
or "2xl" (double extra large). The specific size-related styling for each value
is typically defined in the component's CSS or styles.
It is an optional property, so you can omit it if the default size is suitable.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}}}catch{}const H={title:"Components/Button",component:l,argTypes:{children:{control:"text"}}},i={args:{children:"Button CTA",variant:"primary",isLoading:!1,size:"md",onClick:()=>{alert("This is working!")}}},s={args:{children:"Button CTA",variant:"secondary",size:"md",isLoading:!1,onClick:()=>{alert("This is working!")}}},t={args:{children:"Button CTA",variant:"secondary-gray",isLoading:!1,onClick:()=>{alert("This is working!")},size:"md"}},r={args:{children:"Button CTA",variant:"danger",isLoading:!1,onClick:()=>{alert("This is working!")},size:"md"}};var c,d,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Button CTA",
    variant: "primary",
    isLoading: false,
    size: "md",
    onClick: () => {
      alert("This is working!");
    }
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Button CTA",
    variant: "secondary",
    size: "md",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    }
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var h,g,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Button CTA",
    variant: "secondary-gray",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
    size: "md"
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,_,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button CTA",
    variant: "danger",
    isLoading: false,
    onClick: () => {
      alert("This is working!");
    },
    size: "md"
  }
}`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const K=["Primary","Secondary","Outlined","Danger"];export{r as Danger,t as Outlined,i as Primary,s as Secondary,K as __namedExportsOrder,H as default};
