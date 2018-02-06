<?php

require 'vendor/autoload.php';
require 'mail-config.php';

$response = array(
	'fields' => array(
		'name' => 'error',
		'email' => 'error',
		'phone' => 'error',
		'message' => 'error'
	),
	'sent' => 'error'
);

function stringIsValid($value) {
	return !empty(trim($value));
}

function numberIsValid($value) {
	return preg_match("/^[0-9\+\s]+$/", trim($value));
}

function emailIsValid($value) {
	return filter_var(trim($value), FILTER_VALIDATE_EMAIL);
}

function sendForm($data) {
	$sent = false;
	$body = "Ein Formular wurde mit den folgenden Angaben versandt.

<b>Name:</b><blockquote>" . utf8_decode($data['name']) . "</blockquote>
<b>E-Mail:</b><blockquote>" . utf8_decode($data['email']) . "</blockquote>
<b>Telefon:</b><blockquote>" . utf8_decode($data['phone']) . "</blockquote>
<b>Nachricht:</b><blockquote>" . utf8_decode($data['message']) . "</blockquote>";

	try {
		$mail = new PHPMailer(true);
		$mail->IsSMTP();


		//$mail->SMTPDebug  = 2;
		$mail->SMTPAuth   = true;
		$mail->SMTPSecure = "tls";
		$mail->Host       = SMTP_SERVER;
		$mail->Port       = SMTP_PORT;
		$mail->Username   = SMTP_USER;
		$mail->Password   = SMTP_PASS;
		$mail->AddReplyTo(SMTP_USER, SMTP_REALNAME);
		$mail->AddAddress(RECEIPIENT, RECEIPIENT_REALNAME);
		$mail->AddAddress(SMTP_USER, SMTP_REALNAME);
		$mail->SetFrom(SMTP_USER, SMTP_REALNAME);
		$mail->Subject = 'Formular von ' . $data['email'] . ' ' . $data['name'];
		$mail->AltBody = $body;
		$mail->MsgHTML(nl2br($body));
		$mail->Send();

		$sent = true;
	} catch (Exception $e) {
		//print($e->getMessage());
		//print_r($e->getTraceAsString());
	}
	return $sent;
}

if (!empty($_POST) && (isset($_POST['lastname']) && empty($_POST['lastname']))) {
	if (stringIsValid($_POST['name'])) {
		$response['fields']['name'] = 'ok';
	}
	if (emailIsValid($_POST['email'])) {
		$response['fields']['email'] = 'ok';
	}
	if (numberIsValid($_POST['phone'])) {
		$response['fields']['phone'] = 'ok';
	}
	if (stringIsValid($_POST['message'])) {
		$response['fields']['message'] = 'ok';
	}
	if (!in_array("error", $response['fields'])) {
		if (sendForm($_POST)) {
			$response['sent'] = 'ok';
		}
	}
}

print(json_encode($response));

?>