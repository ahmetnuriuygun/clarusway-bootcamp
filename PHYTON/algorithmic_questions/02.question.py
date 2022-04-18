#Write a Python code that find the students who have maximum and minimum average at below.

grades={
               'Student-1': {'Lesson-1': 57, 'Lesson-2': 46, 'Lesson-3': 58, 'Lesson-4': 81, 'Lesson-5': 85}, 
               'Student-2': {'Lesson-1': 85, 'Lesson-2': 56, 'Lesson-3': 51, 'Lesson-4': 69, 'Lesson-5': 67}, 
               'Student-3': {'Lesson-1': 68, 'Lesson-2': 76, 'Lesson-3': 87, 'Lesson-4': 57, 'Lesson-5': 56}, 
               'Student-4': {'Lesson-1': 78, 'Lesson-2': 93, 'Lesson-3': 88, 'Lesson-4': 38, 'Lesson-5': 54}, 
               'Student-5': {'Lesson-1': 50, 'Lesson-2': 46, 'Lesson-3': 78, 'Lesson-4': 81, 'Lesson-5': 75}
        }

student_1_average = sum(grades["Student-1"].values()) / len(grades["Student-1"].values())

student_2_average = sum(grades["Student-2"].values()) / len(grades["Student-2"].values())

student_3_average = sum(grades["Student-3"].values()) / len(grades["Student-3"].values())

student_4_average = sum(grades["Student-4"].values()) / len(grades["Student-4"].values())

student_5_average = sum(grades["Student-5"].values()) / len(grades["Student-5"].values())

print(max(student_1_average,student_1_average,student_3_average,student_4_average,student_5_average))

print(min(student_1_average,student_1_average,student_3_average,student_4_average,student_5_average))