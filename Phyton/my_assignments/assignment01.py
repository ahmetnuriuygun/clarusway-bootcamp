#Assignment - 011/01 (Calculate Profit)

#Problem :If you had deposited a coin on the cryptocurrency exchange that brought 7% fixed profit daily for a week, how much would your $ 1000 reach at the end of the 7th day?

day1 = 1000 + ((1000*7)/100)
day2 = day1 + ((day1*7)/100)
day3 = day2 + ((day2*7)/100)
day4 = day3 + ((day3*7)/100)
day5 = day4 + ((day4*7)/100)
day6 = day5 + ((day5*7)/100)
day7 = day6 + ((day6*7)/100)

print(day7)