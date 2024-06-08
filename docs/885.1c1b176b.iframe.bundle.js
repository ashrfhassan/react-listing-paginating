/*! For license information please see 885.1c1b176b.iframe.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_listing_pagination =
  self.webpackChunkreact_listing_pagination || []).push([
  [885],
  {
    './src/components/contentLoader/grid.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/react-content-loader/dist/react-content-loader.es.js'
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function cov_1qixlfvd2o() {
        var path =
            'D:\\work\\listing-paginating\\src\\components\\contentLoader\\grid.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {});
        (coverage[path] &&
          '194b29b31cedcb8cbf06c1958c6f85f98a4363f3' === coverage[path].hash) ||
          (coverage[path] = {
            path: 'D:\\work\\listing-paginating\\src\\components\\contentLoader\\grid.tsx',
            statementMap: {
              0: {
                start: { line: 3, column: 2 },
                end: { line: 65, column: 4 },
              },
            },
            fnMap: {
              0: {
                name: 'GridContentLoader',
                decl: {
                  start: { line: 2, column: 9 },
                  end: { line: 2, column: 26 },
                },
                loc: {
                  start: { line: 2, column: 39 },
                  end: { line: 66, column: 1 },
                },
                line: 2,
              },
            },
            branchMap: {},
            s: { 0: 0 },
            f: { 0: 0 },
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '194b29b31cedcb8cbf06c1958c6f85f98a4363f3',
          });
        var actualCoverage = coverage[path];
        return (
          (cov_1qixlfvd2o = function () {
            return actualCoverage;
          }),
          actualCoverage
        );
      }
      function _typeof(o) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    'function' == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                _defineProperty(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function _defineProperty(e, r, t) {
        return (
          (r = (function _toPropertyKey(t) {
            var i = (function _toPrimitive(t, r) {
              if ('object' != _typeof(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var i = e.call(t, r || 'default');
                if ('object' != _typeof(i)) return i;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === r ? String : Number)(t);
            })(t, 'string');
            return 'symbol' == _typeof(i) ? i : i + '';
          })(r)) in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function GridContentLoader(props) {
        return (
          cov_1qixlfvd2o().f[0]++,
          cov_1qixlfvd2o().s[0]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_content_loader__WEBPACK_IMPORTED_MODULE_1__.Ay,
            _objectSpread(
              _objectSpread(
                { viewBox: '0 0 1360 1000', height: '100%', width: '100%' },
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '20',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '250',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '275',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '20',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '250',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '275',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '20',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '250',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '275',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '20',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '250',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '275',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '20',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '250',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '275',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '20',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '250',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '275',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '340',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '570',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '595',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '340',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '570',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '595',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '340',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '570',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '595',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '340',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '570',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '595',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '340',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '570',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '595',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '340',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '570',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '595',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '660',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '890',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '30',
                      y: '915',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '660',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '890',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '250',
                      y: '915',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '660',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '890',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '470',
                      y: '915',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '660',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '890',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '690',
                      y: '915',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '660',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '890',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '910',
                      y: '915',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '660',
                      rx: '8',
                      ry: '8',
                      width: '200',
                      height: '200',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '890',
                      rx: '0',
                      ry: '0',
                      width: '200',
                      height: '18',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'rect',
                    {
                      x: '1130',
                      y: '915',
                      rx: '0',
                      ry: '0',
                      width: '120',
                      height: '20',
                    }
                  ),
                ],
              }
            )
          )
        );
      }
      cov_1qixlfvd2o();
      const __WEBPACK_DEFAULT_EXPORT__ = GridContentLoader;
      try {
        (GridContentLoader.displayName = 'GridContentLoader'),
          (GridContentLoader.__docgenInfo = {
            description: '',
            displayName: 'GridContentLoader',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/contentLoader/grid.tsx#GridContentLoader'
            ] = {
              docgenInfo: GridContentLoader.__docgenInfo,
              name: 'GridContentLoader',
              path: 'src/components/contentLoader/grid.tsx#GridContentLoader',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/react-content-loader/dist/react-content-loader.es.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Ay: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            __assign.apply(this, arguments)
          );
        };
      var SVG = function (_a) {
          var _b = _a.animate,
            animate = void 0 === _b || _b,
            animateBegin = _a.animateBegin,
            _c = _a.backgroundColor,
            backgroundColor = void 0 === _c ? '#f5f6f7' : _c,
            _d = _a.backgroundOpacity,
            backgroundOpacity = void 0 === _d ? 1 : _d,
            _e = _a.baseUrl,
            baseUrl = void 0 === _e ? '' : _e,
            children = _a.children,
            _f = _a.foregroundColor,
            foregroundColor = void 0 === _f ? '#eee' : _f,
            _g = _a.foregroundOpacity,
            foregroundOpacity = void 0 === _g ? 1 : _g,
            _h = _a.gradientRatio,
            gradientRatio = void 0 === _h ? 2 : _h,
            _j = _a.gradientDirection,
            gradientDirection = void 0 === _j ? 'left-right' : _j,
            uniqueKey = _a.uniqueKey,
            _k = _a.interval,
            interval = void 0 === _k ? 0.25 : _k,
            _l = _a.rtl,
            rtl = void 0 !== _l && _l,
            _m = _a.speed,
            speed = void 0 === _m ? 1.2 : _m,
            _o = _a.style,
            style = void 0 === _o ? {} : _o,
            _p = _a.title,
            title = void 0 === _p ? 'Loading...' : _p,
            _q = _a.beforeMask,
            beforeMask = void 0 === _q ? null : _q,
            props = (function __rest(s, e) {
              var t = {};
              for (var p in s)
                Object.prototype.hasOwnProperty.call(s, p) &&
                  e.indexOf(p) < 0 &&
                  (t[p] = s[p]);
              if (
                null != s &&
                'function' == typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                  e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                    (t[p[i]] = s[p[i]]);
              }
              return t;
            })(_a, [
              'animate',
              'animateBegin',
              'backgroundColor',
              'backgroundOpacity',
              'baseUrl',
              'children',
              'foregroundColor',
              'foregroundOpacity',
              'gradientRatio',
              'gradientDirection',
              'uniqueKey',
              'interval',
              'rtl',
              'speed',
              'style',
              'title',
              'beforeMask',
            ]),
            fixedId = uniqueKey || Math.random().toString(36).substring(6),
            idClip = fixedId + '-diff',
            idGradient = fixedId + '-animated-diff',
            idAria = fixedId + '-aria',
            rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null,
            keyTimes = '0; ' + interval + '; 1',
            dur = speed + 's',
            gradientTransform =
              'top-bottom' === gradientDirection ? 'rotate(90)' : void 0;
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            'svg',
            __assign(
              {
                'aria-labelledby': idAria,
                role: 'img',
                style: __assign(__assign({}, style), rtlStyle),
              },
              props
            ),
            title
              ? (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'title',
                  { id: idAria },
                  title
                )
              : null,
            beforeMask &&
              (0, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(beforeMask)
              ? beforeMask
              : null,
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('rect', {
              role: 'presentation',
              x: '0',
              y: '0',
              width: '100%',
              height: '100%',
              clipPath: 'url(' + baseUrl + '#' + idClip + ')',
              style: { fill: 'url(' + baseUrl + '#' + idGradient + ')' },
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              'defs',
              null,
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'clipPath',
                { id: idClip },
                children
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                'linearGradient',
                { id: idGradient, gradientTransform },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'stop',
                  {
                    offset: '0%',
                    stopColor: backgroundColor,
                    stopOpacity: backgroundOpacity,
                  },
                  animate &&
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'animate',
                      {
                        attributeName: 'offset',
                        values: -gradientRatio + '; ' + -gradientRatio + '; 1',
                        keyTimes,
                        dur,
                        repeatCount: 'indefinite',
                        begin: animateBegin,
                      }
                    )
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'stop',
                  {
                    offset: '50%',
                    stopColor: foregroundColor,
                    stopOpacity: foregroundOpacity,
                  },
                  animate &&
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'animate',
                      {
                        attributeName: 'offset',
                        values:
                          -gradientRatio / 2 +
                          '; ' +
                          -gradientRatio / 2 +
                          '; ' +
                          (1 + gradientRatio / 2),
                        keyTimes,
                        dur,
                        repeatCount: 'indefinite',
                        begin: animateBegin,
                      }
                    )
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  'stop',
                  {
                    offset: '100%',
                    stopColor: backgroundColor,
                    stopOpacity: backgroundOpacity,
                  },
                  animate &&
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      'animate',
                      {
                        attributeName: 'offset',
                        values: '0; 0; ' + (1 + gradientRatio),
                        keyTimes,
                        dur,
                        repeatCount: 'indefinite',
                        begin: animateBegin,
                      }
                    )
                )
              )
            )
          );
        },
        ContentLoader = function (props) {
          return props.children
            ? (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                SVG,
                __assign({}, props)
              )
            : (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                ReactContentLoaderFacebook,
                __assign({}, props)
              );
        },
        ReactContentLoaderFacebook = function (props) {
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            ContentLoader,
            __assign({ viewBox: '0 0 476 124' }, props),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('rect', {
              x: '48',
              y: '8',
              width: '88',
              height: '6',
              rx: '3',
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('rect', {
              x: '48',
              y: '26',
              width: '52',
              height: '6',
              rx: '3',
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('rect', {
              x: '0',
              y: '56',
              width: '410',
              height: '6',
              rx: '3',
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('rect', {
              x: '0',
              y: '72',
              width: '380',
              height: '6',
              rx: '3',
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('rect', {
              x: '0',
              y: '88',
              width: '178',
              height: '6',
              rx: '3',
            }),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)('circle', {
              cx: '20',
              cy: '20',
              r: '20',
            })
          );
        };
      const __WEBPACK_DEFAULT_EXPORT__ = ContentLoader;
    },
  },
]);
