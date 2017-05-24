'use strict';
window._authorAssets = Object.create(null);
window._authorAssets['templates/author/author.dashboard.view.html'] = '<div class="container-fluid authoring-dashboard">\n    <md-content class="authoring-dashboard-content">\n        <md-tabs md-dynamic-height="" md-border-bottom="" md-selected="authoringDashboard.selectedTabIndex">\n            <md-tab label="Posts" md-on-select="authoringDashboard.onTabSelected(\'posts\')">\n                <md-content class="md-padding authoring-dashboard-content-post">\n                    <div class="vx-container post" ng-if="authoringDashboard.selectedTabIndex == 0">\n                        <vx-grid config="authoringDashboard.postsGridConfig" scroll-parent="\'.vx-container.post .vxTableContainer\'"></vx-grid>\n                    </div>\n                </md-content>\n            </md-tab>\n            <md-tab label="Authors" md-on-select="authoringDashboard.onTabSelected(\'authors\')">\n                <md-content class="md-padding authoring-dashboard-content-post">\n                    <div class="vx-container authors" ng-if="authoringDashboard.selectedTabIndex == 1">\n                        <vx-grid config="authoringDashboard.authorsGridConfig" scroll-parent="\'.vx-container.authors .vxTableContainer\'"></vx-grid>\n                    </div>\n                </md-content>\n            </md-tab>\n        </md-tabs>\n    </md-content>\n    <div class="authoring-dashboard-pane" ng-class="{\'in\': authoringDashboard.detailsPane}">\n        <div class="authoring-dashboard-pane-item">\n            <div class="authoring-dashboard-pane-item-label">Thumbnail Preview</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <img ng-attr-src="{{authoringDashboard.authorDetailsForPane.imgSrc}}" />\n            </div>\n        </div>\n        <div class="authoring-dashboard-pane-item">\n            <div class="authoring-dashboard-pane-item-label">Name</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <label>{{authoringDashboard.authorDetailsForPane.name}}</label>\n            </div>\n        </div>\n        <div class="authoring-dashboard-pane-item">\n            <div class="authoring-dashboard-pane-item-label">Alias</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <input ng-model="authoringDashboard.authorDetailsForPane.alias" />\n            </div>\n        </div>\n        <div class="authoring-dashboard-pane-item w50">\n            <div class="authoring-dashboard-pane-item-label">Auth Type</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <label>{{authoringDashboard.authorDetailsForPane.authenticationType}}</label>\n            </div>\n        </div>\n        <div class="authoring-dashboard-pane-item w50">\n            <div class="authoring-dashboard-pane-item-label">Auth Source ID</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <label>{{authoringDashboard.authorDetailsForPane.authenticationUID}}</label>\n            </div>\n        </div>\n        <div class="authoring-dashboard-pane-item w50">\n            <div class="authoring-dashboard-pane-item-label">Is Suspended</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <label>{{authoringDashboard.authorDetailsForPane.isSuspended}}</label>\n            </div>\n        </div>\n        <div class="authoring-dashboard-pane-item w50">\n            <div class="authoring-dashboard-pane-item-label">Last Modified On</div>\n            <div class="authoring-dashboard-pane-item-value">\n                <label>{{authoringDashboard.authorDetailsForPane.modifiedOn | date:\'MMM d, y\'}}</label>\n            </div>\n        </div>\n    </div>\n    <div class="clearfix"></div>\n</div>';
window._authorAssets['templates/author/author.post.view.html'] = '<div class="container-fluid authoring">\n    <div class="authoring-flask-pane">\n        <div class="authoring-flask-pane-holder" id="authoringFlaskPaneHolder">\n            <div class="authoring-flask-pane-item tag" ng-click="authoringPost.enableFlaskReordering()" ng-attr-data-active="{{authoringPost.flasksBeingReodered}}">\n                <i class="ms-Icon ms-Icon--SwitcherStartEnd"></i>\n            </div>\n            <div class="authoring-flask-pane-item tag" ng-click="authoringPost.addFlask(\'text\')">\n                <i class="ms-Icon ms-Icon--InsertTextBox"></i>\n            </div>\n            <div class="authoring-flask-pane-item htm" ng-click="authoringPost.addFlask(\'markup\')">\n                <label>htm</label>\n            </div>\n            <div class="authoring-flask-pane-item js" ng-click="authoringPost.addFlask(\'javascript\')">\n                <label>js</label>\n            </div>\n            <div class="authoring-flask-pane-item css" ng-click="authoringPost.addFlask(\'css\')">\n                <label>css</label>\n            </div>\n            <div class="authoring-flask-pane-item scss" ng-click="authoringPost.addFlask(\'scss\')">\n                <label>scss</label>\n            </div>\n        </div>\n    </div>\n    <div class="authoring-flask-pane-after">\n        <div class="authoring-flask">\n            <div class="flask">\n                <div class="flask-instance tagged">\n                    <label class="title">Title for the post</label>\n                    <input ng-model="authoringPost.post.title" />\n                </div>\n                <div class="flask-instance tagged">\n                    <label class="title">Description for the post</label>\n                    <input ng-model="authoringPost.post.description" />\n                </div>\n                <div class="flask-instance tagged --noPadBottom">\n                    <label class="title">Categorize post as </label>\n                    <div class="flask-instance-tag" ng-repeat="tag in authoringPost.mainCategories" ng-style="{ \'color\': tag.forecolor, \'background-color\': tag.backcolor}" ng-click="authoringPost.post.category = tag.id">\n                        <label ng-bind="tag.name"></label>\n                        <i class="ms-Icon ms-Icon--CheckMark" ng-show="tag.id == authoringPost.post.category"></i>\n                    </div>\n                </div>\n                <div class="flask-instance tagged">\n                    <label class="title">Tags</label>\n                    <md-content class="md-padding" layout="column">\n                        <md-chips ng-model="authoringPost.post.tags" readonly="false" md-removable="true"></md-chips>\n                    </md-content>\n                </div>\n                <div class="flask-instance draglist" ng-attr-data-reordering="{{authoringPost.flasksBeingReodered}}">\n                    <label class="title">Content</label>\n                    <div class="flask-instance" ng-repeat="mod in authoringPost.post.contentItems track by $index" id="_FLASK_{{$index}}" uid="{{mod.uid}}" ng-drop="authoringPost.flasksBeingReodered" ng-drop-success="authoringPost.onDropComplete($index, $data)" ng-drag="authoringPost.flasksBeingReodered" ng-drag-data="mod">\n                        <i class="ms-Icon ms-Icon--Move" ng-drag-handle ng-show="authoringPost.flasksBeingReodered"></i>\n                        <i class="ms-Icon ms-Icon--Delete" ng-click="authoringPost.deleteFlask($index, mod.uid)"></i>\n                        <div class="flask-instance-content tagged" ng-if="mod.type == \'text\'">\n                            <label class="title">Text</label>\n                            <textarea ng-model="mod.data"></textarea>\n                        </div>\n                        <div class="flask-instance-content type-flask" ng-if="mod.type == \'flask\'">\n                            <label class="title"><span ng-bind="mod.lang"></span> Flask</label>\n                            <div data-flask="true" ng-init="authoringPost.loadFlask($index)"></div>\n                        </div>\n                        <div class="flask-instance-content tagged" ng-if="mod.type == \'list\'">\n                            <label class="title">List</label>\n                            <textarea ng-model="mod.data"></textarea>                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="authoring-preview">\n            <codeview post="authoringPost.post" preview="true"></codeview>\n        </div>        \n        <div class="clearfix"></div>\n        <div ng-include="\'templates/author/footer.tmpl.html\'"></div>\n    </div>    \n    <div class="clearfix"></div>\n</div>';
window._authorAssets['templates/author/footer.tmpl.html'] = '<footer class="footer-bod author">\n    <div class="footer-bod-content">\n        <ul class="pull-left">                        \n            <li>\n                <a>Feedback</a>\n            </li>\n            <li>\n                <a>Contact Us</a>\n            </li>\n        </ul>\n    </div>\n</footer>';
window._authorAssets['templates/author/header.tmpl.html'] = '<div class="header">\n    <div class="header-appswitch">\n        <div class="clearfix"></div>\n        <div class="header-appswitch-title-holder">\n            <div class="header-appswitch-title header-appswitch-title--appname space-Out-Left">Quick References</div>\n        </div>\n        <div class="header-appswitch-actions">\n            <div class="pull-left">\n                <div class="header-appswitch-title header-appswitch-title--apptext space-Out-Left">Authoring - <span ng-bind="app.shared.currentContext"></span></div>\n            </div>            \n            <div class="pull-right">\n                <div class="icon-container" \n                ng-repeat="action in app.shared.actions" \n                ng-disabled="action.disabled" \n                ng-click="app.shared.actionClick(action.click)" \n                ng-show="action.show" \n                ng-attr-title="{{action.title}}">\n                    <i class="ms-Icon {{action.iconName}}"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
window._authorAssets['templates/author/notify.modal.html'] = '<div class="modal-body">\n    <div class="notifyMsg">{{notifyModal.data.message}}</div>\n    <div class="icon-container"\n         ng-class="{\'success\': notifyModal.data.success, \'failed\': notifyModal.data.failed,\'info-progress\': notifyModal.data.inProgress, \'info\':notifyModal.data.info}" >\n        <i class="icon icon-accept-8fb" ng-show="notifyModal.data.success"></i>\n        <i class="icon icon-info-171" ng-show="notifyModal.data.info"></i>\n        <i class="icon icon-alert-7ba" ng-show="notifyModal.data.failed"></i>\n        <div class="spinner" ng-show="notifyModal.data.inProgress">\n            <div class="double-bounce1"></div>\n            <div class="double-bounce2"></div>\n        </div>\n    </div>\n    <div class="clearfix"></div>\n</div>';
