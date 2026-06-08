from flask import Flask, request, jsonify, render_template_string
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
# Using SQLite for local development
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///edge_ai.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# --- DATABASE MODELS ---

class Device(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    device_name = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), default="Online")

class Model(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    model_name = db.Column(db.String(100), nullable=False)
    version = db.Column(db.String(20))

class InferenceLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    device_id = db.Column(db.Integer, db.ForeignKey('device.id'), nullable=False)
    model_id = db.Column(db.Integer, db.ForeignKey('model.id'), nullable=False)
    result = db.Column(db.String(200))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

# --- ROUTES ---

@app.route('/')
def home():
    return "Edge AI Platform is running! Go to /view_logs to see data."

# Route to log data from your AI device
@app.route('/log_inference', methods=['POST'])
def log_inference():
    data = request.json
    new_log = InferenceLog(
        device_id=data['device_id'],
        model_id=data['model_id'],
        result=data['result']
    )
    db.session.add(new_log)
    db.session.commit()
    return jsonify({"message": "Inference logged successfully!"}), 201

# Route to view logs in a modern, auto-refreshing table
@app.route('/view_logs')
def view_logs():
    # Fetch logs, newest first
    logs = InferenceLog.query.order_by(InferenceLog.timestamp.desc()).all()
    
    html = '''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Edge AI Dashboard</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <meta http-equiv="refresh" content="5"> 
    </head>
    <body class="container mt-5">
        <h2 class="mb-4">Live Edge AI Inference Logs</h2>
        <table class="table table-striped table-bordered table-hover">
            <thead class="table-dark">
                <tr><th>ID</th><th>Device ID</th><th>Model ID</th><th>Result</th><th>Timestamp</th></tr>
            </thead>
            <tbody>
                {% for log in logs %}
                <tr>
                    <td>{{ log.id }}</td>
                    <td>{{ log.device_id }}</td>
                    <td>{{ log.model_id }}</td>
                    <td>{{ log.result }}</td>
                    <td>{{ log.timestamp }}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </body>
    </html>
    '''
    return render_template_string(html, logs=logs)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000)