<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="https://test-hpf.novattipayments.com/js/v1.0/hosted-fields.min.js"></script>
<?php /* Template Name: payment */
//  get_header();
$num = rand(100000000, 999999999);
$date = date("Y");
$MerchantTxnID = "CANETA".$date.$num;
$MerchantID = 'H30KXBD429ONJAV';
$sessionId = rand(100, 999);
//
$url = "https://test-api.novattipayments.com/token?grant_type=client_credentials";
$user = "c3a663f9-09d1-40d0-a8a2-84bc3d5e1b6c";
$password = "f6e13a30a2d4a415108d9d9c07b016cafadac4633db1ab71ba86713ae54744a4";
// (B) CURL INIT
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$user:$password");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
if (substr($url, 0, 5)=="https") {
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
}

$result = curl_exec($ch);

curl_close($ch);
?>


<style>
.payment-form .payment-heading {
    width: 100%;
    margin: auto;
    margin: 15px auto;
}
.payment-form .payment-section {
    width: 50%;
    margin: auto;
    font-family: "Roboto", Sans-serif;
}
.payment-form .col-sm-12 {
    width: 100%;
}
.payment-form .col-sm-12 .col-sm-6 {
    width: 50%;
    float: left;
}
.payment-form .col-sm-12 .form-group .form-control {
	max-height: 20px;
	height: 100%;
	border: 1px solid #444444;
	padding: 5px !important;
	margin: 5px 0;
}
.payment-form .form-group label {
    color: #444444;
}
.payment-form .form-group label[for="card-cvc"] {
	margin-left: 5px;
}
.payment-form .form-group:has(label[for="card-cvc"]) .field-validation-error {
	margin-left: 5px;
} 
.payment-form .form-group .field-validation-error {
    color: #9f3f31;
}
.payment-form .col-sm-12 .form-group {
    margin-bottom: 10px;
}
.payment-form .col-sm-12 .form-group #card-expiry {
    margin-right: 5px;
}
.payment-form .col-sm-12 .form-group #card-cvv {
    margin-left: 5px;
}
.payment-form #paymentButton {
    width: 100% !important;
    display: inline;
    background: linear-gradient( 143deg, rgba(28,148,210,1) 0%, rgba(9,108,159,1) 43%, rgba(0,110,167,1) 100%);
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 5px;
    margin-top: 5px !important;
    cursor: pointer;
    font-family: "Roboto", Sans-serif;
}
.payment-form #paymentButton:hover {
	background: linear-gradient( 
1deg, rgba(28,148,210,1) 0%, rgba(9,108,159,1) 43%, rgba(0,110,167,1) 100%);
}
@media screen and (max-width:768px) {
	.payment-form .row .payment-section {
    	width: 100% !important;
    }
    
}
</style>



<script>
var arr = <?php echo json_encode($result); ?>;
var authObj = JSON.parse(arr);
var MerchantID = "<?php echo $MerchantID; ?>"
var hpfOptions;
    $(document).ready(async function () {
    	initialize();
    });
    function initialize () {
        hpfOptions = {
            merchantID: MerchantID,
            token: authObj.access_token,
        }
        HPF.init(hpfOptions);
    
        $('#paymentButton').click(function () {
            $("#loading").show();
            HPF.generateToken(callback, MerchantID)
        });
    }
function callback(data) {
    console.log("callback");
    console.log(data);
    let respCode = data.ResponseCode;
    if (respCode === '1000') {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        var ClientType = 'desktop_web';
        if(isMobile){
            ClientType = 'mobile_web';
        }else{
           ClientType = 'desktop_web'; 
        }
        $('#ClientType').val(ClientType);
        $('#NovattiCardToken').val(data.Token);
        $('#NovattiBearerToken').val(hpfOptions.token);
        var url = $('#url').val()+'/paymentapi.php';
        var data = $('#payment-form').serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data) {
                 console.log("form submit");
                 var result = JSON.parse(data);
                console.log(result);
                console.log(result.Result.ResponseCode);
                if (result.Result.ResponseCode === "1000") {
                    $("#loading").hide();
                    //window.location.href = '@Model.PaymentErrorUrl' + '?tempId=@Model.ApplicationIdTemporary&sendEmail=true&error=' + data.Data[0].PropertyValue + '&isNovatti=true';
                }else {
                    $("#loading").hide();
                    // if (data.Data[1].PropertyName === 'ApplicationToken') {
                    //     $('#ApplicationToken').val(data.Data[1].PropertyValue);
                    // }
                    // window.location.href = '@Model.PostPaymentUrl?applicationToken=' + $('#ApplicationToken').val();
                }
            }
        })
    } 
}

</script>
<div class="container payment-form">
    <form action="" method="post" id="payment-form">
        <div class="row">
            <div class="col-sm-6 payment-section payment_form_disabled">
            <h1 class="payment-heading">Payment</h1>
            <div class="col-sm-12">
                <div class="form-group mobileTopTenMargin">
                <label for="card_holder_name"><strong>Payment Card Holder Name</strong></label>
                <div id="card-holder" class="form-control" data-hpf="cardHolder"></div>
                <span id="cardHolderError" class="field-validation-error"></span>
                </div>
                <div class="form-group">
                <label for="card-number"><strong>Payment Card number</strong></label>
                <div id="card-number" class="form-control" data-hpf="cardNumber"></div>
                <span id="cardNumberError" class="field-validation-error"></span>
                </div>
            </div>
    		<div class="col-sm-12">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="card-expiry"><strong>Payment Expiration</strong></label>
                        <div id="card-expiry"class="form-control"data-hpf="cardExpiry"></div>
                        <span id="cardExpiryError"class="field-validation-error"></span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="card-cvc"><strong>Payment CVC</strong></label>
                        <div id="card-cvv" class="form-control" data-hpf="cvv"></div>
                        <span id="cvvError"class="field-validation-error"></span>
                    </div>
                </div>
            </div>
    		<button type="button" class="btn btn-primary" id="paymentButton">
    		Confirm Payment
    		<span class="spinner-border spinner-border-sm" style="display:none" role="status" aria-hidden="true" id="spinner"></span>
    		</button>
          </div>
        </div>
      <input type="hidden" value="<?php echo get_site_url(); ?>" id="url">
      <input name="UserID" type="hidden" value="">
      <input name="MerchantID" type="hidden" value="<?php echo $MerchantID; ?>">
      <input name="MerchantTxnID" type="hidden" value="<?php echo $MerchantTxnID; ?>">
      <input name="Currency" type="hidden" value="USD">
      <input name="Amount" type="hidden" value="50000">
      <input name="CardToken" type="hidden" id="NovattiCardToken">
      <input name="BearerToken" type="hidden" id="NovattiBearerToken">
      <input name="Method" type="hidden" value="CC">
      <input name="ClientType" type="hidden" id="ClientType"/>
      
      <input name="MerchantLocation" type="hidden" id="MerchantLocation" value="<?php echo get_site_url(); ?>">
      <input name="FirstName" type="hidden" value="abc">
      <input name="FamilyName" type="hidden" value="dev">
      <input name="Street1" type="hidden" value="sas">
      <input name="City" type="hidden" value="Mohali">
      <input name="Zip" type="hidden" id="Zip" value="160055">
      <input name="State" type="hidden"  id="State" value="Punjab">
      <input name="Country"  type="hidden" id="Country" value="India">
      <input name="IPAddress"type="hidden"  id="IPAddress" value="<?php echo getenv("REMOTE_ADDR"); ?>"/>
      <input name="EmailAddress"type="hidden"  id="EmailAddress" value="pawandeveloper7@gmail.com"/>
      <input name="TelNo"type="hidden"  id="TelNo" value="7890564332"/>
      <input name="SessionID"type="hidden"  id="SessionID" value="<?php echo $sessionId; ?>"/>
      <input name="Browser"type="hidden"  id="Browser" value="<?php echo $_SERVER['HTTP_USER_AGENT']; ?>"/>
    </form>
</div>

<?php

// get_footer();
?>

# paymentapi.php
<?php
if (isset($_POST)) {
    $url = 'https://test-api.novattipayments.com';
    $token = $_POST['BearerToken'];
    $MerchantID = $_POST['MerchantID'];
    $MerchantTxnID = $_POST['MerchantTxnID'];
    $SecureToken = $_POST['CardToken'];
    
    $Currency = $_POST['Currency'];
    $Amount = $_POST['Amount'];
    $Method = $_POST['Method'];
    $ClientType = $_POST['ClientType'];
    $MerchantLocation = $_POST['MerchantLocation'];
    $CustomerFirstName = $_POST['FirstName'];
    $FamilyName = $_POST['FamilyName'];
    $Street1 = $_POST['Street1'];
    $City = $_POST['City'];
    $Zip = $_POST['Zip'];
    $State = $_POST['State'];
    $Country = $_POST['Country'];
    $ip = $_POST['IPAddress'];
    $EmailAddress = $_POST['EmailAddress'];
    $TelNo = $_POST['TelNo'];
    $SessionID = $_POST['SessionID'];
    $Browser = $_POST['Browser'];
    /**/
    $curl = curl_init();
    $data =  array("Header"=> array("TransactionType"=> "OneStepPayment","MerchantID"=> $MerchantID,"UserID"=> "","Version"=> "2"), "Transaction" => array("MerchantTxnID" =>$MerchantTxnID,"Currency" => $Currency,"Amount" => $Amount,"Method" => $Method,"ChannelType" => "07","ClientType" => $ClientType,"RequestorType" => "physical"), "SecureTokenHolder" => array(	"SecureToken"=> $SecureToken), "SoftDescriptor" => array("MerchantLocation" => $MerchantLocation), "BillingAddress" => array("CustomerName" => $CustomerFirstName.''.$FamilyName, "CustomerFirstName" => $CustomerFirstName, "Street1" => $Street1, "City" => $City, "Zip"=> $Zip, "State" => $State, "Country" => $Country), "Customer" => array("CustomerID" => $MerchantTxnID, "IPAddress" => $ip, "EmailAddress" => $EmailAddress, "TelNo" => $TelNo, "SessionID" => $SessionID, "Browser" => $Browser));
   // $data = array("Header"=> array("TransactionType"=> "OneStepPayment","MerchantID"=> $MerchantID,"UserID"=> "","Version"=> "2"), "Transaction" => array("MerchantTxnID" =>$MerchantTxnID,"Currency" => $Currency,"Amount" => $Amount,"Method" => $Method,"ChannelType" => "07","ClientType" => $ClientType,"RequestorType" => "physical"), "SecureTokenHolder" => array(	"SecureToken"=> $SecureToken));
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://test-api.novattipayments.com/",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_POSTFIELDS => json_encode($data),
      CURLOPT_HTTPHEADER => array(
        "authorization: Bearer ".$token,
        "content-type: application/json",
      ),
    ));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);


if ($err) {
  echo $err;
} else {
  echo $response;
}
}else{
    
}
?>
