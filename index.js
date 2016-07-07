require('es6-promise').polyfill();
require('isomorphic-fetch');

var express = require('express');
var passport = require('passport');
var SteamStrategy = require('passport-steam').Strategy;
var session = require('express-session');
var path = require('path');

var superagent = require('superagent');

var app = express();


var steamApi = require('./endpoints');

app.use(session({secret: 'keyboard cat maybe not'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/dist')));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var apiKey = '3B85A701407A9757BDBF91CD1EF766DE';

passport.use(new SteamStrategy({
        apiKey: '3B85A701407A9757BDBF91CD1EF766DE',
        returnURL: 'http://127.0.0.1:3000/auth/steam/callback',
        realm: 'http://127.0.0.1:3000/auth/steam/callback'
    },
    function(identifier, profile, done) {
        return done(null, profile);
    }
));

app.get('/auth/steam', passport.authenticate('steam'));

app.get("/api/user", function(req, res) {
    if (req.user) {
    	var user = req.user;
        res.json({
            user: user,
            login: true
        })
    } else {
        res.json({
            login: false
        })
    }
})
app.get('/auth/steam/callback',
    passport.authenticate('steam', {
    	failureRedirect: '/login'
    }),
    function(req, res) {
        res.redirect('/');
    }
);

app.get('/logout', function (req, res){
  req.logOut();
  res.redirect('/')
});

app.get('/api/recentGames', function(request, response) {
	var url = steamApi.getRecentGames + '/?key=' + apiKey + '&steamid='+ request.user.id  +'&format=json';
	superagent.get(url).end(function(err, res) {
		response.json(res.body);
	})
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});
