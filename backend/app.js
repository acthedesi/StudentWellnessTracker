var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

    
mongoose.connect("mongodb://localhost/WellnessTracker");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "JavaScriptIsAwesome",
    resave: false,          
    saveUninitialized: false   
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.set("view engine", "ejs");


app.use(function(req, res, next){ 
    res.locals.currUser = req.session.passport;
    next();
});

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());


//*****Routes*****
app.get("/", function(req, res){
    res.render("home");
});
    
app.get("/calendar", isLoggedIn, function(req, res){
    res.render("calendar");
});


app.get("/signup", function(req, res){
    res.render("signup");
});


app.post("/signup", function(req, res){
    req.body.username;
    req.body.password;
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) { 
        if(err) {
            console.log(err);
            return res.render("signup");
        } 
        passport.authenticate("local")(req, res, function() { 
            res.redirect("/calendar");
        });
    });
});

app.get("/login", function(req, res) {
    if (req.session.user) {
        res.redirect("/calendar");
    } else {
        res.render("login");   
    }
});

app.post("/login", passport.authenticate("local", {
        successRedirect: "/calendar",
        failureRedirect: "/login",
    }), function(req, res){
});

app.get("/logout", function(req, res){
    req.logout(); 
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server has started...");
});