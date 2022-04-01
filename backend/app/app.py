from flask import Flask, request, jsonify
from Bert import get_predictions
from flask_cors import CORS
import operator
import json

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
CORS(app)
app.config['SECRET_KEY'] = 'secret!'


@app.route('/', methods=['GET'])
def alive():
    return "live"


@app.route('/sdgOP',methods=['POST'])
def predict_text():
    content=request.json
    data = get_predictions(content["text"])
    data_ = json.loads(data)
    data_lists = data_['data']
    cars_dict = {data_list[0]: data_list[1] for data_list in data_lists}
    new_data = {k: v for k, v in cars_dict.items() if v >= 0.015}
    new_data = {k: int(v * 100) for k, v in new_data.items()}
    new_data = sorted(new_data.items(), key=operator.itemgetter(1), reverse=True)
    sortdict = dict(new_data)
    response =jsonify(sortdict)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=False)
