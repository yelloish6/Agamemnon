 webiopi().ready(function() {
//	 			webiopi().setFunction(2,"out");
//	 			webiopi().setFunction(3,"out");
	 			webiopi().setFunction(4,"out");
//	 			webiopi().setFunction(7,"out");
//	 			webiopi().setFunction(8,"out");
//	 			webiopi().setFunction(9,"out");
	 			webiopi().setFunction(10,"out");
//	 			webiopi().setFunction(11,"out");
//	 			webiopi().setFunction(14,"out");
//	 			webiopi().setFunction(15,"out");
	 			webiopi().setFunction(17,"out");
        		webiopi().setFunction(18,"out");
        		webiopi().setFunction(22,"out");
        		webiopi().setFunction(23,"out");
        		webiopi().setFunction(24,"out");
        		webiopi().setFunction(25,"out");
        		webiopi().setFunction(27,"in");

			webiopi().refreshGPIO(true);
        		
	       		var content, button, buttontest;
        		content = $("#content");
					$(refreshButtons);
        		
			button = webiopi().createGPIOButton(22,"Back-up control");
			content.append(button);        		

			button = webiopi().createSequenceButton("bucatarie", "Bucatarie", 4, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("dining", "Dining", 10, 200, "01");
        		content.append(button);
        		
			button = webiopi().createSequenceButton("living", "Living", 17, 200, "01");
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
        		
        		button = webiopi().createSequenceButton("baie", "Baie", 18, 200, "01");
        		content.append(button);
        		
//        		button = webiopi().createSequenceButton("baie", "Baie Spot", 23, 200, "01");
//        		content.append(button);
        		
        		button = webiopi().createSequenceButton("hol", "Hol", 22, 200, "01");
        		content.append(button);

        		button = webiopi().createSequenceButton("garaj", "Garaj", 23, 200, "01");
        		content.append(button);
        		
//        		button = webiopi().createSequenceButton("camara", "Camara", 22, 200, "01");
//        		content.append(button);
        		
        		button = webiopi().createSequenceButton("camera_tehnica", "C. Tehnica", 24, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("pult", "Pult", 25, 200, "01");
        		content.append(button);
        		
//       		button = webiopi().createSequenceButton("ext_camera_tehnica", "Ext C.T.", 22, 200, "01");
//       		content.append(button);
        		
//        		button = webiopi().createSequenceButton("ext_terasa", "Ext Terasa", 22, 200, "01");
//        		content.append(button);
        		
			
        		
        		
        });


