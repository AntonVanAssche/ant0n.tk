#!/usr/bin/env python3

import time
import sys

print('\033[92mInstalling 16 GB of RAM...\033[0m')
for i in range(101):
   sys.stdout.write('%d%% \033[92mcomplete\033[0m\r' % i)
   sys.stdout.flush()
   if i == 21 or i == 50 or i == 53 or i == 69:
      time.sleep(1)
   elif i == 99:
      time.sleep(5)
   else:
      time.sleep(0.1)

print('\033[92mInstallation complete\033[00m')
print('\n')
print('\033[91mYOU CAN NOT DOWNLOAD MORE RAM, YOU STUPID???\033[00m')
print('\n')
