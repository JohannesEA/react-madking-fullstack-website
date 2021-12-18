(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
    [0],
    {
        114: function (n, e, t) {},
        117: function (n, e, t) {
            "use strict";
            t.r(e);
            var r = t(2),
                c = t(28),
                o = t.n(c),
                i = t(15),
                a = t(9),
                s = t(7),
                l = t(3),
                d = t(4),
                b = t(133);
            function u() {
                var n = window;
                return { width: n.innerWidth, height: n.innerHeight };
            }
            function j() {
                var n = Object(r.useState)(u()),
                    e = Object(s.a)(n, 2),
                    t = e[0],
                    c = e[1];
                return (
                    Object(r.useEffect)(function () {
                        function n() {
                            c(u());
                        }
                        return (
                            window.addEventListener("resize", n),
                            function () {
                                return window.removeEventListener("resize", n);
                            }
                        );
                    }, []),
                    t
                );
            }
            var x,
                h,
                m,
                f,
                p,
                g,
                O,
                v,
                w,
                k,
                y,
                _,
                z,
                C,
                S,
                P,
                F,
                L,
                E,
                T,
                K,
                U,
                D,
                I,
                B,
                N,
                V,
                M,
                A,
                H,
                q,
                X,
                J,
                R,
                W,
                Z,
                $,
                Q,
                Y,
                G,
                nn,
                en,
                tn,
                rn,
                cn = t(17),
                on = t(30),
                an = t(11),
                sn = t(33),
                ln = Object(sn.b)({
                    name: "user",
                    initialState: {
                        currentUser: null,
                        isFetching: !1,
                        error: !1,
                    },
                    reducers: {
                        loginStart: function (n) {
                            n.isFetching = !0;
                        },
                        loginSuccess: function (n, e) {
                            (n.isFetching = !1), (n.currentUser = e.payload);
                        },
                        loginFailure: function (n) {
                            (n.isFetching = !1), (n.error = !0);
                        },
                        logout: function (n) {
                            (n.isFetching = !1), (n.currentUser = null);
                        },
                    },
                }),
                dn = ln.actions,
                bn = dn.loginStart,
                un = dn.loginSuccess,
                jn = dn.loginFailure,
                xn = dn.logout,
                hn = ln.reducer,
                mn = t(1),
                fn = function () {
                    var n = Object(r.useState)(!1),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = j().width,
                        a = Object(an.c)(function (n) {
                            return n.cart.quantity;
                        }),
                        l = Object(an.c)(function (n) {
                            return n.user.currentUser;
                        }),
                        d = Object(an.b)();
                    return Object(mn.jsxs)(pn, {
                        children: [
                            Object(mn.jsx)(On, {
                                href: "",
                                children: "MadKing",
                            }),
                            o < 930 &&
                                Object(mn.jsx)(b.a, {
                                    color: "white",
                                    onToggle: function () {
                                        c(!t);
                                    },
                                }),
                            Object(mn.jsxs)(vn, {
                                isOpen: t,
                                children: [
                                    Object(mn.jsxs)(cn.Link, {
                                        to: "about",
                                        className: "nav-logo",
                                        spy: !0,
                                        smooth: !0,
                                        offset: -100,
                                        duration: 300,
                                        children: [
                                            " ",
                                            Object(mn.jsx)(gn, {
                                                href: "",
                                                children: "Om oss",
                                            }),
                                        ],
                                    }),
                                    Object(mn.jsxs)(cn.Link, {
                                        to: "beats",
                                        className: "nav-logo",
                                        spy: !0,
                                        smooth: !0,
                                        offset: -100,
                                        duration: 300,
                                        children: [
                                            " ",
                                            Object(mn.jsx)(gn, {
                                                href: "",
                                                children: "V\xe5re Beats",
                                            }),
                                        ],
                                    }),
                                    Object(mn.jsxs)(cn.Link, {
                                        to: "contact",
                                        className: "nav-logo",
                                        spy: !0,
                                        smooth: !0,
                                        offset: -100,
                                        duration: 300,
                                        children: [
                                            " ",
                                            Object(mn.jsx)(gn, {
                                                href: "",
                                                children: "Kontakt Oss",
                                            }),
                                        ],
                                    }),
                                    l
                                        ? Object(mn.jsx)(gn, {
                                              onClick: function () {
                                                  d(xn());
                                              },
                                              children: "Logg Ut",
                                          })
                                        : Object(mn.jsxs)(i.b, {
                                              to: "/login",
                                              children: [
                                                  " ",
                                                  Object(mn.jsx)(gn, {
                                                      href: "",
                                                      children: "Logg Inn",
                                                  }),
                                              ],
                                          }),
                                    l &&
                                        Object(mn.jsx)(i.b, {
                                            to: "/admin",
                                            children: Object(mn.jsx)(gn, {
                                                href: "",
                                                children: "Admin",
                                            }),
                                        }),
                                    Object(mn.jsxs)(i.b, {
                                        to: "orders/",
                                        children: [
                                            " ",
                                            Object(mn.jsxs)(gn, {
                                                href: "",
                                                children: [
                                                    Object(mn.jsx)(on.c, {
                                                        fontSize: "1.2rem",
                                                    }),
                                                    "(",
                                                    a,
                                                    ")",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                pn = d.c.div(
                    x ||
                        (x = Object(l.a)([
                            "\n  z-index: 100;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: var(--color-1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n",
                        ]))
                ),
                gn = d.c.p(
                    h ||
                        (h = Object(l.a)([
                            "\n  padding: 1rem 2rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: var(--color-text);\n  font-size: 1.2rem;\n  display: inline-block;\n  position: relative;\n\n  &::after{\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: .5px;\n  bottom: 1vh;\n  left: 0;\n  background-color: var(--color-text);\n  transform-origin: bottom right;\n  transition: transform 0.4s ease-out;\n  }\n\n  &:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n  }\n\n\n",
                        ]))
                ),
                On = d.c.p(
                    m ||
                        (m = Object(l.a)([
                            "\n  padding: .1rem 0;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.7rem;\n\n",
                        ]))
                ),
                vn = d.c.div(
                    f ||
                        (f = Object(l.a)([
                            "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  @media (max-width:930px) {\n    overflow: hidden;\n    flex-direction: column;\n    max-height: ",
                            ";\n    transition: max-height 0.3s ease-in;\n    width: 100%;\n  }\n",
                        ])),
                    function (n) {
                        return n.isOpen ? "500px" : "0";
                    }
                ),
                wn = function (n) {
                    return Object(d.b)(
                        p ||
                            (p = Object(l.a)([
                                "\n    @media only screen and (max-width: 380px) {\n      ",
                                "\n    }\n  ",
                            ])),
                        n
                    );
                },
                kn = function () {
                    return Object(mn.jsxs)(yn, {
                        children: [
                            Object(mn.jsxs)(_n, {
                                children: [
                                    Object(mn.jsxs)(cn.Link, {
                                        to: "hero",
                                        spy: !0,
                                        smooth: !0,
                                        offset: -100,
                                        duration: 300,
                                        children: [
                                            "  ",
                                            Object(mn.jsx)(zn, {
                                                children: "MadKing",
                                            }),
                                        ],
                                    }),
                                    Object(mn.jsx)(Cn, {
                                        children:
                                            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\u2019t look even slightly believable.",
                                    }),
                                    Object(mn.jsx)(Sn, {}),
                                ],
                            }),
                            Object(mn.jsxs)(Pn, {
                                children: [
                                    Object(mn.jsx)(Fn, {
                                        children: "Useful Links",
                                    }),
                                    Object(mn.jsxs)(Ln, {
                                        children: [
                                            Object(mn.jsx)(En, {
                                                children: "Hjem",
                                            }),
                                            Object(mn.jsx)(En, {
                                                children: "Om oss",
                                            }),
                                            Object(mn.jsx)(En, {
                                                children: "V\xe5re beats",
                                            }),
                                            Object(mn.jsx)(En, {
                                                children: "Kontakt oss",
                                            }),
                                            Object(mn.jsx)(En, {
                                                children: "Logg inn",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(mn.jsxs)(Tn, {
                                children: [
                                    Object(mn.jsx)(Fn, {
                                        children:
                                            "V\xe5re betalingsl\xf8sninger",
                                    }),
                                    Object(mn.jsx)(Kn, {
                                        src: "https://i.ibb.co/Qfvn4z6/payment.png",
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                yn = d.c.div(
                    g ||
                        (g = Object(l.a)([
                            "\n  display: flex;\n  ",
                            "\n  background-color: var(--color-1);\n",
                        ])),
                    wn({ flexDirection: "column" })
                ),
                _n = d.c.div(
                    O ||
                        (O = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  color: white;\n",
                        ]))
                ),
                zn = d.c.h1(v || (v = Object(l.a)([""]))),
                Cn = d.c.p(w || (w = Object(l.a)(["\n  margin: 20px 0px;\n"]))),
                Sn = d.c.div(k || (k = Object(l.a)(["\n  display: flex;\n"]))),
                Pn = d.c.div(
                    y ||
                        (y = Object(l.a)([
                            "\n  flex: 1;\n  padding: 20px;\n  color: white;\n\n  ",
                            "\n",
                        ])),
                    wn({ display: "none" })
                ),
                Fn = d.c.h3(
                    _ || (_ = Object(l.a)(["\n  margin-bottom: 30px;\n"]))
                ),
                Ln = d.c.ul(
                    z ||
                        (z = Object(l.a)([
                            "\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n",
                        ]))
                ),
                En = d.c.li(
                    C ||
                        (C = Object(l.a)([
                            "\n  width: 50%;\n  margin-bottom: 10px;\n",
                        ]))
                ),
                Tn = d.c.div(
                    S ||
                        (S = Object(l.a)([
                            "\n  flex: 1;\n  padding: 20px;\n  color: white;\n\n  ",
                            "\n",
                        ])),
                    wn({ backgroundColor: "#214554" })
                ),
                Kn = d.c.img(P || (P = Object(l.a)(["\n    width: 50%;\n"]))),
                Un = function () {
                    var n = j();
                    n.height, n.width;
                    return Object(mn.jsxs)(Dn, {
                        id: "hero",
                        children: [
                            Object(mn.jsxs)(Bn, {
                                children: [
                                    Object(mn.jsx)(In, {
                                        children:
                                            "Finn beaten som passer for ditt prosjekt!",
                                    }),
                                    Object(mn.jsxs)(Nn, {
                                        children: [
                                            Object(mn.jsxs)(cn.Link, {
                                                to: "about",
                                                className: "nav-logo",
                                                spy: !0,
                                                smooth: !0,
                                                offset: -100,
                                                duration: 300,
                                                children: [
                                                    "   ",
                                                    Object(mn.jsx)(Vn, {
                                                        backgroundcolor:
                                                            "#3E768C",
                                                        color: "white",
                                                        hover: "#558ba0",
                                                        children: "Om oss",
                                                    }),
                                                ],
                                            }),
                                            Object(mn.jsxs)(cn.Link, {
                                                to: "beats",
                                                className: "nav-logo",
                                                spy: !0,
                                                smooth: !0,
                                                offset: -100,
                                                duration: 300,
                                                children: [
                                                    "           ",
                                                    Object(mn.jsx)(Vn, {
                                                        backgroundcolor:
                                                            "#cbd4d8",
                                                        color: "black",
                                                        hover: "#b7d8e6",
                                                        children:
                                                            "V\xe5re beats",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(mn.jsx)(Mn, {}),
                        ],
                    });
                },
                Dn = d.c.div(
                    F ||
                        (F = Object(l.a)([
                            "\n  padding: 5rem 1rem 2rem 1rem;\n  display: flex;\n  transition: all .3s ease;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: url('/assets/images/music-images/img4.jpg') no-repeat;\n  background-size: cover;\n  background-position: 100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100vh;    \n  background-color: var(--color-1);\n\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n    height: 70vh;    \n\n  }\n\n\n",
                        ]))
                ),
                In = d.c.h1(
                    L ||
                        (L = Object(l.a)([
                            "\n  color: var(--color-text);\n  font-size: 2.8em;\n  font-weight: 300;\n  font-family: 'Montserrat', cursive ;\n",
                        ]))
                ),
                Bn = d.c.div(
                    E ||
                        (E = Object(l.a)([
                            "\nz-index: 1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: rgba(200, 200,200, .05);   \n  backdrop-filter: blur(5px);\n  padding: 1rem;\n  border-radius: 1em;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); \n\n\n  @media (max-width: 800px) {\n    background-color: transparent;  \n  backdrop-filter: blur(3px);\n\n  }\n",
                        ]))
                ),
                Nn = d.c.div(
                    T ||
                        (T = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nflex-direction: row;\n",
                        ]))
                ),
                Vn = d.c.button(
                    K ||
                        (K = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all .2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n\n  &:hover{\n    background-color: ",
                            ";\n  border-radius: .5em;\n  box-shadow: .2rem .2rem 0 0 rgba(255, 255, 255, .15); \n\n      \n  }\n\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Mn = d.c.div(
                    U ||
                        (U = Object(l.a)([
                            "\n  flex: 1;\n  min-height: 36vh;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  text-align: center;\n",
                        ]))
                ),
                An =
                    (d.c.p(
                        D ||
                            (D = Object(l.a)([
                                "\n  color:  var(--color-5);\n  font-weight: 400;\n  font-size: 1.1rem;\n  padding: 3rem 0;\n\n",
                            ]))
                    ),
                    d.c.image(
                        I ||
                            (I = Object(l.a)([
                                "\n  color:  var(--color-5);\n  font-weight: 400;\n  font-size: 1.1rem;\n  padding: 3rem 0;\n\n",
                            ]))
                    ),
                    function () {
                        var n = j(),
                            e = (n.height, n.width);
                        return Object(mn.jsxs)(Hn, {
                            id: "about",
                            children: [
                                Object(mn.jsxs)(Rn, {
                                    children: [
                                        Object(mn.jsx)(Jn, {
                                            children: "Om Oss",
                                        }),
                                        e > 800 &&
                                            Object(mn.jsxs)(qn, {
                                                children: [
                                                    Object(mn.jsx)(Wn, {
                                                        children:
                                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus totam a eum voluptates molestias sint asperiores pariatur ex tenetur!",
                                                    }),
                                                    Object(mn.jsxs)(cn.Link, {
                                                        to: "contact",
                                                        className: "nav-logo",
                                                        spy: !0,
                                                        smooth: !0,
                                                        offset: -100,
                                                        duration: 300,
                                                        children: [
                                                            " ",
                                                            Object(mn.jsx)(Xn, {
                                                                backgroundcolor:
                                                                    "#3E768C",
                                                                color: "white",
                                                                hover: "#558ba0",
                                                                children:
                                                                    "Kontakt Oss",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                                Object(mn.jsxs)(Zn, {
                                    children: [
                                        Object(mn.jsx)($n, {
                                            src: "/assets/images/music-images/img5.jpg",
                                            alt: "about-img",
                                        }),
                                        e < 800 &&
                                            Object(mn.jsxs)(qn, {
                                                children: [
                                                    Object(mn.jsx)(Wn, {
                                                        children:
                                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus totam a eum voluptates molestias sint asperiores pariatur ex tenetur!",
                                                    }),
                                                    " ",
                                                    Object(mn.jsxs)(cn.Link, {
                                                        to: "contact",
                                                        className: "nav-logo",
                                                        spy: !0,
                                                        smooth: !0,
                                                        offset: -100,
                                                        duration: 300,
                                                        children: [
                                                            " ",
                                                            Object(mn.jsx)(Xn, {
                                                                backgroundcolor:
                                                                    "#3E768C",
                                                                color: "white",
                                                                hover: "#558ba0",
                                                                children:
                                                                    "Kontakt Oss",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        });
                    }),
                Hn = d.c.div(
                    B ||
                        (B = Object(l.a)([
                            "\n  padding: 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.3s ease;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 80vh;\n  background-color: var(--color-2);\n  @media (max-width: 800px) {\n    flex-direction: column;\n    height: auto;\n  }\n",
                        ]))
                ),
                qn = d.c.div(
                    N ||
                        (N = Object(l.a)([
                            "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
                        ]))
                ),
                Xn = d.c.button(
                    V ||
                        (V = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Jn = d.c.h1(
                    M ||
                        (M = Object(l.a)([
                            "\n  color: var(--color-text);\n  font-size: 2rem;\n  font-weight: 800;\n",
                        ]))
                ),
                Rn = d.c.div(
                    A ||
                        (A = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n",
                        ]))
                ),
                Wn = d.c.p(
                    H ||
                        (H = Object(l.a)([
                            "\n  color: var(--color-text);\n  font-weight: 400;\n  font-size: 1.3rem;\n  padding: 3rem 0;\n",
                        ]))
                ),
                Zn = d.c.div(
                    q ||
                        (q = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n",
                        ]))
                ),
                $n = d.c.img(
                    X ||
                        (X = Object(l.a)([
                            "\n  max-height: 70vh;\n  max-width: 50vh;\n  border-radius: 1em;\n",
                        ]))
                ),
                Qn = function () {
                    var n = j(),
                        e = (n.height, n.width),
                        t = Object(r.useState)("Trykk p\xe5 sirklene"),
                        c = Object(s.a)(t, 2),
                        o = c[0],
                        i = c[1],
                        a = function () {
                            i("Tekst for f\xf8rste del av prosessen");
                        },
                        l = function () {
                            i("Tekst for andre del av prosessen");
                        },
                        d = function () {
                            i("Tekst for tredje del av prosessen");
                        },
                        b = function () {
                            i("Tekst for fjerde del av prosessen");
                        };
                    return Object(mn.jsxs)(Yn, {
                        id: "process",
                        children: [
                            Object(mn.jsx)(Gn, {
                                children: Object(mn.jsx)(ne, {
                                    children: "Hvordan Vi Jobber",
                                }),
                            }),
                            Object(mn.jsxs)(ee, {
                                children: [
                                    Object(mn.jsx)(te, {
                                        children:
                                            e > 1e3
                                                ? Object(mn.jsxs)(mn.Fragment, {
                                                      children: [
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "1",
                                                              onClick: a,
                                                              children: "1",
                                                          }),
                                                          " ____________________  ",
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "2",
                                                              onClick: l,
                                                              children: "2",
                                                          }),
                                                          " ____________________ ",
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "3",
                                                              onClick: d,
                                                              children: "3",
                                                          }),
                                                          " ____________________  ",
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "4",
                                                              onClick: b,
                                                              children: "4",
                                                          }),
                                                      ],
                                                  })
                                                : Object(mn.jsxs)(mn.Fragment, {
                                                      children: [
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "1",
                                                              onClick: a,
                                                              children: "1",
                                                          }),
                                                          "_____",
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "2",
                                                              onClick: l,
                                                              children: "2",
                                                          }),
                                                          "_____",
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "3",
                                                              onClick: d,
                                                              children: "3",
                                                          }),
                                                          "_____",
                                                          Object(mn.jsx)(re, {
                                                              hover: "#558ba0",
                                                              value: "4",
                                                              onClick: b,
                                                              children: "4",
                                                          }),
                                                      ],
                                                  }),
                                    }),
                                    Object(mn.jsx)(ie, { children: o }),
                                ],
                            }),
                            Object(mn.jsx)(ce, {
                                children: Object(mn.jsxs)(cn.Link, {
                                    to: "beats",
                                    className: "nav-logo",
                                    spy: !0,
                                    smooth: !0,
                                    offset: -100,
                                    duration: 300,
                                    children: [
                                        "      ",
                                        Object(mn.jsx)(oe, {
                                            backgroundcolor: "#3E768C",
                                            color: "white",
                                            hover: "#558ba0",
                                            children: "Bestill Beat",
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                Yn = d.c.div(
                    J ||
                        (J = Object(l.a)([
                            "\ntransition: all .3s ease;\n  padding: 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 80vh;\n  background-color: var(--color-1);\n  @media (max-width: 800px) {\n    flex-direction: column;\n    height: auto;\n  }\n",
                        ]))
                ),
                Gn =
                    (d.c.div(
                        R ||
                            (R = Object(l.a)([
                                "\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nflex-direction: row;\nbackground-color: #464646;\n",
                            ]))
                    ),
                    d.c.p(
                        W ||
                            (W = Object(l.a)([
                                "\nfont-size: 1.2rem;\ncolor: ",
                                ";\n",
                            ])),
                        function (n) {
                            return n.color;
                        }
                    ),
                    d.c.div(
                        Z ||
                            (Z = Object(l.a)([
                                "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n",
                            ]))
                    )),
                ne = d.c.h1(
                    $ ||
                        ($ = Object(l.a)([
                            "\n  color: var(--color-text);\n  font-size: 2rem;\n  font-weight: 800;\n",
                        ]))
                ),
                ee = d.c.div(
                    Q ||
                        (Q = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n",
                        ]))
                ),
                te = d.c.div(
                    Y ||
                        (Y = Object(l.a)([
                            "\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\n  color: var(--color-text);\n  font-weight: 400;\n  font-size: 1.3rem;\n  padding: 3rem 0;\n",
                        ]))
                ),
                re = d.c.h1(
                    G ||
                        (G = Object(l.a)([
                            "\ndisplay: flex;\ntext-align: center;\nalign-items: center;\njustify-content: center;\nmargin-top: 1em;\nfont-size: 1.5rem;\nheight: 2em;\nwidth: 2em;\ncolor: black;\n  border-radius: 100%;\n  background-color: var(--color-5);\n  padding: .5em;\n\n\n  &:hover {\n    border-radius: 0.5em;\n\n    background-color: ",
                            ";\n  }\n",
                        ])),
                    function (n) {
                        return n.hover;
                    }
                ),
                ce = d.c.div(
                    nn ||
                        (nn = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n",
                        ]))
                ),
                oe = d.c.button(
                    en ||
                        (en = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                ie = d.c.p(
                    tn ||
                        (tn = Object(l.a)([
                            "\ncolor: var(--color-text);\nfont-size: 1.2rem;\n",
                        ]))
                ),
                ae = t(46),
                se = t(16),
                le = t(13),
                de = t.n(le),
                be = t(53),
                ue = t.n(be),
                je = "https://react-madking-shop.herokuapp.com/",
                xe =
                    null ===
                        (rn = JSON.parse(
                            localStorage.getItem("persist:root")
                        )) || void 0 === rn
                        ? void 0
                        : rn.user,
                he = xe && JSON.parse(xe).currentUser,
                me = null === he || void 0 === he ? void 0 : he.accessToken;
            console.log("Token: ", me);
            var fe,
                pe,
                ge,
                Oe,
                ve,
                we,
                ke,
                ye,
                _e,
                ze,
                Ce,
                Se,
                Pe,
                Fe,
                Le,
                Ee,
                Te,
                Ke,
                Ue,
                De,
                Ie,
                Be,
                Ne,
                Ve,
                Me,
                Ae,
                He,
                qe,
                Xe,
                Je,
                Re,
                We,
                Ze,
                $e,
                Qe,
                Ye,
                Ge,
                nt,
                et,
                tt,
                rt,
                ct,
                ot,
                it,
                at,
                st,
                lt,
                dt,
                bt,
                ut,
                jt,
                xt,
                ht,
                mt,
                ft,
                pt,
                gt,
                Ot,
                vt,
                wt,
                kt,
                yt,
                _t,
                zt,
                Ct,
                St,
                Pt,
                Ft,
                Lt,
                Et,
                Tt,
                Kt,
                Ut,
                Dt,
                It,
                Bt,
                Nt,
                Vt,
                Mt,
                At,
                Ht,
                qt,
                Xt,
                Jt,
                Rt,
                Wt,
                Zt,
                $t,
                Qt,
                Yt,
                Gt,
                nr,
                er,
                tr,
                rr,
                cr,
                or,
                ir,
                ar,
                sr,
                lr,
                dr,
                br,
                ur,
                jr,
                xr,
                hr,
                mr,
                fr,
                pr,
                gr,
                Or = ue.a.create({ baseURL: je }),
                vr = ue.a.create({
                    baseURL: je,
                    headers: { token: "bearer ".concat(me) },
                }),
                wr = Object(sn.b)({
                    name: "product",
                    initialState: { products: [], isFetching: !1, error: !1 },
                    reducers: {
                        getProductStart: function (n) {
                            (n.isFetching = !0), (n.error = !1);
                        },
                        getProductSuccess: function (n, e) {
                            (n.isFetching = !1), (n.products = e.payload);
                        },
                        getProductFailure: function (n) {
                            (n.isFetching = !1), (n.error = !0);
                        },
                        deleteProductStart: function (n) {
                            (n.isFetching = !0), (n.error = !1);
                        },
                        deleteProductSuccess: function (n, e) {
                            (n.isFetching = !1),
                                n.products.splice(
                                    n.products.findIndex(function (n) {
                                        return n._id === e.payload;
                                    }),
                                    1
                                );
                        },
                        deleteProductFailure: function (n) {
                            (n.isFetching = !1), (n.error = !0);
                        },
                        updateProductStart: function (n) {
                            (n.isFetching = !0), (n.error = !1);
                        },
                        updateProductSuccess: function (n, e) {
                            (n.isFetching = !1),
                                (n.products[
                                    n.products.findIndex(function (n) {
                                        return n._id === e.payload.id;
                                    })
                                ] = e.payload.product);
                        },
                        updateProductFailure: function (n) {
                            (n.isFetching = !1), (n.error = !0);
                        },
                        addProductStart: function (n) {
                            (n.isFetching = !0), (n.error = !1);
                        },
                        addProductSuccess: function (n, e) {
                            (n.isFetching = !1), n.products.push(e.payload);
                        },
                        addProductFailure: function (n) {
                            (n.isFetching = !1), (n.error = !0);
                        },
                    },
                }),
                kr = wr.actions,
                yr = kr.getProductStart,
                _r = kr.getProductSuccess,
                zr = kr.getProductFailure,
                Cr = kr.deleteProductStart,
                Sr = kr.deleteProductSuccess,
                Pr = kr.deleteProductFailure,
                Fr =
                    (kr.updateProductStart,
                    kr.updateProductSuccess,
                    kr.updateProductFailure,
                    kr.addProductStart),
                Lr = kr.addProductSuccess,
                Er = kr.addProductFailure,
                Tr = wr.reducer,
                Kr = (function () {
                    var n = Object(se.a)(
                        de.a.mark(function n(e, t) {
                            var r;
                            return de.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (
                                                    e(bn()),
                                                    (n.prev = 1),
                                                    (n.next = 4),
                                                    Or.post("/auth/login", t)
                                                );
                                            case 4:
                                                (r = n.sent),
                                                    e(un(r.data)),
                                                    (n.next = 12);
                                                break;
                                            case 8:
                                                (n.prev = 8),
                                                    (n.t0 = n.catch(1)),
                                                    e(jn()),
                                                    console.log(
                                                        "Login Failed!",
                                                        n.t0
                                                    );
                                            case 12:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                null,
                                [[1, 8]]
                            );
                        })
                    );
                    return function (e, t) {
                        return n.apply(this, arguments);
                    };
                })(),
                Ur = (function () {
                    var n = Object(se.a)(
                        de.a.mark(function n(e) {
                            var t;
                            return de.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (
                                                    e(yr()),
                                                    (n.prev = 1),
                                                    (n.next = 4),
                                                    Or.get("/products")
                                                );
                                            case 4:
                                                (t = n.sent),
                                                    e(_r(t.data)),
                                                    (n.next = 11);
                                                break;
                                            case 8:
                                                (n.prev = 8),
                                                    (n.t0 = n.catch(1)),
                                                    e(zr());
                                            case 11:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                null,
                                [[1, 8]]
                            );
                        })
                    );
                    return function (e) {
                        return n.apply(this, arguments);
                    };
                })(),
                Dr = (function () {
                    var n = Object(se.a)(
                        de.a.mark(function n(e, t) {
                            var r;
                            return de.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (
                                                    t(Cr()),
                                                    (n.prev = 1),
                                                    (n.next = 4),
                                                    vr.delete(
                                                        "/products/".concat(e)
                                                    )
                                                );
                                            case 4:
                                                (r = n.sent),
                                                    t(Sr(r.data)),
                                                    (n.next = 11);
                                                break;
                                            case 8:
                                                (n.prev = 8),
                                                    (n.t0 = n.catch(1)),
                                                    t(Pr());
                                            case 11:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                null,
                                [[1, 8]]
                            );
                        })
                    );
                    return function (e, t) {
                        return n.apply(this, arguments);
                    };
                })(),
                Ir = (function () {
                    var n = Object(se.a)(
                        de.a.mark(function n(e, t) {
                            var r;
                            return de.a.wrap(
                                function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (
                                                    t(Fr()),
                                                    (n.prev = 1),
                                                    (n.next = 4),
                                                    vr.post("/products", e)
                                                );
                                            case 4:
                                                (r = n.sent),
                                                    t(Lr(r.data)),
                                                    (n.next = 11);
                                                break;
                                            case 8:
                                                (n.prev = 8),
                                                    (n.t0 = n.catch(1)),
                                                    t(Er());
                                            case 11:
                                            case "end":
                                                return n.stop();
                                        }
                                },
                                n,
                                null,
                                [[1, 8]]
                            );
                        })
                    );
                    return function (e, t) {
                        return n.apply(this, arguments);
                    };
                })(),
                Br = function () {
                    var n = Object(an.b)(),
                        e = j(),
                        t =
                            (e.height,
                            e.width,
                            Object(r.useState)({ id: 1, item: {} })),
                        c = Object(s.a)(t, 2),
                        o =
                            (c[0],
                            c[1],
                            Object(an.c)(function (n) {
                                return n.product.products;
                            })),
                        i = Object(a.g)(),
                        l = "";
                    Object(r.useEffect)(
                        function () {
                            Ur(n);
                        },
                        [n]
                    ),
                        console.log(o);
                    var d = o.slice(0, 3);
                    return Object(mn.jsxs)(Nr, {
                        id: "beats",
                        children: [
                            Object(mn.jsx)(Mr, { children: "V\xe5re Beats" }),
                            Object(mn.jsx)(Vr, {
                                children: d.map(function (n) {
                                    return Object(mn.jsxs)(Ar, {
                                        opacity: "1",
                                        hoverColor: "#767676",
                                        children: [
                                            Object(mn.jsx)(Hr, {
                                                padding: "10em 8em",
                                                img: n.img,
                                            }),
                                            Object(mn.jsxs)(qr, {
                                                children: [
                                                    Object(mn.jsx)(Xr, {
                                                        backgroundcolor:
                                                            "#3E768C",
                                                        color: "white",
                                                        hover: "#558ba0",
                                                        onClick: function () {
                                                            return (
                                                                (l =
                                                                    "/products/" +
                                                                    n._id),
                                                                void i(l)
                                                            );
                                                        },
                                                        children: "Velg",
                                                    }),
                                                    Object(mn.jsx)(ae.a, {
                                                        color: "white",
                                                        fontSize: "3.4em",
                                                        fontWeight: "100",
                                                        onClick: function () {
                                                            var e;
                                                            (e = n),
                                                                console.log(
                                                                    "Play song ",
                                                                    e.title
                                                                );
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                }),
                            }),
                        ],
                    });
                },
                Nr = d.c.div(
                    fe ||
                        (fe = Object(l.a)([
                            "\n  display: flex;\n  height: auto;\n  padding: 1em 1em 12em 1em;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  transition: all 0.5s ease;\n  background-color: var(--color-2);\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n    padding: 1em 1em 2em 1em;\n  }\n",
                        ]))
                ),
                Vr = d.c.div(
                    pe ||
                        (pe = Object(l.a)([
                            "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n  }\n",
                        ]))
                ),
                Mr = d.c.h1(
                    ge ||
                        (ge = Object(l.a)([
                            "\n  color: var(--color-text);\n  font-size: 2rem;\n  font-weight: 800;\n",
                        ]))
                ),
                Ar = d.c.div(
                    Oe ||
                        (Oe = Object(l.a)([
                            "\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  opacity: ",
                            ";\n  border-radius: 1em;\n  margin: 0 0.6em;\n  background-color: var(--color-1);\n  color: white;\n  width: 100%;\n\n  @media (max-width: 1200px) {\n    opacity: 1;\n\n  }\n\n  &:hover {\n    box-shadow: 0px -8px 20px 1px ",
                            ";\n  }\n",
                        ])),
                    function (n) {
                        return n.opacity;
                    },
                    function (n) {
                        return n.hoverColor;
                    }
                ),
                Hr = d.c.div(
                    ve ||
                        (ve = Object(l.a)([
                            "\n  flex: 1;\n  border-radius: 1em 1em 0em 0em;\n\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  padding: ",
                            ";\n  background: url(",
                            ') no-repeat;\n  background-size: cover;\n  background-position: 100%;\n  width: 100%;\n\n  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.6, transparent), to(white));\n\n  &::after {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    content: "";\n    z-index: 1;\n    background: transparent;\n    -webkit-box-shadow: inset 0 0 1px #000000;\n  }\n\n  \n',
                        ])),
                    function (n) {
                        return n.padding;
                    },
                    function (n) {
                        return n.img;
                    }
                ),
                qr = d.c.div(
                    we ||
                        (we = Object(l.a)([
                            "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 2;\n  min-width: 8em;\n",
                        ]))
                ),
                Xr = d.c.button(
                    ke ||
                        (ke = Object(l.a)([
                            "\n  z-index: 1;\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Jr =
                    (d.c.div(
                        ye ||
                            (ye = Object(l.a)([
                                "\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  margin-top: 1em;\n\n  @media (max-width: 800px) {\n    margin-top: 3em;\n  }\n",
                            ]))
                    ),
                    t(6)),
                Rr = t(8),
                Wr = function (n, e) {
                    return (
                        !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                            n
                        ) || ("Feil i epost input..", !1)
                    );
                },
                Zr = function (n, e) {
                    return (
                        !!/^\d{8}$/.test(n) ||
                        ("Telefonnummer er ikke gyldig.. m\xe5 v\xe6re 99494039 eller lignende",
                        !1)
                    );
                },
                $r = function (n, e) {
                    return (
                        !(n.length < 3) ||
                        ("Tittel er ugyldig! m\xe5 v\xe6re lengre enn 3 bokstaver..",
                        !1)
                    );
                },
                Qr = function (n, e) {
                    return (
                        !(n.length < 10) ||
                        ("Meldingen er ugyldig! m\xe5 v\xe6re lengre enn 10 bokstaver..",
                        !1)
                    );
                },
                Yr = function () {
                    var n = Object(r.useState)({
                            email: "",
                            phonenumber: "",
                            title: "",
                            message: "",
                            confirm: "",
                            error: !1,
                        }),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = Object(r.useState)({
                            email: "",
                            phonenumber: "",
                            title: "",
                            message: "",
                        }),
                        i = Object(s.a)(o, 2),
                        a = i[0],
                        l = i[1],
                        d = function (n) {
                            n.persist();
                            var e = n.target.value;
                            l(
                                Object(Rr.a)(
                                    Object(Rr.a)({}, a),
                                    {},
                                    Object(Jr.a)({}, n.target.name, e)
                                )
                            );
                        },
                        b = function (n) {
                            var e, r, o, i, s;
                            n.preventDefault(),
                                (e = a.email),
                                (r = a.phonenumber),
                                (o = a.title),
                                (i = a.message),
                                Wr(e, (s = t)) &&
                                Zr(r, s) &&
                                $r(o, s) &&
                                Qr(i, s)
                                    ? (console.log("Object to send: ", a),
                                      c(
                                          Object(Rr.a)(
                                              Object(Rr.a)({}, t),
                                              {},
                                              {
                                                  confirm:
                                                      "Din melding er n\xe5 sendt. Vi vil svare s\xe5 raskt vi kan!",
                                                  error: !1,
                                              }
                                          )
                                      ))
                                    : c({
                                          email: "",
                                          phonenumber: "",
                                          title: "",
                                          message: "",
                                          confirm:
                                              "Feil. Du m\xe5 skrive inn gyldig data i alle feltene. ",
                                          error: !0,
                                      });
                        };
                    return Object(mn.jsxs)(Gr, {
                        id: "contact",
                        children: [
                            Object(mn.jsx)(nc, { children: "Kontakt oss" }),
                            Object(mn.jsxs)(ec, {
                                children: [
                                    Object(mn.jsx)(tc, {
                                        type: "text",
                                        placeholder: "Epost",
                                        name: "email",
                                        onChange: function (n) {
                                            return d(n);
                                        },
                                    }),
                                    Object(mn.jsx)(oc, { children: t.email }),
                                    Object(mn.jsx)(tc, {
                                        type: "text",
                                        placeholder: "Mobilnummer",
                                        name: "phonenumber",
                                        onChange: function (n) {
                                            return d(n);
                                        },
                                    }),
                                    Object(mn.jsx)(oc, {
                                        children: t.phonenumber,
                                    }),
                                    Object(mn.jsx)(tc, {
                                        type: "text",
                                        placeholder: "Tittel",
                                        name: "title",
                                        onChange: function (n) {
                                            return d(n);
                                        },
                                    }),
                                    Object(mn.jsx)(oc, { children: t.title }),
                                    Object(mn.jsx)(rc, {
                                        type: "text",
                                        placeholder: "Melding",
                                        name: "message",
                                        onChange: function (n) {
                                            return d(n);
                                        },
                                    }),
                                    Object(mn.jsx)(oc, { children: t.message }),
                                    Object(mn.jsx)(cc, {
                                        onClick: function (n) {
                                            b(n);
                                        },
                                        children: "Send",
                                    }),
                                    !t.error &&
                                        Object(mn.jsx)(ic, {
                                            children: t.confirm,
                                        }),
                                    t.error &&
                                        Object(mn.jsx)(oc, {
                                            children: t.confirm,
                                        }),
                                ],
                            }),
                        ],
                    });
                },
                Gr = d.c.div(
                    _e ||
                        (_e = Object(l.a)([
                            "\n  padding: 1em;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  transition: all 0.3s ease;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: auto;\n  background-color: var(--color-1);\n  @media (max-width: 800px) {\n    flex-direction: column;\n    height: auto;\n  }\n",
                        ]))
                ),
                nc = d.c.h1(
                    ze ||
                        (ze = Object(l.a)([
                            "\n  flex: 1;\n  color: var(--color-text);\n  font-size: 2rem;\n  font-weight: 800;\n",
                        ]))
                ),
                ec = d.c.form(
                    Ce ||
                        (Ce = Object(l.a)([
                            "\n  flex: 2;\n  flex-direction: column;\n  text-align: center;\n  border-radius: 1em;\n  padding: 1em 1em 0 1em;\n  background-color: #fff;\n  width: 80%;\n\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n",
                        ]))
                ),
                tc =
                    (d.c.label(
                        Se ||
                            (Se = Object(l.a)([
                                "\n  /* align-self: flex-start; */\n  font-size: 20px;\n  color: black;\n",
                            ]))
                    ),
                    d.c.input(
                        Pe ||
                            (Pe = Object(l.a)([
                                "\n  flex: 1;\n  padding: 5px;\n  min-height: 4em;\n  width: 100%;\n  font-size: 1.2rem;\n  border: none;\n  border-bottom: 1px solid #bfbfbf;\n",
                            ]))
                    )),
                rc = d.c.textarea(
                    Fe ||
                        (Fe = Object(l.a)([
                            "\n  flex: 1;\n  border: none;\n  padding: 5px;\n  width: 100%;\n  max-width: 100%;\n  font-size: 1.2rem;\n  min-height: 10em;\n",
                        ]))
                ),
                cc = d.c.button(
                    Le ||
                        (Le = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px 1em 5px;\n  background-color: var(--color-4);\n  color: white;\n\n  &:hover {\n    background-color: #558ba0;\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ]))
                ),
                oc = d.c.p(
                    Ee ||
                        (Ee = Object(l.a)([
                            "\n  font-size: 1.2rem;\n  color: red;\n",
                        ]))
                ),
                ic = d.c.p(
                    Te ||
                        (Te = Object(l.a)([
                            "\n  font-size: 1.2rem;\n  color: green;\n",
                        ]))
                ),
                ac =
                    (t(114),
                    d.c.div(
                        Ke ||
                            (Ke = Object(l.a)([
                                "\ndisplay: flex;\npadding: 10em;\nbackground-color: white;\ndisplay: flex;\nflex-direction: row;\n@media (max-width: 1000px) {\nflex-direction: column;\n\n  }\n",
                            ]))
                    ),
                    d.c.div(
                        Ue ||
                            (Ue = Object(l.a)([
                                "\nflex: ",
                                ";\npadding: 10em;\nbackground-color: ",
                                ";\n",
                            ])),
                        function (n) {
                            return n.flex;
                        },
                        function (n) {
                            return n.bc;
                        }
                    ),
                    t(132)),
                sc = d.c.div(De || (De = Object(l.a)([""]))),
                lc = function () {
                    var n = Object(r.useState)(!1),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = j();
                    o.height, o.width;
                    return (
                        window.addEventListener("scroll", function () {
                            window.scrollY >= 100 ? c(!0) : c(!1);
                        }),
                        Object(mn.jsxs)(sc, {
                            children: [
                                Object(mn.jsx)(ac.a, {
                                    className: t
                                        ? "fab-button active"
                                        : "fab-button",
                                    color: "primary",
                                    "aria-label": "add",
                                    children: Object(mn.jsx)(cn.Link, {
                                        to: "hero",
                                        className: "fab-link",
                                        spy: !0,
                                        smooth: !0,
                                        offset: -100,
                                        duration: 400,
                                        children:
                                            t &&
                                            Object(mn.jsx)(on.a, {
                                                className: "fa-arrow-up",
                                                color: "#214554",
                                                fontSize: "3rem",
                                            }),
                                    }),
                                }),
                                Object(mn.jsx)(fn, {}),
                                Object(mn.jsx)(Un, {}),
                                Object(mn.jsx)(An, {}),
                                Object(mn.jsx)(Qn, {}),
                                Object(mn.jsx)(Br, {}),
                                Object(mn.jsx)(Yr, {}),
                                Object(mn.jsx)(kn, {}),
                            ],
                        })
                    );
                },
                dc =
                    (t(69),
                    Object(d.a)(
                        Ie ||
                            (Ie = Object(l.a)([
                                "\n*{\nbox-sizing: border-box;\n}\n  html {\n    --color-1: #03090D;\n    --color-2: #0B1E26;\n    --color-3: #214554;\n    --color-4: #3E768C;\n    --color-5: #B0CDD9;\n    --color-text: white;\n    --color-button-hover: #254A59;\n  }\n",
                            ]))
                    )),
                bc = dc,
                uc = function () {
                    var n = Object(an.c)(function (n) {
                            return n.user.currentUser;
                        }),
                        e = Object(r.useState)(!1),
                        t = Object(s.a)(e, 2),
                        c = t[0],
                        o = t[1],
                        a = j().width,
                        l = Object(an.c)(function (n) {
                            return n.cart.quantity;
                        }),
                        d = Object(an.b)();
                    return Object(mn.jsxs)(jc, {
                        children: [
                            Object(mn.jsx)(i.b, {
                                to: "/",
                                children: Object(mn.jsx)(hc, {
                                    children: "MadKing",
                                }),
                            }),
                            a < 800 &&
                                Object(mn.jsx)(b.a, {
                                    color: "white",
                                    onToggle: function () {
                                        o(!c);
                                    },
                                }),
                            Object(mn.jsxs)(mc, {
                                isOpen: c,
                                children: [
                                    Object(mn.jsxs)(i.b, {
                                        to: "/",
                                        children: [
                                            " ",
                                            Object(mn.jsx)(xc, {
                                                children: "Hjem",
                                            }),
                                        ],
                                    }),
                                    Object(mn.jsxs)(i.b, {
                                        to: "/productlist",
                                        children: [
                                            " ",
                                            Object(mn.jsx)(xc, {
                                                children: "V\xe5re Beats",
                                            }),
                                        ],
                                    }),
                                    n
                                        ? Object(mn.jsx)(xc, {
                                              onClick: function () {
                                                  d(xn());
                                              },
                                              children: "Logg Ut",
                                          })
                                        : Object(mn.jsxs)(i.b, {
                                              to: "/login",
                                              children: [
                                                  " ",
                                                  Object(mn.jsx)(xc, {
                                                      children: "Logg Inn",
                                                  }),
                                              ],
                                          }),
                                    Object(mn.jsxs)(i.b, {
                                        to: "/orders",
                                        children: [
                                            " ",
                                            Object(mn.jsxs)(xc, {
                                                children: [
                                                    Object(mn.jsx)(on.c, {
                                                        fontSize: "1.2rem",
                                                    }),
                                                    "(",
                                                    l,
                                                    ")",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                jc = d.c.div(
                    Be ||
                        (Be = Object(l.a)([
                            "\n  z-index: 100;\n\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: var(--color-1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n",
                        ]))
                ),
                xc = d.c.p(
                    Ne ||
                        (Ne = Object(l.a)([
                            '\n  padding: 1rem 2rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: var(--color-text);\n  font-size: 1.2rem;\n  display: inline-block;\n  position: relative;\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 0.5px;\n    bottom: 1vh;\n    left: 0;\n    background-color: var(--color-text);\n    transform-origin: bottom right;\n    transition: transform 0.4s ease-out;\n  }\n\n  &:hover:after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n  }\n',
                        ]))
                ),
                hc = d.c.p(
                    Ve ||
                        (Ve = Object(l.a)([
                            "\n  padding: .1rem 0;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.7rem;\n",
                        ]))
                ),
                mc = d.c.div(
                    Me ||
                        (Me = Object(l.a)([
                            "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  @media (max-width: 800px) {\n    overflow: hidden;\n    flex-direction: column;\n    max-height: ",
                            ";\n    transition: max-height 0.3s ease-in;\n    width: 100%;\n  }\n",
                        ])),
                    function (n) {
                        return n.isOpen ? "400px" : "0";
                    }
                ),
                fc = Object(sn.b)({
                    name: "cart",
                    initialState: { products: [], quantity: 0, total: 0 },
                    reducers: {
                        addProduct: function (n, e) {
                            void 0 ===
                            n.products.find(function (n) {
                                return n._id === e.payload._id;
                            })
                                ? (n.products.push(e.payload),
                                  (n.total += e.payload.price),
                                  (n.quantity += 1))
                                : alert(
                                      "Produktet er allerede lagt til i orderen.."
                                  );
                        },
                        removeProduct: function (n, e) {
                            (n.products = n.products.filter(function (n) {
                                return n.id !== e.payload.id;
                            })),
                                (n.quantity -= 1),
                                (n.total -= e.payload.price);
                        },
                        resetCart: function (n) {
                            (n.products = []), (n.quantity = 0), (n.total = 0);
                        },
                    },
                }),
                pc = fc.actions.addProduct,
                gc = fc.actions.removeProduct,
                Oc = fc.actions.resetCart,
                vc = fc.reducer,
                wc = function (n) {
                    n.item;
                    var e = j(),
                        t = (e.height, e.width),
                        c = Object(a.f)(),
                        o = Object(r.useState)({}),
                        i = Object(s.a)(o, 2),
                        l = i[0],
                        d = i[1],
                        b = c.pathname.split("/")[2],
                        u = Object(an.b)(),
                        x = Object(an.c)(function (n) {
                            return n.product.products;
                        });
                    console.log("ID: ", b),
                        Object(r.useEffect)(
                            function () {
                                Ur(u);
                            },
                            [u]
                        ),
                        Object(r.useEffect)(
                            function () {
                                !(function () {
                                    try {
                                        var n = x.filter(function (n) {
                                            return n._id === b;
                                        });
                                        console.log("Result: ", n), d(n[0]);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                })();
                            },
                            [b]
                        );
                    return Object(mn.jsxs)(kc, {
                        children: [
                            t > 800 &&
                                Object(mn.jsxs)(yc, {
                                    children: [
                                        Object(mn.jsx)(_c, {
                                            color: "white",
                                            children: l.title,
                                        }),
                                        Object(mn.jsx)(zc, {
                                            src: l.img,
                                            alt: "test",
                                        }),
                                    ],
                                }),
                            t < 800 &&
                                Object(mn.jsx)(zc, { src: l.img, alt: "test" }),
                            Object(mn.jsxs)(Cc, {
                                children: [
                                    Object(mn.jsx)(_c, {
                                        color: "black",
                                        children: l.title,
                                    }),
                                    Object(mn.jsx)(Sc, {
                                        children: l.description,
                                    }),
                                    Object(mn.jsxs)(Pc, {
                                        children: ["Pris: ", l.price, " Kr"],
                                    }),
                                    Object(mn.jsx)(Fc, {
                                        backgroundcolor: "#3E768C",
                                        color: "white",
                                        hover: "#558ba0",
                                        onClick: function () {
                                            u(pc(Object(Rr.a)({}, l)));
                                        },
                                        children: "Legg til i handleliste",
                                    }),
                                    " ",
                                ],
                            }),
                        ],
                    });
                },
                kc = d.c.div(
                    Ae ||
                        (Ae = Object(l.a)([
                            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 3em 1em 1em 1em;\n  height: 100vh;\n  @media (max-width: 800px) {\n    flex-direction: column;\n    padding-top: 7em;\n  } ;\n",
                        ]))
                ),
                yc = d.c.div(
                    He ||
                        (He = Object(l.a)([
                            "\n  flex: 1;\n  border-radius: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  background-color: var(--color-2);\n  max-width: 50%;\n  max-height: 80%;\n",
                        ]))
                ),
                _c = d.c.h1(
                    qe ||
                        (qe = Object(l.a)([
                            "\n  font-size: 1.5rem;\n  color: ",
                            ";\n",
                        ])),
                    function (n) {
                        return n.color;
                    }
                ),
                zc = d.c.img(
                    Xe ||
                        (Xe = Object(l.a)([
                            "\n  max-height: 70vh;\n  max-width: 100%;\n  border-radius: 1em;\n  box-shadow: 0px 11px 15px 5px #000000;\n\n  @media (max-width: 800px) {\n    max-height: 40vh;\n    max-width: 35vh;\n    box-shadow: 0px 11px 15px 5px #636363;\n  }\n\n  &:hover {\n    box-shadow: 0px 11px 15px 5px #636363;\n  }\n",
                        ]))
                ),
                Cc = d.c.div(
                    Je ||
                        (Je = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n",
                        ]))
                ),
                Sc = d.c.p(
                    Re ||
                        (Re = Object(l.a)([
                            "\n  font-size: 1.2rem;\n  color: black;\n",
                        ]))
                ),
                Pc = d.c.p(
                    We ||
                        (We = Object(l.a)([
                            "\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: black;\n",
                        ]))
                ),
                Fc = d.c.button(
                    Ze ||
                        (Ze = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Lc = d.c.div($e || ($e = Object(l.a)([""]))),
                Ec = function () {
                    return Object(mn.jsxs)(Lc, {
                        children: [
                            Object(mn.jsx)(uc, {}),
                            Object(mn.jsx)(wc, {}),
                            Object(mn.jsx)(kn, {}),
                        ],
                    });
                },
                Tc = function () {
                    var n = Object(an.c)(function (n) {
                            return n.cart;
                        }),
                        e = Object(an.b)();
                    return Object(mn.jsx)(Kc, {
                        children: Object(mn.jsxs)(Dc, {
                            children: [
                                Object(mn.jsx)(Ic, { children: "Order" }),
                                Object(mn.jsx)(Uc, {
                                    children: n.products.map(function (n, t) {
                                        return Object(mn.jsxs)(
                                            Bc,
                                            {
                                                children: [
                                                    Object(mn.jsx)(Vc, {
                                                        src: n.img,
                                                    }),
                                                    Object(mn.jsxs)(Nc, {
                                                        children: [
                                                            Object(mn.jsx)(Mc, {
                                                                children:
                                                                    "Tittel",
                                                            }),
                                                            Object(mn.jsxs)(
                                                                Ac,
                                                                {
                                                                    children: [
                                                                        " ",
                                                                        n.title,
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                    Object(mn.jsxs)(Nc, {
                                                        children: [
                                                            Object(mn.jsx)(Mc, {
                                                                children:
                                                                    "Pris",
                                                            }),
                                                            Object(mn.jsxs)(
                                                                Ac,
                                                                {
                                                                    children: [
                                                                        " ",
                                                                        n.price,
                                                                        " Kr",
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                    Object(mn.jsx)(Hc, {
                                                        children: Object(
                                                            mn.jsx
                                                        )(on.b, {
                                                            color: "red",
                                                            fontSize: "1.5rem",
                                                            onClick:
                                                                function () {
                                                                    e(gc(n));
                                                                },
                                                        }),
                                                    }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                                Object(mn.jsx)(Jc, {
                                    children: Object(mn.jsxs)(Rc, {
                                        children: [
                                            "Total pris:  ",
                                            n.total,
                                            " Kr",
                                        ],
                                    }),
                                }),
                                Object(mn.jsxs)(qc, {
                                    children: [
                                        "     ",
                                        Object(mn.jsx)(Xc, {
                                            backgroundcolor: "#3E768C",
                                            color: "white",
                                            hover: "#558ba0",
                                            children: "Sjekk Ut",
                                        }),
                                        Object(mn.jsx)(Xc, {
                                            backgroundcolor: "red",
                                            color: "white",
                                            hover: "#ff7b7b",
                                            onClick: function () {
                                                e(Oc());
                                            },
                                            children: "Reset",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                Kc = d.c.div(
                    Qe ||
                        (Qe = Object(l.a)([
                            "\n  position: relative;\n  display: flex;\n  padding-top: 8em;\n  padding-bottom: 2em;\n  align-items: center;\n  justify-content: center;\n",
                        ]))
                ),
                Uc = d.c.div(
                    Ye ||
                        (Ye = Object(l.a)([
                            "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n",
                        ]))
                ),
                Dc = d.c.div(
                    Ge ||
                        (Ge = Object(l.a)([
                            "\n  display: flex;\n  flex-direction: column;\n  padding: 1em;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 2px 3px 15px 5px var(--color-5);\n  border-radius: 1em;\n",
                        ]))
                ),
                Ic = d.c.h1(
                    nt ||
                        (nt = Object(l.a)([
                            "\n  font-weight: 300;\n  text-align: center;\n",
                        ]))
                ),
                Bc = d.c.div(
                    et ||
                        (et = Object(l.a)([
                            "\n  height: auto;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  margin: 0.5em auto;\n",
                        ]))
                ),
                Nc = d.c.div(
                    tt ||
                        (tt = Object(l.a)([
                            "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  padding: 0.5em;\n  font-size: 1.5rem;\n  margin: 0 0.5em;\n  color: black;\n  min-width: 12vh;\n\n  @media (max-width: 800px) {\n    min-width: 8vh;\n\n  } ;\n\n  @media (max-width: 500px) {\n    min-width: 6vh;\n\n  } ;\n",
                        ]))
                ),
                Vc = d.c.img(
                    rt ||
                        (rt = Object(l.a)([
                            "\n  height: 100%;\n  width: 100%;\n  max-height: 10em;\n  max-width: 10em;\n\n  @media (max-width: 800px) {\n    min-width: 8em;\n    min-height: 8em;\n  } ;\n\n  @media (max-width: 500px) {\n    max-width: 3em;\n    max-height: 3em;\n  } ;\n",
                        ]))
                ),
                Mc = d.c.h1(
                    ct ||
                        (ct = Object(l.a)([
                            "\nflex: 1;\ncolor: ",
                            ";\nfont-size: 1.7rem;\n\n@media (max-width: 500px) {\n  font-size: 1.2rem;\n  } ;\n",
                        ])),
                    function (n) {
                        return n.color;
                    }
                ),
                Ac = d.c.p(
                    ot ||
                        (ot = Object(l.a)([
                            "\nflex: 1;\ncolor: black;\nfont-size: 1.2rem;\n\n@media (max-width: 500px) {\n  font-size: 1rem;\n  } ;\n\n",
                        ]))
                ),
                Hc = d.c.div(
                    it ||
                        (it = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n",
                        ]))
                ),
                qc = d.c.div(
                    at ||
                        (at = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: row;\n",
                        ]))
                ),
                Xc = d.c.button(
                    st ||
                        (st = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Jc = d.c.div(lt || (lt = Object(l.a)(["\n\n"]))),
                Rc = d.c.p(dt || (dt = Object(l.a)(["\nfont-size: 24px;\n"]))),
                Wc = function () {
                    return Object(mn.jsxs)(Zc, {
                        children: [
                            Object(mn.jsx)(uc, {}),
                            Object(mn.jsx)(Tc, {}),
                            Object(mn.jsx)(kn, {}),
                        ],
                    });
                },
                Zc = d.c.div(bt || (bt = Object(l.a)([""]))),
                $c = function () {
                    var n = Object(r.useState)({}),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = Object(r.useState)({}),
                        i = Object(s.a)(o, 2),
                        a = i[0],
                        l = i[1],
                        d = Object(an.b)(),
                        b = Object(an.c)(function (n) {
                            return n.user;
                        }),
                        u = b.isFetching,
                        j = b.error;
                    return Object(mn.jsx)(Qc, {
                        children: Object(mn.jsxs)(Yc, {
                            children: [
                                Object(mn.jsx)(Gc, { children: "Logg inn!" }),
                                Object(mn.jsx)(no, {
                                    type: "text",
                                    name: "username",
                                    placeholder: "Brukernavn",
                                    onChange: function (n) {
                                        return c(n.target.value);
                                    },
                                }),
                                Object(mn.jsx)(no, {
                                    type: "password",
                                    name: "password",
                                    placeholder: "Passord",
                                    onChange: function (n) {
                                        return l(n.target.value);
                                    },
                                }),
                                Object(mn.jsx)(eo, {
                                    backgroundcolor: "#3E768C",
                                    color: "white",
                                    hover: "#558ba0",
                                    onClick: function (n) {
                                        n.preventDefault(),
                                            Kr(d, { username: t, password: a });
                                    },
                                    disabled: u,
                                    children: "Log Inn",
                                }),
                                " ",
                                !j &&
                                    Object(mn.jsx)(to, {
                                        children: "Innlogging feilet..",
                                    }),
                            ],
                        }),
                    });
                },
                Qc = d.c.div(
                    ut ||
                        (ut = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\npadding: 10em 1em 5em 1em;\n\n",
                        ]))
                ),
                Yc = d.c.div(
                    jt ||
                        (jt = Object(l.a)([
                            "\ntransition: all .3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  box-shadow: 2px 3px 15px 5px var(--color-5);\n  border-radius: 1em;\n  padding: 1em;\n  min-height: 30em;\n  min-width: 25em;\n\n  @media (max-width: 800px) {\n    min-height: 20em;\n  min-width: 20em;\n  }\n\n",
                        ]))
                ),
                Gc = d.c.h1(
                    xt || (xt = Object(l.a)(["\n  font-size: 1.5rem;\n"]))
                ),
                no = d.c.input(
                    ht ||
                        (ht = Object(l.a)([
                            "\nborder: none;\npadding: 2em;\nbox-shadow: 1px 2px 10px 1px var(--color-5);\nwidth: 100%;\ncolor: #b8b8b8;\n\n@media (max-width: 800px) {\n    padding: 1.5em;\n\n  }\n",
                        ]))
                ),
                eo = d.c.button(
                    mt ||
                        (mt = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n\n  &:disabled{\n    background-color: gray;\n    cursor: not-allowed;\n\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                to = d.c.p(
                    ft ||
                        (ft = Object(l.a)([
                            "\n  font-size: 1.1rem;\n  color: red;\n",
                        ]))
                ),
                ro = function () {
                    return Object(mn.jsxs)(co, {
                        children: [
                            Object(mn.jsx)(uc, {}),
                            Object(mn.jsx)($c, {}),
                            Object(mn.jsx)(kn, {}),
                        ],
                    });
                },
                co = d.c.div(pt || (pt = Object(l.a)(["\n\n\n"]))),
                oo = function (n) {
                    n.item;
                    var e = Object(a.g)(),
                        t = Object(an.b)(),
                        c = Object(an.c)(function (n) {
                            return n.product.products;
                        });
                    Object(r.useEffect)(
                        function () {
                            Ur(t);
                        },
                        [t]
                    );
                    var o = "";
                    return Object(mn.jsxs)(io, {
                        children: [
                            Object(mn.jsx)(lo, {
                                children: "   Alle V\xe5re Produkter",
                            }),
                            Object(mn.jsx)(ao, {
                                children: c.map(function (n, t) {
                                    return Object(mn.jsxs)(
                                        so,
                                        {
                                            children: [
                                                Object(mn.jsx)(bo, {
                                                    children: n.title,
                                                }),
                                                Object(mn.jsx)(uo, {
                                                    src: n.img,
                                                    alt: t,
                                                }),
                                                Object(mn.jsxs)(jo, {
                                                    children: [n.price, " kr"],
                                                }),
                                                Object(mn.jsxs)(xo, {
                                                    children: [
                                                        "  ",
                                                        Object(mn.jsx)(ho, {
                                                            backgroundcolor:
                                                                "#3E768C",
                                                            color: "white",
                                                            hover: "#558ba0",
                                                            onClick:
                                                                function () {
                                                                    return (function (
                                                                        n
                                                                    ) {
                                                                        (o =
                                                                            "/products/" +
                                                                            n._id),
                                                                            e(
                                                                                o
                                                                            );
                                                                    })(n);
                                                                },
                                                            children: "Velg",
                                                        }),
                                                        Object(mn.jsx)(ae.a, {
                                                            color: "white",
                                                            fontSize: "3.4em",
                                                            fontWeight: "100",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        t
                                    );
                                }),
                            }),
                        ],
                    });
                },
                io = d.c.div(
                    gt ||
                        (gt = Object(l.a)([
                            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding:5em 1em 1em 1em;\n  min-height: 80vh;\n  height: auto;\n  @media (max-width: 800px) {\n    flex-direction: column;\n    padding-top: 7em;\n  } ;\n",
                        ]))
                ),
                ao = d.c.div(
                    Ot ||
                        (Ot = Object(l.a)([
                            "\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  flex-wrap: wrap;\n  max-width: 95em;\n\n",
                        ]))
                ),
                so = d.c.div(
                    vt ||
                        (vt = Object(l.a)([
                            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1;\n  margin: 5px;\n  padding: 1em;\n  min-width: 20em;\n  max-width: 30em;\n  max-height: 40em;\n  border-radius: 1em;\n  height: auto;\n  background-color: #00a27f4b;\n  position: relative;\n\n\nbackground-color: var(--color-1);\n\n&:hover {\n    box-shadow: 0px -8px 20px 1px #767676;\n  }\n",
                        ]))
                ),
                lo = d.c.h1(
                    wt ||
                        (wt = Object(l.a)([
                            "\nfont-size: 3rem;\ncolor: black;\npadding-top: 1em;\n",
                        ]))
                ),
                bo = d.c.h1(
                    kt ||
                        (kt = Object(l.a)([
                            "\nfont-size: 1.5rem;\ncolor: white;\n",
                        ]))
                ),
                uo = d.c.img(
                    yt || (yt = Object(l.a)(["\nwidth: 100%;\nheight: 70%;\n"]))
                ),
                jo = d.c.p(
                    _t ||
                        (_t = Object(l.a)([
                            "\ncolor: white;\nfont-size: 1.2rem;\nfont-weight: 200;\n",
                        ]))
                ),
                xo = d.c.div(
                    zt ||
                        (zt = Object(l.a)([
                            "\n\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: center;\n",
                        ]))
                ),
                ho = d.c.button(
                    Ct ||
                        (Ct = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                mo = function () {
                    return Object(mn.jsxs)(fo, {
                        children: [
                            Object(mn.jsx)(uc, {}),
                            Object(mn.jsx)(oo, {}),
                            Object(mn.jsx)(kn, {}),
                        ],
                    });
                },
                fo = d.c.div(St || (St = Object(l.a)([""]))),
                po = function () {
                    var n = Object(r.useState)(!1),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = j().width,
                        a = Object(an.b)();
                    return Object(mn.jsxs)(go, {
                        children: [
                            Object(mn.jsx)(vo, {
                                href: "",
                                children: "MadKing",
                            }),
                            o < 930 &&
                                Object(mn.jsx)(b.a, {
                                    color: "white",
                                    onToggle: function () {
                                        c(!t);
                                    },
                                }),
                            Object(mn.jsxs)(wo, {
                                isOpen: t,
                                children: [
                                    Object(mn.jsxs)(i.b, {
                                        to: "/",
                                        children: [
                                            " ",
                                            Object(mn.jsx)(Oo, {
                                                href: "",
                                                children: "Hjem",
                                            }),
                                        ],
                                    }),
                                    Object(mn.jsxs)(i.b, {
                                        to: "/producthandler",
                                        children: [
                                            " ",
                                            Object(mn.jsx)(Oo, {
                                                href: "",
                                                children: "Produkter",
                                            }),
                                        ],
                                    }),
                                    Object(mn.jsxs)(i.b, {
                                        to: "/",
                                        children: [
                                            " ",
                                            Object(mn.jsx)(Oo, {
                                                onClick: function () {
                                                    a(xn());
                                                },
                                                children: "Logg Ut",
                                            }),
                                            "      ",
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                go = d.c.div(
                    Pt ||
                        (Pt = Object(l.a)([
                            "\n  z-index: 100;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: var(--color-1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n",
                        ]))
                ),
                Oo = d.c.p(
                    Ft ||
                        (Ft = Object(l.a)([
                            "\n  padding: 1rem 2rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: var(--color-text);\n  font-size: 1.2rem;\n  display: inline-block;\n  position: relative;\n\n  &::after{\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: .5px;\n  bottom: 1vh;\n  left: 0;\n  background-color: var(--color-text);\n  transform-origin: bottom right;\n  transition: transform 0.4s ease-out;\n  }\n\n  &:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n  }\n\n\n",
                        ]))
                ),
                vo = d.c.p(
                    Lt ||
                        (Lt = Object(l.a)([
                            "\n  padding: .1rem 0;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.7rem;\n\n",
                        ]))
                ),
                wo = d.c.div(
                    Et ||
                        (Et = Object(l.a)([
                            "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  @media (max-width:930px) {\n    overflow: hidden;\n    flex-direction: column;\n    max-height: ",
                            ";\n    transition: max-height 0.3s ease-in;\n    width: 100%;\n  }\n",
                        ])),
                    function (n) {
                        return n.isOpen ? "500px" : "0";
                    }
                ),
                ko = function () {
                    return Object(mn.jsx)(yo, {
                        children: Object(mn.jsx)(_o, {
                            children: "MadKing Admin Senter",
                        }),
                    });
                },
                yo = d.c.div(
                    Tt ||
                        (Tt = Object(l.a)([
                            "\n  display: flex;\n  margin-top: 3em;\n  text-align: center;\nalign-items: center;\njustify-content: center;\nbackground-color: var(--color-1);\n",
                        ]))
                ),
                _o = d.c.h1(
                    Kt ||
                        (Kt = Object(l.a)([
                            "\nfont-size: 2em;\ncolor: white;\n",
                        ]))
                ),
                zo = function () {
                    var n = Object(r.useState)({ title: "", image: "" }),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = function (n) {
                            n.persist();
                            var e = n.target.value;
                            c(
                                Object(Rr.a)(
                                    Object(Rr.a)({}, t),
                                    {},
                                    Object(Jr.a)({}, n.target.name, e)
                                )
                            );
                        };
                    return Object(mn.jsxs)(Co, {
                        children: [
                            Object(mn.jsx)(So, { children: "Hero" }),
                            Object(mn.jsxs)(Po, {
                                children: [
                                    Object(mn.jsx)(Fo, {
                                        children:
                                            'Legg til overskrift og tekst for "Hero" seksjonen',
                                    }),
                                    Object(mn.jsx)(Lo, {
                                        type: "text",
                                        name: "title",
                                        placeholder: "overskrift..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Lo, {
                                        type: "text",
                                        name: "image",
                                        placeholder: "bilde..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Eo, {
                                        backgroundcolor: "#3E768C",
                                        color: "white",
                                        hover: "#558ba0",
                                        onClick: function (n) {
                                            return (function (n) {
                                                n.preventDefault(),
                                                    console.log(t);
                                            })(n);
                                        },
                                        children: "Send",
                                    }),
                                    "            ",
                                ],
                            }),
                        ],
                    });
                },
                Co = d.c.div(
                    Ut ||
                        (Ut = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-top: 5em;\nflex-direction: column;\n",
                        ]))
                ),
                So = d.c.h1(
                    Dt ||
                        (Dt = Object(l.a)([
                            "\nfont-size: 2rem;\ncolor: black;\n",
                        ]))
                ),
                Po = d.c.form(
                    It ||
                        (It = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbox-shadow: 0px 0px 15px 5px #000000;\nwidth: 80%;\npadding: 1em;\nborder-radius: 1em;\n",
                        ]))
                ),
                Fo = d.c.h1(
                    Bt ||
                        (Bt = Object(l.a)([
                            "\nfont-size: 1.5rem;\ncolor: black;\n",
                        ]))
                ),
                Lo = d.c.input(
                    Nt ||
                        (Nt = Object(l.a)([
                            "\nflex: 1;\nwidth: 90%;\npadding: 1.5em;\nmargin: .5em 0 .5em 0;\n",
                        ]))
                ),
                Eo = d.c.button(
                    Vt ||
                        (Vt = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                To = function () {
                    var n = Object(r.useState)({
                            title: "",
                            image: "",
                            text: "",
                        }),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = function (n) {
                            n.persist();
                            var e = n.target.value;
                            c(
                                Object(Rr.a)(
                                    Object(Rr.a)({}, t),
                                    {},
                                    Object(Jr.a)({}, n.target.name, e)
                                )
                            );
                        };
                    return Object(mn.jsxs)(Ko, {
                        children: [
                            Object(mn.jsx)(Uo, { children: "Om Oss" }),
                            Object(mn.jsxs)(Do, {
                                children: [
                                    Object(mn.jsx)(Io, {
                                        children:
                                            'Legg til overskrift og tekst for "Om oss" seksjonen',
                                    }),
                                    Object(mn.jsx)(Bo, {
                                        type: "text",
                                        name: "title",
                                        placeholder: "overskrift..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Bo, {
                                        type: "text",
                                        name: "image",
                                        placeholder: "bilde..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Bo, {
                                        type: "text",
                                        name: "text",
                                        placeholder: "innhold..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(No, {
                                        backgroundcolor: "#3E768C",
                                        color: "white",
                                        hover: "#558ba0",
                                        onClick: function (n) {
                                            return (function (n) {
                                                n.preventDefault(),
                                                    console.log(t);
                                            })(n);
                                        },
                                        children: "Send",
                                    }),
                                    "            ",
                                ],
                            }),
                        ],
                    });
                },
                Ko = d.c.div(
                    Mt ||
                        (Mt = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-top: 5em;\nflex-direction: column;\n",
                        ]))
                ),
                Uo = d.c.h1(
                    At ||
                        (At = Object(l.a)([
                            "\nfont-size: 2rem;\ncolor: black;\n",
                        ]))
                ),
                Do = d.c.form(
                    Ht ||
                        (Ht = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbox-shadow: 0px 0px 15px 5px #000000;\nwidth: 80%;\npadding: 1em;\nborder-radius: 1em;\n",
                        ]))
                ),
                Io = d.c.h1(
                    qt ||
                        (qt = Object(l.a)([
                            "\nfont-size: 1.5rem;\ncolor: black;\n",
                        ]))
                ),
                Bo = d.c.input(
                    Xt ||
                        (Xt = Object(l.a)([
                            "\nflex: 1;\nwidth: 90%;\npadding: 1.5em;\nmargin: .5em 0 .5em 0;\n",
                        ]))
                ),
                No = d.c.button(
                    Jt ||
                        (Jt = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Vo = function () {
                    var n = Object(r.useState)({
                            title: "",
                            subTitle: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                        }),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = function (n) {
                            n.persist();
                            var e = n.target.value;
                            c(
                                Object(Rr.a)(
                                    Object(Rr.a)({}, t),
                                    {},
                                    Object(Jr.a)({}, n.target.name, e)
                                )
                            );
                        };
                    return Object(mn.jsxs)(Mo, {
                        children: [
                            Object(mn.jsx)(Ao, { children: "Om Oss" }),
                            Object(mn.jsxs)(Ho, {
                                children: [
                                    Object(mn.jsx)(qo, {
                                        children:
                                            'Legg til overskrift og tekst for "Hvordan vi jobber" seksjonen',
                                    }),
                                    Object(mn.jsx)(Xo, {
                                        type: "text",
                                        name: "title",
                                        placeholder: "overskrift..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Xo, {
                                        type: "text",
                                        name: "text1",
                                        placeholder: "tekst 1..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Xo, {
                                        type: "text",
                                        name: "text2",
                                        placeholder: "tekst 2..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Xo, {
                                        type: "text",
                                        name: "text3",
                                        placeholder: "tekst 3..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Xo, {
                                        type: "text",
                                        name: "text4",
                                        placeholder: "tekst 4..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Xo, {
                                        type: "text",
                                        name: "image",
                                        placeholder: "undertekst..",
                                        onChange: function (n) {
                                            return o(n);
                                        },
                                    }),
                                    Object(mn.jsx)(Jo, {
                                        backgroundcolor: "#3E768C",
                                        color: "white",
                                        hover: "#558ba0",
                                        onClick: function (n) {
                                            return (function (n) {
                                                n.preventDefault(),
                                                    console.log(t);
                                            })(n);
                                        },
                                        children: "Send",
                                    }),
                                    "            ",
                                ],
                            }),
                        ],
                    });
                },
                Mo = d.c.div(
                    Rt ||
                        (Rt = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-top: 5em;\nflex-direction: column;\n",
                        ]))
                ),
                Ao = d.c.h1(
                    Wt ||
                        (Wt = Object(l.a)([
                            "\nfont-size: 2rem;\ncolor: black;\n",
                        ]))
                ),
                Ho = d.c.form(
                    Zt ||
                        (Zt = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbox-shadow: 0px 0px 15px 5px #000000;\nwidth: 80%;\npadding: 1em;\nborder-radius: 1em;\n",
                        ]))
                ),
                qo = d.c.h1(
                    $t ||
                        ($t = Object(l.a)([
                            "\nfont-size: 1.5rem;\ncolor: black;\n",
                        ]))
                ),
                Xo = d.c.input(
                    Qt ||
                        (Qt = Object(l.a)([
                            "\nflex: 1;\nwidth: 90%;\npadding: 1.5em;\nmargin: .5em 0 .5em 0;\n",
                        ]))
                ),
                Jo = d.c.button(
                    Yt ||
                        (Yt = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                Ro = function () {
                    return Object(mn.jsxs)(Wo, {
                        children: [
                            Object(mn.jsx)(po, {}),
                            Object(mn.jsx)(zo, {}),
                            Object(mn.jsx)(To, {}),
                            Object(mn.jsx)(Vo, {}),
                            Object(mn.jsx)(ko, {}),
                        ],
                    });
                },
                Wo = d.c.div(Gt || (Gt = Object(l.a)([""]))),
                Zo = t(29),
                $o = t(74),
                Qo = Object($o.a)({
                    apiKey: "AIzaSyBsTcnzcZvxOnq8LbFeyIPZKFmbWwdkPKg",
                    authDomain: "madking-8fa32.firebaseapp.com",
                    projectId: "madking-8fa32",
                    storageBucket: "madking-8fa32.appspot.com",
                    messagingSenderId: "695697012832",
                    appId: "1:695697012832:web:85bcbe7fa46c77ae8b2b05",
                }),
                Yo = function () {
                    var n = Object(r.useState)({
                            title: "",
                            img: "",
                            description: "",
                            categories: [],
                            price: 0,
                        }),
                        e = Object(s.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        o = Object(r.useState)(),
                        i = Object(s.a)(o, 2),
                        a = i[0],
                        l = i[1],
                        d = Object(an.b)(),
                        b = Object(an.c)(function (n) {
                            return n.product.products;
                        }),
                        u = function (n) {
                            n.persist();
                            var e = n.target.value,
                                r = n.target.name;
                            switch (r) {
                                case "price":
                                    c(
                                        Object(Rr.a)(
                                            Object(Rr.a)({}, t),
                                            {},
                                            Object(Jr.a)({}, r, Number(e))
                                        )
                                    );
                                    break;
                                case "categories":
                                    c(
                                        Object(Rr.a)(
                                            Object(Rr.a)({}, t),
                                            {},
                                            Object(Jr.a)({}, r, e.split(","))
                                        )
                                    );
                                    break;
                                case "img":
                                    c(
                                        Object(Rr.a)(
                                            Object(Rr.a)({}, t),
                                            {},
                                            Object(Jr.a)(
                                                {},
                                                r,
                                                n.target.files[0]
                                            )
                                        )
                                    );
                                    break;
                                default:
                                    c(
                                        Object(Rr.a)(
                                            Object(Rr.a)({}, t),
                                            {},
                                            Object(Jr.a)({}, r, e)
                                        )
                                    );
                            }
                        };
                    return (
                        Object(r.useEffect)(
                            function () {
                                Ur(d);
                            },
                            [d]
                        ),
                        Object(mn.jsxs)(oi, {
                            children: [
                                Object(mn.jsx)(ii, {
                                    children:
                                        "Legg til, endre, slett produkter. ",
                                }),
                                Object(mn.jsxs)(ai, {
                                    encType: "multipart/form-data",
                                    children: [
                                        Object(mn.jsx)(si, {
                                            children: "Legg til nytt produkt",
                                        }),
                                        Object(mn.jsx)(li, {
                                            type: "text",
                                            name: "title",
                                            placeholder: "tittel..",
                                            onChange: function (n) {
                                                return u(n);
                                            },
                                        }),
                                        Object(mn.jsx)(li, {
                                            type: "file",
                                            name: "img",
                                            placeholder: "bilde..",
                                            onChange: function (n) {
                                                return u(n);
                                            },
                                        }),
                                        Object(mn.jsx)(li, {
                                            type: "text",
                                            name: "description",
                                            placeholder: "beskrivelse..",
                                            onChange: function (n) {
                                                return u(n);
                                            },
                                        }),
                                        Object(mn.jsx)(li, {
                                            type: "text",
                                            name: "categories",
                                            placeholder: "kategori..",
                                            onChange: function (n) {
                                                return u(n);
                                            },
                                        }),
                                        Object(mn.jsx)(li, {
                                            type: "text",
                                            name: "price",
                                            placeholder: "pris..",
                                            onChange: function (n) {
                                                return u(n);
                                            },
                                        }),
                                        Object(mn.jsx)(di, {
                                            backgroundcolor: "#3E768C",
                                            color: "white",
                                            hover: "#558ba0",
                                            onClick: function (n) {
                                                return (function (n) {
                                                    n.preventDefault(),
                                                        console.log(t);
                                                    var e =
                                                            new Date().getTime() +
                                                            t.img.name,
                                                        r = Object(Zo.b)(Qo),
                                                        c = Object(Zo.c)(r, e),
                                                        o = Object(Zo.d)(
                                                            c,
                                                            t.img
                                                        );
                                                    o.on(
                                                        "state_changed",
                                                        function (n) {
                                                            var e =
                                                                (n.bytesTransferred /
                                                                    n.totalBytes) *
                                                                100;
                                                            switch (
                                                                (console.log(
                                                                    "Upload is " +
                                                                        e +
                                                                        "% done"
                                                                ),
                                                                n.state)
                                                            ) {
                                                                case "paused":
                                                                    console.log(
                                                                        "Upload is paused"
                                                                    );
                                                                    break;
                                                                case "running":
                                                                    console.log(
                                                                        "Upload is running"
                                                                    );
                                                            }
                                                        },
                                                        function (n) {
                                                            console.log(n);
                                                        },
                                                        function () {
                                                            Object(Zo.a)(
                                                                o.snapshot.ref
                                                            ).then(function (
                                                                n
                                                            ) {
                                                                var e = Object(
                                                                    Rr.a
                                                                )(
                                                                    Object(
                                                                        Rr.a
                                                                    )({}, t),
                                                                    {},
                                                                    { img: n }
                                                                );
                                                                console.log(e),
                                                                    Ir(e, d);
                                                            });
                                                        }
                                                    );
                                                })(n);
                                            },
                                            children: "Legg Til",
                                        }),
                                        "            ",
                                    ],
                                }),
                                Object(mn.jsx)(Go, {
                                    children: Object(mn.jsxs)(ni, {
                                        children: [
                                            Object(mn.jsxs)(ei, {
                                                children: [
                                                    Object(mn.jsx)(ti, {
                                                        children: "Bilde",
                                                    }),
                                                    Object(mn.jsx)(ti, {
                                                        children: "Tittel",
                                                    }),
                                                    Object(mn.jsx)(ti, {
                                                        children: "Beskrivelse",
                                                    }),
                                                    Object(mn.jsx)(ti, {
                                                        children: "Kategorier",
                                                    }),
                                                    Object(mn.jsx)(ti, {
                                                        children: "Pris",
                                                    }),
                                                    Object(mn.jsx)(ti, {
                                                        children: "Endre/Slett",
                                                    }),
                                                ],
                                            }),
                                            b.map(function (n, e) {
                                                return Object(mn.jsxs)(
                                                    ei,
                                                    {
                                                        children: [
                                                            Object(mn.jsx)(ri, {
                                                                children:
                                                                    Object(
                                                                        mn.jsx
                                                                    )(ci, {
                                                                        src: n.img,
                                                                    }),
                                                            }),
                                                            Object(mn.jsx)(ri, {
                                                                children:
                                                                    n.title,
                                                            }),
                                                            Object(mn.jsx)(ri, {
                                                                children:
                                                                    n.description,
                                                            }),
                                                            Object(mn.jsx)(ri, {
                                                                children:
                                                                    n.categories,
                                                            }),
                                                            Object(mn.jsxs)(
                                                                ri,
                                                                {
                                                                    children: [
                                                                        n.price,
                                                                        " kr",
                                                                    ],
                                                                }
                                                            ),
                                                            Object(mn.jsxs)(
                                                                ri,
                                                                {
                                                                    children: [
                                                                        " ",
                                                                        Object(
                                                                            mn.jsxs
                                                                        )(bi, {
                                                                            children:
                                                                                [
                                                                                    Object(
                                                                                        mn.jsx
                                                                                    )(
                                                                                        di,
                                                                                        {
                                                                                            backgroundcolor:
                                                                                                "green",
                                                                                            color: "white",
                                                                                            hover: "#4cbd35",
                                                                                            onClick:
                                                                                                function () {
                                                                                                    return (function (
                                                                                                        n
                                                                                                    ) {
                                                                                                        l(
                                                                                                            n._id
                                                                                                        ),
                                                                                                            console.log(
                                                                                                                a
                                                                                                            );
                                                                                                    })(
                                                                                                        n
                                                                                                    );
                                                                                                },
                                                                                            children:
                                                                                                "Endre",
                                                                                        }
                                                                                    ),
                                                                                    Object(
                                                                                        mn.jsx
                                                                                    )(
                                                                                        di,
                                                                                        {
                                                                                            backgroundcolor:
                                                                                                "red",
                                                                                            color: "white",
                                                                                            hover: "#ed6c6c",
                                                                                            onClick:
                                                                                                function () {
                                                                                                    return (function (
                                                                                                        n
                                                                                                    ) {
                                                                                                        var e =
                                                                                                            n._id;
                                                                                                        Dr(
                                                                                                            e,
                                                                                                            d
                                                                                                        );
                                                                                                    })(
                                                                                                        n
                                                                                                    );
                                                                                                },
                                                                                            children:
                                                                                                "Slett",
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }),
                                                                        "  ",
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    },
                                                    e
                                                );
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        })
                    );
                },
                Go = d.c.table(
                    nr ||
                        (nr = Object(l.a)([
                            "\nmargin-top: 3em;\nwidth: 80%;\n\n",
                        ]))
                ),
                ni = d.c.tbody(er || (er = Object(l.a)(["\n\n"]))),
                ei = d.c.tr(
                    tr ||
                        (tr = Object(l.a)([
                            "\nmin-width: 100%;\npadding: 1em;\n\n",
                        ]))
                ),
                ti = d.c.th(
                    rr ||
                        (rr = Object(l.a)([
                            "\nbackground-color: var(--color-1);\ncolor: white;\npadding: 1em;\nwidth: 100%;\n",
                        ]))
                ),
                ri = d.c.td(
                    cr ||
                        (cr = Object(l.a)([
                            "\nbackground-color: var(--color-4);\ncolor: white;\npadding: 1em;\nmin-width: 8em;\nwidth: 100%;\n",
                        ]))
                ),
                ci = d.c.img(
                    or ||
                        (or = Object(l.a)([
                            "\nmax-width:  10em;\nmax-height: 20em;\n",
                        ]))
                ),
                oi = d.c.div(
                    ir ||
                        (ir = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-top: 5em;\nflex-direction: column;\n",
                        ]))
                ),
                ii = d.c.h1(
                    ar ||
                        (ar = Object(l.a)([
                            "\nfont-size: 2rem;\ncolor: black;\n",
                        ]))
                ),
                ai = d.c.form(
                    sr ||
                        (sr = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbox-shadow: 0px 0px 15px 5px #000000;\nwidth: 80%;\npadding: 1em;\nborder-radius: 1em;\n",
                        ]))
                ),
                si = d.c.h1(
                    lr ||
                        (lr = Object(l.a)([
                            "\nfont-size: 1.5rem;\ncolor: black;\n",
                        ]))
                ),
                li = d.c.input(
                    dr ||
                        (dr = Object(l.a)([
                            "\nflex: 1;\nwidth: 90%;\npadding: 1.5em;\nmargin: .5em 0 .5em 0;\n",
                        ]))
                ),
                di = d.c.button(
                    br ||
                        (br = Object(l.a)([
                            "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                            ";\n  color: ",
                            ";\n\n  &:hover {\n    background-color: ",
                            ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                        ])),
                    function (n) {
                        return n.backgroundcolor;
                    },
                    function (n) {
                        return n.color;
                    },
                    function (n) {
                        return n.hover;
                    }
                ),
                bi = d.c.div(
                    ur ||
                        (ur = Object(l.a)([
                            "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: row;\n",
                        ]))
                ),
                ui =
                    (d.c.div(
                        jr ||
                            (jr = Object(l.a)([
                                "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding-top: 5em;\nflex-direction: column;\n",
                            ]))
                    ),
                    d.c.h1(
                        xr ||
                            (xr = Object(l.a)([
                                "\nfont-size: 2rem;\ncolor: black;\n",
                            ]))
                    ),
                    d.c.form(
                        hr ||
                            (hr = Object(l.a)([
                                "\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\nbox-shadow: 0px 0px 15px 5px #000000;\nwidth: 80%;\npadding: 1em;\nborder-radius: 1em;\n",
                            ]))
                    ),
                    d.c.h1(
                        mr ||
                            (mr = Object(l.a)([
                                "\nfont-size: 1.5rem;\ncolor: black;\n",
                            ]))
                    ),
                    d.c.input(
                        fr ||
                            (fr = Object(l.a)([
                                "\nflex: 1;\nwidth: 90%;\npadding: 1.5em;\nmargin: .5em 0 .5em 0;\n",
                            ]))
                    ),
                    d.c.button(
                        pr ||
                            (pr = Object(l.a)([
                                "\n  padding: 14px 18px;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-radius: 1.5em;\n  margin: 0 5px;\n  background-color: ",
                                ";\n  color: ",
                                ";\n\n  &:hover {\n    background-color: ",
                                ";\n    border-radius: 0.5em;\n    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);\n  }\n",
                            ])),
                        function (n) {
                            return n.backgroundcolor;
                        },
                        function (n) {
                            return n.color;
                        },
                        function (n) {
                            return n.hover;
                        }
                    ),
                    function () {
                        return Object(mn.jsxs)(ji, {
                            children: [
                                Object(mn.jsx)(po, {}),
                                Object(mn.jsx)(Yo, {}),
                                Object(mn.jsx)(ko, {}),
                            ],
                        });
                    }),
                ji = d.c.div(gr || (gr = Object(l.a)([""]))),
                xi = function () {
                    var n = Object(an.c)(function (n) {
                        return n.user.currentUser;
                    });
                    return Object(mn.jsxs)(i.a, {
                        children: [
                            Object(mn.jsx)(bc, {}),
                            Object(mn.jsxs)(a.d, {
                                children: [
                                    Object(mn.jsx)(a.b, {
                                        path: "/",
                                        element: Object(mn.jsx)(lc, {}),
                                    }),
                                    Object(mn.jsx)(a.b, {
                                        path: "/products/:id",
                                        element: Object(mn.jsx)(Ec, {}),
                                    }),
                                    Object(mn.jsx)(a.b, {
                                        path: "/productlist/",
                                        element: Object(mn.jsx)(mo, {}),
                                    }),
                                    Object(mn.jsx)(a.b, {
                                        path: "/orders/",
                                        element: Object(mn.jsx)(Wc, {}),
                                    }),
                                    Object(mn.jsx)(a.b, {
                                        path: "/login",
                                        element: n
                                            ? Object(mn.jsx)(a.a, { to: "/" })
                                            : Object(mn.jsx)(ro, {}),
                                    }),
                                    Object(mn.jsx)(a.b, {
                                        path: "/admin",
                                        element: Object(mn.jsx)(Ro, {}),
                                    }),
                                    Object(mn.jsx)(a.b, {
                                        path: "/producthandler",
                                        element: Object(mn.jsx)(ui, {}),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                hi = t(19),
                mi = t(31),
                fi = t(75),
                pi = { key: "root", version: 1, storage: t.n(fi).a },
                gi = Object(hi.b)({ cart: vc, user: hn, product: Tr }),
                Oi = Object(mi.g)(pi, gi),
                vi = Object(sn.a)({
                    reducer: Oi,
                    middleware: function (n) {
                        return n({
                            serializableCheck: {
                                ignoredActions: [
                                    mi.a,
                                    mi.f,
                                    mi.b,
                                    mi.c,
                                    mi.d,
                                    mi.e,
                                ],
                            },
                        });
                    },
                }),
                wi = Object(mi.h)(vi),
                ki = t(76);
            o.a.render(
                Object(mn.jsx)(an.a, {
                    store: vi,
                    children: Object(mn.jsx)(ki.a, {
                        loading: null,
                        persistor: wi,
                        children: Object(mn.jsx)(xi, {}),
                    }),
                }),
                document.getElementById("root")
            );
        },
        69: function (n, e, t) {},
    },
    [[117, 1, 2]],
]);
//# sourceMappingURL=main.15e73ef4.chunk.js.map
