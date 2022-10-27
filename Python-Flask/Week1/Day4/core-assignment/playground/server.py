from turtle import color
from flask import Flask, render_template
app=Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/play/')
def play():
    return render_template("play.html", num=3, color="blue")
@app.route('/play/<int:num>')
def level_two(num):
    return render_template("play.html", num=num)
@app.route('/play/<int:num>/<string:color>')
def level_three(num):
    return render_template("play.html", num=num, color=color)







if __name__=="__main__":
 app.run(debug=True)