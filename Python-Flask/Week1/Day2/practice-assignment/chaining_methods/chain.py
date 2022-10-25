
class user:
    def __init__(self,name, email, amount):
        self.name= name
        self.email= email
        self.amount_balance= amount
    def make_disposit(self, amount):
        self.amount_balance+= amount
        return self
    def make_withdrawal(self, amount):
        self.amount_balance-= amount
        return self
    def display_user_balance(self):
        print(f"My name is {self.name} my email is {self.email} and I have {self.amount_balance} in my account.")
        return self

nassim=user("nassim", "nassim@", 0)
dhouha=user("dhouha", "dhouha@", 0)
bourgiba=user("bourgiba", "bourgiba@", 0)

nassim.make_disposit(700).make_disposit(300).make_disposit(500).make_withdrawal(100).display_user_balance()
dhouha.make_disposit(700).make_disposit(500).make_withdrawal(100).display_user_balance()
bourgiba.make_disposit(1700).make_withdrawal(300).make_withdrawal(500).make_withdrawal(100).display_user_balance()

