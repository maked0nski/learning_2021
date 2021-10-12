Is this number a magic palindrom?

Magic palindrom is a palindrom number that every digit is equals to the square of the previous digit or the sum of all
the digits until this digit.

*NOTE: if the result(new) digit contains more than 1 digit - sum all the digits until receiving a single digit: 56, 5 +
6 = 11, 1 + 1 = 2.

Magic palindrom number for example:

11247699674211 1 - is the first number - no rules 
1 - the square of 1 
2 - the sum of all the digits until him (1+1)
4 - the square of 2 
7 - the squared sum of 4 (16, 1 + 6 = 7)
6 - the sum until him (15, 1 + 5 = 6)
9 - the squared sum of 6 (36, 3 + 6 = 9)
Return true if the number is a magic palindrom, otherwise false.