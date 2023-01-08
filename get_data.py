import pandas as pd
import numpy as np
import os, json
import boto3
import psycopg2
import datetime
from pprint import pprint


CREDENTIALS = {
    "host": "ec2-52-16-194-155.eu-west-1.compute.amazonaws.com",
    "dbname": "da0u4tnqeefepb",
    "user": "rouuixdabmzlxw",
    "password": "a3e78c85c65a16f74fc849712a79282756756b439fa671c85355bf0b1226cf8b",
    "port": "5432",
}


def get_save(lst:list) -> None:
    """"""
    name_save = os.path.join(os.getcwd(), 'table.json')
    with open(name_save, 'w') as f:
        json.dump(
            lst,
            f,
            indent=4,
            default=str
        )

def push_dict_on_s3(lst:list, bucket:str, name:str) -> object:
    data = json.dumps(lst, ensure_ascii=False)
    data = bytes(data.encode("UTF-8"))
    s3 = boto3.resource("s3")
    object = s3.Object(bucket, name)
    object.put(Body=(data), ACL="public-read")
    return object


def get_materialized_view():
    table_name = 'six_group_products'
    with psycopg2.connect(**CREDENTIALS) as connection:
        df = pd.read_sql(
            f"SELECT * FROM {table_name}",
            con=connection,
        )
        df = df.replace(np.nan, '')
    return df.to_dict(orient="records")


if __name__ == "__main__":
    value_used = get_materialized_view()
    get_save(value_used)