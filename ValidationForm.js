
<script  type="text/javascript">
 var frmvalidator = new Validator("LeaveYourInfo");
 frmvalidator.addValidation("firstname","req","Please enter your First Name");
 frmvalidator.addValidation("firstname","maxlen=20",
        "Max length for FirstName is 20");

 frmvalidator.addValidation("lastname","req");
 frmvalidator.addValidation("lastname","maxlen=20");

 frmvalidator.addValidation("email","maxlen=50");
 frmvalidator.addValidation("email","req");
 frmvalidator.addValidation("email","email");

</script>
