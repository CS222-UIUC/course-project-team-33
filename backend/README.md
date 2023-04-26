# CS222 Project Backend Development
#### Backend Group members:
* Zirui Wang
* Zihan Ming

## Developed With

* [![Python](https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org/)
* [![Django](https://img.shields.io/badge/Django-092E20.svg?style=flat&logo=django&logoColor=white)](https://www.djangoproject.com/)
## Step 1: Set up Django server

### Prerequisites:

Before setting up the Django server, you will need the following:

* Python 3.x (preferably Python 3.6 or higher)

* pip (Python package manager)
virtualenv (optional)

### Installation

1. First, install Django using pip:
```bash
pip install Django
```
2. Then, we need create Django project
```bash
python manage.py startapp MultiLangApp
```
3. Migrate the database
```bash
python manage.py migrate
```
4.Run the server
```bash
python manage.py runserver
```

## Step 2: Run Server

1. Go to MultiLangProject 
```bash
cd MultiLangProject
```
2. Run following command
```bash
python3/python manage.py runserver
```
3. Run the server
```bash
python manage.py runserver
```
## Step 3: Get Summary
After you start the server, you can begin to translate/summary your article.

We have serveral endpoints to use:

1. Translate

    If you want to see the translation first, you can use the endpoint /translate

    It requirement two argument:
        
    article (String): the text you want to be translated

    language (Abbr): the target language you want the text be

2. Summary
    
    Then you can use endpoint /get_summary to return the summary for the translation text

    It only take one argument which is the article

3. Or you can combine the two above endpoint together to directly translate your article using endpoint /translate_and_summarize which take same argument as /translate

For any endpoint, you will receive a article and a signal tells you it is success/fail