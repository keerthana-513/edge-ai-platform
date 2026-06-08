import socket
import sqlite3

def get_task_from_db():
    conn = sqlite3.connect('tasks.db')
    cursor = conn.cursor()
    # Find the first task that is still 'pending'
    cursor.execute("SELECT id, payload FROM tasks WHERE status = 'pending' LIMIT 1")
    task = cursor.fetchone()
    conn.close()
    return task

def update_task_in_db(task_id, result):
    conn = sqlite3.connect('tasks.db')
    cursor = conn.cursor()
    cursor.execute("UPDATE tasks SET status = 'completed', result = ? WHERE id = ?", (result, task_id))
    conn.commit()
    conn.close()

# Start the Server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 5000))
server_socket.listen(1)
print("Server waiting for a worker...")

conn, addr = server_socket.accept()
task = get_task_from_db()

if task:
    task_id, payload = task
    print(f"Sending task {task_id}: {payload}")
    conn.send(f"{task_id}:{payload}".encode()) # Send ID and content together
    
    # Wait for result
    result = conn.recv(1024).decode()
    update_task_in_db(task_id, result)
    print(f"Task {task_id} completed. Result: {result}")
else:
    print("No pending tasks found.")

conn.close()