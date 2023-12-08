<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'private_settings.php';

$style_table = '
  width: 100%;
  border-collapse: collapse;
';
$style_td = '
  padding: 10px;
  border: #1B1239 1px solid;
  vertical-align: top;
';

$allowed_types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/pjpeg', 'image/png', 'application/zip'];
$sender_email = 'noreply@'.$_SERVER['HTTP_HOST'];
$form_subject = 'Обратная связь с сайта авторскийзнак.рф';
$mail = new PHPMailer;
