<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id']; // Store user ID
            $_SESSION['user_name'] = $user['name']; // Store username
            
            echo "<script>
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            </script>";
            exit();
        } else {
            echo "<script>alert('Parola introdusă este greșită!'); window.history.back();</script>";
            exit();
        }
    } else {
        echo "<script>alert('Utilizatorul nu există! Verifică email-ul.'); window.history.back();</script>";
        exit();
    }
}
?>
