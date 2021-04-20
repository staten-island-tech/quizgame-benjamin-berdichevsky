// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

console.log("connected");

function toUpper(text) {
  var upperCased = text.toUpperCase();
  console.log(upperCased);
}

var myQuestions = [{
  question: "Hi There Soccer Fan! This is a quiz for only the most supreme of all Soccer Fans. You must get all the questions correct to win the Ultimate Prize! Are you up for the Challenge?",
  answers: {
    a: 'yes',
    b: 'no'
  },
  correctAnswer: 'a'
}, {
  question: "Which one of these players doesn't play soccer anymore?",
  answers: {
    a: 'Zlatan Ibrahimovic',
    b: 'Andrés Iniesta',
    c: 'David Beckham'
  },
  correctAnswer: 'c'
}, {
  question: "What is the Name of the biggest England Soccer League?",
  answers: {
    a: 'EFL Championship',
    b: 'Premier League',
    c: 'Champions League'
  },
  correctAnswer: 'b'
}, {
  question: "Which of these players still plays for Barcelona after over 16 years of playing for the club?",
  answers: {
    a: 'Lionel Messi',
    b: 'Gerard Pique',
    c: 'Xavier Hernández Creus (Xavi)'
  },
  correctAnswer: 'a'
}, {
  question: "What Player out of these at some point played for Ireland in major Competitions?",
  answers: {
    a: 'Roy Keane',
    b: 'Didier Drogba',
    c: 'Jack Grealish'
  },
  correctAnswer: 'a'
}, {
  question: "Which of these teams won the Champions League the most ammount of times? (13 times!)",
  answers: {
    a: 'Liverpool FC',
    b: 'AC Milan',
    c: 'Real Madrid'
  },
  correctAnswer: 'c'
}, {
  question: "Who holds the record for the most Champions League Goals in a single season? (17 goals)",
  answers: {
    a: 'Robert Lewandowski',
    b: 'Lionel Messi',
    c: 'Cristiano Ronaldo'
  },
  correctAnswer: 'c'
}, {
  question: "Who holds the record for the most Champions League Goals? (134 goals!)",
  answers: {
    a: 'Robert Lewandowski',
    b: 'Lionel Messi',
    c: 'Cristiano Ronaldo'
  },
  correctAnswer: 'c'
}, {
  question: "What is the highest amount of goals anyone has scored in a Calendar Year?",
  answers: {
    a: '83',
    b: '99',
    c: '91'
  },
  correctAnswer: 'c'
}];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers = []; // for each question...

    for (var i = 0; i < questions.length; _readOnlyError("i"), i++) {
      // first reset the list of answers
      answers = (_readOnlyError("answers"), []); // for each available answer...

      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push('<label>' + '<input type="radio" name="question' + i + '" value="' + letter + '">' + letter + ': ' + questions[i].answers[letter] + '</label>');
      } // add this question and its answers to the output


      output.push('<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
    } // finally combine our output list into one string of html and put it on the page


    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers'); // keep track of user's answers

    var userAnswer = '';
    var numCorrect = 0; // for each question...

    for (var i = 0; i < questions.length; _readOnlyError("i"), i++) {
      // find selected answer
      userAnswer = (_readOnlyError("userAnswer"), (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value); // if answer is correct

      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        _readOnlyError("numCorrect"), numCorrect++; // color the answers green

        answerContainers[i].style.color = 'lightgreen';
      } // if answer is wrong or blank
      else {
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
    } // show number of correct answers out of total


    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  } // show questions right away


  showQuestions(questions, quizContainer); // on submit, show results

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58756" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map