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

$sender_email = 'noreply@'.$_SERVER['HTTP_HOST'];
$form_subject = 'Обратная связь с сайта '.$_SERVER['HTTP_HOST'];
$mail = new PHPMailer;
