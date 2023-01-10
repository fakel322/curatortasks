f = open('hh.txt')
s = f.read()

count = 0
max_count = 0

i = 0

while i < len(s)-1:
    if (s[i] == 'C' or s[i] == 'F' or s[i] == 'D') and (s[i+1] == 'C' or s[i+1] == 'F' or s[i+1] == 'D') and (s[i + 2] == 'A' or s[i + 2] == 'O'):
        count += 1
        i += 3
        max_count = max(max_count, count)
    else:
        count = 0
        i += 1

print(max_count)