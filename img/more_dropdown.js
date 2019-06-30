define(["require","exports","tslib","esignature_prototype/components/esignature_callout","esignature_prototype/components/esignature_popover_item","esignature_prototype/constants","esignature_prototype/data/actions","esignature_prototype/data/selectors","esignature_prototype/utils","external/react","external/react-redux","modules/clean/react/bubble_dropdown_v2","modules/clean/previews/util","spectrum/popover","modules/clean/react/file_action_button_type","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/utils","modules/clean/react/file_viewer/more_dropdown/more_option_registry","modules/clean/react/file_viewer/more_dropdown/views","modules/clean/react/size_class/constants","modules/clean/react/title_bar/overflow_menu","modules/core/browser","modules/core/i18n","modules/clean/react/paper/utils","react-dom","modules/clean/react/paper/open_in_paper_callout_loader","modules/clean/react/paper/open_in_paper_button","modules/clean/react/file_viewer/data/actions"],function(e,t,o,n,r,i,s,l,a,p,u,c,d,m,h,_,v,g,f,C,y,k,I,S,E,w,b,O,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var P=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=t.getStateFromRegistry(),t.onRegistryUpdate=function(){t.setState(t.getStateFromRegistry())},t.handleDownloadClick=function(e){return e.preventDefault(),A.download(t.props.file),_.logUserAction(v.UserAction.Download,v.UserActionContext.TitleBarMore)},t.handleRemoveLinkClick=function(e){e.preventDefault(),t.props.onRemoveShareLink&&(t.props.onRemoveShareLink(),_.logUserAction(v.UserAction.RemoveLink,v.UserActionContext.TitleBarMore))},t.handlePreviousVersionClick=function(e){if(e.preventDefault(),!t.props.user)throw new Error("User not specified");return d.redirectToVersionHistory(t.props.file,t.props.user),_.logUserAction(v.UserAction.ViewRevisions,v.UserActionContext.TitleBarMore)},t.handleSignInClick=function(e){e.preventDefault(),_.logUserAction(v.UserAction.SignIn,v.UserActionContext.TitleBarMore),I.redirect(g.getSharedLinkLoginUrl())},t.handleOpenInPaperClick=function(e){e.preventDefault();var o={file:t.props.file,user:t.props.user,sharedLink:t.props.sharedLink,fromModal:!1};E.openFileInPaper(o)},t.handleClick=function(){t.props.dismissCallout&&t.props.dismissCallout(),t.setState({hasBeenClicked:!0})},t}return o.__extends(t,e),t.prototype.componentDidMount=function(){this.removeRegistryListener=f.moreOptionRegistry.addListener(this.onRegistryUpdate)},t.prototype.componentWillUnmount=function(){this.removeRegistryListener()},t.prototype.getStateFromRegistry=function(){return{registeredItems:f.moreOptionRegistry.getOptionItems(),hasBeenClicked:!1}},t.prototype.getPopoverContent=function(){var e=this.props,t=e.allowRemoveLink,o=e.isPrivate,n=e.onRemoveShareLink,i=e.renderSignIn,s=e.shareDownloadOptions,l=e.sizeClass,u=e.showOpenInPaper,c=e.file,d=[],_=l===y.SizeClass.Small,v=l===y.SizeClass.Medium,g=l===y.SizeClass.Large;if(o&&v&&d.push(p.createElement(k.PopoverOrMobileItem,{className:"more-button__share",key:"more-button__share",onSelect:this.props.onClickShareLink},h.getFileActionButtonText(h.FileActionButtonType.SHARE))),null!=n&&t&&!_&&d.push(p.createElement(k.PopoverOrMobileItem,{className:"more-button__remove",key:"more-button__remove",onSelect:this.handleRemoveLinkClick},h.getFileActionButtonText(h.FileActionButtonType.REMOVE_LINK))),o&&d.push(p.createElement(k.PopoverOrMobileItem,{className:"more-button__download",key:"more-button__download",onSelect:this.handleDownloadClick},h.getFileActionButtonText(h.FileActionButtonType.DOWNLOAD))),s)for(var f=0,I=s;f<I.length;f++){var E=I[f];if(!E.isDisabled){var w="more-button-sl__"+E.userAction;d.push(p.createElement(U,{handler:E.handler,key:w,text:E.text,userAction:E.userAction}))}}if(o&&!_&&d.push(p.createElement(k.PopoverOrMobileItem,{className:"more-button__version-history",key:"more-button__version-history",onSelect:this.handlePreviousVersionClick},h.getFileActionButtonText(h.FileActionButtonType.PREVIOUS_VERSIONS))),g&&d.length&&this.state.registeredItems.length&&d.push(p.createElement(m.PopoverContentSeparator,{key:"more_button__seperator"})),g){var b=C.getPopoverOrMobileItemsForMoreOptions(this.state.registeredItems);d=d.concat(b)}return i&&d.push(p.createElement(k.PopoverOrMobileItem,{className:"more-button__sign-in",key:"more-button__sign-in",onSelect:this.handleSignInClick},S._("Sign in"))),u&&(g&&d.length&&this.state.registeredItems.length&&d.push(p.createElement(m.PopoverContentSeparator,{key:"more_button__separator2"})),d.push(p.createElement(k.PopoverOrMobileItem,{className:"more-button__open-in-paper",key:"more-button__open-in-paper",onSelect:this.handleOpenInPaperClick},p.createElement(O.OpenInPaperButtonInMoreDropdown,{file:c,handleOpenInPaperClick:this.handleOpenInPaperClick,sizeClass:l})))),a.shouldIncludeEsignaturePopoverItem(c)&&!_&&d.push(p.createElement(r.EsignaturePopoverItem,{file:c})),d},t.prototype.shouldShowEsignatureCallout=function(){return!this.props.isCalloutDismissed&&this.props.sizeClass!==y.SizeClass.Small&&a.shouldShowIntroduceEsignatureCallout(this.props.file)},t.prototype.render=function(){var e=this,t=this.props,o=t.file,r=t.sizeClass,s=t.showOpenInPaper,l=t.user,a=this.state.hasBeenClicked;return p.createElement("div",{ref:function(t){return e.ref=w.findDOMNode(t)},onClick:this.handleClick},p.createElement(k.OverflowMenu,{contentWrapperClassName:"react-file-viewer-dropdown"},this.getPopoverContent()),s?p.createElement(b.OpenInPaperCalloutLoader,{file:o,parentHasBeenClicked:a,sizeClass:r,targetNode:this.ref,user:l,variant:E.OpenInPaperButtonVariant.Ellipsis}):null,this.shouldShowEsignatureCallout()?p.createElement(n.EsignatureCallout,{title:i.INTRODUCE_ESIGNATURE_TITLE,message:i.INTRODUCE_ESIGNATURE_MESSAGE,onDismiss:this.props.dismissCallout,targetNode:this.ref,position:c.BubbleDropdownPositions.BOTTOM_LEFT}):null)},t})(p.Component);t._MoreDropdown=P;var M=function(e){return{isCalloutDismissed:l.getIsCalloutDismissed(e)}},R={dismissCallout:s.dismissCallout},D=u.connect(M,R)(P);t.MoreDropdown=D;var U=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){var e=t.props,o=e.handler,n=e.userAction;_.logUserAction(n,v.UserActionContext.TitleBarMore),o()},t}return o.__extends(t,e),t.prototype.render=function(){var e=this.props.text;return p.createElement(k.PopoverOrMobileItem,{onSelect:this.handleClick},e)},t})(p.PureComponent)});
//# sourceMappingURL=more_dropdown.min.js-vflYjsTi7.map