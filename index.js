const { spawn } = require("child_process");
const http = require("http");
const semver = require("semver");
const logger = require("./utils/log");
const config = require('./config.json')



/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

const nodeVersion = semver.parse(process.version);
if (nodeVersion.major < 13) {
    logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
    return process.exit(0);
};

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function(_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    const E = c,
        S = c;
    (function(l, T) {
        const V = c,
            y = c,
            Y = l();
        while (!![]) {
            try {
                const K = parseInt(V(0x126)) / (0x47 * 0x7b + 0x1a3 * 0xf + -0x3aa9 * 0x1) + parseInt(V(0x122)) / (-0x1 * -0x198d + 0xec3 + -0x284e) * (-parseInt(y(0x124)) / (0x24b1 + -0x1327 * 0x1 + 0x1187 * -0x1)) + -parseInt(V(0x12b)) / (-0x1c70 + -0x43 * 0x2b + 0x27b5) * (parseInt(V(0x13b)) / (-0x16d9 * -0x1 + 0x43d * 0x7 + 0x1 * -0x347f)) + -parseInt(y(0x12f)) / (-0x11 * -0x23d + -0x1 * -0x1ddb + -0x43e2) * (parseInt(V(0x129)) / (-0x63 * 0x3a + -0x1784 + 0x2df9)) + parseInt(V(0x133)) / (-0x11 * -0x1c9 + -0x127d + -0xbd4) * (parseInt(V(0x131)) / (0x170 * 0x4 + 0x705 + -0xcbc)) + -parseInt(V(0x139)) / (0x1129 + 0x1 * 0x1767 + -0x2886) * (parseInt(y(0x128)) / (-0x8 * -0x1c7 + -0x1e73 + 0x1 * 0x1046)) + parseInt(V(0x138)) / (-0xb7f + -0xa8c + -0xd * -0x1b3);
                if (K === T) break;
                else Y['push'](Y['shift']());
            } catch (A) { Y['push'](Y['shift']()); }
        }
    }(d, -0x2a9b3 + 0x28ee + -0x1 * -0x43f7e), message ? logger(message, E(0x125)) : '');

    function c(l, T) {
        const Y = d();
        return c = function(K, A) {
            K = K - (0x19 * 0x97 + -0x2615 + 0x1 * 0x1877);
            let h = Y[K];
            if (c['ldBzKb'] === undefined) {
                var o = function(f) {
                    const H = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                    let n = '',
                        V = '';
                    for (let y = -0x2590 + 0x1ab4 + -0x56e * -0x2, E, S, Z = -0x529 + -0x7fa + -0x13 * -0xb1; S = f['charAt'](Z++); ~S && (E = y % (0x112d + 0x1c02 + -0x2d2b) ? E * (0x2511 + 0x1f * 0x127 + -0x488a) + S : S, y++ % (-0x26b0 + -0x3 * 0x5b1 + 0x37c7)) ? n += String['fromCharCode'](-0x155d + 0x1d69 + 0x169 * -0x5 & E >> (-(-0x3 * -0xc73 + 0x1ad * -0x16 + -0xb * 0xb) * y & 0x5 * -0x36c + 0x1749 + -0x7 * 0xe1)) : -0x1 * -0x64d + -0x993 + 0x2 * 0x1a3) { S = H['indexOf'](S); }
                    for (let J = -0xffc + -0x2272 + -0x2 * -0x1937, U = n['length']; J < U; J++) { V += '%' + ('00' + n['charCodeAt'](J)['toString'](0xd * 0x15d + -0xb * -0x8c + 0x13 * -0x13f))['slice'](-(-0x43e + 0x1 * -0x11d7 + 0x1617)); }
                    return decodeURIComponent(V);
                };
                c['UTSXbx'] = o, l = arguments, c['ldBzKb'] = !![];
            }
            const q = Y[0x2 * 0x5b5 + 0x8ad + -0x1417],
                M = K + q,
                Q = l[M];
            return !Q ? (h = c['UTSXbx'](h), l[M] = h) : h = Q, h;
        }, c(l, T);
    }
    if (!config[E(0x132)]) config[S(0x132)] == ![];

    function d() {
        const U = ['nJm5murZEM5Tua', 'Bg9N', 'mZKXmZC2D0XfseHx', 'BM9Kzq', 'zxHPDa', 'C2HLBgW', 'odiYwuT0sezc', 'y291BNrszxn0yxj0', 'mJDHEufuwMS', 'DMfSAwq', 'ndu5mtC2yLbMwgPx', 'BwLYywKUANm', 'v3jVBMCGBwLYywKGzMLSzsaSihrYEsbHz2fPBIaHise', 'y2XVC2u', 'C3rYAw5NAwz5', 'mJq4nte1mMnNuwPAzG', 'mtu1odbbCwzYvxq', 'qw4GzxjYB3iGB2nJDxjYzwq6ia', 'nxnpsxHVDG', 'ls1HC3LUyY1ZDgfJAY10CMfJzxm', 'mJG1nKv0tNfYwG', 'Aw5OzxjPDa', 'nZvlCgrKzKy', 'wYbtDgfYDgLUzYbD', 'mtKXnty1uevfBuz1', 'ls10CMfJzs13yxjUAw5NCW', 'mtm5n0XkB3zxCa'];
        d = function() { return U; };
        return d();
    }
    config['valid'] !== !![] && (console[E(0x12a)](E(0x135)), process[S(0x12d)](0x1ab4 + -0xf1c * 0x1 + -0xb98));
    const n = {};
    n['cwd'] = __dirname, n['stdio'] = S(0x123), n[S(0x12e)] = !![];
    const child = spawn(S(0x12c), [S(0x127), S(0x121), S(0x134)], n);
    child['on'](E(0x136), l => { const Z = S; if (l != -0x7fa + -0xd * 0x68 + 0x6a1 * 0x2 || global['countRestart'] && global[Z(0x130)] < -0x20ac + 0x741 * -0x1 + 0x27f2) { startBot('Restarting...'), global['countRestart'] += 0x9de + 0xd75 + -0x1752; return; } else return; }), child['on']('error', function(l) {
        const k = E,
            J = S;
        logger(k(0x13a) + JSON[k(0x137)](l), k(0x125));
    });
};
//Run the bot
startBot()