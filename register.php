<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure password hashing

    // Check if email or username already exists
    $check_sql = "SELECT * FROM users WHERE email='$email' OR name='$name'";
    $check_result = $conn->query($check_sql);

    if ($check_result->num_rows > 0) {
        echo "<script>
            alert('Acest nume sau email este deja folosit! Te rugăm să alegi altul.');
            window.history.back();
        </script>";
        exit();
    }

    // Insert new user
    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        $_SESSION['user_id'] = $conn->insert_id; // Store user ID in session
        $_SESSION['user_name'] = $name; // Store username in session
        
        echo "<script>
            alert('Înregistrare reușită! Bine ai venit, $name!');
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html';
        </script>";
        exit();
    } else {
        echo "<script>
            alert('Eroare la înregistrare! Încearcă din nou.');
            window.history.back();
        </script>";
        exit();
    }
}
?>
