###### CONTROL ######
config = "api/config.txt"
debug = open(config).read().replace("\n", "")[open(config).read().replace("\n", "").index("debug") - 5]
down = open(config).read().replace("\n", "")[open(config).read().replace("\n", "").index("down") - 5]
#-------------------#

from flask import Flask, request, render_template, send_file, url_for, jsonify, redirect
import time
import json

if debug == "Y":
    import main
    import osEmul as os
    home = "http://localhost:5000"
else:
    from api import main
    import os
    home = "https://powerscore.vercel.app"

###### INITIALIZE ######


###### WEBAPP ######
app = Flask(__name__)

@app.route("/")
def index():
    if down == "Y":
        return render_template('down.html')
    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
    