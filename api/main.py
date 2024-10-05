###### CONTROL ######
config = "api/config.txt"
debug = open(config).read().replace("\n", "")[open(config).read().replace("\n", "").index("debug") - 5]
#-------------------#
from math import *
if debug == "Y":
    #import example
    None
else:
    # from api import example
    None
import os
from io import BytesIO

###### OPERATOR FUNCTIONS ######


