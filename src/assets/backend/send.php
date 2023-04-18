<?php
require_once 'vendor/PHPMailer_lib.php';
require_once 'settings.php';

foreach ( $_POST as $key => $value ) {
  if ( $value != '' ) {
    $mail_message .= '<tr>
                  <td style="'.$style_td.'"><b>'.$key.'</b></td>
                  <td style="'.$style_td.'">'.$value.'</td>
                </tr>';
    $text_message .= "$key : $value \n";
  }
}
$tlg_message = urlencode('<b>' . $form_subject . '</b>' . "\n" . $text_message);
fopen("https://api.telegram.org/bot{$tlgbot_token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$tlg_message}","r");

$mail->CharSet = 'UTF-8';
$mail->setFrom(	$sender_email );
$mail->addAddress( $admin_email );
$mail->addAddress( $add_email_01 );
$mail->Subject = $form_subject;
$mail->msgHTML( "<table style=\"{$style_table}\">{$mail_message}</table>" );
$mail->send();
