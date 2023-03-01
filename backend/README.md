# CS222 Project Backend Development
#### Group members:
* Carmen Zheng
* Tianwei Qing
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