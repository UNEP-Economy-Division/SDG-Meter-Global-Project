import os

from pandas.core.frame import DataFrame
from fast_bert.prediction import BertClassificationPredictor


def get_predictions(text):
    # ### 2. Display bar of the time required for code training.
    current_directory = os.path.dirname(os.path.abspath(__file__))
    predictor = BertClassificationPredictor(
                    model_path=f'{current_directory}/models/finetuned_models/model_out',
                    label_path=f'{current_directory}/models/labels',
                    multi_label=True,
                    model_type='bert',
                    do_lower_case=False)

    single_prediction = predictor.predict(text)

    data = DataFrame(single_prediction)
    data.columns = ['SDG', 'number']
    array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for index, row in data.iterrows():
        if row['SDG'] == 'SDG1':
            array2[0] = (float(row['number']))
        elif row['SDG'] == 'SDG2':

            array2[1] = (float(row['number']))
        elif row['SDG'] == 'SDG3':

            array2[2] = (float(row['number']))

        elif row['SDG'] == 'SDG4':

            array2[3] = (float(row['number']))
        elif row['SDG'] == 'SDG5':

            array2[4] = (float(row['number']))
        elif row['SDG'] == 'SDG6':

            array2[5] = (float(row['number']))
        elif row['SDG'] == 'SDG7':

            array2[6] = (float(row['number']))
        elif row['SDG'] == 'SDG8':

            array2[7] = (float(row['number']))
        elif row['SDG'] == 'SDG9':

            array2[8] = (float(row['number']))
        elif row['SDG'] == 'SDG10':

            array2[9] = (float(row['number']))
        elif row['SDG'] == 'SDG11':

            array2[10] = (float(row['number']))
        elif row['SDG'] == 'SDG12':

            array2[11] = (float(row['number']))
        elif row['SDG'] == 'SDG13':

            array2[12] = (float(row['number']))
        elif row['SDG'] == 'SDG14':

            array2[13] = (float(row['number']))
        elif row['SDG'] == 'SDG15':

            array2[14] = (float(row['number']))
        elif row['SDG'] == 'SDG16':

            array2[15] = (float(row['number']))
        else:
            array2[16] = (float(row['number']))

    return data.to_json(orient="split")