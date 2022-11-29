var app =new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
      selectguest:0,
      selectevent: 0,
      yourcrowd: 2,
      firstStep: true,
      secondfornon: false,
      secondforalch: false,
      thirdstep: false,
      thirsdStepArr : [],
      drintStyleTitle: 'red wine',
      drintStyleTitle1: 'varietals + blends',
      index: 0,
      nonalcoholicArr: [],
      alcoholicArr: [],
      alcoholicClk: false,
      result: false,
      nonAlcoholic: [{name: 'Water', value: false}, {name: 'Sparkling Water', value: false}, {name: 'Juice', value: false}, {name: 'Coffee', value: false}, {name: 'Hot Tea', value: false}, {name: 'Iced Tea', value: false}],
      alcoholicD: [{name: 'RED WINE', value: false},
                   {name: 'WHITE WINE', value: false},
                   {name: 'BEER', value: false}, 
                   {name: 'TEQUILA', value: false}, 
                   {name: 'VODKA', value: false}, 
                   {name: 'WHISKEY', value: false}, 
                   {name: 'GIN', value: false}, 
                   {name: 'BUBBLES', value: false}, 
                   {name: 'ROSÉ', value: false}, 
                   {name: 'RUM', value: false}, 
                   {name: 'HARD SELTZER', value: false}, 
                   {name: 'MIXERS', value: false}],
      redWine: [{
        name: 'BAROLO',
        INSIGHT: 'Barolo is a magisterial wine made with 100% Nebbiolo grapes, and is the namesake of the area in Piedmont, Italy in which the grapes are grown. Barolo is often called the king of Italian wines.',
        ELEMENTS: 'Full Body | Herbs + Earth | Raspberry + Cherry + Rose | Bone Dry | Dense Tannins',
        GREAT: 'When you’re feeling somewhat regal',
        select: false
      },
      {
        name: 'BORDEAUX',
        INSIGHT: 'France’s famous red blends from Bordeaux are mostly Cabernet Sauvignon and Merlot grapes with a sprinkle of a few other native grapes. Merlot dominant blends hail from the Right Bank, while Cabernet Sauvignon dominant are typically from Left Bank villages.',
        ELEMENTS: 'Full Body | Black Currant + Cherry | Graphite | High Tannins',
        GREAT: 'Sitting with friends around any table in any city under any starry night',
        select: false
      },
      {
        name: 'CABERNET SAUVIGNON',
        INSIGHT: 'Bordeaux is the “OG” of this natural hybrid of Cabernet Franc and Sauvignon Blanc grapes. Its regions typically blend Cabernet Sauvignon with other grapes. Single varietal Cabernet Sauvignon wines are where Napa Valley really shines',
        ELEMENTS: 'Full-bodied | Rich + Robust | Dark Fruit + Earthy | Medium to High Tannins',
        GREAT: 'A cold night by a warm fire or a Game of Thrones style dinner table with lots of red meat',
        select: false
      },
      {
        name: 'MALBEC',
        INSIGHT: 'Malbec was originally a French grape, called Côt, but it turned out the grape preferred the hot high-altitude of Argentina’s Mendoza region. It’s almost as if the grape belonged to Argentina all along.',
        ELEMENTS: 'Full Body | Rich, Dark Fruit | Smooth + Chocolatey | Moderate Tannins',
        GREAT: 'When you want a team player who has your back in the ol’ pocket book department while keeping large groups happy',
        select: false
      },
      {
        name: 'MONTEPULCIANO',
        INSIGHT: 'Montepulciano d’Abruzzo is made with exactly what you might guess: the Montepulciano grape from Abruzzo, Italy. This super smooth and easy drinking red wine has a seat at the big boys’ table, if only for its gregarious personality.',
        ELEMENTS: 'Medium to Full Body | Complex Black Fruits | Smooth + Easy | Medium to High Tannins',
        GREAT: 'When you feel like a king but the night calls for the wine budget of a pauper, and you have a mixed crowd to please',
        select: false
      },
      {
        name: 'PINOT NOIR',
        INSIGHT: 'The Pinot Noir vines of Burgundy were first tended by Cistercian monks in the Middle Ages. Pinot Noir ranks as one of the oldest grapes in the world, and the most popular light-bodied red.',
        ELEMENTS: 'Light to Medium Body | Dry | Smooth + Fruit-forward | Spices + Earth | Low Tannins',
        GREAT: 'Blending in with your white wine drinking friends at a wine lunch or when you’re channeling Miles Raymond from the movie, Sideways',
        select: false
      }],
      whitewine:[{
        name: 'CHARDONNAY',
        INSIGHT: 'Wines made with Chardonnay grapes from California and Australia tend to have a more prevalent oaky flavor than their brethren from regions in France like Chablis, Montrachet, and White Burgundy.',
        ELEMENTS: 'Medium Body | Buttery Mouthfeel | Citrus | Hazelnut',
        GREAT: 'Going old school and giving Chardonnay another chance by stripping away the oaky reputation it got in the 90s',
        select: false
      },
      {
        name: 'PINOT GRIGIO',
        INSIGHT: 'Pinot Grigio, also known as Pinot Gris, is known for two styles: the "spicy" full-bodied Alsatian and lighter-bodied, more acidic Italian. New World regions such as Australia, Washington, and Oregon typically yield the Alsatian style.',
        ELEMENTS: 'Medium to Full Body | Dry + Crisp | Floral Aromas + Minerality | Apple + Pear',
        GREAT: 'A hot summer’s day when you want a zesty white wine instead of a cold glass of lemonade',
        select: false
      },
      {
        name: 'SAUVIGNON BLANC',
        INSIGHT: 'Traditionally Sauvignon Blancs hail from cooler climates, like France, Chile and New Zealand resulting in an herbal, zesty wine with plenty of minerality. Warmer climates of California, Australia and Washington State produce a fresh blend of white peach, Meyer lemon and passion fruit.',
        ELEMENTS: 'Light Body | Dry + Crisp | Grass, Green Bell Peppers + Nettles | Tropical Fruit + Floral',
        GREAT: 'When you want the creamy and buttery character of a Chardonnay but without all the fruit. If Chardonnay is Homecoming Queen, Sauvignon Blanc is her boyfriend stealer',
        select: false
     }],
      beer:[{
        name: 'KOLSCH',
        INSIGHT: 'Kolsch uses both old ale yeasts + modern refrigerated brewing techniques. Often called hybrid beer, Kolsch is the result of blending the subtle fruit + malt notes of an ale with the crisp finish of a lager.',
        ELEMENTS: 'Golden Crisp + Sparkling | Slightly Fruity | Creamy + Soft',
        GREAT: 'A night that calls for mixing a bit of old school with a refreshing, youthful twist',
        select: false
      },
      {
          name: 'LAGER',
          INSIGHT: 'Lager is brewed using bottom-fermentation, which simply means the yeasts gather at the bottom of the tank + produces a cleaner tasting beer. If you can only choose one beer for your party’s bar, make it a lager.',
          ELEMENTS: 'Light + Crisp | Smooth + Mellow | Highly Carbonated | Less Bitter',
          GREAT: 'Hot summer nights when you’re cracking open (maybe even chugging) a cold one with your buds',
          select: false
      },
      {
          name: 'PALE ALE',
          INSIGHT: 'Pale Ales’ simple balance of malt and hops make them one of the most enjoyed and approachable beer styles available. Imperial IPAs (India Pale Ales) boast more hoppy flavor, aroma and bitterness + pack a high ABV punch.',
          ELEMENTS: 'Palate-Cleansing | Piney Hops | Toasty Maltiness | Hints of Caramel',
          GREAT: 'Keeping occupied between snacks while sportsing. Do you even sports, bro?',
          select: false
      },
      {
        name: 'PILSNER',
        INSIGHT: 'Pilsner is a lager with a simple flavor profile that makes it one of the most popular in the lager family. Not surprisingly, Pilsners are brewed using pilsner malt and lager yeast.',
        ELEMENTS: 'Pale Gold | Complex Maltiness | Spicy + Hoppy | Crisp',
        GREAT: 'Convincing your friends who think there is no beer beyond American lagers that the world is not flat',
        select: false    
      },
      {
        name: 'STOUT',
        INSIGHT: 'Stout is a dark, full-flavored ale brewed with black, unmalted barley. The result is a silky and creamy beer that is appreciated most by true beer connoisseurs.',
        ELEMENTS: 'Black, Opaque Color | Roasted Barley | Coffee | Malty Sweetness',
        GREAT: 'Cozying up to the fire in an old Irish pub on a cold winter night',
        select: false    
      },
      {
        name: 'WHEAT BEER',
        INSIGHT: 'Aptly named, Wheat Beer is an ale brewed with a high percentage of wheat. The most popular, German Hefeweizen, can be very drinkable + hold its own next to lager as a crowd pleaser.',
        ELEMENTS: 'Bubbly + Refreshing | Slightly Cloudy | Hints of Orange, Banana + Clove',
        GREAT: 'Introducing your old crew to your new + lovable European friend',
        select: false    
      }],
      tequila:[{
        name: 'BLANCO',
        INSIGHT: 'Because it’s bottled freshly after its 2nd distillation, Blanco, aka Silver, tequila displays true flavors of the blue agave plant. This deliberate lack of oak cask aging positions blanco as tequila’s purest form.',
        ELEMENTS: 'Crystal Clear | Fruits + Citrus | Smooth + Sweet',
        GREAT: 'A fresh margarita delivering the purest flavor of blue agave, that majestic plant responsible for the nectar of the gods we all call tequila',
        select: false
      },
      {
        name: 'REPOSADO',
        INSIGHT: 'Reposado, literally rested, tequilas are aged in oak barrels for 2 months up to a full year. A tequila house’s unique flavor profile is largely determined by what their barrels have previously aged: wine, cognac, whiskey or bourbon.',
        ELEMENTS: 'Light Amber | Agave + Oak | Citrus + Honey | Subtle Floral + Vanilla',
        GREAT: 'Smoothing out the edges on a young whippersnapper by imparting the richness + wisdom that come with a little age',
        select: false
      },
      {
        name: 'AÑEJO',
        INSIGHT: 'Añejo, literally old, tequilas are required to see the inside of an oak barrel for 1 to 3 years. This longer aging yields a rich tequila smooth enough for sipping, + imparts the complex flavor of its barrel’s history.',
        ELEMENTS: 'Warm Amber | Oak + Vanilla | Caramel + Honey',
        GREAT: 'Changing the shiver of fear going up your spine into a shiver of excitement the next time someone mentions a shot of tequila',
        select: false
      }],
      whiskey:[{
        name: 'BOURBON',
        INSIGHT: 'Bourbon is a blended grain whiskey (>51% corn) + mainly produced in Kentucky. “Tennessee Whiskey” is unique in its use of a charcoal filter. Bourbon has no aging requirements, but Straight Bourbon must be aged for at least 2 years.',
        ELEMENTS: 'Smooth | Spicy, Smoky Oak | Caramel + Brown Sugar | Vanilla',
        GREAT: 'Swigging back a finger of 101 proof like a badass in a dive bar, while wearing a tux (à la Matthew McConaughey, Wild Turkey’s new creative director)',
        select: false
      },
      {
        name: 'RYE',
        INSIGHT: 'Rye is bourbon’s edgier brother. Generally hard + spicy around the edges, Rye does become more subtle with age. American Rye is often made of 95-100% rye, which imparts its trademark, fascinating burn.',
        ELEMENTS: 'Spicy + Dry | Astringent | Shooting Stars',
        GREAT: 'Balancing out an already-sweet cocktail + arguing your purist point of view on the best (only?) way to make a Manhattan',
        select: false
      },
      {
        name: 'SCOTCH',
        INSIGHT: 'Scotch whisky is entirely produced, bottled, + aged for at least 3 years in the 5 official whisky regions of Scotland - each with its own distinct flavor profile. Scotch’s trademark bite is loved by aficionados and feared by amateurs.',
        ELEMENTS: 'Wood + Leather | Earthy Peat | Caramel + Spice',
        GREAT: 'Sipping on while channeling your inner Frank Sinatra, Dean Martin, Mark Twain, or the brightest star of all Scotch lovers, Ron Burgundy',
        select: false
      }],
      bubbles:[{
        name: 'FRENCH CHAMPAGNE',
        INSIGHT: 'True Champagne must originate from Champagne, France and be produced via Méthode Champenoise. These strict requirements are the reason for the price tag. Sugar dosage, in order from least to most, distinguishes the terms Extra Brut, Brut, Extra Dry, Sec, Demi-Sec and Doux.',
        ELEMENTS: 'Toasty | Buttery Brioche | Citrus Fruit | Fine Bubbles',
        GREAT: 'Celebrating something so special, you need to be poppin’ the fanciest bottles + partying like Jay Gatsby',
        select: false
      },
       {
          name: 'ITALIAN PROSECCO',
          INSIGHT: 'Prosecco is Italy’s answer to bubbles. Made from Glera grapes grown in Veneto using the Charmat process, Prosecco’s second fermentation takes place in stainless steel tanks instead of the bottle. This means less time from grape to fancy glass, and the lowest price tag in the world of bubbles.',
          ELEMENTS: 'Floral + Fruity | Aromatic | Light + Frothy Bubbles',
          GREAT: 'Mixing sparkling wine with orange juice, while Sunday Funday rolls into Funnight',
        select: false
        },
       {
          name: 'CALIFORNIA SPARKLING WHITE',
          INSIGHT: 'California sparkling wines are created using Méthode Traditionnelle, which is the same as Méthode Champenoise used in Champagne by a different name. California’s ideal climate for Pinot Noir and Chardonnay grapes has even seduced some French producers to set up outposts there.',
          ELEMENTS: 'Light + Fruity Jolly Ranchers | Strong Minerality | Ample Mousse | Fine Bubbles',
          GREAT: 'A Francophile with an open mind, toasting to the marriage of old world + new world with America’s answer to bubbles',
        select: false
        },
       {
          name: 'CAVA',
          INSIGHT: 'Cava is Spain’s answer to bubbles. Made from Macabeo, Parellada and Xarello grapes of Catalonia, Cava is made using Méthode Traditionnelle with the second fermentation taking place in the bottle. Yep, it’s Méthode Champenoise by a different name.',
          ELEMENTS: 'Zesty Citrus | Baked Apple | Toasty Nuttiness | Fine Bubbles',
          GREAT: 'Successfully finishing the Running of the Bulls in Pamplona and wanting to celebrate not having been gored or trampled',
        select: false
        },
       {
          name: 'FRENCH ROSÉ CHAMPAGNE',
          INSIGHT: 'Rosé Champagne is produced in Champagne, France via Méthode Champenoise. The two methods used to turn the sparkles pink are rosé d’assemblage (blending white + red wine) or rosé de saignée (extended grapeskin contact).',
          ELEMENTS: 'Blush to Bright Pink Color | Fizzy + Lively | Crisp Acidity',
          GREAT: 'A grand celebration that calls for the most noble bubbly + the stunning colors only a rosé can bring to the party',
        select: false
        },
       {
          name: 'ITALIAN ROSÉ SPARKLING',
          INSIGHT: 'Italian Sparkling Rosé is made using the same white grapes and process as Prosecco with a dash of Cabernet Sauvignon or Pinot Nero added. Since Prosecco is required to be 100% white grapes, we can’t technically call it Rosé Prosecco, but it is.',
          ELEMENTS: 'Crisp + Dry | Fresh Strawberries | Cut Herbs | Light + Frothy Bubbles',
          GREAT: 'Watching the sunset in beautiful shades of pink and pretending you are in Capri, Italy',
        select: false
        },
       {
          name: 'CALIFORNIA SPARKLING ROSÉ',
          INSIGHT: 'California Sparkling Rosé uses the same traditional technique + noble grape varieties as its French sister, but the warm Californian climate allows for longer ripening, which leads to fruitier flavor profiles.',
          ELEMENTS: 'Fruit-forward Effervescence | Bright Raspberry | Deep Cranberry',
          GREAT: 'Catapulting you to Instagram Influencer status as your pretty pink glass of bubbly clinks with your bestie’s on the edge of an infinity pool',
        select: false
        }],
      mixers: [{
        name: 'LIME JUICE',
        description: 'Lime juice is the key ingredient to the most beloved cocktails for all liquor types. Margaritas? Lime. Vodka Gimlet? Lime. Gin Rickey? Yep. Lime. Mojitos? You guessed it. Lime.',
        select: false
     },
     {
       name: 'LEMON JUICE',
       description: 'Lemon juice is not as popular as her citrus sister, lime, however she still holds her own. She shines in cocktails like a French 75, Tom Collins + Whiskey Sour.',
        select: false
     },
     {
       name: 'GRAPEFRUIT JUICE',
       description: "Grapefruit juice is the littlest sister but she's got spunk. She is responsible for classics like the Greyhound + Paloma, as well as the cocktail everyone drank in the 80s, Sea Breeze.",
        select: false
     },
     {
       name: 'ORANGE JUICE',
       description: "OK, OK, orange juice, we see you. She cannot be overlooked because she is the MVP for classics like the Harvey Walbanger, Tequila Sunrise, Madras + another cocktail that had it's heyday in the 80s, Sex on the Beach. We almost forgot...Mimosas!",
        select: false
     },
     {
       name: 'CRANBERRY JUICE',
       description: "Cranberry juice is a fun one. The Cosmopolitan is really its shining star. Beyond that or a simple vodka cranberry, you would be getting creative with maybe a holiday cocktail or something specific.",
        select: false
     },
     {
       name: 'SIMPLE SYRUP',
       description: 'Simple Syrup is a mixer that you only need a touch of to make a good cocktail great. It is the pièce de résistance for crowd favorites like the Margarita, Gimlet, Mojito, Tom Collins + Whiskey Smash.',
        select: false
     },
     {
       name: 'ORANGE LIQUEUR',
       description: "Orange liqueur has traditionally been a staple ingredient for an Old-Fashioned, Margarita + the 'real' Mai Tai. However, if you're feeling adventurous, add a dash to other cocktails.",
        select: false
     },
     {
       name: 'FIZZY WATER',
       description: "The ingredient responsible for turning just vodka on the rocks into a classic cocktail simply named, Vodka Soda, is a bar staple. Standard club soda has undergone a little makeover in recent years. Brands like Topo Chico out of Monterrey, Mexico has made such an impression that it's hard to imagine a classic Margarita without it.",
        select: false
     },
     {
       name: 'TONIC',
       description: "Tonic has a very unique flavor. You either love it or hate it. The ones who love it will most often let it stand alone with their favorite poison: Gin and Tonic, Vodka and Tonic, Rum and Tonic or even Tequila and Tonic.",
        select: false
     },
     {
       name: '7UP',
       description: "7UP is an old standby that's so reliable, it made it into the name of a couple of favorites: Vodka 7 + the Seven and Seven, which is Seagram's 7 Crown and, you guessed it, 7UP.",
        select: false
     },
     {
       name: 'COKE',
       description: "Coke is the pinch hitter for a couple of cocktails that are go-tos. Like 7UP, the cocktails made with Coke include the mixer in the name: Rum and Coke + Whiskey and Coke.",
        select: false
     },
     {
       name: 'DIET COKE',
       description: 'Diet Coke fills the same cocktail need that Coke does while at the same time helping you watch your waistline.',
        select: false
     }],
      currentselect: ''
    },
    methods: {
      addguest: async  function(gst, trigr) {
        if(trigr == 'minus'){
          if(this.selectguest > 0){
            this.selectguest -= 1;
          }
        }else{
          this.selectguest += 1;
        }
      },
      addevent: function(evnt, trigr) {
        if(trigr == 'minus'){
          if(this.selectevent > 0){
            this.selectevent -= 1;
          }
        }else{
          this.selectevent += 1;
        }
      },
      addCrowd: function(position, classNames){
        this.yourcrowd = position;
        let ball = $('.slider-ball-wrapper')[0];
        $('.slider-ball-wrapper').remove();
        $(classNames).append(ball);
      },
      alcoholic: function(evnt){
        if(this.selectguest > 0 && this.selectevent > 0){
          this.firstStep = false;
          if(evnt == 'non'){
            this.secondfornon = true;
            this.secondforalch = false;
          }else{
            this.secondfornon = false;
            this.secondforalch = true;
            this.nonalcoholicArr =[];
          } 
        }
      },
      goBack: function(){
        this.nonalcoholicArr =[];
        this.firstStep = true;
        this.secondfornon = false;
        this.secondforalch = false;
      },
      drinkselect: function(alc, obj){
        if(obj.value == false){
          console.log(alc);
          if(alc == 'non-alcoholic'){
            var alchs = this.nonAlcoholic.findIndex(x => x.name == obj.name);
            console.log(this.nonAlcoholic[alchs]);
            console.log(this.nonAlcoholic[alchs].value);
            this.nonAlcoholic[alchs].value = true;
            this.nonalcoholicArr.push(obj);
          }else{
            alcoholicClk = true;
            if(obj.name == 'RUM' || obj.name == 'GIN' || obj.name == 'WHISKEY' || obj.name == 'VODKA' || obj.name == 'TEQUILA'){
              $('.drink-select-column.col-12.col-sm-6.col-lg-4.col-xl-4.mixtures').show();
            }
            var alchs = this.alcoholicD.findIndex(x => x.name == obj.name);
            this.alcoholicD[alchs].value = true;
          }
        }else{
          if(alc == 'non-alcoholic'){
            var alchs = this.nonAlcoholic.findIndex(x => x.name == obj.name);
            this.nonAlcoholic[alchs].value = false;
            this.nonalcoholicArr = this.nonalcoholicArr.filter(x => x.name != obj.name);
          }else{
            if(obj.name == 'RUM'){
              $('.drink-select-column.col-12.col-sm-6.col-lg-4.col-xl-4.mixtures').hide();
            }
            var alchs = this.alcoholicD.findIndex(x => x.name == obj.name);
            this.alcoholicD[alchs].value = false;
          }
        }
      },
      gothird: function(){
        console.log(this.alcoholicD);
        this.checkFirst("next");
        this.secondfornon = false;
        this.secondforalch = false;
        this.thirdstep = true;
      },
      goBackToSecond: function(){
        this.index--;
        console.log(this.index);
        if(this.index < 0){
          this.index = 0;
          this.secondforalch = true;
          this.thirdstep = false;
        }else{
          this.checkFirst("back");
        }
      },
      checkFirst: function(action){
        console.log(this.index);
        console.log(this.alcoholicClk);
        console.log(this.alcoholicD.length)
        if(this.index < this.alcoholicD.length){
          var check = this.alcoholicD[this.index];
          if(check){
            if(check.value != true ){
              if(action == "back"){
                this.index--;
              }else{
                this.index++;
              }
              this.checkFirst(action);
            }else{
              console.log(check)
              if(check.name == 'RED WINE' && check.value == true){
                this.alcoholicArr.push(check);
                this.currentselect = this.redWine;
                this.thirsdStepArr = this.redWine;
                this.drintStyleTitle= 'red wine';
                this.drintStyleTitle1= 'varietals + blends';
              }else if(check.name == 'WHITE WINE' && check.value == true){
                this.currentselect = this.whitewine;
                this.alcoholicArr.push(check);
                this.thirsdStepArr = this.whitewine;
                this.drintStyleTitle= 'white wine';
                this.drintStyleTitle1= 'varietals + blends';
              }else if(check.name == 'BEER' && check.value == true){
                 this.currentselect = this.beer;
                this.alcoholicArr.push(check);
                this.thirsdStepArr = this.beer;
                this.drintStyleTitle= 'beer styles';
                this.drintStyleTitle1='';
              }else if(check.name == 'TEQUILA' && check.value == true){
                this.currentselect = this.tequila;
                this.alcoholicArr.push(check);
                this.thirsdStepArr = this.tequila;
                this.drintStyleTitle= 'tequila styles';
                this.drintStyleTitle1='';
              }else if(check.name == 'WHISKEY' && check.value == true){
                this.currentselect = this.whiskey;
                this.alcoholicArr.push(check);
                this.thirsdStepArr = this.whiskey;
                this.drintStyleTitle= 'whiskey styles';
                this.drintStyleTitle1='';
              }else if(check.name == 'BUBBLES' && check.value == true){
                this.currentselect = this.bubbles;
                this.alcoholicArr.push(check);
                this.thirsdStepArr = this.bubbles;
                this.drintStyleTitle= 'bubbles, bubbles, bubbles';
                this.drintStyleTitle1='';
              }else if(check.name == 'MIXERS' && check.value == true){
                this.currentselect = this.mixers;
                this.alcoholicArr.push(check);
                this.thirsdStepArr = this.mixers;
                this.drintStyleTitle= 'mixers';
                this.drintStyleTitle1='';
              }else if(check.name == 'VODKA' && check.value == true){
                this.currentselect = '';
                this.alcoholicArr.push(check);
                if(action == "back"){
                  this.index--;
                }else{
                  this.index++;
                }
                this.checkFirst(action);
              }else if(check.name == 'GIN' && check.value == true){
                this.currentselect = '';
                this.alcoholicArr.push(check);
                if(action == "back"){
                  this.index--;
                }else{
                  this.index++;
                }
                this.checkFirst(action);
              }else if(check.name == 'ROSÉ' && check.value == true){
                this.currentselect = '';
                this.alcoholicArr.push(check);
                if(action == "back"){
                  this.index--;
                }else{
                  this.index++;
                }
                this.checkFirst(action);
              }else if(check.name == 'RUM' && check.value == true){
                this.currentselect = '';
                this.alcoholicArr.push(check);
                if(action == "back"){
                  this.index--;
                }else{
                  this.index++;
                }
                this.checkFirst(action);
              }else if(check.name == 'HARD SELTZER' && check.value == true){
                this.currentselect = '';
                this.alcoholicArr.push(check);
                if(action == "back"){
                  this.index--;
                }else{
                  this.index++;
                }
                this.checkFirst(action);
              }
            }
          }
        }else{
          this.secondforalch = false;
          this.thirdstep = false;
          this.result = true;
          console.log(this.alcoholicArr);
          console.log("result");
        }
      },
      goToNext: function(){
        console.log("text");
        this.index++;
        this.checkFirst("next");
      },
      skipit: function(){
        console.log("text2");
        this.index++;
        this.checkFirst("next");
      },
      thirdselect: function(obj, evnt){
        console.log(this.currentselect);
        var ind = this.currentselect.findIndex(x => x.name == obj.name);
        if(obj.select == false){
          this.currentselect[ind].select = true;
        }else{
          this.currentselect[ind].select = false;
        }
       }
    }
  });