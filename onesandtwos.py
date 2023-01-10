m = 10000000
for x in range(0, 50):
    for y in range(0, 50):
        for w in range(0, 50):
            for z in range(0, 50):
                if (2*w+z == 40) and (2*x + y > 50) and (x + 2*y == w + 2*z):
                    m = min(m, 2*x + y)
print(m)