#!/bin/bash

# For the problem using NetworkManager,
# wireless connection could not establish again after once droped 
# unless reset wireless module,
# and alive checking interval time is so long that applications occur errors.
# This script checks connection status and resets wireless automatically.

# connection timeout value, in seconds
TIMEOUT=2
# checking interval time, in seconds
INTERVAL=2


con_nm=""
ipv4_gw=""
idx=0

# wait until connection established
nm-online -t 0

# get local wireless connections
con_st=`nmcli con status | awk '{print $1}' | sed '1d'`
for con in ${con_st}; do
	ret=`nmcli -t -f connection con list id "${con}" 2>/dev/null | grep -w 'type' | grep -cw 'wireless'` 
	if [ "0" != "${ret}" ]; then
		con_nm[${idx}]="${con}"
		ipv4_gw[${idx}]=`nmcli -t -f ipv4 con list id "${con}" 2>/dev/null | grep -w gw | awk '{print $7}'`
		# echo ${con_nm[${idx}]} ${ipv4_gw[${idx}]}
		idx=$((${idx} + 1))
	fi
done

# check and keep connection
while [ 0 != "${idx}" ]; do
	for ((i=0;i<${idx};i++)); do
		ret=`ping -w ${TIMEOUT} "${ipv4_gw[${i}]}" >/dev/null 2>&1; echo $?`
		if [ "0" != "${ret}" ]; then
			ret=`nmcli -f WIFI-HARDWARE nm status | tail -n 1 | grep -cw 'enabled'`
			if [ "0" != "${ret}" ]; then
				ret=`nmcli con status id "${con_nm[${i}]}" >/dev/null 2>&1; echo $?`
				if [ "0" == "${ret}" ]; then
					nmcli con down id "${con_nm[${i}]}"
				fi
				ret=`nmcli -f WIFI nm status | tail -n 1 | grep -cw 'enabled'`
				if [ "0" != "${ret}" ]; then
					nmcli nm wifi off
				fi
				nmcli nm wifi on && nmcli con up id ${con_nm[${i}]}
			fi
		fi
		sleep ${INTERVAL}
	done
done

exit 0
