#!/bin/bash

output_dir="/volume"

# necessary , mv alone wont create the folder , we need to create it explicitly
mkdir -p "$output_dir"

echo "$lang"

if [ "$lang" == "py" ]; then
    python incoming.py > "/app/output.json" 
    mv /app/output.json "$output_dir/"
elif [ "$lang" == "js" ]; then
    node usercode.js 
    node incoming.js > "/app/output.json"
    mv /app/output.json "$output_dir/"
elif [ "$lang" == "java" ]; then
    javac usercode.java
    java usercode
    javac Incoming.java
    java Incoming
    mv /app/output.json "$output_dir/"
elif [ "$lang" == "ts" ]; then
    tsc usercode.ts
    node usercode.js
    tsc incoming.ts
    node incoming.js > "/app/output.json"
    mv /app/output.json "$output_dir/"
else
    echo "Invalid language selected"
fi