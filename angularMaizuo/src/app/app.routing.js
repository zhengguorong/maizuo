"use strict";
var router_1 = require('@angular/router');
var index_view_1 = require("./containers/index.view");
var card_view_1 = require("./containers/card/card.view");
var app_component_1 = require("./app.component");
var appRoutes = [
    {
        path: 'card',
        component: card_view_1.CardView
    },
    {
        path: 'home',
        component: index_view_1.IndexView
    },
    {
        path: '',
        component: app_component_1.AppComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map