function AJAX(config) {
  if (!(this instanceof AJAX)) {
    return new AJAX(config);
  }

  this._xhr = new XMLHttpRequest();
  this._config = this._extendOptions(config);

  console.log(this._config);
}

AJAX.prototype._extendOptions = function (config) {
  var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));

  for (var key in defaultConfig) {
    if (key in config) {
      defaultConfig[key] = config[key];
    }
  }

  return defaultConfig;
};

AJAX.prototype._defaultConfig = {
  type: "GET",
  url: window.location.href,
  data: {},
  options: {
    async: true,
    timeout: 0,
    username: null,
    password: null,
  },
  headers: {},
};

AJAX({
  type: "POST",
  url: "odbierz.php",
  data: {
    firstName: "Piotr",
    lastName: "Kowalski",
  },
  headers: {
    "X-My-Header": "123#asdf",
  },
  success: function (response, xhr) {
    console.log("Udało się! Status: " + xhr.status);
  },
  failure: function (xhr) {
    console.log("Wystąpił błąd. Status: " + xhr.status);
  },
});
