touch_home = ../Lib/touch-2.1.1/
phonegap_home = ../Lib/phonegap-2.5.0/
js_lib = ../Lib/javascript/

.PHONY: all
all: www Android

.PHONY: Android
Android: www
	cp -a www Android/assets/
	cp -a $(touch_home)/resources/css/android.css Android/assets/www/lib/sencha-touch.css
	mkdir -p Android/lib
	cp -a $(phonegap_home)/lib/android/cordova*.jar Android/lib/cordova.jar
	cp -a $(phonegap_home)/lib/android/cordova*.js www/lib/cordova.js
	cp -a $(phonegap_home)/lib/android/xml Android/res/

.PHONY: www
www:
	mkdir -p www/lib
	cp -a $(js_lib)/des.js www/lib/
	cp -a $(touch_home)/sencha-touch.js www/lib/

.PHONY: clean
clean:
	rm -rf Android/assets/www
	rm -rf Android/res/xml
	rm -rf Android/lib
	rm -rf www/lib
