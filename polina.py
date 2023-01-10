from itertools import product

count = 0

for s in product('ПОЛИНА', repeat=7):
    string = ''.join(s)
    if string[0] != 'А' and string.count('А') == 1 and string.count('П') == 1:
        count += 1
        print(string)
print(count)