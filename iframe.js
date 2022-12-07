<script>
setTimeout(function () {
  /***/
  var myFrameb = $('iframe[name="frame-toggle"]').contents().find('body');
  var bttn = myFrameb.find(".shopify-buy__cart-toggle");
  bttn.click(function(){
      setTimeout(function () {
        miniCartFrame();
      },500)
	});
  function miniCartFrame(){
    var myFrame = $('iframe[name="frame-cart"]').contents().find('body');
  	myFrame.find(".shopify-buy__cart__notice").css('margin-bottom', '18px');
    var append = myFrame.find(".shopify-buy__cart__notice");
    var agreeBoxCheck = myFrame.find(".agre_box");
    if(agreeBoxCheck.length <= 0){
    	$("<div class='agre_box'><input type='checkbox' id='Agree' name='Agree' value='Agree'><label for='Agree'> I have read and agree to the <a href='javascript:void(0)' class='toplink'>terms and conditions</a></label></div> ").insertAfter(append);
       myFrame.find(".agre_box").css({'background': '#fff','right': '0','margin': '0 auto','margin-right': '0','padding': '0 4px','height': '4%','font-size': '12px','display': 'flex','align-items': 'center','gap': '5px','text-align': 'center','justify-content': 'center'})
    }
        /**/
        var checkbtn = myFrame.find(".shopify-buy__btn");
    	var checkboxInput = myFrame.find("#Agree");
        var label = myFrame.find("label[for='Agree']");
        var redirect = myFrame.find(".toplink");
    	var decreement = myFrame.find(".shopify-buy__quantity-decrement");
    	var increement = myFrame.find(".shopify-buy__quantity-increment");
        checkbtn.removeClass('shopify-buy__btn--cart-checkout');
        checkbtn.addClass('check-inpt');
        checkbtn.css({"font-family": "Open Sans, sans-serif","font-weight": "bold","font-size": "16px","padding-top": "16px","padding-bottom": "16px","background-color": "#abc0c3","clear": "both","margin-top": "15px","width": "100%"});
      	
        /* Check Button Click */
        checkbtn.click(function(){
            if(checkboxInput.is(':checked')){
              	label.css('color', '#4c4c4c');
				checkbtn.addClass('shopify-buy__btn--cart-checkout');
            }else{
              label.css('color', 'red');
              checkbtn.removeClass('shopify-buy__btn--cart-checkout');
            }
        })
         /* */
        /* Term condition Link */
    	redirect.css('color','#004a5f');
        redirect.click(function(){
			top.location.href="https://www.homziedesigns.com/terms-of-service/";
		})
        
        /* Input Change*/
        checkboxInput.change(function(){
        	if($(this).is(':checked')){
              label.css('color', '#4c4c4c');
              checkbtn.addClass('shopify-buy__btn--cart-checkout');
            }else{
              label.css('color', 'red');
              checkbtn.removeClass('shopify-buy__btn--cart-checkout');
            }
        })
        /**/
        /* Decreement Click*/
    	decreement.click(function(){
          setTimeout(function () {
        	 miniCartFrame()
          },1500)  
        })
        /**/
        /* Increement Click*/
    	increement.click(function(){
          setTimeout(function () {
        	 miniCartFrame()
          },1500) 
        })
        /**/
  }
  /* Add to cart Page*/
  $('.shopify-buy-frame').find('iframe').each(function(){
    var myFrame3 = $(this).contents().find('body');
    var checkbtn1 = myFrame3.find(".shopify-buy__btn.shopify-buy__beside-quantity");

  	checkbtn1.click(function(){
      setTimeout(function () {
        miniCartFrame()
      },1500)
 	})
  })
  /***/
  }, 3000);
</script>