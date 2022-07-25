/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/canvasContext.tsx":
/*!***************************************!*\
  !*** ./src/context/canvasContext.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasProvider\": () => (/* binding */ CanvasProvider),\n/* harmony export */   \"useCanvasContext\": () => (/* binding */ useCanvasContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst CanvasContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nconst useCanvasContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CanvasContext);\n    if (context === null) {\n        throw new Error(\"useCanvasContext must be used within a CanvasProvider\");\n    }\n    return context;\n};\nconst CanvasProvider = ({ children  })=>{\n    const { 0: isEraser , 1: setIsEraser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: bgColor , 1: setBgColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    // #TODO color type?\n    const { 0: color , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#fff\");\n    const { 0: brushSize , 1: setBrushSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);\n    const { 0: clearCanvas , 1: setClearCanvas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: roomId , 1: setRoomId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: nickName , 1: setNickname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: participants , 1: setParticipants  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    const changeColor = (c)=>setColor(c);\n    const toggleEraser = ()=>setIsEraser(!isEraser);\n    const changeClearCanvas = (b)=>setClearCanvas(b);\n    const changeBgColor = (c)=>setBgColor(c);\n    const changeRoomId = (id)=>setRoomId(id);\n    const changeBrushSize = (size)=>setBrushSize(size);\n    const changeNickName = (nickName)=>setNickname(nickName);\n    const changeParticipants = (participants)=>setParticipants(participants);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasContext.Provider, {\n        value: {\n            isEraser,\n            color,\n            toggleEraser,\n            changeColor,\n            bgColor,\n            changeBgColor,\n            brushSize,\n            changeBrushSize,\n            changeClearCanvas,\n            clearCanvas,\n            roomId,\n            changeRoomId,\n            nickName,\n            changeNickName,\n            participants,\n            changeParticipants\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/masta/projects/sideprojects/actuallyherelemmishowyou/src/context/canvasContext.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jYW52YXNDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUNwQjtBQXFCaEMsTUFBTUksYUFBYSxpQkFBR0osMERBQW1CLENBQTJCLElBQUksQ0FBQztBQU1sRSxNQUFNTSxnQkFBZ0IsR0FBRyxJQUFNO0lBQ3BDLE1BQU1DLE9BQU8sR0FBR04saURBQVUsQ0FBQ0csYUFBYSxDQUFDO0lBQ3pDLElBQUlHLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsdURBQXVELENBQUM7S0FDekU7SUFDRCxPQUFPRCxPQUFPO0NBQ2Y7QUFFTSxNQUFNRSxjQUFjLEdBQWtDLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDN0UsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFdBQVcsTUFBSVQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsTUFBTSxLQUFDVSxPQUFPLE1BQUVDLFVBQVUsTUFBSVgsK0NBQVEsQ0FBUyxNQUFNLENBQUM7SUFDdEQsb0JBQW9CO0lBQ3BCLE1BQU0sS0FBQ1ksS0FBSyxNQUFFQyxRQUFRLE1BQUliLCtDQUFRLENBQVMsTUFBTSxDQUFDO0lBQ2xELE1BQU0sS0FBQ2MsU0FBUyxNQUFFQyxZQUFZLE1BQUlmLCtDQUFRLENBQVMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sS0FBQ2dCLFdBQVcsTUFBRUMsY0FBYyxNQUFJakIsK0NBQVEsQ0FBVSxLQUFLLENBQUM7SUFDOUQsTUFBTSxLQUFDa0IsTUFBTSxNQUFFQyxTQUFTLE1BQUluQiwrQ0FBUSxDQUFTLEVBQUUsQ0FBQztJQUNoRCxNQUFNLEtBQUNvQixRQUFRLE1BQUVDLFdBQVcsTUFBSXJCLCtDQUFRLENBQVMsRUFBRSxDQUFDO0lBQ3BELE1BQU0sS0FBQ3NCLFlBQVksTUFBRUMsZUFBZSxNQUFJdkIsK0NBQVEsQ0FBVyxFQUFFLENBQUM7SUFFOURELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksS0FBNkIsRUFDL0JzQixFQUFtRDtLQUN0RCxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1LLFdBQVcsR0FBRyxDQUFDQyxDQUFTLEdBQUtkLFFBQVEsQ0FBQ2MsQ0FBQyxDQUFDO0lBRTlDLE1BQU1DLFlBQVksR0FBRyxJQUFNbkIsV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztJQUVqRCxNQUFNcUIsaUJBQWlCLEdBQUcsQ0FBQ0MsQ0FBVSxHQUFLYixjQUFjLENBQUNhLENBQUMsQ0FBQztJQUUzRCxNQUFNQyxhQUFhLEdBQUcsQ0FBQ0osQ0FBUyxHQUFLaEIsVUFBVSxDQUFDZ0IsQ0FBQyxDQUFDO0lBRWxELE1BQU1LLFlBQVksR0FBRyxDQUFDQyxFQUFVLEdBQUtkLFNBQVMsQ0FBQ2MsRUFBRSxDQUFDO0lBRWxELE1BQU1DLGVBQWUsR0FBRyxDQUFDQyxJQUFZLEdBQUtwQixZQUFZLENBQUNvQixJQUFJLENBQUM7SUFFNUQsTUFBTUMsY0FBYyxHQUFHLENBQUNoQixRQUFnQixHQUFLQyxXQUFXLENBQUNELFFBQVEsQ0FBQztJQUVsRSxNQUFNaUIsa0JBQWtCLEdBQUcsQ0FBQ2YsWUFBc0IsR0FDaERDLGVBQWUsQ0FBQ0QsWUFBWSxDQUFDO0lBRS9CLHFCQUNFLDhEQUFDckIsYUFBYSxDQUFDcUMsUUFBUTtRQUNyQkMsS0FBSyxFQUFFO1lBQ0wvQixRQUFRO1lBQ1JJLEtBQUs7WUFDTGdCLFlBQVk7WUFDWkYsV0FBVztZQUNYaEIsT0FBTztZQUNQcUIsYUFBYTtZQUNiakIsU0FBUztZQUNUb0IsZUFBZTtZQUNmTCxpQkFBaUI7WUFDakJiLFdBQVc7WUFDWEUsTUFBTTtZQUNOYyxZQUFZO1lBQ1paLFFBQVE7WUFDUmdCLGNBQWM7WUFDZGQsWUFBWTtZQUNaZSxrQkFBa0I7U0FDbkI7a0JBRUE5QixRQUFROzs7OztpQkFDYyxDQUMxQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVyZS1sZW1taS1zaG93LXlvdS8uL3NyYy9jb250ZXh0L2NhbnZhc0NvbnRleHQudHN4PzllYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzQ29udGV4dFR5cGUge1xuICByb29tSWQ6IHN0cmluZ1xuICBjaGFuZ2VSb29tSWQ6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIGlzRXJhc2VyOiBib29sZWFuXG4gIGNvbG9yOiBzdHJpbmdcbiAgdG9nZ2xlRXJhc2VyOiAoKSA9PiB2b2lkXG4gIGNoYW5nZUNvbG9yOiAoY29sb3I6IHN0cmluZykgPT4gdm9pZFxuICBiZ0NvbG9yOiBzdHJpbmdcbiAgY2hhbmdlQmdDb2xvcjogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWRcbiAgYnJ1c2hTaXplOiBudW1iZXJcbiAgY2hhbmdlQnJ1c2hTaXplOiAoc2l6ZTogbnVtYmVyKSA9PiB2b2lkXG4gIGNsZWFyQ2FudmFzOiBib29sZWFuXG4gIGNoYW5nZUNsZWFyQ2FudmFzOiAoYjogYm9vbGVhbikgPT4gdm9pZFxuICBuaWNrTmFtZTogc3RyaW5nXG4gIGNoYW5nZU5pY2tOYW1lOiAobmlja05hbWU6IHN0cmluZykgPT4gdm9pZFxuICBwYXJ0aWNpcGFudHM6IHN0cmluZ1tdXG4gIGNoYW5nZVBhcnRpY2lwYW50czogKHBhcnRpY2lwYW50czogc3RyaW5nW10pID0+IHZvaWRcbn1cblxuY29uc3QgQ2FudmFzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q2FudmFzQ29udGV4dFR5cGUgfCBudWxsPihudWxsKVxuXG5pbnRlcmZhY2UgQ2FudmFzUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNhbnZhc0NvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhbnZhc0NvbnRleHQpXG4gIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2FudmFzQ29udGV4dCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FudmFzUHJvdmlkZXJcIilcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuXG5leHBvcnQgY29uc3QgQ2FudmFzUHJvdmlkZXI6IFJlYWN0LkZDPENhbnZhc1Byb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNFcmFzZXIsIHNldElzRXJhc2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYmdDb2xvciwgc2V0QmdDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiIzAwMFwiKVxuICAvLyAjVE9ETyBjb2xvciB0eXBlP1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCIjZmZmXCIpXG4gIGNvbnN0IFticnVzaFNpemUsIHNldEJydXNoU2l6ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDMpXG4gIGNvbnN0IFtjbGVhckNhbnZhcywgc2V0Q2xlYXJDYW52YXNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtyb29tSWQsIHNldFJvb21JZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXG4gIGNvbnN0IFtuaWNrTmFtZSwgc2V0Tmlja25hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxuICBjb25zdCBbcGFydGljaXBhbnRzLCBzZXRQYXJ0aWNpcGFudHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICBzZXROaWNrbmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpIHx8IFwiXCIpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKGM6IHN0cmluZykgPT4gc2V0Q29sb3IoYylcblxuICBjb25zdCB0b2dnbGVFcmFzZXIgPSAoKSA9PiBzZXRJc0VyYXNlcighaXNFcmFzZXIpXG5cbiAgY29uc3QgY2hhbmdlQ2xlYXJDYW52YXMgPSAoYjogYm9vbGVhbikgPT4gc2V0Q2xlYXJDYW52YXMoYilcblxuICBjb25zdCBjaGFuZ2VCZ0NvbG9yID0gKGM6IHN0cmluZykgPT4gc2V0QmdDb2xvcihjKVxuXG4gIGNvbnN0IGNoYW5nZVJvb21JZCA9IChpZDogc3RyaW5nKSA9PiBzZXRSb29tSWQoaWQpXG5cbiAgY29uc3QgY2hhbmdlQnJ1c2hTaXplID0gKHNpemU6IG51bWJlcikgPT4gc2V0QnJ1c2hTaXplKHNpemUpXG5cbiAgY29uc3QgY2hhbmdlTmlja05hbWUgPSAobmlja05hbWU6IHN0cmluZykgPT4gc2V0Tmlja25hbWUobmlja05hbWUpXG5cbiAgY29uc3QgY2hhbmdlUGFydGljaXBhbnRzID0gKHBhcnRpY2lwYW50czogc3RyaW5nW10pID0+XG4gICAgc2V0UGFydGljaXBhbnRzKHBhcnRpY2lwYW50cylcblxuICByZXR1cm4gKFxuICAgIDxDYW52YXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc0VyYXNlcixcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHRvZ2dsZUVyYXNlcixcbiAgICAgICAgY2hhbmdlQ29sb3IsXG4gICAgICAgIGJnQ29sb3IsXG4gICAgICAgIGNoYW5nZUJnQ29sb3IsXG4gICAgICAgIGJydXNoU2l6ZSxcbiAgICAgICAgY2hhbmdlQnJ1c2hTaXplLFxuICAgICAgICBjaGFuZ2VDbGVhckNhbnZhcyxcbiAgICAgICAgY2xlYXJDYW52YXMsXG4gICAgICAgIHJvb21JZCxcbiAgICAgICAgY2hhbmdlUm9vbUlkLFxuICAgICAgICBuaWNrTmFtZSxcbiAgICAgICAgY2hhbmdlTmlja05hbWUsXG4gICAgICAgIHBhcnRpY2lwYW50cyxcbiAgICAgICAgY2hhbmdlUGFydGljaXBhbnRzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYW52YXNDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYW52YXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbnZhc0NvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiLCJDYW52YXNQcm92aWRlciIsImNoaWxkcmVuIiwiaXNFcmFzZXIiLCJzZXRJc0VyYXNlciIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwiY29sb3IiLCJzZXRDb2xvciIsImJydXNoU2l6ZSIsInNldEJydXNoU2l6ZSIsImNsZWFyQ2FudmFzIiwic2V0Q2xlYXJDYW52YXMiLCJyb29tSWQiLCJzZXRSb29tSWQiLCJuaWNrTmFtZSIsInNldE5pY2tuYW1lIiwicGFydGljaXBhbnRzIiwic2V0UGFydGljaXBhbnRzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZUNvbG9yIiwiYyIsInRvZ2dsZUVyYXNlciIsImNoYW5nZUNsZWFyQ2FudmFzIiwiYiIsImNoYW5nZUJnQ29sb3IiLCJjaGFuZ2VSb29tSWQiLCJpZCIsImNoYW5nZUJydXNoU2l6ZSIsInNpemUiLCJjaGFuZ2VOaWNrTmFtZSIsImNoYW5nZVBhcnRpY2lwYW50cyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/canvasContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_canvasContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/canvasContext */ \"./src/context/canvasContext.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/masta/projects/sideprojects/actuallyherelemmishowyou/src/pages/_app.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Here, let me show you\"\n                    }, void 0, false, {\n                        fileName: \"/home/masta/projects/sideprojects/actuallyherelemmishowyou/src/pages/_app.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/masta/projects/sideprojects/actuallyherelemmishowyou/src/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_canvasContext__WEBPACK_IMPORTED_MODULE_2__.CanvasProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/masta/projects/sideprojects/actuallyherelemmishowyou/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/masta/projects/sideprojects/actuallyherelemmishowyou/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUUyQjtBQUM3QjtBQUU1QixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJOztrQ0FDSCw4REFBQ0ksTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyx1Q0FBdUM7Ozs7OzRCQUFHO2tDQUN4RSw4REFBQ0MsT0FBSztrQ0FBQyx1QkFBcUI7Ozs7OzRCQUFROzs7Ozs7b0JBQy9COzBCQUNQLDhEQUFDUixrRUFBYzs7a0NBQ2IsOERBQUNHLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7b0JBQUMsR0FBRzs7Ozs7O29CQUNqQjs7b0JBQ2hCLENBQ0o7Q0FDRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVyZS1sZW1taS1zaG93LXlvdS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCB7IENhbnZhc1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FudmFzQ29udGV4dFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8dGl0bGU+SGVyZSwgbGV0IG1lIHNob3cgeW91PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYW52YXNQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPntcIiBcIn1cbiAgICAgIDwvQ2FudmFzUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJDYW52YXNQcm92aWRlciIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();