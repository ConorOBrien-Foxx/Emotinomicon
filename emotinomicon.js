// polyfills from mdn
var isNode = typeof require !== "undefined";
var isBrowser = !isNode;
var math;
if(isNode) {
    math = require("mathjs");
    promptInd = 3;
    prompt = function() {
        process.argv[promptInd++];
    }
}
else {
    console.log("Page starting to load!");
}

var doOutput = function(x) {
    if(isBrowser) {
        document.getElementById("output").innerHTML += x;
    }
    else {
        process.stdout.write(x);
    }
}

Array.prototype.fill||(Array.prototype.fill=function(t){if(null==this)throw new TypeError("this is null or not defined");for(var r=Object(this),n=r.length>>>0,i=arguments[1],a=i>>0,e=0>a?Math.max(n+a,0):Math.min(a,n),o=arguments[2],h=void 0===o?n:o>>0,l=0>h?Math.max(n+h,0):Math.min(h,n);l>e;)r[e]=t,e++;return r});

var tokens = ["\ud83d\ude00", "\ud83d\ude05", "\ud83d\ude09", "\ud83d\ude0d", "\ud83d\ude12", "\ud83d\ude17", "\ud83d\ude1c", "\ud83d\ude21", "\ud83d\ude01", "\ud83d\ude06", "\ud83d\udd1f", "\ud83d\udcaf", "\u2795", "\u2796", "\u2797", "\u2716", "\u23eb", "\u23ec", "\u23ea", "\u23e9", "\ud83c\udd99", "\ud83d\ude0a", "\ud83d\ude0e", "\ud83d\ude13", "\ud83d\ude18", "\ud83d\ude1d", "\ud83d\ude22", "\ud83d\ude02", "\ud83d\ude07", "\u263a\ufe0f", "\ud83d\ude0f", "\ud83d\ude14", "\ud83d\ude19", "\ud83d\ude1e", "\ud83d\ude23", "\ud83d\ude03", "\ud83d\ude08", "\ud83d\ude0b", "\ud83d\ude10", "\ud83d\ude15", "\ud83d\ude1a", "\ud83d\ude1f", "\ud83d\ude24", "\ud83d\ude04", "\ud83d\udc7f", "\ud83d\ude0c", "\ud83d\ude11", "\ud83d\ude16", "\ud83d\ude1b", "\ud83d\ude20", "\ud83d\ude25", "\ud83d\ude26", "\ud83d\ude2b", "\ud83d\ude30", "\ud83d\ude35", "\ud83d\ude3a", "\ud83d\ude3f", "\ud83d\ude27", "\ud83d\ude2c", "\ud83d\ude31", "\ud83d\ude36", "\ud83d\ude3b", "\ud83d\ude40", "\ud83d\ude28", "\ud83d\ude2d", "\ud83d\ude32", "\ud83d\ude37", "\ud83d\ude3c", "\ud83d\udc63", "\ud83d\ude29", "\ud83d\ude2e", "\ud83d\ude33", "\ud83d\ude38", "\ud83d\ude3d", "\ud83d\udc64", "\ud83d\ude2a", "\ud83d\ude2f", "\ud83d\ude34", "\ud83d\ude39", "\ud83d\ude3e", "\ud83d\udc65", "\ud83c\udf11", "\ud83c\udf12", "\ud83c\udf13", "\ud83c\udf14", "\ud83c\udf15", "\ud83c\udf16", "\ud83c\udf17", "\ud83c\udf18", "\ud83d\udd22", "\ud83d\udd24", "\ud83d\udd21", "\ud83d\udd20", "\u2139", "\ud83d\udcf6", "\ud83c\udfa6", "\ud83d\udd23", "\ufe0f\u2757", "\ufe0f\u2753", "\u2755", "\u2754", "\u203c\ufe0f", "\u2049\ufe0f", "\ud83c\udfb2"];

var explanations = ["push 0 to the stack", "push 1 to the stack", "push 2 to the stack", "push 3 to the stack", "push 4 to the stack", "push 5 to the stack", "push 6 to the stack", "push 7 to the stack", "push 8 to the stack", "push 9 to the stack", "push 10 to the stack", "push 100 to the stack", "add top two elements on stack", "subtract top two elements on stack", "divide top two elements on stack", "multiply top two elements on stack", "take one character as input, push it to the stack", "pops and outputs top of stack as character", "open loop", "close loop", "duplicate top of stack", "drop top element of stack", "reverse stack", "pop N; pop top N elements of stack, and push them in reverse order", "exponentiate top two elements", "take log base B of N, popping N then B", "pop N, push -N", "pop N, push |N| (absolute value)", "pop N, push 2N", "pop N, push 3N", "pop N, push 4N", "pop N, push N/2", "pop N, push N/3", "pop N, push N/4", "pop N, push N^2", "pop N, push N^3", "pop N, push N^4", "pop N, push sqrt[N]", "pop N, push cbrt[N]", "pop N, push root[4][N]", "pop N, push floor[N]", "pop N, push ceil[N]", "pop N, push round[N]", "pop N, push N+1", "pop N, push N-1", "pop N, M, push M % N (modulus)", "pop N, push 2^N", "pop N, push 3^N", "pop N, push 4^N", "pop N, push fibonacci[N]", "pop N, push lucas[N]", "push pi", "push e", "push phi", "pop N, push ln(N) (<code>log_e(N)</code>)", "pop N, push log(N) (<code>log_10(N)</code>)", "pop N, push e^N", "pop N, push 10^N", "pop N, jump behind Nth command", "pop C, N, and set the Nth command to C", "pop N, push the character code of the Nth command", "pop N, push N%2", "pushes a random number in [0,1)", "pop N and output as a number", "begin quote string", "end quote string", "clear output", "take numeric input", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "push the imaginary unit to the stack", " ", " ", " ", "pop N, push factorial[N]", "pop B, A, N, and, if N is truthy, push A; otherwise, push B", "skip next command", "pop N; if N is truthy, skip next command,", "pop N; push double_factorial[N]", "pop N; if N is truthy, execute next command", "pop N, M; push a random integer in [M, N)"];

var moons = ["\uD83C\uDF11", "\uD83C\uDF12", "\uD83C\uDF13", "\uD83C\uDF14", "\uD83C\uDF15", "\uD83C\uDF16", "\uD83C\uDF17", "\uD83C\uDF18"];

math.config({
    number: "BigNumber",
    precision: 64
});

function tokenize(r) {
    r = r.trim();
    for (var t = [], n = 0, e = "", i = tokens; n < r.length;) {
        for (var a = r.length - n; a > 0;) {
            var h = i.indexOf(r.substring(n, n + a));
            if (-1 !== h) {
                "" !== e && t.push(e.trim()), e = "", t.push(i[h]), n += a - 1;
                break
            }
            a--, 0 === a && (e = e.concat(r.charAt(n)))
        }
        n++
    }
    return "" !== e && t.push(e.trim()), t
}
var factorial = math.factorial;
var mem = [];

function arithmeticException(name) {
    this.name = name;
}

function fibonacci(n) {
    if(n < 0) {
        return -1;
    }
    if(n == 0) {
        return 0;
    }
    if(n < 3) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function display(x) {
    return x.map(function(e) {
        return Number(e.valueOf()) || e.toString();
    });
}

function Emotinomicon(code) {
    var x = tokenize(code).map(function(e) {
        if(tokens.indexOf(e) < 0)
            return e.split("");
        return e;
    });
    
    for(var j = 0; j < x.length; j++) {
        if(Array.isArray(x[j])) {
            var l = x[j].length;
            x.splice.apply(x, [j, 1].concat(x[j]));
            j += l - 1;
        }
    }
    
    var stack = [];
    var stringMode = false;

    function step(code, i, stack, stringMode) {
        if(stringMode) {
            if(tokens.indexOf(x[i]) == 65)
                stringMode = false;
            else
                stack.push(x[i].charCodeAt());
        } else {
            switch(tokens.indexOf(x[i])) {
                case 0:
                    stack.push(math.bignumber(0));
                    break;
                case 1:
                    stack.push(math.bignumber(1));
                    break;
                case 2:
                    stack.push(math.bignumber(2));
                    break;
                case 3:
                    stack.push(math.bignumber(3));
                    break;
                case 4:
                    stack.push(math.bignumber(4));
                    break;
                case 5:
                    stack.push(math.bignumber(5));
                    break;
                case 6:
                    stack.push(math.bignumber(6));
                    break;
                case 7:
                    stack.push(math.bignumber(7));
                    break;
                case 8:
                    stack.push(math.bignumber(8));
                    break;
                case 9:
                    stack.push(math.bignumber(9));
                    break;
                case 10:
                    stack.push(math.bignumber(10));
                    break;
                case 11:
                    stack.push(math.bignumber(100));
                    break;
                case 12:
                    var b = stack.pop(),
                        a = stack.pop();
                    stack.push(math.add(a, b));
                    break;
                case 13:
                    var b = stack.pop(),
                        a = stack.pop();
                    stack.push(math.subtract(a, b));
                    break;
                case 14:
                    var b = stack.pop(),
                        a = stack.pop();
                    stack.push(math.divide(a, b));
                    break;
                case 15:
                    var b = stack.pop(),
                        a = stack.pop();
                    stack.push(math.multiply(a, b));
                    break;
                case 16:
                    var inpu = prompt().split("");
                    if (inpu.length == 0)
                        stack.push(-1);
                    else
                        inpu.forEach(function(e) {
                            stack.push(math.bignumber(e.charCodeAt()))
                        });
                    break;
                case 17:
                    var res = String.fromCharCode(Number(stack.pop().valueOf()));
                    if(isBrowser) {
                        res = res.replace(/\n/g, "<br>")
                    }
                    doOutput(res);
                    break;
                case 19:
                    if (stack[stack.length - 1]) {
                        var depth = 1;
                        for(var j = i - 1; depth; --j) {
                            if ("\u23e9" == x[j]) depth++;
                            if ("\u23ea" == x[j]) depth--;
                        }
                        i = j;
                    }
                    break;
                case 20:
                    var r = stack.pop();
                    stack.push(r, r);
                    break;
                case 21:
                    stack.pop();
                    break;
                case 22:
                    stack.reverse();
                    break;
                case 23:
                    var N = Number(stack.pop().valueOf());
                    for (var j = 0, k = []; j < N; j++) k.push(stack.pop());
                    k.reverse();
                    stack = stack.concat(k);
                    break;
                case 24:
                    var a = stack.pop();
                    stack.push(Math.pow(stack.pop(), a));
                    break;
                case 25:
                    var N = stack.pop(),
                        B = stack.pop();
                    stack.push(Math.log(N) / Math.log(B));
                    break;
                case 26:
                    stack.push(-stack.pop());
                    break;
                case 27:
                    stack.push(Math.abs(stack.pop()));
                    break;
                case 28:
                    stack.push(2 * stack.pop());
                    break;
                case 29:
                    stack.push(3 * stack.pop());
                    break;
                case 30:
                    stack.push(4 * stack.pop());
                    break;
                case 31:
                    stack.push(stack.pop() / 2);
                    break;
                case 32:
                    stack.push(stack.pop() / 3);
                    break;
                case 33:
                    stack.push(stack.pop() / 4);
                    break;
                case 34:
                    stack.push(Math.pow(stack.pop(), 2));
                    break;
                case 35:
                    stack.push(Math.pow(stack.pop(), 3));
                    break;
                case 36:
                    stack.push(Math.pow(stack.pop(), 4));
                    break;
                case 37:
                    stack.push(Math.pow(stack.pop(), 1 / 2));
                    break;
                case 38:
                    stack.push(Math.pow(stack.pop(), 1 / 3));
                    break;
                case 39:
                    stack.push(Math.pow(stack.pop(), 1 / 4));
                    break;
                case 40:
                    stack.push(Math.floor(stack.pop()));
                    break;
                case 41:
                    stack.push(Math.ceil(stack.pop()));
                    break;
                case 42:
                    stack.push(Math.round(stack.pop()));
                    break;
                case 43:
                    stack.push(stack.pop() + 1);
                    break;
                case 44:
                    stack.push(stack.pop() - 1);
                    break;
                case 45:
                    var r = stack.pop();
                    stack.push(r % stack.pop());
                    break;
                case 46:
                    stack.push(Math.pow(2, stack.pop()));
                    break;
                case 47:
                    stack.push(Math.pow(3, stack.pop()));
                    break;
                case 48:
                    stack.push(Math.pow(4, stack.pop()));
                    break;
                case 49:
                    stack.push(fibonacci(stack.pop()));
                    break;
                case 50:
                    stack.push(lucas(stack.pop()));
                    break;
                case 51:
                    stack.push(math.pi);
                    break;
                case 52:
                    stack.push(math.e);
                    break;
                case 53:
                    stack.push(math.phi);
                    break;
                case 54:
                    stack.push(Math.log(stack.push()));
                    break;
                case 55:
                    stack.push(Math.log10(stack.push()));
                    break;
                case 56:
                    stack.push(Math.exp(stack.push()));
                    break;
                case 57:
                    stack.push(Math.pow(10, stack.push()));
                    break;
                case 58:
                    i = stack.pop() - 1;
                    break;
                case 59:
                    var C = stack.pop();
                    x[stack.pop()] = String.fromCharCode(C);
                    break;
                case 60:
                    stack.push(x[stack.pop()].charCodeAt(0));
                    break;
                case 61:
                    stack.push(stack.pop() % 2);
                    break;
                case 62:
                    stack.push(Math.random());
                    break;
                case 63:
                    doOutput(stack.pop());
                    break;
                case 64:
                    stringMode = true;
                    break;
                case 66:
                    if(isBrowser) {
                        document.getElementById("output").innerHTML = "";
                    } else {
                        console.log('\033[2J');
                    }
                    break;
                case 67:
                    try {
                        var inpu = prompt();
                        stack.push(math.bignumber(inpu))
                    } catch (e) {
                        stack.push(-1);
                    };
                    break;
                case 93:
                    stack.push(math.eval("i"));
                    break;
                case 96:
                    stack.push(factorial(stack.pop()));
                    break;
                case 98:
                    var B = stack.pop(),
                        A = stack.pop(),
                        N = stack.pop();
                    stack.push(N ? A : B);
                    break;
                case 99:
                    i++;
                    break;
                case 100:
                    if(stack.pop()) i++;
                    break;
                case 101:
                    stack.push(dblFactorial(stack.pop()));
                    break;
                case 102:
                    if(!stack.pop()) i++;
                    break;
                case 103:
                    var max = stack.pop(),
                        min = stack.pop();
                    stack.push(Math.floor(Math.random() * (max - min)) + min);
                    break;
            }
        }
        if(++i < x.length) {
            if(isBrowser) {
                setTimeout(step, 20, code, i, stack, stringMode);
            }
            else {
                step(code, i, stack, stringMode);
            }
        } else if(isBrowser) {
            if (stack.length) console.log(display(stack));
            console.log("Done!");
        }
    }
    step(code, 0, stack, stringMode);
}
var code;

if(isBrowser) {
    code = document.getElementById("code");
    
    function updateByteCount() {
        function d(p) {
            var o = [],
                n = 0,
                q = p.length,
                r, m;
            while (n < q) {
                r = p.charCodeAt(n++);
                if (r >= 55296 && r <= 56319 && n < q) {
                    m = p.charCodeAt(n++);
                    if ((m & 64512) == 56320) {
                        o.push(((r & 1023) << 10) + (m & 1023) + 65536)
                    } else {
                        o.push(r);
                        n--
                    }
                } else {
                    o.push(r)
                }
            }
            return o
        }
        document.getElementById("byteCnt").innerHTML = utf8.encode(code.value).length;
        document.getElementById("charCnt").innerHTML = d(code.value).length;
    }
    updateByteCount();
    code.addEventListener("keyup", updateByteCount);
    code.addEventListener("keydown", updateByteCount);
    var button = document.getElementById("sub");
    var oEl = document.getElementById("rot");
    var r = 0;
    setInterval(function() {
        oEl.innerHTML = moons[r++];
        r %= moons.length;
    }, 100);

    var imp = [64, 65];
    var io = [16, 17, 63, 66, 67]
    var sm = [20, 21, 22, 23];
    var op = [12, 13, 14, 15, 54, 55, 56, 57, 61, 97, 98, 101];
    var dt = [51, 52, 53, 60, 62, 93, 103];
    var ctl = [18, 19, 58, 59, 99, 100, 102];
    for(var i = 24; i < 51; i++) {
        op.push(i);
    }
    for(var i = 0; i < 12; i++) {
        dt.push(i);
    }
    button.addEventListener("click", function() {
        Emotinomicon(code.value)
    });
    tokens.forEach(function(e, i) {
        var bu = document.createElement("button");
        bu.innerHTML = e;
        bu.id = i;
        bu.className = (imp.indexOf(i) >= 0 ? "important " : "") + (io.indexOf(i) >= 0 ? "io " : "") + (sm.indexOf(i) >= 0 ? "man " : "") + (op.indexOf(i) >= 0 ? "op " : "") + (dt.indexOf(i) >= 0 ? "data " : "") + (ctl.indexOf(i) >= 0 ? "ctl " : "") + "emoji";
        if(explanations[i] == " ") bu.className += " unassigned";
        bu.addEventListener("click", function() {
            var x = document.getElementById("code").value.split("");
            x.splice(code.selectionStart, code.selectionEnd - code.selectionStart, this.innerHTML);
            document.getElementById("code").value = x.join("");
            updateByteCount();
        });
        bu.addEventListener("mouseover", function() {
            document.getElementById("expl").innerHTML = "<span class=\"large\">" + this.innerHTML + "</span><br>(" + this.id + "; " + Number(this.id).toString(16) + "; " + Number(this.id).toString(36) + ")<br>" + (explanations[this.id] == " " ? "unassigned" : explanations[this.id]);
        });
        document.getElementById("emotes").appendChild(bu);
    });

    function generateExplanation() {
        var tox = tokenize(code.value);
        var table = document.createElement("table");
        var thr = document.createElement("tr");
        (new Array(tox.length + 1)).fill(0).map(function(a, i) {
            var h = tokens.indexOf(tox[i]),
                th = document.createElement("th");
            th.innerHTML = tox[i] || "explanation";
            th.className = (imp.indexOf(h) >= 0 ? "important " : "") + (io.indexOf(h) >= 0 ? "io " : "") + (sm.indexOf(h) >= 0 ? "man " : "") + (op.indexOf(h) >= 0 ? "op " : "") + (dt.indexOf(h) >= 0 ? "data " : "") + (ctl.indexOf(h) >= 0 ? "ctl " : "") + "emoji";
            return th;
        }).forEach(function(e) {
            thr.appendChild(e)
        });
        table.appendChild(thr);
        for(var i = 0; i < tox.length; i++) {
            var tr = document.createElement("tr"),
                h = tokens.indexOf(tox[i]);
            tr.className = (imp.indexOf(h) >= 0 ? "important " : "") + (io.indexOf(h) >= 0 ? "io " : "") + (sm.indexOf(h) >= 0 ? "man " : "") + (op.indexOf(h) >= 0 ? "op " : "") + (dt.indexOf(h) >= 0 ? "data " : "") + (ctl.indexOf(h) >= 0 ? "ctl " : "") + "emoji";
            var tds = (new Array(tox.length + 1)).fill(0).map(function() {
                var td = document.createElement("td");
                return td;
            });
            tds[i].innerHTML = tox[i];
            tds[tox.length].innerHTML = explanations[tokens.indexOf(tox[i])] || "";
            tds.forEach(function(e) {
                tr.appendChild(e)
            });
            table.appendChild(tr);
        }
        // remove all elements
        var e = document.getElementById("explanation");
        while(e.lastChild) {
            e.removeChild(e.lastChild)
        }
        e.appendChild(table);
    }
    document.getElementById("gen").addEventListener("click", generateExplanation);
    generateExplanation();
} else {
    var fs = require("fs");
    var code = fs.readFileSync(process.argv[2]).toString();
    Emotinomicon(code);
}
