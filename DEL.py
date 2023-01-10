for A in range(1, 100):
    f = False
    for x in range(1, 1000):
        if (x % A == 0 or x % 21 != 0 or x % 14 != 0) == False:
            f = True
            break
    if not f:
        print(A)