class BankAccount:
    accounts=[]
    def __init__(self, int_rate, balance): 
        self.int_rate=int_rate 
        self.balance=balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance +=amount
        return self

    def withdraw(self, amount):
        if(self.balance-amount)>=0:
            self.balance-=amount
        else:
            print("Insufficient funds: changing a $5 fee")
            self.balance-=5
        return self


    def display_account_info(self):
        print(f"Blance:{self.balance}")
        return(self)

    def yield_interest(self):
        if self.balance>0:
            self.balance+=(self.balance*self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()

class User:

    def __init__(self, name):
        self.name = name
        self.account = {
            "account1" : BankAccount(.02,1000),
            "account2" : BankAccount(.05,3000)
        }


    def display_user_balance(self):
        print(f"User: {self.name}, account1 Balance: {self.account['account1'].display_account_info()}")
        print(f"User: {self.name}, account2 Balance: {self.account['account2'].display_account_info()}")
        return self

    def transfer_money(self,amount,user):
        self.amount -= amount
        user.amount += amount
        self.display_user_balance()
        user.display_user_balance()
        return self


adrien = User("Adrien")

adrien.account['account1'].deposit(100)
adrien.display_user_balance()