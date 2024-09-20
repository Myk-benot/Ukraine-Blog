import csv
import json
import os
from flask import Flask, jsonify

app = Flask(__name__)

def csv_to_json(csv_file_path, json_file_path):
  
    data = []
    
 
    with open(csv_file_path, 'r') as csv_file:
      
        csv_reader = csv.DictReader(csv_file)
      
        for row in csv_reader:
          
            data.append(row)
    

    with open(json_file_path, 'w') as json_file:
     
        json.dump(data, json_file, indent=4)

@app.route('/data')
def get_data():
   
    csv_file_path = 'daily_count.csv'
    json_file_path = 'data.json' 
    
    try:
        csv_to_json(csv_file_path, json_file_path)
        
        
        with open(json_file_path, 'r') as json_file:
            json_data = json.load(json_file)
        
        return jsonify(json_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
