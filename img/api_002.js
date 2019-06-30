define(["require","exports","tslib","external/lodash","modules/clean/api_v2/root_aware_client"],function(e,t,i,r,n){"use strict";function s(e,t,i,r){return".tag"===t?0===r?["type",i]:i in e?i:[null,i]:i}function a(e,t,i,r){return"string"==typeof i&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(i)?new Date(i):i}function c(e,t,i){return void 0===i&&(i=0),Array.isArray(e)?e.map(function(e){return c(e,t,i+1)}):r.isObject(e)?Object.keys(e).reduce(function(n,s){var a=e[s];if(Array.isArray(a)||r.isObject(a))n[s]=c(a,t,i+1);else{var u=t(e,s,a,i);if(Array.isArray(u)){if(null===u[0])return u[1];n[u[0]]=u[1]}else n[s]=u}return n},{}):t(null,"",e,i)}function u(e){return c(c(e,s),a)}function o(e){return i.__assign({},u(e.activities[0]),{groupActivities:e.activities.map(u),isGroup:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t.parseActivity=u,t.parseGroupActivity=o;var l=(function(){function e(e){this.userId=e,this.client=new n.ApiV2RootAwareClient}return e.prototype.getActivityStream=function(e){return this.client.ns("file_activity_stream").rpc("get_activity_stream",{file_path_or_id:e},{subjectUserId:this.userId}).then(function(e){return{enabled:e.enabled,activity_group:(e.activity_group||[]).map(o)}})},e.prototype.sendFeedback=function(e,t,i,r,n,s){this.client.ns("file_activity_stream").rpc("feedback",{rating:e,feedback:t,file_preview_session_id:i,file_viewer_session_id:r,file_ns_id:n,file_sjid:s},{subjectUserId:this.userId})},e})();t.FileActivityStreamApi=l});
//# sourceMappingURL=api.min.js-vfllJ_2I8.map