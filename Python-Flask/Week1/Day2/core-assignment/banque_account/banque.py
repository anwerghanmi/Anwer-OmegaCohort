class BanqueAccount:
   all_account = []
   def __init__(self,int_rate,balance):
      self.int_rate = int_rate
      self.balance = balance
      BanqueAccount.all_account.append(self)

   def deposit(self, amount):
      self.balance += amount
      return self

   def withdraw(self, amount):
      if (self.balance - amount >=0):
         self.balance -= amount
      else:
         print("insufficent funs")
         self.balance -= 5
      return self
   def display_account_info(self):
      print(f"Balance: {self.balance}")
      return self
   def yeild_interest(self):
      if self.balance > 0:
         self.balance +=(self.balance * self.int_rate)
      return self
   @classmethod
   def all_balances(cls):
      for account in cls.all_account:
         account.display_account_info()

firstc=BanqueAccount(.05,1000)
secondc=BanqueAccount(.02,5000)

firstc.deposit(10).deposit(20).deposit(40).withdraw(600).yeild_interest().display_account_info()
secondc.deposit(100).deposit(200).deposit(400).withdraw(60).yeild_interest().display_account_info()

BanqueAccount.all_balances()