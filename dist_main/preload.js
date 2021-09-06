!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module) module.exports = t(require('fs-extra'))
	else if ('function' == typeof define && define.amd) define(['fs-extra'], t)
	else {
		var r = 'object' == typeof exports ? t(require('fs-extra')) : t(e['fs-extra'])
		for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n]
	}
})(global, function (e) {
	return (() => {
		'use strict'
		var t = {
				280: function (e, t, r) {
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r]
												},
											})
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r])
								  }),
						o =
							(this && this.__setModuleDefault) ||
							(Object.create
								? function (e, t) {
										Object.defineProperty(e, 'default', { enumerable: !0, value: t })
								  }
								: function (e, t) {
										e.default = t
								  }),
						i =
							(this && this.__importStar) ||
							function (e) {
								if (e && e.__esModule) return e
								var t = {}
								if (null != e) for (var r in e) 'default' !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
								return o(t, e), t
							},
						u =
							(this && this.__awaiter) ||
							function (e, t, r, n) {
								return new (r || (r = Promise))(function (o, i) {
									function u(e) {
										try {
											c(n.next(e))
										} catch (e) {
											i(e)
										}
									}
									function a(e) {
										try {
											c(n.throw(e))
										} catch (e) {
											i(e)
										}
									}
									function c(e) {
										var t
										e.done
											? o(e.value)
											: ((t = e.value),
											  t instanceof r
													? t
													: new r(function (e) {
															e(t)
													  })).then(u, a)
									}
									c((n = n.apply(e, t || [])).next())
								})
							},
						a =
							(this && this.__generator) ||
							function (e, t) {
								var r,
									n,
									o,
									i,
									u = {
										label: 0,
										sent: function () {
											if (1 & o[0]) throw o[1]
											return o[1]
										},
										trys: [],
										ops: [],
									}
								return (
									(i = { next: a(0), throw: a(1), return: a(2) }),
									'function' == typeof Symbol &&
										(i[Symbol.iterator] = function () {
											return this
										}),
									i
								)
								function a(i) {
									return function (a) {
										return (function (i) {
											if (r) throw new TypeError('Generator is already executing.')
											for (; u; )
												try {
													if (((r = 1), n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)) return o
													switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
														case 0:
														case 1:
															o = i
															break
														case 4:
															return u.label++, { value: i[1], done: !1 }
														case 5:
															u.label++, (n = i[1]), (i = [0])
															continue
														case 7:
															;(i = u.ops.pop()), u.trys.pop()
															continue
														default:
															if (!((o = (o = u.trys).length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
																u = 0
																continue
															}
															if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
																u.label = i[1]
																break
															}
															if (6 === i[0] && u.label < o[1]) {
																;(u.label = o[1]), (o = i)
																break
															}
															if (o && u.label < o[2]) {
																;(u.label = o[2]), u.ops.push(i)
																break
															}
															o[2] && u.ops.pop(), u.trys.pop()
															continue
													}
													i = t.call(e, u)
												} catch (e) {
													;(i = [6, e]), (n = 0)
												} finally {
													r = o = 0
												}
											if (5 & i[0]) throw i[1]
											return { value: i[0] ? i[1] : void 0, done: !0 }
										})([i, a])
									}
								}
							}
					Object.defineProperty(t, '__esModule', { value: !0 })
					var c = i(r(622)),
						s = i(r(298)),
						f = r(933),
						l = window
					process.once('loaded', function () {
						return u(void 0, void 0, void 0, function () {
							var e, t, r, n, o, i
							return a(this, function (u) {
								switch (u.label) {
									case 0:
										return [4, f.ipcRenderer.invoke('get-config')]
									case 1:
										return (e = u.sent()), (t = l), (o = { AppConfig: e }), [4, f.ipcRenderer.invoke('get-default-config')]
									case 2:
										return (o.DefaultAppConfig = u.sent()), (i = {}), [4, f.ipcRenderer.invoke('is-dev')]
									case 3:
										return (i.isDev = u.sent()), [4, f.ipcRenderer.invoke('get-process-arguments')]
									case 4:
										return (t.graviton = ((o.runtime = ((i.processArguments = u.sent()), i)), o)), (r = e.appConfigPath), (n = c.join(r, 'plugins')), s.existsSync(r) ? [3, 6] : [4, s.mkdir(r)]
									case 5:
										u.sent(), (u.label = 6)
									case 6:
										return s.existsSync(n) ? [3, 8] : [4, s.mkdir(n)]
									case 7:
										u.sent(), (u.label = 8)
									case 8:
										return [2]
								}
							})
						})
					})
				},
				933: e => {
					e.exports = require('electron')
				},
				298: t => {
					t.exports = e
				},
				622: e => {
					e.exports = require('path')
				},
			},
			r = {}
		return (function e(n) {
			if (r[n]) return r[n].exports
			var o = (r[n] = { exports: {} })
			return t[n].call(o.exports, o, o.exports, e), o.exports
		})(280)
	})()
})
