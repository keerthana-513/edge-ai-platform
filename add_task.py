import sqlite3

# Connect to your existing database
conn = sqlite3.connect('tasks.db')
cursor = conn.cursor()

# Insert a sample task
cursor.execute("INSERT INTO tasks (payload) VALUES ('The weather is good today')")
conn.commit()

print("Task added to the database!")
conn.close()