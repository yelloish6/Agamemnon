 webiopi().ready(function() {
	 			webiopi().setFunction(2,"out");
	 			webiopi().setFunction(3,"out");
	 			webiopi().setFunction(4,"out");
	 			webiopi().setFunction(7,"out");
	 			webiopi().setFunction(8,"out");
	 			webiopi().setFunction(9,"out");
	 			webiopi().setFunction(10,"out");
	 			webiopi().setFunction(11,"out");
	 			webiopi().setFunction(14,"out");
	 			webiopi().setFunction(15,"out");
	 			webiopi().setFunction(17,"out");
        		webiopi().setFunction(18,"out");
        		webiopi().setFunction(22,"out");
        		webiopi().setFunction(23,"out");
        		webiopi().setFunction(24,"out");
        		webiopi().setFunction(25,"out");
        		webiopi().setFunction(27,"out");
			webiopi().setFunction(21,"in");

			webiopi().refreshGPIO(true);
        		
	       		var content, button;
        		content = $("#content");
        		
			button = webiopi().createGPIOButton(22,"Back-up control");
			content.append(button);        		

			button = webiopi().createSequenceButton("bucatarie", "Bucatarie", 17, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("dining", "Dining", 18, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("living", "Living", 22, 200, "01");
        		content.append(button);

			button = webiopi().createGPIOButton(21, "LivingStat");
			content.append(button);
        		
        		button = webiopi().createSequenceButton("baie", "Baie", 23, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("baie", "Baie Spot", 23, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("hol", "Hol", 24, 200, "01");
        		content.append(button);

        		button = webiopi().createSequenceButton("garaj", "Garaj", 22, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("camara", "Camara", 22, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("camera_tehnica", "C. Tehnica", 22, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("pult", "Pult", 22, 200, "010");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("ext_camera_tehnica", "Ext C.T.", 22, 200, "01");
        		content.append(button);
        		
        		button = webiopi().createSequenceButton("ext_terasa", "Ext Terasa", 22, 200, "01");
        		content.append(button);
        		
			
        		
        		
        });