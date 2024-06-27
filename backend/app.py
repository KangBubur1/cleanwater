from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

model = pickle.load(open('ml_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        ph = request.form.get('ph')
        solids = request.form.get('solids')
        turbidity = request.form.get('turbidity')
        file = request.files['file']  
        
        if not (ph and solids and turbidity and file):
            return jsonify({'error': 'Missing required fields'}), 400
        

        query_df = pd.DataFrame({
            'ph': [ph],
            'solids': [solids],
            'turbidity': [turbidity],
        })
        
        print(query_df)

        # Lakukan prediksi menggunakan model Anda
        prediction = model.predict(query_df.values)
        prediction_float = float(prediction[0])
        print(prediction_float)

        return jsonify({'Prediction': prediction_float})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)