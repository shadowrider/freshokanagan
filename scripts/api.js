api = {};


api.save_user_data = function( selling_text ){
    var user = Parse.User.current();
    user.set("selling", selling_text );
    user.save();
};

// ADMIN ##########################################################
api.destroy_locations = function () {
    col.MapLocation.fetch({
        success: function (data) {
            for (var i = 0; i<data.length;i++){
                data.models[i].destroy();
            }
            console.log('locations deleted'); // #DEV
        }
    });
};

api.initial_locations = function () {
    var location_data = [
        // VENDOR
        {name:          'Arlo\’s Honey Farm',
        description:    'Products: Honey, Honey Products, Bee Basics Natural Skin Care, Honey Soap, Bees Wax Candles, Honey Recipe Book. Activities: Pollinator Park',
        city:           'Kelowna, BC',
        address:        '4329 Bedford Lane',
        phone:          '250.764.2883',
        email:          'info@arloshoneyfarm.com',
        website:        'http://www.arloshoneyfarm.com/',
        lat:            49.8259244,
        long:           -119.4463033},
        // VENDOR
        {name:          'Bite Me Organics',
        description:    'Products: Apples',
        city:           'Kelowna, BC',
        address:        '2934 Dunster Road',
        phone:          '250.717.6393',
        email:          'bitemeorganics@shaw.ca',
        website:        'http://www.bitemeorganics.com/',
        lat:            49.8722016,
        long:           -119.4210044},
        // VENDOR
        {name:          'Carmelis Goat Cheese Artisan Inc.',
        description:    'Products: Goat Cheese. Activities: Tours',
        city:           'Kelowna, BC',
        address:        '170 Timberline Road',
        phone:          '250.764.9033',
        email:          'info@carmelisgoatcheese.com',
        website:        'http://www.carmelisgoatcheese.com/',
        lat:            49.7774194,
        long:           -119.571955},
        // VENDOR
        {name:          'Carmelis Goat Cheese Artisan Inc.',
        description:    'Products: Pears, Peaches, Apricots, Plums, Apples. Activities: Farm Visits',
        city:           'Winfield, BC',
        address:        '8090 Highway 97',
        phone:          '250.766.4311',
        email:          'claremontranch@gmail.com',
        website:        'https://www.facebook.com/pages/Claremont',
        lat:            49.9360053,
        long:           -119.39073},
        // VENDOR
        {name:          'Gort\'s Gouda Cheese Farm',
        description:    'Products: Massdammer, Goat Cheese, Feta Cheese, Milk',
        city:           'Salmon Arm, BC',
        address:        '1470 50 Street Southwest',
        phone:          '250.832.4274',
        email:          '',
        website:        '',
        lat:            54.0458782,
        long:           -128.6610268},
        // VENDOR
        {name:          'The Homestead Organic Farm',
        description:    'Products:Beems, Carrots, Swiss Chard, Spinach, Salad Green, Eggplant. Activities: Tours',
        city:           'Peachland, BC',
        address:        '4855 MacKinnon Road',
        phone:          '250.767.6636',
        email:          'info@thehomesteadorganicfarm.ca',
        website:        '',
        lat:            49.8039754,
        long:           -119.7134453},
        // VENDOR
        {name:          'Bent Pine Ranch',
        description:    'Products:Beef',
        city:           'Lumby, BC',
        address:        '371 Trinity Valley Road',
        phone:          '250.309.9518',
        email:          'info@cheshirepark.ca',
        website:        '',
        lat:            49.911996,
        long:           -119.4438124}
    ];

    for ( var i= 0; i< location_data.length;i++){
        col.MapLocation.create(
            location_data[i]
        );
    }
};

// #DEPRICATED #####################################################

// This is for manual login #DO NOT USE
api.login = function ( options ) {
    /*      username:
     *       password:
     *       email:
     * */
    Parse.User.logIn(
        options.username,
        options.password,
        {
            success: function (user) {
                console.log('user logged in: '); // #DEV
                console.log(user); // #DEV
            }
        }
    );
};

// This is for manual signup #DO NOT USE
api.signup = function( options ){
    /*      username:
     *       password:
     *       email:
     * */
    var user = new Parse.User();
    user.set("username", options.username);
    user.set("password", options.password);
    user.set("email", options.email);

    // other fields can be set just like with Parse.Object
    //    user.set("phone", "415-392-0202");

    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
};
