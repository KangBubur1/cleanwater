from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS #Cross-Origin Resource Sharing
import pickle


app = Flask(__name__)
CORS(app, resources={r"/*":{"origins":"*"}})

model = pickle.load(open('ml_model.pkl', 'rb'))

@app.route('/', methods=['GET'])
def get_data():
    data = {
        "message":"API is Running"
    }
    return jsonify(data)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print(data)
        query_df = pd.DataFrame([data])
        print(query_df)
        prediction = model.predict(query_df.values)
        # Mengubah prediksi ke dalam format 0 atau 1
        prediction = 0 if prediction[0] == 1 else 0
        return jsonify({'Prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)
    
    
    
# https://www.geeksforgeeks.org/integrating-a-ml-model-with-react-and-flask/