class animal(object):
    def __init__(self, name, color, age):
        self.name = name
        self.color = color
        self.age = age
    def __str__(self):
        return "Name: %s, Color: %s, Age: %d" % (self.name, self.color, self.age)
    def getName(self):
        return self.name
    def setName(self, name):
        self.name = name
    def getColor(self):
        return self.color
    def setColor(self, color):
        self.color = color
    def getAge(self):
        return self.age
    def setAge(self, age):
        self.age = age
    def printName(self):
        print(self.name)
        return self
    def printColor(self):
        print(self.color)


cow = animal("boo", "brown", 5)

cow.printName().printColor()

cow.getAge()
cow.getName()



import time

class MyClass:
    def __init__(self, value):
        self.value = value

    def set_value(self, new_value):
        self.value = new_value
        return self

# create an instance of MyClass
obj = MyClass(10)

# measure the time it takes to chain multiple calls to the set_value method
start = time.time()
# set value 1 to 100
obj.set_value(1).set_value(2).set_value(3).set_value(4).set_value(5).set_value(6).set_value(7).set_value(8).set_value(9).set_value(10).set_value(11).set_value(12).set_value(13).set_value(14).set_value(15).set_value(16).set_value(17).set_value(18).set_value(19).set_value(20).set_value(21).set_value(22).set_value(23).set_value(24).set_value(25).set_value(26).set_value(27).set_value(28).set_value(29).set_value(30).set_value(31).set_value(32).set_value(33).set_value(34).set_value(35).set_value(36).set_value(37).set_value(38).set_value(39).set_value(40).set_value(41).set_value(42).set_value(43).set_value(44).set_value(45).set_value(46).set_value(47).set_value(48).set_value(49).set_value(50).set_value(51).set_value(52).set_value(53).set_value(54).set_value(55).set_value(56).set_value(57).set_value(58).set_value(59).set_value(60).set_value(61).set_value(62).set_value(63).set_value(64).set_value(65).set_value(66).set_value(67).set_value(68).set_value(69).set_value(70).set_value(71).set_value(72).set_value(73).set_value(74).set_value(75).set_value(76).set_value(77).set_value(78).set_value(79).set_value(80).set_value(81).set_value(82).set_value(83).set_value(84).set_value(85).set_value(86).set_value(87).set_value(88).set_value(89).set_value(90).set_value(91).set_value(92).set_value(93).set_value(94).set_value(95).set_value(96).set_value(97).set_value(98).set_value(99).set_value(100)
end = time.time()
print(f'Chaining method calls: {end - start} seconds')
0.013999700546264648 seconds
# create a new instance of MyClass
obj = MyClass(10)

class MyClass:
    def __init__(self, value):
        self.value = value

    def set_value(self, new_value):
        self.value = new_value

# measure the time it takes to update the value of the obj instance using a loop
start = time.time()
for i in range(1, 100):
    obj.set_value(i)
end = time.time()
print(f'Updating value using loop: {end - start} seconds')


#  range from1  to 100  

