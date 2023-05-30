"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
var loading_slice_1 = tslib_1.__importDefault(require("./slices/loading.slice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        loading: loading_slice_1.default,
    },
});
//# sourceMappingURL=store.js.map