from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!'
@app.route('/dojo')
def dojo():
    return "dojo"

@app.route('/say/<name>/')
def show_user_profile(name):
    print(name)
    return "hi " + name

@app.route('/repeat/<int:num>/<string:name>')
def repeat(num,name):
    word = ''
    for i in range(0,num):
        word += f"{name}<br/>"
    return word

@app.errorhandler(404)
def page_not_found(error):
    return 'Sorry! No response. Try again.', 777

if __name__=="__main__":
    app.run(debug=True)


 