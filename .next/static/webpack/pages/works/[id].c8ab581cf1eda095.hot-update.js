"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works/[id]",{

/***/ "./data/Projects.js":
/*!**************************!*\
  !*** ./data/Projects.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Projects\": function() { return /* binding */ Projects; }\n/* harmony export */ });\nvar Projects = [\n    {\n        id: 1,\n        name: \"Trip Planner\",\n        slug: \"trip=planner\",\n        img: \"trip-planner\",\n        demo: \"https://b3-tripplanner.me/\",\n        sourceCode: \"https://github.com/Halimp07/tripplanner-landing_page\",\n        description: \"This project was carried out with an Agile team from the B3 group and is an integrated project of several courses on campus (EEPIS). Focusing on mobile, this application aims to easily record itinerary trip.\"\n    },\n    {\n        id: 2,\n        name: \"Information Valorant\",\n        slug: \"valorant\",\n        img: \"valorant\",\n        demo: \"https://information-valorant.vercel.app/\",\n        sourceCode: \"https://github.com/Halimp07/information_valorant\",\n        description: \"Final assignment project from one of the courses (EEPIS) provided that it uses Framework Bootstrap and is responsive. Taking reference from a PC game, Valorant. using AOS (Animate On Scroll Library) to make it look more interactive.\"\n    },\n    {\n        id: 3,\n        name: \"E-Commerce\",\n        slug: \"ecommerce-ci\",\n        img: \"ecommerce-ci\",\n        // demo: '',\n        sourceCode: \"https://github.com/Halimp07/ecommerce_with_codeigniter\",\n        description: \"The E-Commerce website project uses the CodeIgniter 3 framework, taking reference examples from Converse. Contains a list of goods and prices for shoes along with an admin panel to manage data along with a pdf print feature to display financial results obtained from month to month. This website was worked on for 1 month and was demonstrated for the exam requirements of one of the EEPIS courses.\"\n    },\n    {\n        id: 4,\n        name: \"SIM Job Arrangement\",\n        slug: \"sim-job-arrangement\",\n        img: \"sim-job-arrangement\",\n        // demo: '',\n        sourceCode: \"https://github.com/Halimp07/sim_job_arrangement\",\n        description: \"This project is a management information system (MIS) using native PHP accompanied by PL/SQL with integral features from Oracle database and is used to develop database applications. This website aims to find jobs and there is also an admin panel that functions to manage the entire website such as adding jobs, accepting and rejecting job applications from users who apply. This website was worked on for 1 month and was demonstrated for the exam requirements for one of the EEPIS courses.\"\n    },\n    {\n        id: 5,\n        name: \"Responsive Web\",\n        slug: \"responsive-web\",\n        img: \"responsive-web\",\n        demo: \"https://simple-responsive-web.vercel.app/\",\n        sourceCode: \"https://github.com/Halimp07/simple-responsive-web\",\n        description: \"salah satu proyek kecil untuk mempelajari lebih dalam cara meresponsive kan suatu website dengan menggunakan framework Bootstrap.\"\n    },\n    {\n        id: 6,\n        name: \"Coming Soon Project\",\n        slug: \"coming-soon-project\",\n        img: \"coming-soon\"\n    },\n    {\n        id: 7,\n        name: \"Coming Soon Project\",\n        slug: \"coming-soon-project\",\n        img: \"coming-soon\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUc7SUFBQztRQUNyQkMsRUFBRSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFLGNBQWM7UUFDcEJDLElBQUksRUFBRSxjQUFjO1FBQ3BCQyxHQUFHLEVBQUUsY0FBYztRQUNuQkMsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQ0MsVUFBVSxFQUFFLHNEQUFzRDtRQUNsRUMsV0FBVyxFQUFFLGlOQUFpTjtLQUMvTjtJQUNEO1FBQ0VOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRSxzQkFBc0I7UUFDNUJDLElBQUksRUFBRSxVQUFVO1FBQ2hCQyxHQUFHLEVBQUUsVUFBVTtRQUNmQyxJQUFJLEVBQUUsMENBQTBDO1FBQ2hEQyxVQUFVLEVBQUUsa0RBQWtEO1FBQzlEQyxXQUFXLEVBQUUsME9BQTBPO0tBQ3hQO0lBQ0Q7UUFDRU4sRUFBRSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFLFlBQVk7UUFDbEJDLElBQUksRUFBRSxjQUFjO1FBQ3BCQyxHQUFHLEVBQUUsY0FBYztRQUNuQixZQUFZO1FBQ1pFLFVBQVUsRUFBRSx3REFBd0Q7UUFDcEVDLFdBQVcsRUFBRSwrWUFBK1k7S0FFN1o7SUFDRDtRQUNFTixFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxHQUFHLEVBQUUscUJBQXFCO1FBQzFCLFlBQVk7UUFDWkUsVUFBVSxFQUFFLGlEQUFpRDtRQUM3REMsV0FBVyxFQUFFLDRlQUE0ZTtLQUMxZjtJQUNEO1FBQ0VOLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEJDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEJDLEdBQUcsRUFBRSxnQkFBZ0I7UUFDckJDLElBQUksRUFBRSwyQ0FBMkM7UUFDakRDLFVBQVUsRUFBRSxtREFBbUQ7UUFDL0RDLFdBQVcsRUFBRSxtSUFBbUk7S0FDako7SUFDRDtRQUNFTixFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxHQUFHLEVBQUUsYUFBYTtLQUluQjtJQUNEO1FBQ0VILEVBQUUsRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRSxxQkFBcUI7UUFDM0JDLElBQUksRUFBRSxxQkFBcUI7UUFDM0JDLEdBQUcsRUFBRSxhQUFhO0tBSW5CO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL1Byb2plY3RzLmpzP2M1OWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFByb2plY3RzID0gW3tcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ1RyaXAgUGxhbm5lcicsXHJcbiAgICBzbHVnOiAndHJpcD1wbGFubmVyJyxcclxuICAgIGltZzogJ3RyaXAtcGxhbm5lcicsXHJcbiAgICBkZW1vOiAnaHR0cHM6Ly9iMy10cmlwcGxhbm5lci5tZS8nLFxyXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9IYWxpbXAwNy90cmlwcGxhbm5lci1sYW5kaW5nX3BhZ2UnLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIHByb2plY3Qgd2FzIGNhcnJpZWQgb3V0IHdpdGggYW4gQWdpbGUgdGVhbSBmcm9tIHRoZSBCMyBncm91cCBhbmQgaXMgYW4gaW50ZWdyYXRlZCBwcm9qZWN0IG9mIHNldmVyYWwgY291cnNlcyBvbiBjYW1wdXMgKEVFUElTKS4gRm9jdXNpbmcgb24gbW9iaWxlLCB0aGlzIGFwcGxpY2F0aW9uIGFpbXMgdG8gZWFzaWx5IHJlY29yZCBpdGluZXJhcnkgdHJpcC4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnSW5mb3JtYXRpb24gVmFsb3JhbnQnLFxyXG4gICAgc2x1ZzogJ3ZhbG9yYW50JyxcclxuICAgIGltZzogJ3ZhbG9yYW50JyxcclxuICAgIGRlbW86ICdodHRwczovL2luZm9ybWF0aW9uLXZhbG9yYW50LnZlcmNlbC5hcHAvJyxcclxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vSGFsaW1wMDcvaW5mb3JtYXRpb25fdmFsb3JhbnQnLFxyXG4gICAgZGVzY3JpcHRpb246ICdGaW5hbCBhc3NpZ25tZW50IHByb2plY3QgZnJvbSBvbmUgb2YgdGhlIGNvdXJzZXMgKEVFUElTKSBwcm92aWRlZCB0aGF0IGl0IHVzZXMgRnJhbWV3b3JrIEJvb3RzdHJhcCBhbmQgaXMgcmVzcG9uc2l2ZS4gVGFraW5nIHJlZmVyZW5jZSBmcm9tIGEgUEMgZ2FtZSwgVmFsb3JhbnQuIHVzaW5nIEFPUyAoQW5pbWF0ZSBPbiBTY3JvbGwgTGlicmFyeSkgdG8gbWFrZSBpdCBsb29rIG1vcmUgaW50ZXJhY3RpdmUuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogJ0UtQ29tbWVyY2UnLFxyXG4gICAgc2x1ZzogJ2Vjb21tZXJjZS1jaScsXHJcbiAgICBpbWc6ICdlY29tbWVyY2UtY2knLFxyXG4gICAgLy8gZGVtbzogJycsXHJcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL0hhbGltcDA3L2Vjb21tZXJjZV93aXRoX2NvZGVpZ25pdGVyJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIEUtQ29tbWVyY2Ugd2Vic2l0ZSBwcm9qZWN0IHVzZXMgdGhlIENvZGVJZ25pdGVyIDMgZnJhbWV3b3JrLCB0YWtpbmcgcmVmZXJlbmNlIGV4YW1wbGVzIGZyb20gQ29udmVyc2UuIENvbnRhaW5zIGEgbGlzdCBvZiBnb29kcyBhbmQgcHJpY2VzIGZvciBzaG9lcyBhbG9uZyB3aXRoIGFuIGFkbWluIHBhbmVsIHRvIG1hbmFnZSBkYXRhIGFsb25nIHdpdGggYSBwZGYgcHJpbnQgZmVhdHVyZSB0byBkaXNwbGF5IGZpbmFuY2lhbCByZXN1bHRzIG9idGFpbmVkIGZyb20gbW9udGggdG8gbW9udGguIFRoaXMgd2Vic2l0ZSB3YXMgd29ya2VkIG9uIGZvciAxIG1vbnRoIGFuZCB3YXMgZGVtb25zdHJhdGVkIGZvciB0aGUgZXhhbSByZXF1aXJlbWVudHMgb2Ygb25lIG9mIHRoZSBFRVBJUyBjb3Vyc2VzLicsXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAnU0lNIEpvYiBBcnJhbmdlbWVudCcsXHJcbiAgICBzbHVnOiAnc2ltLWpvYi1hcnJhbmdlbWVudCcsXHJcbiAgICBpbWc6ICdzaW0tam9iLWFycmFuZ2VtZW50JyxcclxuICAgIC8vIGRlbW86ICcnLFxyXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9IYWxpbXAwNy9zaW1fam9iX2FycmFuZ2VtZW50JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBwcm9qZWN0IGlzIGEgbWFuYWdlbWVudCBpbmZvcm1hdGlvbiBzeXN0ZW0gKE1JUykgdXNpbmcgbmF0aXZlIFBIUCBhY2NvbXBhbmllZCBieSBQTC9TUUwgd2l0aCBpbnRlZ3JhbCBmZWF0dXJlcyBmcm9tIE9yYWNsZSBkYXRhYmFzZSBhbmQgaXMgdXNlZCB0byBkZXZlbG9wIGRhdGFiYXNlIGFwcGxpY2F0aW9ucy4gVGhpcyB3ZWJzaXRlIGFpbXMgdG8gZmluZCBqb2JzIGFuZCB0aGVyZSBpcyBhbHNvIGFuIGFkbWluIHBhbmVsIHRoYXQgZnVuY3Rpb25zIHRvIG1hbmFnZSB0aGUgZW50aXJlIHdlYnNpdGUgc3VjaCBhcyBhZGRpbmcgam9icywgYWNjZXB0aW5nIGFuZCByZWplY3Rpbmcgam9iIGFwcGxpY2F0aW9ucyBmcm9tIHVzZXJzIHdobyBhcHBseS4gVGhpcyB3ZWJzaXRlIHdhcyB3b3JrZWQgb24gZm9yIDEgbW9udGggYW5kIHdhcyBkZW1vbnN0cmF0ZWQgZm9yIHRoZSBleGFtIHJlcXVpcmVtZW50cyBmb3Igb25lIG9mIHRoZSBFRVBJUyBjb3Vyc2VzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6ICdSZXNwb25zaXZlIFdlYicsXHJcbiAgICBzbHVnOiAncmVzcG9uc2l2ZS13ZWInLFxyXG4gICAgaW1nOiAncmVzcG9uc2l2ZS13ZWInLFxyXG4gICAgZGVtbzogJ2h0dHBzOi8vc2ltcGxlLXJlc3BvbnNpdmUtd2ViLnZlcmNlbC5hcHAvJyxcclxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vSGFsaW1wMDcvc2ltcGxlLXJlc3BvbnNpdmUtd2ViJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnc2FsYWggc2F0dSBwcm95ZWsga2VjaWwgdW50dWsgbWVtcGVsYWphcmkgbGViaWggZGFsYW0gY2FyYSBtZXJlc3BvbnNpdmUga2FuIHN1YXR1IHdlYnNpdGUgZGVuZ2FuIG1lbmdndW5ha2FuIGZyYW1ld29yayBCb290c3RyYXAuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0NvbWluZyBTb29uIFByb2plY3QnLFxyXG4gICAgc2x1ZzogJ2NvbWluZy1zb29uLXByb2plY3QnLFxyXG4gICAgaW1nOiAnY29taW5nLXNvb24nLFxyXG4gICAgLy8gZGVtbzogJ2h0dHBzOi8vc2ltcGxlLXJlc3BvbnNpdmUtd2ViLnZlcmNlbC5hcHAvJyxcclxuICAgIC8vIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vSGFsaW1wMDcvc2ltcGxlLXJlc3BvbnNpdmUtd2ViJyxcclxuICAgIC8vIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgYWxpYXMgYWNjdXNhbnRpdW0gY29tbW9kaSBxdWlhIHJlcnVtIHJlcHJlaGVuZGVyaXQgc2ltaWxpcXVlLCBpcHNhIGN1cGlkaXRhdGUgdmVsIHZvbHVwdGF0ZXMgc2FwaWVudGUsIHVuZGUgZHVjaW11cyBkaWduaXNzaW1vcyBzYWVwZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgbWF4aW1lIHZvbHVwdGF0aWJ1cyBsYXVkYW50aXVtLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIG5hbWU6ICdDb21pbmcgU29vbiBQcm9qZWN0JyxcclxuICAgIHNsdWc6ICdjb21pbmctc29vbi1wcm9qZWN0JyxcclxuICAgIGltZzogJ2NvbWluZy1zb29uJyxcclxuICAgIC8vIGRlbW86ICdodHRwczovL3NpbXBsZS1yZXNwb25zaXZlLXdlYi52ZXJjZWwuYXBwLycsXHJcbiAgICAvLyBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL0hhbGltcDA3L3NpbXBsZS1yZXNwb25zaXZlLXdlYicsXHJcbiAgICAvLyBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bGxhIGFsaWFzIGFjY3VzYW50aXVtIGNvbW1vZGkgcXVpYSByZXJ1bSByZXByZWhlbmRlcml0IHNpbWlsaXF1ZSwgaXBzYSBjdXBpZGl0YXRlIHZlbCB2b2x1cHRhdGVzIHNhcGllbnRlLCB1bmRlIGR1Y2ltdXMgZGlnbmlzc2ltb3Mgc2FlcGUgY29uc2VxdXVudHVyIHBvc3NpbXVzIG1heGltZSB2b2x1cHRhdGlidXMgbGF1ZGFudGl1bS4nLFxyXG4gIH0sXHJcbl07Il0sIm5hbWVzIjpbIlByb2plY3RzIiwiaWQiLCJuYW1lIiwic2x1ZyIsImltZyIsImRlbW8iLCJzb3VyY2VDb2RlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/Projects.js\n");

/***/ })

});