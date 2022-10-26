class ninja:
    def __init__(self, first_name, last_name, pet, treats, pet_food):
        self.first_name=first_name
        self.last_name=last_name
        self.pet=pet
        self.treats=treats
        self.pet_food=pet_food
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        self.pet.eat()
        return self
    def bathe(self):
        self.pet.noise()





class pet:
    def __init__(self, name, type, trciks, health,energy, noise):
        self.name=name
        self.type=type
        self.tricks=trciks
        self.health=100
        self.energy=50
        self.noise=noise
    def sleep(self):
        self.energy+=25
        return self
    def eat(self):
        self.energy+=5
        self.health+=10
        return self
    def play(self):
        self.energy+=5
        return self
    def noise(self):
        print (self.noise)
