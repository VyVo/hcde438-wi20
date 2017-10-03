# Homework 1
Due 	Monday, October 9, 5pm

What to hand in via Canvas and GitHub Classroom
1. hw1-part1.py
2. hw1-part2.py
3. hw1-part3.py

## Part 1 - List and String operations
At the top of the file hw1-part1.py, you should find the following three lines:

```python
lst = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
otherlst = ['a','b','c','d','e','f','g']
s = "This is a test string for HCDE 310"
```

In the hw1-part1.py file, add code to do the exercises as instructed in the code file.

From a terminal (or from PyCharm) execute the hw1-part1.py file.

## Part 2: Exercises
See the instructions in hw1-part2.py. Your output should look something like:

```
=1=
1
2
3
4
5
6
=2=
21
=3=
This
is
a
test
string
for
hw1.
=4=
[1, 2, 3, 'four', 5, 6]
=5=
This
is our
test file.
=6=
==6a==
-1
-1
-1
-1
-1
7
-1
-1
-1
-1
-1
-1
-1
-1
8
9
-1
5
11
0
-1
==6b==
One
One
One
One
==6c==
Bulldog
French Bulldog
```


## Part 3: Counting lines, characters, and words
See the instructions in hw1-part3.py.

Here is an example of what your output for this should look like, on hw1feed.txt:
```
3591 characters 
34 lines
613 words
```

Note that your output may vary slightly depending on how you handle end of file characters or what you count as a 'word.' Your count should, however, include newline (\n) characters.

## Just For Fun 1: Modify your code from part 3 to count only the lines with posts, not the lines with authors.
(remember, you don't need to do just for fun exercises)

You'll need to use conditionals and find() or slices for this.  See exercise 6 for some ideas.

## Just for Fun 2: Most common word in Sherlock Holmes?
We haven't covered everything you need in Python to do this yet (in particular, we haven't talked about dictionaries yet). But think about how a program could figure out what was the most common word in a document, say the Sherlock Holmes text that I provide with this homework (sherlock.txt). Thinking about this problem now will help you appreciate the value of dictionaries when we learn about them next week.



