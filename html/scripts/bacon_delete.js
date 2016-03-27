 webiopi().ready(function() {
        		webiopi().setFunction(22,"out");
        		webiopi().setFunction(27,"in");
			webiopi().refreshGPIO(true);
        		
	       		var content, button, buttontest;
        		content = $("#content");
					$(refreshButtons);
        		
			button = webiopi().createGPIOButton(22,"Back-up control");
			content.append(button);        		
   		
			button = webiopi().createSequenceButton("living", "Living", 22, 200, "01");

			var state = webiopi().digitalRead(27, gpioReadCallback);
			function gpioReadCallback(gpio, value){
				if (value == 1) {
						webiopi().setClass("button", "HIGH");
					} else {
						webiopi().setClass("button", "LOW");
					}	
			}
	
			content.append(button);
			

     			//create test button to test style change
			buttontest = w().createButton("testbutton", "Test Button");
			buttontest.bind(BUTTON_DOWN, function(event) {
				w().outputSequence(22, 200, "01");
			});
			content.append(buttontest);
						
			function refreshButtons() {
				if (w().digitalRead(27) == 1) {
						$("#testbutton").html('<style type="text/css">button#testbutton { background-color: red;}</style><span style="color:white">Test Button</span>');
					} else {
						$("#testbutton").html('<style type="text/css">button#testbutton { background-color: black;}</style><span style="color:white">Test Button</span>');
				}
			}
			setTimeout(refreshButtons, 1000);
			

			//end test area


			button = webiopi().createGPIOButton(27, "LivingStat");
			content.append(button);
        		        		
        });
