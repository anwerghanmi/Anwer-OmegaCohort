class user:
    def __init__(self,name, email, amount):
        self.name= name
        self.email= email
        self.amount_balance= amount
    def make_disposit(self, amount):
        self.amount_balance+= amount
    def make_withdrawal(self, amount):
        self.amount_balance-= amount
    def display_user_balance(self):
        print(f"My name is {self.name} my email is {self.email} and I have {self.amount_balance} in my account.")

nassim=user("nassim", "nassim@", 0)
nassim.make_disposit(700)
nassim.make_disposit(300)
nassim.make_disposit(500)
nassim.make_withdrawal(100)
nassim.display_user_balance()

nassim=user("dhouha", "dhouha@", 0)
nassim.make_disposit(700)
nassim.make_disposit(500)
nassim.make_withdrawal(100)
nassim.display_user_balance()

nassim=user("bourgiba", "bourgiba@", 0)
nassim.make_disposit(1700)
nassim.make_withdrawal(300)
nassim.make_withdrawal(500)
nassim.make_withdrawal(100)
nassim.display_user_balance()

