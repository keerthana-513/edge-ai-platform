import sqlite3
import time
from textblob import TextBlob

def process_tasks():
    print("Watcher is active. Press Ctrl+C to stop.")
    
    while True: # This keeps the node running forever
        conn = sqlite3.connect('tasks.db')
        cursor = conn.cursor()
        
        # Look for pending tasks
        cursor.execute("SELECT id, payload FROM tasks WHERE status = 'pending'")
        tasks = cursor.fetchall()
        
        for task in tasks:
            task_id, text = task
            # AI Inference
            analysis = TextBlob(text)
            if analysis.sentiment.polarity > 0:
                result = "Positive"
            elif analysis.sentiment.polarity < 0:
                result = "Negative"
            else:
                result = "Neutral"
            
            # Update database
            cursor.execute("UPDATE tasks SET status = 'completed', result = ? WHERE id = ?", (result, task_id))
            conn.commit()
            print(f"Processed Task {task_id}: {result}")
        
        conn.close()
        
        # Wait 5 seconds before checking the database again
        time.sleep(5)

if __name__ == '__main__':
    process_tasks()