<?php
$field_name = $_POST['ef_name'];
$field_email = $_POST['ef_email'];
$field_email = $_POST['ef_phone'];
$field_message = $_POST['ef_message'];

$mail_to = 'enflightdesign@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Number: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

mail ('enflightdesign@gmail.com' , "New Inquiry" , $ef_message)

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'contact_page.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to enflightdesign@gmail.com');
		window.location = 'contact_page.html';
	</script>
<?php
}
?>