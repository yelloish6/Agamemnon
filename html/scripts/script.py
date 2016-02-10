import webiopi
import datetime

GPIO = webiopi.GPIO

LIGHT = 22 # GPIO pin using BCM numbering
LIVING_WRITE = 22
LIVING_READ = 27


HOUR_ON  = 23  # Turn Light ON at 08:00
MINUTE_ON = 24 # Turn Light ON at 11:12
HOUR_OFF = 18 # Turn Light OFF at 18:00

# setup function is automatically called at WebIOPi startup
def setup():
    # set the GPIO used by the light to output
    GPIO.setFunction(LIGHT, GPIO.OUT)

    # retrieve current datetime
    now = datetime.datetime.now()

    # test if we are between ON time and tun the light ON
    if ((now.hour >= HOUR_ON) and (now.hour < HOUR_OFF)):
        GPIO.digitalWrite(LIGHT, GPIO.HIGH)

# loop function is repeatedly called by WebIOPi 
def loop():
    # retrieve current datetime
    now = datetime.datetime.now()

    # toggle light ON all days at the correct time
    if ((now.hour == HOUR_ON) and (now.minute == MINUTE_ON) and (now.second == 0)):
        if (GPIO.digitalRead(LIGHT) == GPIO.HIGH):
            GPIO.digitalWrite(LIGHT, GPIO.LOW)

    # toggle light OFF
    if ((now.hour == HOUR_OFF) and (now.minute == 0) and (now.second == 0)):
        if (GPIO.digitalRead(LIGHT) == GPIO.HIGH):
            GPIO.digitalWrite(LIGHT, GPIO.LOW)

    # gives CPU some time before looping again
    webiopi.sleep(1)

# destroy function is called at WebIOPi shutdown
def destroy():
    GPIO.digitalWrite(LIGHT, GPIO.LOW)

@webiopi.macro
def getLightHours():
    return "%d;%d" % (HOUR_ON, HOUR_OFF)

@webiopi.macro
def setLightHours(on, off):
    global HOUR_ON, HOUR_OFF
    HOUR_ON = int(on)
    HOUR_OFF = int(off)
    return getLightHours()

@webiopi.macro
def getLightState():
	p0 = int(GPIO.digitalRead(LIVING_READ))
	print(p0)
	return ("%s" % (p0))
