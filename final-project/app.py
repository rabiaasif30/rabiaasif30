from flask import Flask 
from views import views

app = Flask(__name__, static_folder="static", template_folder="templates")

app.register_blueprint(views, url_prefix="/memenator")

if __name__ == '__main__':
    app.run(debug=True, port=5000) #changes automatically apply
