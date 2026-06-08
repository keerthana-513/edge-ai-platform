[import sqlite3

# 1. Connect to the database (it creates 'tasks.db' if it doesn't exist)
conn = sqlite3.connect('tasks.db')
cursor = conn.cursor()

# 2. Create the 'tasks' table
# We store the task content, its status, and the final result
cursor.execute('''
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        payload TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        result TEXT
    )
''')

# 3. Save (commit) the changes and close the connection
conn.commit()
conn.close()

print("Database and 'tasks' table created successfully!")